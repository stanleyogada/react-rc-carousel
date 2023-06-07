import { ReactElement, createContext, useMemo } from "react";
import { SLIDER_INITIAL_PROPS } from "src/constants";
import { SliderProps } from "src/types";

type Props = Omit<SliderProps, "children">;

const SliderThemeContext = createContext<Props>(SLIDER_INITIAL_PROPS);

const SliderThemeProvider = ({
  children,
  props,
}: {
  props: Props;
  children: ReactElement | ReactElement[];
}) => {
  const value = useMemo(() => props, [props]);

  return (
    <SliderThemeContext.Provider value={value}>
      {children}
    </SliderThemeContext.Provider>
  );
};

export default SliderThemeProvider;
export { SliderThemeContext };
