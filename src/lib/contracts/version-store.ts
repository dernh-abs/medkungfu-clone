// VersionStore — abstraction over version history (event-sourced).
//
// Local implementation writes one JSON file per version under `versions/`.
// A future remote implementation will use Redis / the official server's
// version API. The executor depends only on this interface.

import type { PatchPackage } from "@/lib/executor/patch-types";

export interface VersionEntry {
  version: number;
  patch: PatchPackage;
  document: unknown; // full UCD snapshot (local dev stores full docs)
  parentVersion: number;
  timestamp: string;
}

export interface VersionStore {
  append(entry: VersionEntry): Promise<void>;
  get(version: number): Promise<VersionEntry | null>;
  latest(): Promise<VersionEntry | null>;
  history(from: number, to: number): Promise<VersionEntry[]>;
  /** Reserved: snapshot compaction (no-op locally, implemented remotely). */
  compact?(maxKeep: number): Promise<void>;
}
