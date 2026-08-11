// Version-store barrel — re-exports the interface + local impl from contracts
// so callers can import from a single executor path as the plan's file
// structure expects.

export type { VersionStore, VersionEntry } from "@/lib/contracts/version-store";
export { FileVersionStore } from "@/lib/contracts/local-version-store";
