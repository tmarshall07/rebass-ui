import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, IconButton, Box, SchemeProvider } from '../../packages/scheme-ui/lib/esm/index';
import { faCheck } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../../styles/theme';
import { schemes } from '../../styles/colors';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Rebass/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    bg: { control: 'color' },
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <SchemeProvider colorSchemes={schemes} theme={theme}>
    <Box p={4} bg="bg-0">
      <Button {...args} />
    </Box>
  </SchemeProvider>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  bg: 'primary',
  color: 'textInvert',
  children: 'Basic Button',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline Button',
  variant: 'outline',
};

export const Transparent = Template.bind({});
Transparent.args = {
  variant: 'transparent',
  children: 'Transparent Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 's',
  children: 'Small Button',
};

const StandaloneButtonTemplate: ComponentStory<typeof Button> = (args) => (
  <Box p={4}>
    <Button {...args} />
  </Box>
);

export const StandaloneButton = StandaloneButtonTemplate.bind({});
StandaloneButton.args = {
  children: 'Standalone Button',
};

const IconButtonTemplate: ComponentStory<typeof Button> = (args) => (
  <SchemeProvider colorSchemes={schemes} theme={theme}>
    <Box bg="bg-0" p="4">
      <IconButton icon={<FontAwesomeIcon icon={faCheck} />} {...args} />
    </Box>
  </SchemeProvider>
);

export const Icon = IconButtonTemplate.bind({});
