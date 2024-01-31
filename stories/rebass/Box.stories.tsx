import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from '../../packages/scheme-ui/src/components/Box';
import { SchemeProvider } from '../../packages/scheme-ui/src/context/SchemeContext';
import theme from '../../styles/theme';
import { schemes } from '../../styles/colors';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Rebass/Box',
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
  <SchemeProvider theme={theme} colorSchemes={schemes}>
    <Box bg="bg-0" p={4}>
      <Box {...args}>I&apos;m a Box</Box>
    </Box>
  </SchemeProvider>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  p: 3,
  bg: 'bg-2',
};
