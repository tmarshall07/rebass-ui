import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Autocomplete from '../packages/ui/src/components/Autocomplete';
import MenuItem from '../packages/ui/src/components/AutocompleteMenuItem';
import { SchemeProvider } from '../packages/ui/src/context/SchemeContext';
import theme from '../styles/theme';
import { schemes } from '../styles/colors';
import Box from '../packages/ui/src/components/Box';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Autocomplete>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Autocomplete> = (args) => (
  <SchemeProvider theme={theme} colorSchemes={schemes}>
    <Box p={4} bg="bg-0">
      <Autocomplete
        placeholder="Start typing..."
        items={[{ id: 'Item 1' }, { id: 'Item 2' }, { id: 'Item 3' }]}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <MenuItem text={item.id} />}
        {...args}
      />
    </Box>
  </SchemeProvider>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
