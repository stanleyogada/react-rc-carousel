import { SliderProps } from "src/types";

const SLIDER_INITIAL_PROPS: SliderProps = {
  isAutoSlide: true,
  nSlidePerView: 1,
  animationInterval: 5000,
  lastSlideAnimation: {
    isSlide: false,
    isFade: true,
  },
  changeSlideAnimation: {
    isSlide: "1s ease",
    isFade: false,
  },
  isPauseOnHover: true,
  isShowDots: {
    position: "bottom-center",
    isOut: true,
  },
  isShowButtons: {
    position: "middle-center",
    isRounded: true,
    spaced: true,
    renderNext: undefined,
    renderPrev: undefined,
  },
  breakpoints: undefined,
  theme: {
    color: "#000",
    backgroundColor: "#bbb",
  },
};

export default SLIDER_INITIAL_PROPS;
