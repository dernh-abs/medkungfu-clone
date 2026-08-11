// LocalAgentClient — sends commands to the local Agent API.
//
// In local mode the Agent pipeline runs in-process via the Next.js API route
// (POST /api/agent/command). This client simply POSTs there. Studio and any
// CLI front-end depend on the AgentClient interface, so swapping to
// RemoteAgentClient (Stage G) needs no caller changes.

import type { AgentClient, AgentOptions, AgentResponse } from "./agent-client";

export class LocalAgentClient implements AgentClient {
  private baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl ?? "http://localhost:3000";
  }

  async sendCommand(command: string, options?: AgentOptions): Promise<AgentResponse> {
    const res = await fetch(`${this.baseUrl}/api/agent/command`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ command, options }),
    });
    return (await res.json()) as AgentResponse;
  }
}
