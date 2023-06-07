import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from ".";
import { SliderThemeProvider } from "src/contexts";

// More on how to set up stories at: https://storybook.js.org/docs/react/
const meta = {
  title: "Example/Slider",
  component: Slider,
  decorators: [
    (Story) => (
      <SliderThemeProvider
        props={{
          nSlidePerView: 3,
        }}
      >
        <>
          <div style={{ paddingBottom: "3rem" }}>
            <Story />
          </div>

          <div style={{ paddingBottom: "3rem" }}>
            <Story />
          </div>
        </>
      </SliderThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "-" },
      description: `Is used to define the slides within the Slider component. This approach allows for dynamic and flexible creation of slides within the Slider component, giving you control over the displayed content.`,
      table: {
        type: { summary: "React.Element[]" },
        defaultValue: {
          summary: `5 DIV elements`,
        },
      },
    },
    nSlidePerView: {
      control: { type: "-" },
      description: `Indicates how many slides to display per view`,
      table: {
        type: { summary: "Number" },
        defaultValue: { summary: `1` },
      },
    },
    animationInterval: {
      control: { type: "-" },
      description: `Indicates how many milliseconds interval for the animation slides`,
      table: {
        type: { summary: "Number" },
        defaultValue: { summary: `5000` },
      },
    },
    isPauseOnHover: {
      // control: { type: "-" },
      description: `Pauses the animation when hovering on the slider component. Useful for Hero slideshows.`,
      table: {
        type: { summary: "Boolean" },
        defaultValue: { summary: `false` },
      },
    },
    isAutoSlide: {
      // control: { type: "-" },
      description: `Automatically starts the sliding animation without any controls click`,
      table: {
        type: { summary: "Boolean" },
        defaultValue: { summary: `true` },
      },
    },
    isShowDots: {
      control: { type: "_" },
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
    isButtons: {
      control: { type: "_" },
      description: `'false' means the control will be hidden. 'position' in the object can either be 'middle-center', 'bottom-left' or 'bottom-right'.'renderNext' and 'renderPrev' are function (which take an 'onClick' function) that can be used to render custom buttons`,
      table: {
        type: {
          // summary: `{
          //             position?: "bottom-center" | ****** "top-center",
          //             isOut?: boolean | string,
          //           }`,
        },
      },
    },
    lastSlideAnimation: {
      control: { type: "object" },
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
      control: { type: "object" },
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
    // nSlidePerView: 5,
    animationInterval: 2000,
    isAutoSlide: true,
    isPauseOnHover: true,
    isShowDots: {
      position: "bottom-center",
      isOut: true,
    },
    isButtons: {
      position: "bottom-left",
      isRounded: true,
      spaced: true,
      renderNext: (onClick) => {
        return <button onClick={onClick}>next</button>;
      },
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
