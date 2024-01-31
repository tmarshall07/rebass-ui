import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SchemeProvider } from '../../packages/scheme-ui/src/context/SchemeContext';
import theme from '../../styles/theme';
import { schemes } from '../../styles/colors';
import { Text, H1, H2, H3, H4, P } from '../../packages/scheme-ui/src/components/Text';
import { Box } from '../../packages/scheme-ui/src';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Rebass/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Wrapper = ({ children }) => {
  return (
    <SchemeProvider theme={theme} colorSchemes={schemes}>
      <Box p={3} bg="bg-1">
        {children}
      </Box>
    </SchemeProvider>
  );
};

export const Heading1: ComponentStory<typeof H1> = (args) => {
  return (
    <Wrapper>
      <H1>Heading 1</H1>
    </Wrapper>
  );
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading1.args = {};

export const Heading2: ComponentStory<typeof H2> = (args) => {
  return (
    <Wrapper>
      <H2>Heading 2</H2>
    </Wrapper>
  );
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading1.args = {};

export const Heading3: ComponentStory<typeof H3> = (args) => {
  return (
    <Wrapper>
      <H3>Heading 3</H3>
    </Wrapper>
  );
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading1.args = {};

export const Heading4: ComponentStory<typeof H4> = (args) => {
  return (
    <Wrapper>
      <H4>Heading 4</H4>
    </Wrapper>
  );
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading1.args = {};

export const Paragraph: ComponentStory<typeof P> = (args) => {
  return (
    <Wrapper>
      <P>Paragraph</P>
    </Wrapper>
  );
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Paragraph.args = {};
