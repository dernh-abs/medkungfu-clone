// SyncService — abstraction over local<->remote content sync.
//
// Not available in local mode. A future remote implementation will call the
// official server's push/pull endpoints.

import type { UnifiedContentDocument } from "@/lib/content/content-schema";
import type { VersionEntry } from "./version-store";

export interface SyncConflict {
  path: string;
  localValue: unknown;
  remoteValue: unknown;
}

export interface SyncResult {
  success: boolean;
  pushedVersion?: number;
  remoteVersion?: number;
  conflicts?: SyncConflict[];
}

export interface SyncDiff {
  identical: boolean;
  conflicts: SyncConflict[];
}

export interface SyncService {
  push(localDoc: UnifiedContentDocument): Promise<SyncResult>;
  pull(): Promise<UnifiedContentDocument>;
  diff(): Promise<SyncDiff>;
  resolveConflict(
    local: VersionEntry,
    remote: VersionEntry,
    strategy: "local" | "remote" | "merge"
  ): Promise<UnifiedContentDocument>;
}
