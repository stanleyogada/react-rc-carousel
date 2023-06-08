import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";

import { SLIDER_INITIAL_PROPS } from "src/constants";
import useSliderThemeProvider from "src/contexts/useSliderThemeProvider";
import {
  useAutoSlideInView,
  useBreakpoints,
  useControls,
  useSlide,
  useSwipe,
} from "src/hooks";

import type { ISliderProps, SlideAnimationProp, TBreakPoint } from "src/types";

const MOBILE_SCREEN = 400;

const DEFAULT_CHILDREN = [
  <div>slide 1</div>,
  <div>slide 2</div>,
  <div>slide 3</div>,
  <div>slide 4</div>,
  <div>slide 5</div>,
];

export const Slider = (props: ISliderProps) => {
  const contextProps = useSliderThemeProvider();
  props = { ...(contextProps || {}), ...props };
  const {
    children = DEFAULT_CHILDREN,
    isAutoSlide: __isAutoSlide,
    nSlidePerView: __nSlidePerView,
    animationInterval,
    lastSlideAnimation,
    changeSlideAnimation,
    isPauseOnHover,
    isShowDots,
    isShowButtons,
    breakpoints,
    theme,
  } = useMemo(() => ({ ...SLIDER_INITIAL_PROPS, ...props }), []);

  const { isAutoSlide, sliderRef } = useAutoSlideInView(__isAutoSlide);
  const nSlidePerView = useBreakpoints(__nSlidePerView, breakpoints);

  const getNSlide = useCallback(
    () => children.length - ((nSlidePerView as number) - 1),
    [nSlidePerView, children.length]
  );

  const shouldAnimate = useMemo(
    () => (nSlidePerView as number) < children.length,
    [nSlidePerView, children.length]
  );

  const {
    currentSlide,
    handleControlClick,
    handlePauseAnimation,
    handleStartAnimation,
  } = useSlide({
    getNSlide,
    shouldAnimate,
    sliderRef,
    nSlidePerView: nSlidePerView,
    isAutoSlide: isAutoSlide,
    animationInterval: animationInterval as number,
    lastSlideAnimation: lastSlideAnimation as SlideAnimationProp,
    changeSlideAnimation: changeSlideAnimation as SlideAnimationProp,
  });

  const {
    dotsRef,
    dotsStyle,
    buttonStyle,
    buttonsClassName,
    isShowButtonsPropValue,
    handleNextButtonClick,
    handlePrevButtonClick,
  } = useControls({
    currentSlide,
    isShowDots: isShowDots as ISliderProps["isShowDots"],
    isShowButtons: isShowButtons as ISliderProps["isShowButtons"],
    theme: theme as ISliderProps["theme"],
    handleControlClick,
  });

  const { sliderMainRef } = useSwipe({
    onLeft: handleNextButtonClick,
    onRight: handlePrevButtonClick,
    currentSlide,
  });

  const shouldPauseWhenSliderIhHovered = useMemo(
    () =>
      innerWidth > MOBILE_SCREEN && isPauseOnHover
        ? handlePauseAnimation
        : undefined,
    [innerWidth, isPauseOnHover]
  );

  return (
    <div
      className={`slider`}
      ref={sliderMainRef}
      onMouseOver={shouldPauseWhenSliderIhHovered}
      onMouseLeave={
        isPauseOnHover && isAutoSlide ? handleStartAnimation : undefined
      }
    >
      <div className="slider__slide-container" ref={sliderRef}>
        {children.map((slide, index) => (
          <div key={`slide--${index}`} className="slider__slide">
            {slide}
          </div>
        ))}
      </div>

      {shouldAnimate && (
        <>
          <div className={buttonsClassName}>
            {isShowButtonsPropValue.renderPrev ? (
              isShowButtonsPropValue.renderPrev(handlePrevButtonClick)
            ) : (
              <button
                className="slider__button slider__button--prev"
                style={buttonStyle}
                onClick={handlePrevButtonClick}
              >
                <IoChevronBack fontSize={"1.4rem"} />
              </button>
            )}

            {isShowButtonsPropValue.renderNext ? (
              isShowButtonsPropValue.renderNext(handleNextButtonClick)
            ) : (
              <button
                className="slider__button slider__button--next"
                style={buttonStyle}
                onClick={handleNextButtonClick}
              >
                <IoChevronForward fontSize={"1.4rem"} />
              </button>
            )}
          </div>

          <div className="slider__dots" style={dotsStyle} ref={dotsRef}>
            {Array.from({ length: getNSlide() }, (_, i) => (
              <button
                key={`dot--${i}`}
                className={`slider__dot ${
                  i === currentSlide ? "slider__dot--active" : ""
                }`}
                onClick={() => handleControlClick(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
