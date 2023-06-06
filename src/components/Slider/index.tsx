import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type SlideAnimation = {
  isSlide?: boolean | string;
  isFade?: boolean;
};

type SliderProps = {
  children?: React.ReactElement[];
  isAutoSlide?: boolean;
  nSlidePerView?: number;
  animationInterval?: number;
  lastSlideAnimation?: SlideAnimation;
  changeSlideAnimation?: SlideAnimation;
  isPauseOnHover?: boolean;
  isShowDots?:
    | {
        position?: "top-center" | "bottom-center";
        isOut?: boolean;
      }
    | false;
};

export const Slider = ({
  children = [
    <div>slide 1</div>,
    <div>slide 2</div>,
    <div>slide 3</div>,
    <div>slide 4</div>,
    <div>slide 5</div>,
  ],
  isAutoSlide = true,
  nSlidePerView = 1,
  animationInterval = 5000,
  lastSlideAnimation = {
    isSlide: false,
    isFade: true,
  },
  changeSlideAnimation = {
    isSlide: "1s ease",
    isFade: false,
  },
  isPauseOnHover = false,
  isShowDots = {
    position: "bottom-center",
    isOut: true,
  },
}: SliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderAnimationInterval = useRef<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const getNSlide = () => children.length - (nSlidePerView - 1);
  const shouldAnimate = useMemo(() => nSlidePerView < children.length, []);

  const handleFadeAnimation = () => {
    const container = sliderRef.current;

    container?.classList.add("slider--fade-animation");
    setTimeout(() => {
      container?.classList.remove("slider--fade-animation");
    }, 1000);
  };

  const handleSlideAnimation = (
    slideAnimation: SlideAnimation,
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
          handleSlideAnimation(lastSlideAnimation, ".5s ease", slide);
        } else {
          handleSlideAnimation(changeSlideAnimation, "1s ease", slide);
        }
      });
      setCurrentSlide(hasReachLastSlide ? 0 : nextSlide);
    },
    [currentSlide]
  );

  const handleDotClick = useCallback(
    (dot: number) => {
      handlePauseAnimation();
      setTimeout(() => {
        handleSlideChange(dot);
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

  // useEffect(() => {
  //   const dots = sliderDotsRef.current;

  //   if (typeof dots === "boolean" && dots) isShowDots = "bottom: 0; left: 50%;";
  //   if (!dots) isShowDots = "display: none";

  //   // @ts-ignore
  //   dots?.style = isShowDots;
  // }, []);

  const dotsStyles = useMemo(() => {
    if (isShowDots === false)
      return {
        display: "none",
      };

    if (isShowDots.position === "top-center") {
      return {
        top: 0,
        left: "50%",
        transform: `translate(-50%, ${isShowDots.isOut ? "-100%" : "0"})`,
      };
    }

    if (isShowDots.position === "bottom-center") {
      return {
        bottom: 0,
        left: "50%",
        transform: `translate(-50%, ${isShowDots.isOut ? "100%" : "0"})`,
      };
    }
  }, []);

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
        <div className="slider__dots" style={dotsStyles}>
          {Array.from({ length: getNSlide() }, (_, i) => (
            <button
              key={`dot--${i}`}
              className={`slider__dot ${
                i === currentSlide ? "slider__dot--active" : ""
              }`}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
