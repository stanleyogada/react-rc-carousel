import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/
const meta = {
  title: "Example/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "_" },
      description: `Is used to define the slides within the Slider component. This approach allows for dynamic and flexible creation of slides within the Slider component, giving you control over the displayed content.`,
      table: {
        type: { summary: "React.Element[]" },
        defaultValue: { summary: `undefined` },
      },
    },
    nSlidePerView: {
      control: { type: "_" },
      description: `Indicates how many slides to display per view`,
      table: {
        type: { summary: "Number" },
        defaultValue: { summary: `2` },
      },
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: [],
    // nSlidePerView: 2,
  },
  render: (args) => (
    <Slider {...args}>
      <div>slide 1</div>
      <div>slide 2</div>
      <div>slide 3</div>
      <div>slide 4</div>
      <div>slide 5</div>
    </Slider>
  ),
};
