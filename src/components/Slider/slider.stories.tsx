import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/
const meta = {
  title: "Example/Slider",
  component: Slider,
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
    lastSlideAnimation: {
      control: { type: "object" },
      description: `A property that controls the animation for the LAST slide. It accepts an optional 'SlideAnimation' type, which can have the 'isSlide' and 'isFade' properties to enable specific animation effects.`,
      table: {
        type: {
          summary: `{  
                      isFade: boolean, ******************
                      isSlide: boolean | string,
                    }`,
        },
        defaultValue: {
          summary: ` {  ********* 
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
                      isFade: boolean, ******************
                      isSlide: boolean | string,
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
    ],
    nSlidePerView: 2,
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
