import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type SliderProps = {
  children: React.ReactElement[];
  nSlidePerView?: number;
};

export const Slider = ({ children, nSlidePerView = 1 }: SliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderAnimationInterval = useRef<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const getNSlide = () => children.length - (nSlidePerView - 1);
  const shouldAnimate = useMemo(() => nSlidePerView < children.length, []);

  const handleSlideChange = useCallback(
    (_currentSlide: number) => {
      const container = sliderRef.current;

      if (container) {
        const nextSlide = _currentSlide ?? currentSlide + 1;

        const hasReachLastSlide = !(nextSlide && nextSlide < getNSlide());
        const CSSTranslateX = hasReachLastSlide ? 0 : `-${nextSlide}00%`;

        container.querySelectorAll(".slider__slide").forEach((slide) => {
          //@ts-ignore
          slide.style.transform = `translateX(${CSSTranslateX})`;

          if (hasReachLastSlide) {
            //@ts-ignore
            slide.style.transition = "none";
            container.classList.add("slider--fade-animation");
          } else {
            //@ts-ignore
            slide.style.transition = "1s ease";
            container.classList.remove("slider--fade-animation");
          }
        });
        setCurrentSlide(hasReachLastSlide ? 0 : nextSlide);
      }
    },
    [currentSlide]
  );

  const handleDotClick = useCallback(
    (dot: number) => {
      handlePauseAnimation();
      setTimeout(() => {
        handleSlideChange(dot);
      }, 10);
    },
    [handleSlideChange]
  );

  const handlePauseAnimation = () => {
    console.log("pause animation");

    if (sliderAnimationInterval.current) {
      clearInterval(sliderAnimationInterval.current);
    }
  };

  useEffect(() => {
    const container = sliderRef.current;

    container?.querySelectorAll(".slider__slide").forEach((slide) => {
      const CSSWidth = 100 / nSlidePerView;
      console.log(CSSWidth);

      //@ts-ignore
      slide.style.width = `${CSSWidth}%`;
    });
  }, []);

  useEffect(() => {
    if (shouldAnimate) {
      sliderAnimationInterval.current = setInterval(handleSlideChange, 3000);
    }

    return handlePauseAnimation;
  }, [currentSlide, handleSlideChange]);

  return (
    <div className={`slider`}>
      <div className="slider__slide-container" ref={sliderRef}>
        {children.map((slide, index) => (
          <div key={`slide--${index}`} className="slider__slide">
            {slide}
          </div>
        ))}
      </div>

      {shouldAnimate && (
        <div className="slider__dots">
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
