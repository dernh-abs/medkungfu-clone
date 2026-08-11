// ContentStore — abstraction over content read/write.
//
// Local implementation operates on the `.content/` directory; a future remote
// implementation will call the official server's HTTP API. The executor
// depends only on this interface so `CONTENT_MODE` can switch implementations
// without touching business logic.

import type { UnifiedContentDocument } from "@/lib/content/content-schema";

export interface ContentStore {
  /** Read the whole UCD (or a path-prefix partial). */
  read(pathPrefix?: string): Promise<UnifiedContentDocument | Partial<UnifiedContentDocument>>;

  /** Atomic two-phase write of multiple physical files. */
  writeAtomic(
    buffers: Map<string, string>,
    oldDoc: UnifiedContentDocument
  ): Promise<void>;

  /** Read a single physical file (relative to the store root). */
  readFile(filePath: string): Promise<string>;

  /** Whether a physical file exists. */
  exists(filePath: string): Promise<boolean>;
}
