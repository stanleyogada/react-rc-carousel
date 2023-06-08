import { useEffect, useRef, useState } from "react";

import type { ISliderProps } from "src/types";

const OBSERVER_OPTIONS = {
  root: null, // Use the viewport as the root element
  rootMargin: "0px", // No additional margin
  threshold: 0.2, // Trigger the callback when the slider is out of view
};

const useAutoSlideInView = (__isAutoSlide: ISliderProps["isAutoSlide"]) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isAutoSlide, setIsAutoSlide] = useState(__isAutoSlide);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAutoSlide(true);
        } else {
          setIsAutoSlide(false);
        }
      });
    }, OBSERVER_OPTIONS);

    // Start observing the slider element
    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    // Cleanup the observer
    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  return { isAutoSlide, sliderRef };
};

export default useAutoSlideInView;
