import Hero from "./Hero";
import Products from "./Products";
import "./App.scss";
import { SliderThemeProvider } from "./contexts";

function App() {
  return (
    <>
      <Hero />

      <br />
      <br />

      <SliderThemeProvider
        props={{
          nSlidePerView: 1,
          isShowDots: false,
        }}
      >
        <Products heading="Top Products" />
        <Products heading="New Products" />
        <Products heading="Hot Popular" />
      </SliderThemeProvider>

      <SliderThemeProvider
        props={{
          nSlidePerView: 2,
          isAutoSlide: false,
        }}
      >
        <Products heading="Featured Products" />
        <Products heading="Deals For June" />
      </SliderThemeProvider>
    </>
  );
}

export default App;
