import { Ref, ref, onMounted, onUnmounted } from "vue";
import VerticalWriting from "vertical-writing";
import { canUseDOM } from "./util";
import type {
  VerticalWritingType,
  VerticalWritingOptionsType,
} from "vertical-writing";

export type VirticalWritingVueType<T extends HTMLElement> = [
  Ref<T | undefined>,
  Ref<VerticalWritingType | undefined>
];

export const useVirticalWriting = <T extends HTMLElement>(
  options: VerticalWritingOptionsType = { spacing: "margin" }
): VirticalWritingVueType<T> => {
  const vwNode = ref<T>();
  const vw = ref<VerticalWritingType>();

  onMounted(() => {
    if (!canUseDOM() || !vwNode.value) return;
    vw.value = VerticalWriting(vwNode.value, options);
    vw.value.activate();
  });

  onUnmounted(() => {
    if (vw.value) vw.value.deActivate();
  });

  return [vwNode, vw];
};

export default useVirticalWriting;
