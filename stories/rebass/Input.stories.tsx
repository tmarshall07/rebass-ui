import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../../packages/scheme-ui/src/components/Input';
import { theme } from '../../styles/theme';
import { SchemeProvider } from '../../packages/scheme-ui/src/context/SchemeContext';
import { lightScheme, schemes } from '../../styles/colors';
import Box from '../../packages/scheme-ui/src/components/Box';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Rebass/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    boxShadow: {
      type: { name: 'string' },
      defaultValue: 'large',
      control: {
        type: 'select',
        options: ['small', 'large'],
      },
    },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => (
  <SchemeProvider theme={theme} colorSchemes={schemes}>
    <Box p={4} bg="bg-0">
      <Input placeholder="Start typing..." {...args} />
    </Box>
  </SchemeProvider>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
