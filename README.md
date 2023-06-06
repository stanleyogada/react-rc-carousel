# react-rc-carousel

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A React carousel component with very easy-to-use API for creating dynamic and flexible slideshows.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Examples](#examples)
- [License](#license)

## Features

The "react-rc-carousel" package provides the following features:

- **_Dynamic Slide Creation_**: The **_Slider_** component allows for dynamic and flexible creation of slides within the carousel. You have full control over the content displayed in each slide.

- **_Customizable Slide Display_**: You can specify the number of slides to display per view using the `nSlidePerView` prop. This gives you the flexibility to adjust the carousel layout based on your needs.

- **_Slide Animation_**: The package supports slide animation effects. You can enable sliding animation between slides and fading animation for the last slide using the `lastSlideAnimation` prop and `changeSlideAnimation` prop, respectively.

- **_Automatic Slideshow_**: The `isAutoSlide` prop allows you to automatically start the sliding animation without any control click. This is useful for creating automated slideshows or hero banners.

- **_Pause on Hover_**: The `isPauseOnHover` prop enables the option to pause the animation when hovering over the carousel. This is particularly useful for interactive slideshows or when you want to provide more control to the users.

- **_Control Dots_**: The package provides control dots that indicate the current active slide. You can customize the visibility and position of these dots using the `isShowDots` prop. Choose to hide the dots or visually place them outside the carousel if desired.

## Installation

You can install the package using npm:

```shell
npm install react-rc-carousel
```

## Usage

```javascript
import { Slider } from "react-rc-carousel";

const MyComponent = () => {
  return <Slider>{/_ Add your slides here _/}</Slider>;
};

export default MyComponent;
```

## Props

Props

The **_Slider_** component accepts the following props:

- <u>**_children_**</u> (`React.Element[]`): Is used to define the slides within the **_Slider_** component. This approach allows for dynamic and flexible creation of slides within the **_Slider_** component, giving you control over the displayed content.
- <u>**_nSlidePerView_**</u> (`Number`): Indicates how many slides to display per view.
- <u>**_animationInterval_**</u> (`Number`): Indicates the interval in milliseconds for the animation between slides.
- <u>**_isPauseOnHover_**</u> (`Boolean`): Pauses the animation when hovering on the slider component. Useful for Hero slideshows.
- <u>**_isAutoSlide_**</u> (`Boolean`): Automatically starts the sliding animation without any controls click.
- <u>**_isShowDots_**</u> (`{ position?: "bottom-center" | "top-center", isOut?: boolean | string }`): Determines the visibility and position of the control dots. Use `{ position: "bottom-center", isOut: true }` to visually place the control dots outside the **_Slider_** component.
- <u>**_lastSlideAnimation_**</u> (`{ isFade?: boolean, isSlide?: boolean | string }`): A property that controls the animation for the LAST slide. Set `isFade` to `true` to enable a fade animation effect. Set `isSlide` to `true` or provide a custom CSS transition duration to enable a sliding animation effect.
- <u>**_changeSlideAnimation_**</u> (`{ isFade?: boolean, isSlide?: boolean | string }`): A property that determines the animation for CHANGING SLIDES. Set `isFade` to `true` to enable a fade animation effect. Set `isSlide` to `true` or provide a custom CSS transition duration to enable a sliding animation effect.

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

const MyComponent = () => {
  return <Slider>{/_ Add your slides here _/}</Slider>;
};

export default MyComponent;
```

#### Complex Usage

```javascript
import { Slider } from "react-rc-carousel";

const MyComponent = () => {
  return <Slider>{/_ Add your slides here _/}</Slider>;
};

export default MyComponent;
```

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

```

```
