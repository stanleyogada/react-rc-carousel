import { useCallback, useMemo } from "react";
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

import type { ISliderProps, SlideAnimationProp } from "src/types";
import { keyframes, styled } from "styled-components";

const MOBILE_SCREEN = 400;

const DEFAULT_CHILDREN = [
  <div>slide 1</div>,
  <div>slide 2</div>,
  <div>slide 3</div>,
  <div>slide 4</div>,
  <div>slide 5</div>,
];

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SliderContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;

  // border: 1px solid;

  .slider--fade-animation {
    animation-name: ${fade};
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  .slider__slide-container {
    display: flex;
    overflow: hidden;

    .slider__slide {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      padding: 3px;

      // border: 1px solid red;

      // width: 100%;
      flex-shrink: 0;
      transform: translateX(0%);
      transition: 0.5s ease;
    }
  }

  .slider__dots {
    display: flex;
    gap: 5px;
    position: absolute;
    transform: translate(-50%, 100%);
    // border: 2px solid green;
    padding: 10px 0;

    .slider__dot {
      border: none;
      background: none;
      padding: 0;
      margin: 0;
      display: inline;

      flex-shrink: 0;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      cursor: pointer;
      transition: 1s ease;

      &--active {
        width: 30px;
      }
    }
  }

  .slider__buttons {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    // border: 2px solid rgb(0, 128, 38);

    position: absolute;
    display: flex;

    gap: 10px;
    padding: 10px;

    top: 100%;
    &--bottom-left {
      left: 0;
    }
    &--bottom-right {
      right: 0;
    }

    &--middle-center {
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }

    &--space-between {
      width: 100%;
      justify-content: space-between;
    }

    &--rounded {
      .slider__button {
        border-radius: 50%;
      }
    }

    .slider__button {
      border: none;
      background: none;
      padding: 0;
      margin: 0;
      display: inline;
      width: 30px;
      height: 30px;
      // border: 2px solid;
      display: grid;
      place-items: center;
      cursor: pointer;
    }
  }
`;

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
    <SliderContainer
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
    </SliderContainer>
  );
};
