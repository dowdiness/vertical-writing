import debounce from "just-debounce-it"

export type VerticalWritingType = {
  adjustSize: () => void,
  activate: () => void,
  deActivate: () => void
}

export function VerticalWriting <T extends HTMLElement>(el: T): VerticalWritingType {
  const adjustSize = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!el) {
          return
        }

        el.style.marginBottom = ''
        const fullHeight = el.scrollHeight
        const defaultHeight = Number(
          getComputedStyle(el).height.replace('px', '')
        )
        el.style.marginBottom = `${fullHeight - defaultHeight}px`
      })
    })
  }

  const adjustSizeCallback = () => adjustSize()
  const debouncedAdjustSize = debounce(adjustSizeCallback, 100)

  const activate = () => {
    adjustSize()
    window.addEventListener("load", debouncedAdjustSize)
    window.addEventListener('resize', debouncedAdjustSize)
  }

  const deActivate = () => {
    debouncedAdjustSize.cancel()
    window.removeEventListener("load", debouncedAdjustSize)
    window.removeEventListener('resize', debouncedAdjustSize)
  }

  const self = {
    adjustSize,
    activate,
    deActivate
  }

  return self
}

export default VerticalWriting
