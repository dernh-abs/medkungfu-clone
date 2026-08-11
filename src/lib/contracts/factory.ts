// Factory — select local or remote implementations via CONTENT_MODE.
//
// CONTENT_MODE=local (default) -> local file-system implementations
// CONTENT_MODE=remote          -> remote official-server implementations
//
// Remote implementations are stubbed to throw "not implemented" until Stage G.

import type { ContentStore } from "./content-store";
import type { VersionStore } from "./version-store";
import type { AgentClient } from "./agent-client";
import type { AuthProvider } from "./auth";
import type { SyncService } from "./sync-service";
import { LocalContentStore } from "./local-content-store";
import { FileVersionStore } from "./local-version-store";
import { LocalAuthProvider } from "./local-auth-provider";

export type ContentMode = "local" | "remote";

export function getContentMode(): ContentMode {
  return process.env.CONTENT_MODE === "remote" ? "remote" : "local";
}

export function createContentStore(): ContentStore {
  const mode = getContentMode();
  if (mode === "local") return new LocalContentStore();
  // Remote impl added in Stage G.
  throw new Error(
    "RemoteContentStore not implemented yet (Stage G). Set CONTENT_MODE=local."
  );
}

export function createVersionStore(): VersionStore {
  const mode = getContentMode();
  if (mode === "local") return new FileVersionStore();
  throw new Error(
    "RemoteVersionStore not implemented yet (Stage G). Set CONTENT_MODE=local."
  );
}

export function createAuthProvider(): AuthProvider {
  const mode = getContentMode();
  if (mode === "local") return new LocalAuthProvider();
  throw new Error(
    "RemoteAuthProvider not implemented yet (Stage G). Set CONTENT_MODE=local."
  );
}

// LocalAgentClient lives in contracts/local-agent-client.ts and needs the
// executor, which would create a circular import at module load. It is
// constructed lazily by callers (see api/agent/command/route.ts).
export type { AgentClient, SyncService };
