# react-rc-carousel

[![NPM](https://img.shields.io/npm/v/react-rc-carousel.svg)](https://www.npmjs.com/package/react-rc-carousel)

#####

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.3-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)

A React carousel component with very easy-to-use API for creating dynamic and flexible slideshows.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Examples](#examples)
- [License](#license)

## Features

The **"react-rc-carousel"** package provides the following features:

- **_Dynamic Slide Creation_**: The **_Slider_** component allows for dynamic and flexible creation of slides within the carousel. You have full control over the content displayed in each slide.

- **_Customizable Slide Display_**: You can specify the number of slides to display per view using the `nSlidePerView` prop. This gives you the flexibility to adjust the carousel layout based on your needs.

- **_Slide Animation_**: The package supports slide animation effects. You can enable sliding animation between slides and fading animation for the last slide using the `lastSlideAnimation` prop and `changeSlideAnimation` prop, respectively.

- **_Slide Interval_**: The component supports slide animation between slides. You can control the animation interval using the `animationInterval` prop.

- **_Automatic Slideshow_**: The `isAutoSlide` prop allows you to automatically start the sliding animation without any control click. This is useful for creating automated slideshows or hero banners.

- **_Pause on Hover_**: The `isPauseOnHover` prop enables the option to pause the animation when hovering over the carousel. This is particularly useful for interactive slideshows or when you want to provide more control to the users.

- **_Control Dots_**: The package provides control dots that indicate the current active slide. You can customize the visibility and position of these dots using the `isShowDots` prop. Choose to hide the dots or visually place them outside the carousel if desired.

- **_Control Buttons_**: The `isShowButtons` prop controls the visibility, position, and appearance of control buttons for navigating between slides. You can customize the position and render custom buttons if needed.

- **_Responsive Design_**: The component supports responsive design through the `breakpoints` prop. You can define different numbers of slides per view based on the screen width, ensuring optimal display on various devices.

## Installation

You can install the package using npm:

```shell
npm install react-rc-carousel
```

## Usage

```javascript
import { Slider } from "react-rc-carousel";
import "react-rc-carousel/styles.css";

const MyComponent = () => {
  return <Slider />;
};

export default MyComponent;
```

## Props

Props

The **_Slider_** component accepts the following props:

- **_children_** -- (`React.Element[]`): Is used to define the slides within the **_Slider_** component. This approach allows for dynamic and flexible creation of slides within the **_Slider_** component, giving you control over the displayed content.

- **_nSlidePerView_** -- (`Number`): Indicates how many slides to display per view.

- **_animationInterval_** -- (`Number`): Indicates the interval in milliseconds for the animation between slides.

- **_isPauseOnHover_** -- (`Boolean`): Pauses the animation when hovering on the slider component. Useful for Hero slideshows.

- **_isAutoSlide_** -- (`Boolean`): Automatically starts the sliding animation without any controls click.

- **_isShowDots_** -- (`{ position?: "bottom-center" | "top-center", isOut?: boolean | string }`): Determines the visibility and position of the control dots. Use `{ position: "bottom-center", isOut: true }` to visually place the control dots outside the **_Slider_** component.

- **_isShowButtons_** -- (`{ position?: "bottom-center" | "top-center", isOut?: boolean | string, renderNext?: Function, renderPrev?: Function }`): Controls the visibility, position, and appearance of control buttons for navigating between slides. Set `'false'` to hide the buttons or specify the position. You can also provide custom button rendering functions using `renderNext` and `renderPrev`.

- **_lastSlideAnimation_** -- (`{ isFade?: boolean, isSlide?: boolean | string }`): A property that controls the animation for the LAST slide. Set `isFade` to `true` to enable a fade animation effect. Set `isSlide` to `true` or provide a custom CSS transition duration to enable a sliding animation effect.

- **_changeSlideAnimation_** -- (`{ isFade?: boolean, isSlide?: boolean | string }`): A property that determines the animation for CHANGING SLIDES. Set `isFade` to `true` to enable a fade animation effect. Set `isSlide` to `true` or provide a custom CSS transition duration to enable a sliding animation effect.

- **_theme_** -- (`{ color: string, backgroundColor: string }`): The theme object typically includes properties such as `color` and `backgroundColor`, allowing you to specify the desired background color and text color, respectively.

- **_breakpoints_** -- (`{ width?: number, nSlidePerView: number }`[]): Specifies the breakpoints for responsive design. You can define different numbers of slides per view based on the screen width.

## Examples

#### Primary Usage

```javascript
import { Slider } from "react-rc-carousel";

const MyComponent = () => {
  return <Slider>{/_ Add your slides here _/}</Slider>;
};

export default MyComponent;
```

#### Advance Usage

```javascript
import { Slider } from "react-rc-carousel";
import "react-rc-carousel/styles.css";

const Example = () => {
  return (
    <Slider
      children={[
        <div>Slide 1</div>,
        <div>Slide 2</div>,
        <div>Slide 3</div>,
        <div>Slide 4</div>,
        <div>Slide 5</div>,
      ]}
      nSlidePerView={3}
      animationInterval={3000}
      isPauseOnHover={true}
      isAutoSlide={true}
      isShowDots={{
        position: "bottom-center",
        isOut: true,
      }}
      isShowButtons={{
        position: "bottom-left",
        isOut: false,
        renderNext: (onClick) => <button onClick={onClick}>Next</button>,
        renderPrev: (onClick) => <button onClick={onClick}>Previous</button>,
      }}
      theme={{
        color: "#FFFFFF",
        backgroundColor: "#333333",
      }}
      breakpoints={[
        { width: 500, nSlidePerView: 1 },
        { width: 900, nSlidePerView: 2 },
        { width: 1200, nSlidePerView: 3 },
      ]}
      lastSlideAnimation={{
        isFade: true,
        isSlide: false,
      }}
      changeSlideAnimation={{
        isFade: false,
        isSlide: "1s ease",
      }}
    />
  );
};

export default Example;
```

#### Structural Usage

```javascript
import { SliderThemeProvider, Slider } from "react-rc-carousel";
import "react-rc-carousel/styles.css";

const Example = () => {
  return (
    <>
      <SliderThemeProvider
        nSlidePerView={2}
        animationInterval={3000}
        isPauseOnHover={true}
        isAutoSlide={true}
        isShowDots={{
          position: "bottom-center",
          isOut: true,
        }}
        {/* Add as many props as you like */}
      >
        <Slider>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
        </Slider>
      </SliderThemeProvider>

      <SliderThemeProvider
        isShowDots={{
          position: "bottom-center",
          isOut: true,
        }}
        {/* Add as many props as you like */}
      >
        <Slider>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
        </Slider>

        <Slider>
          <div>Slide 1</div>
          <div>Slide 2</div>
        </Slider>

        <Slider>
          <div>Slide 1</div>
          <div>Slide 2</div>
        </Slider>
      </SliderThemeProvider>
    </>
  );
};

export default Example;
```

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
