import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from '../packages/ui/src/components/Switch';
import ThemeProvider from '../packages/ui/src/context/ThemeProvider';

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
    <ThemeProvider>
      <Switch onClick={() => setChecked(!checked)} checked={checked} {...args} />
    </ThemeProvider>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
