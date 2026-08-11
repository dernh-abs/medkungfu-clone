"use client";

// useDebouncedSave — debounced auto-save hook for Puck onChange events.
//
// Puck fires onChange on every edit (drag, field change, etc). Without
// debouncing, this would flood the draft API with writes. This hook
// delays the save call until the user stops editing for `delay` ms.

import { useCallback, useRef } from "react";

export function useDebouncedSave<T>(
  saveFn: (data: T) => void,
  delay: number = 800
): (data: T) => void {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const latestDataRef = useRef<T | null>(null);

  return useCallback(
    (data: T) => {
      latestDataRef.current = data;
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        if (latestDataRef.current !== null) {
          saveFn(latestDataRef.current);
          timerRef.current = null;
        }
      }, delay);
    },
    [saveFn, delay]
  );
}
