import React, { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

type ColorsProps = {
  [index: string]: string;
};

type SchemeProps = {
  [index: string]: ColorsProps;
};

const SCHEMES = ['light', 'dark'] as const;
type SchemeType = typeof SCHEMES[number];
type StateType = 'auto' | 'user';

const PREFERS_COLOR_SCHEME = '(prefers-color-scheme: dark)';

enum STORAGE_KEYS {
  mode = 'settings:dark:mode',
  value = 'settings:dark:value',
}

type SchemeSettingsRes = [StateType | null, SchemeType | null];
export const getSchemeSettings = async (): Promise<SchemeSettingsRes> =>
  (await Promise.all([
    localStorage.getItem(STORAGE_KEYS['mode']),
    localStorage.getItem(STORAGE_KEYS['value']),
  ])) as SchemeSettingsRes;

export type ColorSchemeProps = {
  scheme: SchemeType; // The current app scheme
  userScheme: SchemeType; // The user's chosen scheme (may be different if 'auto' is true)
  setScheme: (newScheme: SchemeType) => void;
  auto: boolean;
  setAuto: (newAuto: boolean) => void;
};

// The useLightDarkScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
function useLightDarkScheme(): ColorSchemeProps {
  const [systemScheme, setSystemScheme] = useState<SchemeType>('light');
  const [scheme, setScheme] = useState<SchemeType>('light');
  const [auto, setAuto] = useState(true);

  // Set whether we should be using the device scheme or user's scheme
  const handleSetAuto = (isAuto: boolean) => {
    if (isAuto) {
      void localStorage.setItem(STORAGE_KEYS['mode'], 'auto');
    } else {
      void localStorage.setItem(STORAGE_KEYS['mode'], 'user');
    }

    setAuto(isAuto);
  };

  // Set the current scheme
  const handleSetScheme = (scheme: SchemeType) => {
    void localStorage.setItem(STORAGE_KEYS['value'], scheme);
    setScheme(scheme);
  };

  // Get initial stored user preference
  const getUserPreference = async () => {
    const [state, userScheme] = await getSchemeSettings();

    if (state === 'user') {
      if (userScheme && userScheme !== scheme) setScheme(userScheme);
      setAuto(false);
    }
  };

  useEffect(() => {
    const updateSchemes = (event) => {
      const newColorScheme = event.matches ? 'dark' : 'light';
      setSystemScheme(newColorScheme);
    };

    void getUserPreference();

    window.matchMedia(PREFERS_COLOR_SCHEME).addEventListener('change', updateSchemes);

    const scheme = window.matchMedia(PREFERS_COLOR_SCHEME) ? 'dark' : 'light';
    setSystemScheme(scheme);

    return () => {
      window.matchMedia(PREFERS_COLOR_SCHEME).removeEventListener('change', updateSchemes);
    };
  }, []);

  return {
    scheme: auto ? systemScheme : scheme,
    userScheme: scheme,
    auto,
    setScheme: handleSetScheme,
    setAuto: handleSetAuto,
  };
}

type SchemeContextProps = ColorSchemeProps & { colors: ColorProps };

const SchemeContext = React.createContext<SchemeContextProps>({
  colors: {},
  scheme: 'light',
} as SchemeContextProps);

export type SchemeProviderProps = {
  colorSchemes?: SchemeProps;
  theme?: { [index: string]: any };
  scheme?: string;
  children: React.ReactNode;
};

export function SchemeProvider({ theme = {}, scheme = '', colorSchemes = {}, children }: SchemeProviderProps) {
  // Get current light / dark scheme
  const colorScheme = useLightDarkScheme();

  // Use passed scheme if it exists, otherwise use light / dark, otherwise use first available scheme
  const colors = colorSchemes[scheme] || colorSchemes[colorScheme.scheme] || colorSchemes[Object.keys(colorSchemes)[0]];

  return (
    <SchemeContext.Provider value={{ ...colorScheme, colors }}>
      <ThemeProvider theme={{ ...theme, colors }}>{children}</ThemeProvider>
    </SchemeContext.Provider>
  );
}

export const useSchemeContext = (): SchemeContextProps => useContext(SchemeContext);
