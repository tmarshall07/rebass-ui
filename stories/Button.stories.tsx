import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../packages/ui/components/Button';
import ThemeProvider from '../packages/ui/context/ThemeProvider';
import IconButton from '../packages/ui/components/IconButton';
import FaIcon from '../packages/ui/components/Icon';
import { faCheck } from '@fortawesome/pro-duotone-svg-icons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    bg: { control: 'color' },
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeProvider>
    <Button {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Basic Button',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline Button',
  variant: 'outline',
};

export const Transparent = Template.bind({});
Transparent.args = {
  variant: 'Transparent',
  children: 'Transparent Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 's',
  children: 'Small Button',
};

const IconButtonTemplate: ComponentStory<typeof Button> = (args) => (
  <ThemeProvider>
    <IconButton icon={<FaIcon icon={faCheck} />} {...args} />
  </ThemeProvider>
);

export const Icon = IconButtonTemplate.bind({});
