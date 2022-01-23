import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from '../packages/ui/src/components/Box';
import ThemeProvider from '../packages/ui/src/context/ThemeProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Box',
  component: Box,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    bg: { control: 'color' },
    color: { control: 'color' },
    p: { control: 'number' },
    m: { control: 'number' },
  },
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = (args) => (
  <ThemeProvider>
    <Box {...args}>I&apos;m a Box</Box>
  </ThemeProvider>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  p: 3,
  bg: 'gray5',
};
