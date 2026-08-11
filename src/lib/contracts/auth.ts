// AuthProvider — abstraction over authentication headers.
//
// Local mode: no auth. Remote mode: Bearer token (reserved OAuth refresh).

export interface AuthProvider {
  getAuthHeaders(): Promise<Record<string, string>>;
}
