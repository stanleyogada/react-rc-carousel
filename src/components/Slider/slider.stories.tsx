import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from ".";
import { SliderThemeProvider } from "src/contexts";
import "../../storybook.css";

// More on how to set up stories at: https://storybook.js.org/docs/react/
const meta = {
  title: "Example/Slider",
  component: Slider,
  decorators: [
    (Story) => (
      <SliderThemeProvider
        props={{
          nSlidePerView: 4,
        }}
      >
        <>
          <div style={{ paddingBottom: "6rem" }}>
            <Story />
          </div>

          <div style={{ paddingBottom: "6rem" }}>
            <Story />
          </div>

          <div style={{ paddingBottom: "6rem" }}>
            <Story />
          </div>
        </>
      </SliderThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    children: {
      controls: { exclude: ["*"] },
      description: `Is used to define the slides within the Slider component. This approach allows for dynamic and flexible creation of slides within the Slider component, giving you control over the displayed content.`,
      table: {
        type: { summary: "React.Element[]" },
        defaultValue: {
          summary: `5 DIV elements`,
        },
      },
    },
    nSlidePerView: {
      controls: { exclude: ["*"] },
      description: `Indicates how many slides to display per view`,
      table: {
        type: { summary: "Number" },
        defaultValue: { summary: `1` },
      },
    },
    animationInterval: {
      controls: { exclude: ["*"] },
      description: `Indicates how many milliseconds interval for the animation slides`,
      table: {
        type: { summary: "Number" },
        defaultValue: { summary: `5000` },
      },
    },
    isPauseOnHover: {
      controls: { exclude: ["*"] },
      description: `Pauses the animation when hovering on the slider component. Useful for Hero slideshows.`,
      table: {
        type: { summary: "Boolean" },
        defaultValue: { summary: `true` },
      },
    },
    isAutoSlide: {
      controls: { exclude: ["*"] },
      description: `Automatically starts the sliding animation without any controls click`,
      table: {
        type: { summary: "Boolean" },
        defaultValue: { summary: `true` },
      },
    },
    isShowDots: {
      controls: { exclude: ["*"] },
      description: `'false' means the control will be hidden. 'isOut' in the object means the control with be place visually outside Slider component`,
      table: {
        type: {
          summary: `{  
                      position?: "bottom-center" | ****** "top-center", 
                      isOut?: boolean | string,
                    }`,
        },
        defaultValue: {
          summary: ` {  *********
                      position: "bottom-center"   
                      isOut: true,
                    }`,
        },
      },
    },
    isShowButtons: {
      controls: { exclude: ["*"] },
      description: `'false' means the control will be hidden. 'position' in the object can either be 'middle-center', 'bottom-left' or 'bottom-right'.'renderNext' and 'renderPrev' are function (which take an 'onClick' function) that can be used to render custom buttons`,
      table: {
        type: {
          summary: `{  
                      position?: "bottom-center" | ****** "top-center", 
                      isOut?: boolean | string,
                    }`,
        },
        defaultValue: {
          summary: ` {  *********
                      position: "bottom-center"   
                      isOut: true,
                    }`,
        },
      },
    },
    theme: {
      controls: { exclude: ["*"] },
      description: `The theme object typically includes properties such as 'backgroundColor' and 'color', allowing you to specify the desired background color and text color, respectively.`,
      table: {
        type: {
          summary: `{  
                      color: string, 
                      backgroundColor: string,
                    }`,
        },
        defaultValue: {
          summary: `{  *********
                      color: "#000",
                      backgroundColor: "#bbb",
                    }`,
        },
      },
    },
    breakpoints: {
      controls: { exclude: ["*"] },
      description: `NOTE: \`width\` must be (ACS order) from smallest to largest.
      They are typically used in responsive design to ensure that content is displayed appropriately across different devices and screen sizes`,
      table: {
        type: {
          summary: `{  
                      width?: number, ************ 
                      nSlidePerView: number,
                    }[]`,
        },
        defaultValue: {
          summary: `undefined`,
        },
      },
    },
    lastSlideAnimation: {
      controls: { exclude: ["*"] },
      description: `A property that controls the animation for the LAST slide. It accepts an optional 'SlideAnimation' type, which can have the 'isSlide' and 'isFade' properties to enable specific animation effects.`,
      table: {
        type: {
          summary: `{ 
                      isFade?: boolean, ******************
                      isSlide?: boolean | string,
                    }`,
        },
        defaultValue: {
          summary: `{ ********* 
                        isSlide: false,
                        isFade: true,
                      }`,
        },
      },
    },
    changeSlideAnimation: {
      controls: { exclude: ["*"] },
      description: `A property that determines the animation for CHANGING SLIDES. It also accepts an optional 'SlideAnimation' type, allowing you to specify the desired animation effect using the 'isSlide' and 'isFade' properties.`,
      table: {
        type: {
          summary: `{  
                      isFade?: boolean, ******************
                      isSlide?: boolean | string,
                    }`,
        },
        defaultValue: {
          summary: `{ ********* 
                      isFade: false,
                      isSlide: **** "1s ease",
                    }`,
        },
      },
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: [
      <div>slide 1</div>,
      <div>slide 2</div>,
      <div>slide 3</div>,
      <div>slide 4</div>,
      <div>slide 5</div>,
      <div>slide 8</div>,
      <div>slide sds</div>,
    ],
    nSlidePerView: 5,
    animationInterval: 2000,
    isAutoSlide: true,
    isPauseOnHover: true,
    isShowDots: {
      position: "bottom-center",
      isOut: true,
    },
    isShowButtons: {
      position: "bottom-left",
      isRounded: false,
      spaced: false,
    },
    breakpoints: [
      { width: 500, nSlidePerView: 2 },
      { width: 700, nSlidePerView: 3 },
      { width: 900, nSlidePerView: 4 },
      { width: 1200, nSlidePerView: 5 },
    ],
    theme: {
      backgroundColor: "#bbb",
      color: "#a23232",
    },
    changeSlideAnimation: {
      isSlide: true,
      isFade: false,
    },
    lastSlideAnimation: {
      isSlide: false,
      isFade: true,
    },
  },
};
