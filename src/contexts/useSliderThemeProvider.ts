import { useContext } from "react";
import { SliderThemeContext } from "./SliderThemeProvider";

const useSliderThemeProvider = () => {
  const contextProps = useContext(SliderThemeContext);

  return contextProps;
};

export default useSliderThemeProvider;
