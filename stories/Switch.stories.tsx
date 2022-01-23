import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from '../packages/ui/src/components/Switch';
import { SchemeProvider } from '../packages/ui/src/context/SchemeContext';
import theme from '../styles/theme';
import { schemes } from '../styles/colors';
import Box from '../packages/ui/src/components/Box';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Switch',
  component: Switch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Switch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Switch> = (args) => {
  const [checked, setChecked] = useState(true);
  return (
    <SchemeProvider theme={theme} colorSchemes={schemes}>
      <Box p={4} bg="bg-0">
        <Switch onClick={() => setChecked(!checked)} checked={checked} {...args} />
      </Box>
    </SchemeProvider>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
