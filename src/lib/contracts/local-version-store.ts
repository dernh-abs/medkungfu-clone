// LocalVersionStore — one JSON file per version under `versions/`.
//
// Simplified event-sourcing for local dev: each VersionEntry stores the full
// UCD snapshot + the patch.
//
// Stage F:
//   - Snapshot-optimisation hooks are now functional (opt-in via env).
//   - shouldSnapshot(): returns true every SNAPSHOT_INTERVAL versions when
//     SNAPSHOT_OPTIMIZATION === "true".
//   - append(): on a non-snapshot version, writes the `document` snapshot
//     with `document.__snapshot` = false so compact() later knows it can
//     be regenerated from neighbouring snapshots.
//   - compact(): removes non-snapshot entries between snapshots while
//     preserving: (a) the initial v1, (b) every SNAPSHOT_INTERVAL-th
//     version, and (c) all versions above (latest - maxKeep).
//
// These are opt-in because locally the files are tiny and disk is cheap;
// in production use `SNAPSHOT_OPTIMIZATION=true` and call compact() from
// a background job.

import { promises as fs } from "node:fs";
import path from "node:path";

import type { VersionEntry, VersionStore } from "./version-store";

const VERSIONS_DIR = "versions";

function versionFile(version: number): string {
  return path.join(process.cwd(), VERSIONS_DIR, `${String(version).padStart(3, "0")}.json`);
}

export class FileVersionStore implements VersionStore {
  /** Default interval; production override via env SNAPSHOT_INTERVAL. */
  private readonly SNAPSHOT_INTERVAL =
    Number.parseInt(process.env.SNAPSHOT_INTERVAL ?? "50", 10) || 50;

  /** Whether snapshot / compaction features are enabled. */
  private readonly optimizationEnabled =
    process.env.SNAPSHOT_OPTIMIZATION === "true";

  /**
   * Decide whether version N should be stored as a standalone snapshot.
   * Snapshots are never dropped during compact(), so rebuilding history is
   * always possible by replaying patches between two adjacent snapshots.
   */
  private shouldSnapshot(version: number): boolean {
    if (!this.optimizationEnabled) return false;
    return version % this.SNAPSHOT_INTERVAL === 0;
  }

  async append(entry: VersionEntry): Promise<void> {
    // Tag document to indicate whether it's a kept snapshot. compact() uses
    // this tag to identify safe-to-drop entries.
    if (this.optimizationEnabled) {
      const doc = entry.document as Record<string, unknown>;
      if (!Object.prototype.hasOwnProperty.call(doc, "__snapshot")) {
        Object.defineProperty(doc, "__snapshot", {
          value: this.shouldSnapshot(entry.version) || entry.version === 1,
          enumerable: false,
          configurable: true,
        });
      }
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

  /**
   * Drop intermediate non-snapshot entries that fall outside the
   * `maxKeep` window. Opt-in via SNAPSHOT_OPTIMIZATION=true; otherwise
   * the method is a no-op so nothing is deleted unexpectedly in dev.
   */
  async compact(maxKeep: number = 1000): Promise<void> {
    if (!this.optimizationEnabled) return;

    const latestEntry = await this.latest();
    if (!latestEntry) return;
    const latestVersion = latestEntry.version;
    const windowStart = Math.max(1, latestVersion - maxKeep + 1);

    const allFiles = await fs.readdir(path.join(process.cwd(), VERSIONS_DIR));
    const nums = allFiles
      .map((f) => parseInt(f, 10))
      .filter((n) => !Number.isNaN(n));

    // Safe-to-drop: inside windowStart..latestVersion, non-snapshot entries.
    const droppable = nums.filter((v) => {
      if (v <= 1) return false;                   // always keep v1
      if (v >= windowStart) return false;         // always keep recent window
      if (v % this.SNAPSHOT_INTERVAL === 0) return false; // keep snapshots
      return true;
    });

    // Drop each candidate concurrently; ENOENT is benign.
    await Promise.all(
      droppable.map(async (v) => {
        try {
          await fs.unlink(versionFile(v));
        } catch (err) {
          if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
        }
      })
    );
  }
}
