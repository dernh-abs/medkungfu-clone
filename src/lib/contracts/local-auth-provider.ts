// LocalAuthProvider — no authentication in local mode.

import type { AuthProvider } from "./auth";

export class LocalAuthProvider implements AuthProvider {
  async getAuthHeaders(): Promise<Record<string, string>> {
    return {};
  }
}
