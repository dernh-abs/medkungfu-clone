// Subscription / notification mechanism for ContentRuntime.
//
// Components subscribe to path prefixes; the executor calls notify() after a
// successful write so React can re-render via useSyncExternalStore.

type Listener = () => void;

const listeners = new Set<Listener>();

export function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function notifySubscribers(): void {
  for (const l of listeners) {
    try {
      l();
    } catch (err) {
      console.error("[notify] listener threw", err);
    }
  }
}
