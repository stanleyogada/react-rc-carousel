import { useEffect, useRef } from "react";

type TProps = {
  onLeft: () => void;
  onRight: () => void;
  currentSlide: number;
};

const useSwipe = ({ onLeft, onRight, currentSlide }: TProps) => {
  const sliderMainRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = sliderMainRef.current;

    if (container) {
      let xDown = 0;

      function getTouches(evt: TouchEvent) {
        return evt.touches;
      }

      function handleTouchStart(evt: TouchEvent) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
      }

      function handleTouchMove(evt: TouchEvent) {
        if (!xDown) return;

        let xUp = evt.touches[0].clientX;
        let xDiff = xDown - xUp;

        if (xDiff > 0) onLeft();
        else onRight();

        xDown = 0;
      }

      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchmove", handleTouchMove);

      return () => {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
      };
    }
  }, [currentSlide]);

  return { sliderMainRef };
};

export default useSwipe;
