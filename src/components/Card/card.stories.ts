// import type { Meta, StoryObj } from "@storybook/react";
// import { Card } from "./";

// const meta = {
//   title: "Example/Card",
//   component: Card,
//   tags: ["docsPage"],
//   argTypes: {
//     title: {
//       control: { type: "text" },
//     },
//     description: {
//       control: { type: "text" },
//     },
//   },
// } satisfies Meta<typeof Card>;
// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Primary: Story = {
//   args: {
//     title: "Card Title",
//     description: "This is a card",
//   },
// };

import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    title: {
      type: { name: "string", required: true },
      control: { type: "text" },
      defaultValue: "string",
      description: "This is the title of the card",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "Hello" },
      },
    },
    description: {
      control: { type: "" },
      description: "This is the description of the card",
      table: {
        type: { summary: "object" },
        defaultValue: { summary: `{name: 'Hi there :)'}` },
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: "Hello",
    description: "This is a card",
  },
};

export const Secondary: Story = {
  args: {
    title: "Advance usage",
    description: "..",
  },
};

// export const Large: Story = {
//   args: {
//     size: "large",
//     label: "Button",
//   },
// };

// export const Small: Story = {
//   args: {
//     size: "small",
//     label: "Button",
//   },
// };
