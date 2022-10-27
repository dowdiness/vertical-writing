import { useEffect, useRef, useLayoutEffect } from 'react'
import VerticalWriting from 'vertical-writing'
import { canUseDOM } from './util'

export type UseVirticalWritingType<T extends HTMLElement> = [
  React.RefObject<T>
]

const useIsomorphicLayoutEffect = canUseDOM() ? useLayoutEffect : useEffect

export const useVirticalWriting = <T extends HTMLElement>(): UseVirticalWritingType<T> => {
  const virticalRef = useRef<T>(null)

  useIsomorphicLayoutEffect(() => {
    const vw = VerticalWriting(virticalRef.current!)
    vw.activate()
    return () => vw.deActivate()
  }, [virticalRef.current])

  return [virticalRef]
}

export default useVirticalWriting
