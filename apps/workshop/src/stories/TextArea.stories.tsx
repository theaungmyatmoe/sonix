import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Field } from "ui";

export default {
  title: "Example/TextArea",
  component: Field.Input,
  subcomponents: { Input: Field.Input, Label: Field.Label }
} as Meta;

const Template: StoryFn = (args) => (
  <Field>
    <Field.Label {...args}></Field.Label>
    <Field.TextArea  {...args} />
  </Field>
);


export const Default = Template.bind({});
Default.args = {
  isResizable: true
};

export const UnResizable = Template.bind({});
UnResizable.args = {
  isResizable: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: "true"
};