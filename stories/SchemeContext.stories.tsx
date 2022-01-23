import React, { useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../packages/ui/src/components/Input';
import { theme } from '../styles/theme';
import { SchemeProvider, useSchemeContext } from '../packages/ui/src/context/SchemeContext';
import { schemes } from '../styles/colors';
import Box from '../packages/ui/src/components/Box';
import { H2 } from '../packages/ui/src';
import Switch from '../packages/ui/src/components/Switch';
import { P } from '../packages/ui/src/components/Text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/SchemeProvider',
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
        <P mb={2}>{scheme.scheme} scheme active</P>
        <Switch
          onClick={() => scheme.setScheme(scheme.scheme === 'light' ? 'dark' : 'light')}
          checked={scheme.scheme === 'dark'}
        />
      </Box>
      <Box p={2}>
        <H2>Hello</H2>
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
