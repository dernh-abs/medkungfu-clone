import type { Intent } from "./types";
import { LLMDisabledError } from "./types";
import type { SupportedLanguage } from "@/lib/i18n/translations";

export interface LLMConfig {
  provider: "openai" | "anthropic" | "mock";
  apiKey?: string;
  model?: string;
  baseUrl?: string;
}

export interface ParseContext {
  knownSections?: string[];
  knownKeys?: string[];
}

function getConfig(): LLMConfig {
  const provider = (process.env.LLM_PROVIDER ?? "mock") as LLMConfig["provider"];
  return {
    provider,
    apiKey: process.env.LLM_API_KEY,
    model: process.env.LLM_MODEL,
    baseUrl: process.env.LLM_BASE_URL,
  };
}

function isLlmEnabled(): boolean {
  return process.env.ENABLE_LLM === "true";
}

export function assertLlmEnabled(): void {
  if (!isLlmEnabled()) {
    throw new LLMDisabledError(
      "此指令无法通过规则匹配解析，请开启 LLM（ENABLE_LLM=true）或使用确定性指令格式。"
    );
  }
}

export async function parseIntentWithLLM(
  command: string,
  context?: ParseContext
): Promise<Intent> {
  assertLlmEnabled();
  const config = getConfig();

  switch (config.provider) {
    case "mock":
      return mockParse(command, context);
    case "openai":
      return openaiParse(command, context, config);
    case "anthropic":
      return anthropicParse(command, context, config);
    default:
      throw new Error(`Unknown LLM provider: ${config.provider}`);
  }
}

export async function translateWithLLM(
  text: string,
  sourceLang: SupportedLanguage,
  targetLang: SupportedLanguage
): Promise<string> {
  assertLlmEnabled();
  const config = getConfig();

  switch (config.provider) {
    case "mock":
      return `[${targetLang}] ${text}`;
    case "openai":
    case "anthropic":
      return providerTranslate(text, sourceLang, targetLang, config);
    default:
      throw new Error(`Unknown LLM provider: ${config.provider}`);
  }
}

async function mockParse(
  command: string,
  _context?: ParseContext
): Promise<Intent> {
  const lower = command.toLowerCase();
  if (lower.includes("撤销") || lower === "undo") {
    return { type: "undo" };
  }
  if (lower.includes("重做") || lower === "redo") {
    return { type: "redo" };
  }
  if (lower.includes("帮助") || lower === "help" || lower === "?") {
    return { type: "query", question: "capability" };
  }
  if (lower.includes("区段") && (lower.includes("结构") || lower.includes("哪些"))) {
    return { type: "query", question: "structure" };
  }
  return {
    type: "bulk_update",
    operations: [
      { type: "update_text", target: "_mock", value: command },
    ],
  };
}

const SYSTEM_PROMPT = `你是一个网站内容编辑助手。将用户的自然语言指令解析为结构化的 Intent JSON。
支持的 Intent 类型：
- update_text: { type, target, value, lang? }
- translate: { type, source, targetLang, sourceLang? }
- reorder_sections: { type, page, newOrder }
- add_section: { type, page, sectionType, position }
- duplicate_section: { type, page, sectionId, newSectionId? }
- remove_section: { type, page, sectionId }
- update_image: { type, target, newSrc, alt? }
- update_link: { type, target, newHref }
- bulk_update: { type, operations: Intent[] }
- undo: { type: "undo" }
- redo: { type: "redo" }
- query: { type: "query", question: "capability" | "structure" | "version" }

只返回一个 JSON 对象，不要有其他文字。`;

async function openaiParse(
  command: string,
  context: ParseContext | undefined,
  config: LLMConfig
): Promise<Intent> {
  if (!config.apiKey) throw new Error("LLM_API_KEY not set");
  const model = config.model ?? "gpt-4o-mini";
  const baseUrl = config.baseUrl ?? "https://api.openai.com/v1";

  const userPrompt = buildUserPrompt(command, context);
  const res = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
      response_format: { type: "json_object" },
      temperature: 0,
    }),
  });
  if (!res.ok) throw new Error(`LLM request failed: ${res.status} ${await res.text()}`);
  const data = (await res.json()) as { choices: { message: { content: string } }[] };
  return JSON.parse(data.choices[0].message.content) as Intent;
}

async function anthropicParse(
  command: string,
  context: ParseContext | undefined,
  config: LLMConfig
): Promise<Intent> {
  if (!config.apiKey) throw new Error("LLM_API_KEY not set");
  const model = config.model ?? "claude-3-5-sonnet-20241022";
  const baseUrl = config.baseUrl ?? "https://api.anthropic.com";
  const userPrompt = buildUserPrompt(command, context);

  const res = await fetch(`${baseUrl}/v1/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": config.apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model,
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userPrompt }],
    }),
  });
  if (!res.ok) throw new Error(`LLM request failed: ${res.status} ${await res.text()}`);
  const data = (await res.json()) as { content: { text: string }[] };
  const text = data.content[0]?.text ?? "{}";
  return JSON.parse(text) as Intent;
}

async function providerTranslate(
  text: string,
  sourceLang: SupportedLanguage,
  targetLang: SupportedLanguage,
  config: LLMConfig
): Promise<string> {
  const prompt = `将以下${sourceLang}文本翻译成${targetLang}，只返回翻译结果：\n${text}`;
  if (config.provider === "anthropic") {
    const model = config.model ?? "claude-3-5-sonnet-20241022";
    const baseUrl = config.baseUrl ?? "https://api.anthropic.com";
    const res = await fetch(`${baseUrl}/v1/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": config.apiKey!,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model,
        max_tokens: 1024,
        messages: [{ role: "user", content: prompt }],
      }),
    });
    if (!res.ok) throw new Error(`LLM translate failed: ${res.status}`);
    const data = (await res.json()) as { content: { text: string }[] };
    return data.content[0]?.text?.trim() ?? text;
  }
  const model = config.model ?? "gpt-4o-mini";
  const baseUrl = config.baseUrl ?? "https://api.openai.com/v1";
  const res = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: prompt }],
      temperature: 0,
    }),
  });
  if (!res.ok) throw new Error(`LLM translate failed: ${res.status}`);
  const data = (await res.json()) as { choices: { message: { content: string } }[] };
  return data.choices[0].message.content.trim();
}

function buildUserPrompt(command: string, context: ParseContext | undefined): string {
  let prompt = `用户指令：${command}`;
  if (context?.knownSections?.length) {
    prompt += `\n已知区段：${context.knownSections.join(", ")}`;
  }
  if (context?.knownKeys?.length) {
    prompt += `\n已知翻译键（前20个）：${context.knownKeys.slice(0, 20).join(", ")}`;
  }
  return prompt;
}
