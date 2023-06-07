import {
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";

import { SLIDER_INITIAL_PROPS } from "src/constants";
import useSliderThemeProvider from "src/contexts/useSliderThemeProvider";

import type { SliderProps, SlideAnimationProp } from "src/types";

const theme = {
  color: "#ff7f7f",
  backgroundColor: "#000",
};

export const Slider = (props: SliderProps) => {
  const contextProps = useSliderThemeProvider();
  props = { ...(contextProps || {}), ...props };

  const {
    children = [
      <div>slide 1</div>,
      <div>slide 2</div>,
      <div>slide 3</div>,
      <div>slide 4</div>,
      <div>slide 5</div>,
    ],
    isAutoSlide,
    nSlidePerView,
    animationInterval,
    lastSlideAnimation,
    changeSlideAnimation,
    isPauseOnHover,
    isShowDots,
    isShowButtons,
  } = { ...SLIDER_INITIAL_PROPS, ...props };

  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderAnimationInterval = useRef<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  // @ts-ignore
  const getNSlide = () => children.length - (nSlidePerView - 1); // @ts-ignore
  const shouldAnimate = useMemo(() => nSlidePerView < children.length, []);

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
      //@ts-ignore
      slide.style.transition =
        typeof isSlide === "string" ? isSlide : animation;
    } else {
      //@ts-ignore
      slide.style.transition = "none";
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
        //@ts-ignore
        slide.style.transform = `translateX(${CSSTranslateX})`;

        if (hasReachLastSlide) {
          // @ts-ignore
          handleSlideAnimation(lastSlideAnimation, ".5s ease", slide);
        } else {
          // @ts-ignore
          handleSlideAnimation(changeSlideAnimation, "1s ease", slide);
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
    console.log("pause animation");

    if (sliderAnimationInterval.current) {
      clearInterval(sliderAnimationInterval.current);
    }
  }, []);

  const handleStartAnimation = () => {
    if (shouldAnimate) {
      sliderAnimationInterval.current = setInterval(
        handleSlideChange,
        animationInterval
      );
    }
  };

  useEffect(() => {
    const container = sliderRef.current;

    container?.querySelectorAll(".slider__slide").forEach((slide) => {
      // @ts-ignore
      const CSSWidth = 100 / nSlidePerView;
      console.log(CSSWidth);

      // @ts-ignore
      slide.style.width = `${CSSWidth}%`;
    });
  }, []);

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

  const dotsStyle = useMemo(() => {
    if (isShowDots === false)
      return {
        display: "none",
      };

    // @ts-ignore
    if (isShowDots.position === "top-center") {
      return {
        top: 0,
        left: "50%",
        // @ts-ignore
        transform: `translate(-50%, ${isShowDots.isOut ? "-100%" : "0"})`,
      };
    }
    // @ts-ignore
    if (isShowDots.position === "bottom-center") {
      return {
        bottom: 0,
        left: "50%",
        // @ts-ignore
        transform: `translate(-50%, ${isShowDots.isOut ? "100%" : "0"})`,
      };
    }
  }, []);

  const buttonStyle = useMemo(
    () => ({
      color: theme.color,
      backgroundColor: theme.backgroundColor,
    }),
    []
  );

  const isShowButtonsProp = useMemo(
    () => ({
      ...SLIDER_INITIAL_PROPS.isShowButtons,
      ...isShowButtons,
    }),
    []
  );

  const buttonsClassName = useMemo(() => {
    let className = "slider__buttons";

    if (!isShowButtons) {
      return className;
    }

    className += ` slider__buttons--${isShowButtonsProp.position}`;

    if (isShowButtonsProp.spaced) {
      className += " slider__buttons--space-between";
    }
    if (isShowButtonsProp.isRounded) {
      className += " slider__buttons--rounded";
    }

    return className;
  }, []);

  const handleNextButtonClick = () => handleControlClick(currentSlide + 1);
  const handlePrevButtonClick = () =>
    currentSlide > 0 && handleControlClick(currentSlide - 1);

  return (
    <div
      className={`slider`}
      onMouseOver={isPauseOnHover ? handlePauseAnimation : undefined}
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
            {isShowButtonsProp.renderPrev ? (
              isShowButtonsProp.renderPrev(handlePrevButtonClick)
            ) : (
              <button
                className="slider__button slider__button--prev"
                style={buttonStyle}
                onClick={handlePrevButtonClick}
              >
                <IoChevronBack fontSize={"1.4rem"} />
              </button>
            )}

            {isShowButtonsProp.renderNext ? (
              isShowButtonsProp.renderNext(handleNextButtonClick)
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

          <div className="slider__dots" style={dotsStyle}>
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
