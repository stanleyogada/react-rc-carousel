import { useEffect, useMemo, useRef } from "react";

import { SLIDER_INITIAL_PROPS } from "../constants";
import { ISliderProps } from "../types";

const useControls = ({
  currentSlide,
  isShowDots,
  isShowButtons,
  theme,
  handleControlClick,
}: {
  currentSlide: number;
  isShowDots: ISliderProps["isShowDots"];
  isShowButtons: ISliderProps["isShowButtons"];
  theme: ISliderProps["theme"];
  handleControlClick: (currentSlide: number) => void;
}) => {
  const dotsRef = useRef<HTMLDivElement | null>(null);

  const themePropValue = useMemo(
    () => ({
      ...SLIDER_INITIAL_PROPS.theme,
      ...theme,
    }),
    []
  );

  useEffect(() => {
    const container = dotsRef.current;

    if (container) {
      container.querySelectorAll(".slider__dot").forEach((dot) => {
        (dot as HTMLButtonElement).style.backgroundColor =
          themePropValue.backgroundColor as string;
      });

      const dotActive: HTMLButtonElement = container.querySelector(
        ".slider__dot--active"
      ) as HTMLButtonElement;
      //@ts-ignore
      dotActive.style.backgroundColor = themePropValue.color;
    }
  }, [currentSlide, themePropValue?.backgroundColor, themePropValue?.color]);

  const isShowDotsPropValue = useMemo(
    () => ({
      ...SLIDER_INITIAL_PROPS.isShowDots,
      ...isShowDots,
    }),
    []
  );

  const dotsStyle = useMemo(() => {
    if (isShowDots === false)
      return {
        display: "none",
      };

    if (isShowDotsPropValue?.position === "top-center") {
      return {
        top: 0,
        left: "50%",
        transform: `translate(-50%, ${
          isShowDotsPropValue?.isOut ? "-100%" : "0"
        })`,
      };
    }
    if (isShowDotsPropValue?.position === "bottom-center") {
      return {
        bottom: 0,
        left: "50%",
        transform: `translate(-50%, ${
          isShowDotsPropValue?.isOut ? "100%" : "0"
        })`,
      };
    }
  }, []);

  const buttonStyle = useMemo(
    () => ({
      color: themePropValue?.color,
      backgroundColor: themePropValue?.backgroundColor,
    }),
    [themePropValue?.backgroundColor, themePropValue?.color]
  );

  const isShowButtonsPropValue = useMemo(
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

    className += ` slider__buttons--${isShowButtonsPropValue.position}`;

    if (isShowButtonsPropValue.spaced) {
      className += " slider__buttons--space-between";
    }
    if (isShowButtonsPropValue.isRounded) {
      className += " slider__buttons--rounded";
    }

    return className;
  }, []);

  const handleNextButtonClick = () => {
    handleControlClick(currentSlide + 1);
  };
  const handlePrevButtonClick = () => {
    currentSlide > 0 && handleControlClick(currentSlide - 1);
  };

  return {
    dotsStyle,
    dotsRef,
    buttonStyle,
    buttonsClassName,
    isShowButtonsPropValue,
    handleNextButtonClick,
    handlePrevButtonClick,
  };
};

export default useControls;
