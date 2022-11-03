import { useEffect, useRef, useLayoutEffect } from "react";
import VerticalWriting from "vertical-writing";
import { canUseDOM } from "./util";
import type { VerticalWritingOptionsType } from "vertical-writing";

export type UseVirticalWritingType<T extends HTMLElement> = [
  React.RefObject<T>
];

const useIsomorphicLayoutEffect = canUseDOM() ? useLayoutEffect : useEffect;

export const useVirticalWriting = <T extends HTMLElement>(
  options: VerticalWritingOptionsType = { spacing: "margin" }
): UseVirticalWritingType<T> => {
  const virticalRef = useRef<T>(null);

  useIsomorphicLayoutEffect(() => {
    /* eslint @typescript-eslint/no-non-null-assertion: 0 */
    const vw = VerticalWriting(virticalRef.current!, options);
    vw.activate();
    return () => vw.deActivate();
  }, [virticalRef.current]);

  return [virticalRef];
};

export default useVirticalWriting;
