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
          breakpoints: [
            { width: 391, nSlidePerView: 1 },
            { width: 592, nSlidePerView: 2 },
            { width: 830, nSlidePerView: 3 },
            { width: 920, nSlidePerView: 4 },
          ],
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
          breakpoints: [
            { width: 391, nSlidePerView: 1 },
            { width: 592, nSlidePerView: 2 },
            { width: 830, nSlidePerView: 3 },
            { width: 920, nSlidePerView: 4 },
          ],
        }}
      >
        <Products heading="Featured Products" />
        <Products heading="Deals For June" />
      </SliderThemeProvider>

      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
