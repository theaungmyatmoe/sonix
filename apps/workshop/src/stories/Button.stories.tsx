import { Meta, StoryFn } from "@storybook/react";

import { Button } from "ui";

export default {
  title: "Example/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <Button variant="primary" {...args}>
    Hello
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
};

const Primary: StoryFn<typeof Button> = Template.bind({});
Primary.args = {
  variant: "primary",
};

const Secondary: StoryFn<typeof Button> = Template.bind({});
Secondary.args = {
  variant: "secondary",
};
