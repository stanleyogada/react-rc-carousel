import { useCallback, useEffect, useRef, useState } from "react";

type SliderProps = {
  children: React.ReactElement[];
};

export const Slider = ({ children }: SliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderAnimationInterval = useRef<NodeJS.Timeout | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const getNSlide = () => children.length - 1;

  const handleSlideChange = useCallback(() => {
    const container = sliderRef.current;

    if (container) {
      // const slideWidth = container.clientWidth;
      const nextSlide = (currentSlide + 1) % getNSlide();
      console.log({ nextSlide, currentSlide });

      const hasReachLastSlide = !(nextSlide && nextSlide < getNSlide());
      const CSSTranslateX = hasReachLastSlide ? 0 : `-${nextSlide}00%`;

      container.querySelectorAll(".slider__slide").forEach((slide) => {
        //@ts-ignore
        slide.style.transform = `translateX(${CSSTranslateX})`;

        if (hasReachLastSlide) {
          //@ts-ignore
          slide.style.transition = ".35s ease";
        } else {
          //@ts-ignore
          slide.style.transition = "1s ease";
        }
      });
      setCurrentSlide(nextSlide);
    }
  }, [currentSlide]);

  const handleDotClick = useCallback(
    (dot: number) => {
      handlePauseAnimation();
      setTimeout(() => {
        setCurrentSlide(dot);
      }, 10);
    },
    [handleSlideChange]
  );

  const handlePauseAnimation = () => {
    if (sliderAnimationInterval.current)
      clearInterval(sliderAnimationInterval.current);
  };

  useEffect(() => {
    // Call handleSlideChange after 3 seconds (adjust as needed)
    sliderAnimationInterval.current = setInterval(handleSlideChange, 3000);

    // Clean up the interval on component unmount
    return handlePauseAnimation;
  }, [currentSlide, handleSlideChange]);

  // useEffect()

  return (
    <div className={`slider`}>
      <div className="slider__slide-container" ref={sliderRef}>
        {children.map((slide, index) => (
          <div key={`slide--${index}`} className="slider__slide">
            {slide}
          </div>
        ))}
      </div>

      <div className="slider__dots">
        {Array.from({ length: getNSlide() }, (_, i) => (
          <div
            key={`dot--${i}`}
            className={`slider__dot ${
              i === currentSlide ? "slider__dot--active" : ""
            }`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </div>
  );
};
