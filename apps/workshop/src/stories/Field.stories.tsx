import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Field } from "ui";

export default {
  title: "Example/Field",
  component: Field.Input,
  subcomponents: { Input: Field.Input, Label: Field.Label }
} as Meta;

const Template: StoryFn = (args) => (
  <Field>
    <Field.Label {...args}>Label</Field.Label>
    <Field.Input placeholder={args.placeholder} {...args} />
  </Field>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Placeholder"
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Placeholder",
  disabled: true
};