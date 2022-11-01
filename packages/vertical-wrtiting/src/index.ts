import debounce from "just-debounce-it";

export type VerticalWritingType = {
  adjustSize: () => void;
  activate: () => void;
  deActivate: () => void;
};

export type VerticalWritingOptionsType = Partial<{
  spacing: "margin" | "padding";
  delayTime: number;
}>;

export function VerticalWriting<T extends HTMLElement>(
  el: T,
  { spacing, delayTime }: VerticalWritingOptionsType = {
    spacing: "margin",
    delayTime: 100,
  }
): VerticalWritingType {
  if (typeof spacing === "undefined") {
    spacing = "margin";
  }

  if (typeof delayTime === "undefined") {
    delayTime = 100;
  }

  const adjustSize = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!el) {
          return;
        }

        if (spacing === "margin") {
          el.style.marginBottom = "";
        } else {
          el.style.paddingBottom = "";
        }

        const fullHeight = el.scrollHeight;
        const defaultHeight = Number(
          getComputedStyle(el).height.replace("px", "")
        );
        if (spacing === "margin") {
          el.style.marginBottom = `${fullHeight - defaultHeight}px`;
        } else {
          el.style.paddingBottom = `${fullHeight - defaultHeight}px`;
        }
      });
    });
  };

  const adjustSizeCallback = () => adjustSize();
  const debouncedAdjustSize = debounce(adjustSizeCallback, delayTime);

  const activate = () => {
    adjustSize();
    window.addEventListener("load", debouncedAdjustSize);
    window.addEventListener("resize", debouncedAdjustSize);
  };

  const deActivate = () => {
    debouncedAdjustSize.cancel();
    window.removeEventListener("load", debouncedAdjustSize);
    window.removeEventListener("resize", debouncedAdjustSize);
  };

  const self = {
    adjustSize,
    activate,
    deActivate,
  };

  return self;
}

export default VerticalWriting;
