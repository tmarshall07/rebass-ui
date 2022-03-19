import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SchemeProvider } from '../packages/scheme-ui/src/context/SchemeContext';
import theme from '../styles/theme';
import { schemes } from '../styles/colors';
import { Text, H1, H2, H3, H4, P } from '../packages/scheme-ui/src/components/Text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

export const Heading1: ComponentStory<typeof H1> = (args) => {
  return (
    <SchemeProvider theme={theme} colorSchemes={schemes}>
      <H1>Heading 1</H1>
    </SchemeProvider>
  );
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading1.args = {};

export const Heading2: ComponentStory<typeof H2> = (args) => {
  return (
    <SchemeProvider theme={theme} colorSchemes={schemes}>
      <H2>Heading 2</H2>
    </SchemeProvider>
  );
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading1.args = {};

export const Heading3: ComponentStory<typeof H3> = (args) => {
  return (
    <SchemeProvider theme={theme} colorSchemes={schemes}>
      <H3>Heading 3</H3>
    </SchemeProvider>
  );
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading1.args = {};

export const Heading4: ComponentStory<typeof H4> = (args) => {
  return (
    <SchemeProvider theme={theme} colorSchemes={schemes}>
      <H4>Heading 4</H4>
    </SchemeProvider>
  );
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading1.args = {};

export const Paragraph: ComponentStory<typeof P> = (args) => {
  return (
    <SchemeProvider theme={theme} colorSchemes={schemes}>
      <P>Paragraph</P>
    </SchemeProvider>
  );
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Paragraph.args = {};
