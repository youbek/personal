import { useEffect, useLayoutEffect } from "react";

// suppress useLayoutEffect warnings when running outside a browser
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
