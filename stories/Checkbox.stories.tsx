import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from '../packages/scheme-ui/src/components/Checkbox';
import Box from '../packages/scheme-ui/src/components/Box';
import { SchemeProvider } from '../packages/scheme-ui/src/context/SchemeContext';
import theme from '../styles/theme';
import { schemes } from '../styles/colors';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
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
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(true);
  return (
    <SchemeProvider colorSchemes={schemes} theme={theme}>
      <Box bg="bg-1" p={5}>
        <Checkbox checked={checked} onChange={() => setChecked(!checked)} {...args} />
      </Box>
    </SchemeProvider>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: 'blue',
  label: "I'm a checkbox",
};
