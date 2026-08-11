// LocalVersionStore — one JSON file per version under `versions/`.
//
// Simplified event-sourcing for local dev: each VersionEntry stores the full
// UCD snapshot + the patch. Snapshot optimisation (`shouldSnapshot`) and old
// version compaction are reserved hooks for production (Redis / remote).

import { promises as fs } from "node:fs";
import path from "node:path";

import type { VersionEntry, VersionStore } from "./version-store";

const VERSIONS_DIR = "versions";

function versionFile(version: number): string {
  return path.join(process.cwd(), VERSIONS_DIR, `${String(version).padStart(3, "0")}.json`);
}

export class FileVersionStore implements VersionStore {
  /** Reserved: produce a snapshot every N versions (no-op locally). */
  private shouldSnapshot(_version: number): boolean {
    return false; // TODO: production — version % SNAPSHOT_INTERVAL === 0
  }

  async append(entry: VersionEntry): Promise<void> {
    if (this.shouldSnapshot(entry.version)) {
      // Production: store incremental patch only. Locally: never taken.
    }
    const file = versionFile(entry.version);
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, JSON.stringify(entry, null, 2), "utf-8");
  }

  async get(version: number): Promise<VersionEntry | null> {
    try {
      const raw = await fs.readFile(versionFile(version), "utf-8");
      return JSON.parse(raw) as VersionEntry;
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code === "ENOENT") return null;
      throw err;
    }
  }

  async latest(): Promise<VersionEntry | null> {
    try {
      const dir = path.join(process.cwd(), VERSIONS_DIR);
      const files = await fs.readdir(dir);
      const nums = files
        .map((f) => parseInt(f, 10))
        .filter((n) => !Number.isNaN(n))
        .sort((a, b) => a - b);
      if (nums.length === 0) return null;
      return this.get(nums[nums.length - 1]);
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code === "ENOENT") return null;
      throw err;
    }
  }

  async history(from: number, to: number): Promise<VersionEntry[]> {
    const out: VersionEntry[] = [];
    for (let v = from; v <= to; v++) {
      const entry = await this.get(v);
      if (entry) out.push(entry);
    }
    return out;
  }

  /** Reserved: compaction (no-op locally). */
  async compact(_maxKeep: number): Promise<void> {
    // TODO: production — keep snapshots, drop incremental patches beyond maxKeep.
  }
}
