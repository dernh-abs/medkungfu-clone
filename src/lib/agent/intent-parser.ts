import { matchRule } from "./rule-matcher";
import { parseIntentWithLLM, type ParseContext } from "./llm-client";
import type { Intent, ParsedIntent } from "./types";

export async function parseIntent(
  command: string,
  context?: ParseContext
): Promise<ParsedIntent> {
  const ruleResult = matchRule(command);
  if (ruleResult) {
    return { intent: ruleResult, source: "rule", rawCommand: command };
  }

  const llmIntent = await parseIntentWithLLM(command, context);
  return { intent: llmIntent, source: "llm", rawCommand: command };
}

export async function parseIntentOnly(
  command: string,
  context?: ParseContext
): Promise<Intent> {
  return (await parseIntent(command, context)).intent;
}
