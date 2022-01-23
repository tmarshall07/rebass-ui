import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../packages/ui/src/components/Input';
import ThemeProvider from '../packages/ui/src/context/ThemeProvider';
import Box from '../packages/ui/src/components/Box';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Input',
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
  <ThemeProvider>
    <Input placeholder="Start typing..." {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
