import React, { useContext } from 'react';
import { ColorProps } from '../styles/colors';
import useColorScheme, { ColorSchemeProps } from '../hooks/useColorScheme';
import getColors, { schemes } from '../styles/colors';

type SchemeContextProps = ColorSchemeProps & { colors: ColorProps };

const SchemeContext = React.createContext<SchemeContextProps>({
  colors: schemes.light,
  scheme: 'light',
} as SchemeContextProps);

export function SchemeProvider({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme.scheme);

  return <SchemeContext.Provider value={{ ...colorScheme, colors }}>{children}</SchemeContext.Provider>;
}

export const useSchemeContext = (): SchemeContextProps => useContext(SchemeContext);
