import { Meta, StoryFn } from "@storybook/react";

import { Button } from "ui";

export default {
  title: "Example/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <Button {...args}>Hello World!</Button>
);

export const Default = Template.bind({});
