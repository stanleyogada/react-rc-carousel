import { ReactElement } from "react";

type SlideAnimationProp = {
  isSlide?: boolean | string;
  isFade?: boolean;
};

type isShowButtonsProp = {
  position?: "bottom-left" | "bottom-right" | "middle-center";
  isRounded?: boolean;
  spaced?: boolean;
  renderNext?: (onClick: () => void) => ReactElement;
  renderPrev?: (onClick: () => void) => ReactElement;
};

type SliderProps = {
  children?: ReactElement[];
  isAutoSlide?: boolean;
  nSlidePerView?: number;
  animationInterval?: number;
  lastSlideAnimation?: SlideAnimationProp;
  changeSlideAnimation?: SlideAnimationProp;
  isPauseOnHover?: boolean;
  isShowDots?:
    | {
        position?: "top-center" | "bottom-center";
        isOut?: boolean;
      }
    | false;

  isShowButtons?: isShowButtonsProp | false;
};

export type { SliderProps, isShowButtonsProp, SlideAnimationProp };
