// Entry 1: Agent API — POST /api/agent/command
//
// Receives a natural-language command, runs it through the four-stage Agent
// hub pipeline (rule match -> LLM -> plan -> validate), then hands the
// validated JSON Patch to the executor.
//
// Request:  { command: string, options?: { dryRun?: boolean, lang?: "en"|"zh"|"ru" } }
// Success:  { success: true, intent, operations, newVersion }
// Dry-run:  { success: true, dryRun: true, intent, operations, preview }
// Validate: { success: false, stage: "validation", errors: [{rule, message}] }
// LLM off:  { success: false, stage: "parse", error, suggestion }
// Clarify:  { success: false, stage: "clarification", message, options }

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

export const runtime = "nodejs";

interface AgentOptions {
  dryRun?: boolean;
  lang?: "en" | "zh" | "ru";
}

interface AgentRequestBody {
  command: string;
  options?: AgentOptions;
}

/** Ensure the in-memory UCD is loaded; returns the current document. */
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
  if (!command || typeof command !== "string") {
    return NextResponse.json(
      { success: false, stage: "parse", error: "Missing or invalid 'command' field" },
      { status: 400 }
    );
  }

  // --- Stage 0+1: parse intent ---
  let parsed;
  try {
    parsed = await parseIntent(command);
  } catch (err) {
    if (err instanceof LLMDisabledError) {
      return NextResponse.json(
        {
          success: false,
          stage: "parse",
          error: err.message,
          suggestion:
            "请使用确定性指令格式（如「把 hero 标题改成 XXX」），或设置 ENABLE_LLM=true 开启 LLM 解析。",
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

  // --- Load current UCD ---
  let currentDoc: UnifiedContentDocument;
  try {
    currentDoc = await ensureDocumentLoaded();
  } catch (err) {
    return NextResponse.json(
      { success: false, stage: "load", error: (err as Error).message },
      { status: 500 }
    );
  }

  // --- Stage 2: generate plan ---
  let operations;
  try {
    operations = await generatePlan(intent, currentDoc);
  } catch (err) {
    return NextResponse.json(
      { success: false, stage: "plan", error: (err as Error).message, intent },
      { status: 422 }
    );
  }

  // --- Stage 3: validate ---
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

  // --- Dry-run: return preview without executing ---
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

  // --- Execute ---
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
    return NextResponse.json(
      {
        success: false,
        stage: "execute",
        error: result.error,
        intent,
        operations,
      },
      { status: 500 }
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

/** GET — health check / capability discovery for the Agent API. */
export async function GET() {
  return NextResponse.json({
    endpoint: "/api/agent/command",
    method: "POST",
    schema: {
      request: { command: "string", options: { dryRun: "boolean?", lang: "en|zh|ru?" } },
      responses: ["success", "dryRun", "validation", "parse", "clarification", "execute"],
    },
    llmEnabled: process.env.ENABLE_LLM === "true",
    contentMode: process.env.CONTENT_MODE ?? "local",
  });
}
