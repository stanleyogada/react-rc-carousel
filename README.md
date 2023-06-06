# Create React Library Template

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A template for creating reusable React libraries using Vite and Storybook.
This "create react library" template is built with `vite` and has a `storybook` for component documentation.

## Features

- Built with Vite, a fast and modern frontend build tool.
- Includes Storybook for component documentation and showcasing.
- Integrated Tailwind CSS for easy styling and customization.

## Basic Usage

The output will be:

```javascript
import { Slider } from "react-rc-carousel";

const MyComponent = () => {
  return <Slider>{/_ Add your slides here _/}</Slider>;
};

export default MyComponent;
```

## Props

Props

The `Slider` component accepts the following props:

- `children` (`React.Element[]`): Is used to define the slides within the `Slider` component. This approach allows for dynamic and flexible creation of slides within the `Slider` component, giving you control over the displayed content.
- `nSlidePerView` (`Number`): Indicates how many slides to display per view.
- `animationInterval` (`Number`): Indicates the interval in milliseconds for the animation between slides.
- `isPauseOnHover` (`Boolean`): Pauses the animation when hovering on the slider component. Useful for Hero slideshows.
- `isAutoSlide` (`Boolean`): Automatically starts the sliding animation without any controls click.
- `isShowDots` (`{ position?: "bottom-center" | "top-center", isOut?: boolean | string }`): Determines the visibility and position of the control dots. Use `{ position: "bottom-center", isOut: true }` to visually place the control dots outside the `Slider` component.
- `lastSlideAnimation` (`{ isFade?: boolean, isSlide?: boolean | string }`): A property that controls the animation for the LAST slide. Set `isFade` to `true` to enable a fade animation effect. Set `isSlide` to `true` or provide a custom CSS transition duration to enable a sliding animation effect.
- `changeSlideAnimation` (`{ isFade?: boolean, isSlide?: boolean | string }`): A property that determines the animation for CHANGING SLIDES. Set `isFade` to `true` to enable a fade animation effect. Set `isSlide` to `true` or provide a custom CSS transition duration to enable a sliding animation effect.

## Getting Started

To get started with this template, follow these steps:

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Use the available scripts mentioned above to start the development server, build the library, or run Storybook.

Feel free to customize the template according to your library's requirements.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

```

```
