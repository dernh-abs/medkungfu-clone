import { NextRequest, NextResponse } from "next/server";

import { parseIntent } from "@/lib/agent/intent-parser";
import { generatePlan } from "@/lib/agent/plan-generator";
import { validate } from "@/lib/agent/validator";
import { execute } from "@/lib/executor/executor";
import { getDocument, commitDocument } from "@/lib/executor/content-runtime";
import { loadFullDocument } from "@/lib/content/content-loader";
import { createContentStore, createVersionStore } from "@/lib/contracts/factory";
import type { PatchPackage } from "@/lib/executor/patch-types";
import type { UnifiedContentDocument } from "@/lib/content/content-schema";
import { LLMDisabledError, ClarificationError } from "@/lib/agent/types";
import { getRuleSuggestionTemplates } from "@/lib/agent/rule-matcher";

export const runtime = "nodejs";

interface AgentOptions {
  dryRun?: boolean;
  lang?: "en" | "zh" | "ru";
  page?: string;
}

interface AgentRequestBody {
  command: string;
  options?: AgentOptions;
}

async function ensureDocumentLoaded(): Promise<UnifiedContentDocument> {
  let current = getDocument();
  if (!current) {
    const loaded = await loadFullDocument();
    if (!loaded) {
      throw new Error(
        "UCD not initialized. Run `npm run seed` to generate .content/ first."
      );
    }
    commitDocument(loaded);
    current = loaded;
  }
  return current;
}

export async function POST(request: NextRequest) {
  let body: AgentRequestBody;
  try {
    body = (await request.json()) as AgentRequestBody;
  } catch {
    return NextResponse.json(
      { success: false, stage: "parse", error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { command, options = {} } = body;
  const page = options.page || "home";
  if (!command || typeof command !== "string") {
    return NextResponse.json(
      { success: false, stage: "parse", error: "Missing or invalid 'command' field" },
      { status: 400 }
    );
  }

  let parsed;
  try {
    parsed = await parseIntent(command, undefined, page);
  } catch (err) {
    if (err instanceof LLMDisabledError) {
      return NextResponse.json(
        {
          success: false,
          stage: "parse",
          error: err.message,
          suggestion:
            "请使用确定性指令格式（如「把 hero 标题改成 XXX」），或设置 ENABLE_LLM=true 开启 LLM 解析。",
          templates: getRuleSuggestionTemplates(),
        },
        { status: 422 }
      );
    }
    if (err instanceof ClarificationError) {
      return NextResponse.json(
        {
          success: false,
          stage: "clarification",
          message: err.message,
          options: err.options,
        },
        { status: 422 }
      );
    }
    return NextResponse.json(
      { success: false, stage: "parse", error: (err as Error).message },
      { status: 500 }
    );
  }

  const { intent } = parsed;

  // NL commands act on the page currently open in the Studio. Override the
  // page context for any intent that is page-scoped (structure ops already
  // carry page; text/image/link now carry optional page).
  if (
    intent.type === "update_text" ||
    intent.type === "update_image" ||
    intent.type === "update_link" ||
    intent.type === "reorder_sections" ||
    intent.type === "add_section" ||
    intent.type === "duplicate_section" ||
    intent.type === "remove_section"
  ) {
    (intent as { page?: string }).page = page;
  }

  let currentDoc: UnifiedContentDocument;
  try {
    currentDoc = await ensureDocumentLoaded();
  } catch (err) {
    return NextResponse.json(
      { success: false, stage: "load", error: (err as Error).message },
      { status: 500 }
    );
  }

  if (intent.type === "undo") {
    return NextResponse.json({
      success: true,
      stage: "undo",
      intent,
      operations: [],
      undo: true,
      hint: "请点击工具栏撤销按钮或直接通过 Studio undo 接口调用。前端应用修改时请 POST /api/studio/undo { action: 'undo' }。",
    });
  }

  if (intent.type === "redo") {
    return NextResponse.json({
      success: true,
      stage: "redo",
      intent,
      operations: [],
      redo: true,
      hint: "前端应用修改时请 POST /api/studio/undo { action: 'redo', version: N }。",
    });
  }

  if (intent.type === "query") {
    const pageData = currentDoc.pages?.[page] as unknown as
      | { order?: string[]; sections?: Record<string, unknown> }
      | undefined;
    const order = pageData?.order ?? [];
    let answer = "";
    let templates: string[] | undefined;
    switch (intent.question) {
      case "capability":
        answer =
          "我能帮你做以下操作：\n- 修改文本、图片、链接\n- 新增/删除/复制/移动区段\n- 撤销与重做\n- 查询当前区段结构与版本。\n\n输入 帮助 查看指令示例。";
        templates = getRuleSuggestionTemplates();
        break;
        case "structure":
          answer = `${page} 页当前区段顺序：${order.join(", ") || "(empty)"}。`;
          break;
      case "version":
        answer = `当前文档版本 v${currentDoc.meta.version}，最后修改：${currentDoc.meta.lastModified}`;
        break;
      default:
        answer = `未知查询类型：${intent.question}`;
    }
    return NextResponse.json({
      success: true,
      query: true,
      intent,
      operations: [],
      answer,
      templates,
    });
  }

  let operations;
  try {
    operations = await generatePlan(intent, currentDoc);
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        stage: "plan",
        error: (err as Error).message,
        intent,
        templates: getRuleSuggestionTemplates(),
      },
      { status: 422 }
    );
  }

  const validation = validate(operations, currentDoc);
  if (!validation.valid) {
    return NextResponse.json(
      {
        success: false,
        stage: "validation",
        errors: validation.errors,
        warnings: validation.warnings,
        intent,
        operations,
      },
      { status: 422 }
    );
  }

  if (options.dryRun) {
    return NextResponse.json({
      success: true,
      dryRun: true,
      intent,
      operations,
      preview: validation.preview,
      warnings: validation.warnings,
    });
  }

  const patch: PatchPackage = {
    id: crypto.randomUUID(),
    source: "agent",
    operations,
    metadata: {
      intent: command,
      timestamp: new Date().toISOString(),
      description: `Agent: ${intent.type}`,
    },
    baseVersion: currentDoc.meta.version,
  };

  const contentStore = createContentStore();
  const versionStore = createVersionStore();

  const result = await execute(patch, currentDoc, { contentStore, versionStore });

  if (!result.success) {
    const status = result.conflict ? 409 : 500;
    return NextResponse.json(
      {
        success: false,
        stage: result.conflict ? "conflict" : "execute",
        conflict: result.conflict,
        expectedVersion: result.expectedVersion,
        actualVersion: result.actualVersion,
        error: result.error,
        intent,
        operations,
      },
      { status }
    );
  }

  return NextResponse.json({
    success: true,
    intent,
    operations,
    newVersion: result.newVersion,
    source: parsed.source,
    warnings: validation.warnings,
  });
}

export async function GET() {
  return NextResponse.json({
    endpoint: "/api/agent/command",
    method: "POST",
    schema: {
      request: { command: "string", options: { dryRun: "boolean?", lang: "en|zh|ru?" } },
      responses: ["success", "dryRun", "validation", "parse", "clarification", "conflict", "execute"],
    },
    llmEnabled: process.env.ENABLE_LLM === "true",
    contentMode: process.env.CONTENT_MODE ?? "local",
  });
}
