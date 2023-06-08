import { ReactElement } from "react";

type SlideAnimationProp = {
  isSlide?: boolean | string;
  isFade?: boolean;
};

type TIsShowButtonsProp = {
  position?: "bottom-left" | "bottom-right" | "middle-center";
  isRounded?: boolean;
  spaced?: boolean;
  renderNext?: (onClick: () => void) => ReactElement;
  renderPrev?: (onClick: () => void) => ReactElement;
};

type TIsShowButtons = {
  position?: "top-center" | "bottom-center";
  isOut?: boolean;
};

type BreakPoint = {
  width: number;
  nSlidePerView: number;
};

type SliderProps = {
  children?: ReactElement[];
  isAutoSlide?: boolean;
  nSlidePerView?: number;
  animationInterval?: number;
  lastSlideAnimation?: SlideAnimationProp;
  changeSlideAnimation?: SlideAnimationProp;
  isPauseOnHover?: boolean;
  isShowDots?: TIsShowButtons | false;
  isShowButtons?: TIsShowButtonsProp | false;
  breakpoints?: BreakPoint[];
};

export type { SliderProps, TIsShowButtonsProp, SlideAnimationProp, BreakPoint };
