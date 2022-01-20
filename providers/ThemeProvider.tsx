import React from 'react';
import { ThemeProvider as _ThemeProvider } from 'styled-components';
import getTheme from '../styles/theme';

const ThemeProvider = (props: any): JSX.Element => {
  const scheme = 'light';
  const theme = getTheme({ scheme });
  return <_ThemeProvider theme={theme} {...props} />;
};

export default ThemeProvider;
