// Stage 1: Intent parser — the Agent hub's entry point.
//
// Two-stage pipeline:
//   Stage 0: rule matcher (deterministic, ~80% of commands, ms latency)
//   Stage 1: LLM parser (only when stage 0 misses AND ENABLE_LLM=true)
//
// When ENABLE_LLM=false and the rule matcher misses, we throw LLMDisabledError
// with an actionable message — the caller (API route) maps this to a 422 with
// a hint to use a deterministic command format.

import { matchRule } from "./rule-matcher";
import { parseIntentWithLLM, type ParseContext } from "./llm-client";
import type { Intent, ParsedIntent } from "./types";

/**
 * Parse a natural-language command into a structured Intent.
 *
 * @param command  the raw user command, e.g. "把 hero 标题改成 Welcome"
 * @param context  optional context for the LLM (known sections/keys)
 * @returns        the parsed intent with provenance (rule vs llm)
 * @throws         LLMDisabledError if rule matcher misses and ENABLE_LLM != "true"
 */
export async function parseIntent(
  command: string,
  context?: ParseContext
): Promise<ParsedIntent> {
  // Stage 0: deterministic rule match
  const ruleResult = matchRule(command);
  if (ruleResult) {
    return { intent: ruleResult, source: "rule", rawCommand: command };
  }

  // Stage 1: LLM parse (only reached when rules miss)
  const llmIntent = await parseIntentWithLLM(command, context);
  return { intent: llmIntent, source: "llm", rawCommand: command };
}

/** Convenience: parse + return just the Intent (no provenance). */
export async function parseIntentOnly(
  command: string,
  context?: ParseContext
): Promise<Intent> {
  return (await parseIntent(command, context)).intent;
}
