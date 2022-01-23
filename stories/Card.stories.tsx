import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from '../packages/ui/src/components/Card';
import Box from '../packages/ui/src/components/Box';
import { SchemeProvider } from '../packages/ui/src/context/SchemeContext';
import theme from '../styles/theme';
import { schemes } from '../styles/colors';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Card',
  component: Card,
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
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => (
  <SchemeProvider colorSchemes={schemes} theme={theme}>
    <Box bg="bg-1" p={5}>
      <Card p={4} {...args}>
        I&apos;m a Card
      </Card>
    </Box>
  </SchemeProvider>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
