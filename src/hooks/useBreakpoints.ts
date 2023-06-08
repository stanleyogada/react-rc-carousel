import { useEffect, useState } from "react";

import { BreakPoint, SliderProps } from "src/types";

const useBreakpoints = (
  __nSlidePerView: SliderProps["nSlidePerView"],
  breakpoints: SliderProps["breakpoints"]
) => {
  const [nSlidePerView, setNSlidePerView] = useState(__nSlidePerView);

  useEffect(() => {
    if (breakpoints) {
      setNSlidePerView(breakpoints[breakpoints.length - 1].nSlidePerView);
    }
  }, []);

  useEffect(() => {
    if (breakpoints) {
      const handleResize = () => {
        let current: BreakPoint | undefined = undefined;

        for (let i = 0; i < breakpoints.length; i++) {
          if (innerWidth <= breakpoints[i].width) {
            current = breakpoints[i];
            break;
          }
        }
        if (current) setNSlidePerView(current?.nSlidePerView);
      };
      handleResize();
      addEventListener("resize", handleResize);
      return () => {
        removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return nSlidePerView;
};

export default useBreakpoints;
