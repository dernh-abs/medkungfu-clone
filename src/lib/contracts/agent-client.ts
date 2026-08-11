// AgentClient — abstraction over sending natural-language commands.
//
// Local implementation calls the in-process execute() (or localhost API); a
// future remote implementation POSTs to the official server. Studio and any
// CLI front-end depend only on this interface.

import type { SupportedLanguage } from "@/lib/i18n/translations";
import type { JsonPatchOperation } from "@/lib/executor/patch-types";
import type { Intent } from "@/lib/agent/types";

export interface AgentOptions {
  dryRun?: boolean;
  lang?: SupportedLanguage;
}

export interface AgentResponse {
  success: boolean;
  intent?: Intent;
  operations?: JsonPatchOperation[];
  newVersion?: number;
  error?: string;
  suggestion?: string;
  stage?: "rule_match" | "llm_parse" | "plan" | "validation" | "execute";
  preview?: unknown;
}

export interface CommandStatus {
  commandId: string;
  state: "pending" | "running" | "complete" | "failed";
  response?: AgentResponse;
}

export interface AgentClient {
  sendCommand(command: string, options?: AgentOptions): Promise<AgentResponse>;
  /** Reserved: batch commands (remote async). */
  sendBatch?(commands: string[]): Promise<AgentResponse[]>;
  /** Reserved: poll command status (remote async). */
  getStatus?(commandId: string): Promise<CommandStatus>;
}
