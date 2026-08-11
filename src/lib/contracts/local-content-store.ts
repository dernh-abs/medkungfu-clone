// LocalContentStore — reads/writes the `.content/` directory.
//
// writeAtomic implements the two-phase write described in the plan: first
// serialise every changed file to memory, then write them one by one. If any
// write fails, roll back the already-written files to their old contents.

import { promises as fs } from "node:fs";
import path from "node:path";

import type { UnifiedContentDocument } from "@/lib/content/content-schema";
import { CONTENT_DIR, loadFullDocument, invalidateCache } from "@/lib/content/content-loader";
import { serializeToFiles } from "@/lib/executor/serialize";
import type { ContentStore } from "./content-store";

export class LocalContentStore implements ContentStore {
  private root: string;

  constructor(root?: string) {
    this.root = root ?? path.join(process.cwd(), CONTENT_DIR);
  }

  async read(pathPrefix?: string): Promise<UnifiedContentDocument | Partial<UnifiedContentDocument>> {
    // pathPrefix is honoured by the loader at a finer grain; for the local
    // store we simply load the full document (files are small in dev).
    void pathPrefix;
    return (await loadFullDocument()) as UnifiedContentDocument | null ?? {};
  }

  async readFile(filePath: string): Promise<string> {
    try {
      return await fs.readFile(path.join(this.root, filePath), "utf-8");
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code === "ENOENT") return "";
      throw err;
    }
  }

  async exists(filePath: string): Promise<boolean> {
    try {
      await fs.access(path.join(this.root, filePath));
      return true;
    } catch {
      return false;
    }
  }

  async writeAtomic(
    buffers: Map<string, string>,
    oldDoc: UnifiedContentDocument
  ): Promise<void> {
    const written: string[] = [];
    try {
      for (const [filePath, content] of buffers) {
        const full = path.join(this.root, filePath);
        await fs.mkdir(path.dirname(full), { recursive: true });
        await fs.writeFile(full, content, "utf-8");
        written.push(filePath);
      }
    } catch (err) {
      console.error(
        `[content-store] write failed on ${written[written.length - 1] ?? "n/a"}, ` +
          `rolling back ${written.length} file(s)`
      );
      const oldBuffers = serializeToFiles(oldDoc);
      for (const filePath of written) {
        try {
          await fs.writeFile(path.join(this.root, filePath), oldBuffers.get(filePath)!, "utf-8");
        } catch (rollbackErr) {
          console.error(
            `[content-store] rollback of ${filePath} also failed! ` +
              "`.content/` may be inconsistent — inspect manually.",
            rollbackErr
          );
        }
      }
      throw new Error(`Atomic write failed, rolled back to previous version: ${err}`);
    }
    // Invalidate cache so subsequent reads see the new content.
    invalidateCache();
  }
}
