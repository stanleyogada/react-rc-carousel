import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { SlideAnimationProp, ISliderProps } from "../types";
import { SLIDER_INITIAL_PROPS } from "../constants";

const useSlide = ({
  getNSlide,
  shouldAnimate,
  sliderRef,
  nSlidePerView,
  isAutoSlide,
  animationInterval,
  lastSlideAnimation: __lastSlideAnimation,
  changeSlideAnimation: __changeSlideAnimation,
}: {
  getNSlide: () => number;
  shouldAnimate: boolean;
  sliderRef: React.RefObject<HTMLDivElement>;
  nSlidePerView: ISliderProps["nSlidePerView"];
  isAutoSlide: ISliderProps["isAutoSlide"];
  animationInterval: ISliderProps["animationInterval"];
  lastSlideAnimation: SlideAnimationProp;
  changeSlideAnimation: SlideAnimationProp;
}) => {
  const sliderAnimationIntervalId = useRef<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const lastSlideAnimation = useMemo(
    () => ({
      ...SLIDER_INITIAL_PROPS.lastSlideAnimation,
      ...__lastSlideAnimation,
    }),
    []
  );
  const changeSlideAnimation = useMemo(
    () => ({
      ...SLIDER_INITIAL_PROPS.changeSlideAnimation,
      ...__changeSlideAnimation,
    }),
    []
  );

  const handleFadeAnimation = () => {
    const container = sliderRef.current;

    container?.classList.add("slider--fade-animation");
    setTimeout(() => {
      container?.classList.remove("slider--fade-animation");
    }, 1000);
  };

  const handleSlideAnimation = (
    slideAnimation: SlideAnimationProp,
    animation: string,
    slide: Element
  ) => {
    if (slideAnimation.isSlide) {
      const { isSlide } = slideAnimation;

      (slide as HTMLDivElement).style.transition =
        typeof isSlide === "string" ? isSlide : animation;
    } else {
      (slide as HTMLDivElement).style.transition = "none";
    }

    if (slideAnimation.isFade) {
      handleFadeAnimation();
    }
  };

  const handleSlideChange = useCallback(
    (_currentSlide: number) => {
      const container = sliderRef.current;

      const nextSlide = _currentSlide ?? currentSlide + 1;

      const hasReachLastSlide = !(nextSlide && nextSlide < getNSlide());
      const CSSTranslateX = hasReachLastSlide ? 0 : `-${nextSlide}00%`;

      container?.querySelectorAll(".slider__slide").forEach((slide) => {
        (
          slide as HTMLDivElement
        ).style.transform = `translateX(${CSSTranslateX})`;

        const shouldRestartSlide =
          hasReachLastSlide && getNSlide() > 2 && nextSlide === getNSlide();

        if (shouldRestartSlide) {
          handleSlideAnimation(
            lastSlideAnimation as SlideAnimationProp,
            ".5s ease",
            slide
          );
        } else {
          handleSlideAnimation(
            changeSlideAnimation as SlideAnimationProp,
            "1s ease",
            slide
          );
        }
      });
      setCurrentSlide(hasReachLastSlide ? 0 : nextSlide);
    },
    [currentSlide]
  );

  const handleControlClick = useCallback(
    (currentSlide: number) => {
      handlePauseAnimation();
      setTimeout(() => {
        handleSlideChange(currentSlide);
      }, 100);
    },
    [handleSlideChange]
  );

  const handlePauseAnimation = useCallback(() => {
    if (sliderAnimationIntervalId.current) {
      clearInterval(sliderAnimationIntervalId.current);
    }
  }, []);

  const handleStartAnimation = () => {
    if (shouldAnimate) {
      sliderAnimationIntervalId.current = setInterval(
        handleSlideChange,
        animationInterval
      );
    }
  };

  // Divide the slides by the nSlidePerView
  useEffect(() => {
    const container = sliderRef.current;

    container?.querySelectorAll(".slider__slide").forEach((slide) => {
      // @ts-ignore
      const CSSWidth = 100 / nSlidePerView;

      // @ts-ignore
      slide.style.width = `${CSSWidth}%`;
    });
  }, [nSlidePerView]);

  // Handle Auto Sliding animation
  useEffect(() => {
    if (isAutoSlide) {
      handleStartAnimation();
    }

    return handlePauseAnimation;
  }, [
    isAutoSlide,
    currentSlide,
    handleSlideChange,
    handlePauseAnimation,
    handleStartAnimation,
  ]);

  return {
    currentSlide,
    getNSlide,
    handleControlClick,
    handlePauseAnimation,
    handleStartAnimation,
  };
};

export default useSlide;
