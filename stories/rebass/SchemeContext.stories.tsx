import React, { useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { theme } from '../../styles/theme';
import { SchemeProvider, useSchemeContext } from '../../packages/scheme-ui/src/context/SchemeContext';
import { schemes } from '../../styles/colors';
import Box from '../../packages/scheme-ui/src/components/Box';
import Switch from '../../packages/scheme-ui/src/components/Switch';
import { H3 } from '../../packages/scheme-ui/src';

const map = {
  dark: 'Dark',
  light: 'Light',
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Rebass/SchemeProvider',
  component: SchemeProvider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SchemeProvider>;

const Component = () => {
  const scheme = useSchemeContext();

  useEffect(() => {
    scheme.setAuto(false);
  }, []);

  return (
    <Box p={4} bg="bg-0">
      <Box p={2}>
        <H3 mb={3}>{map[scheme.scheme]} scheme active</H3>
        <Switch
          onClick={() => scheme.setScheme(scheme.scheme === 'light' ? 'dark' : 'light')}
          checked={scheme.scheme === 'dark'}
        />
      </Box>
    </Box>
  );
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SchemeProvider> = (args) => (
  <SchemeProvider theme={theme} colorSchemes={schemes}>
    <Component />
  </SchemeProvider>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
