import React, { useContext } from 'react';
import { ColorProps } from '../../../styles/colors';
// import useColorScheme, { ColorSchemeProps } from '../hooks/useColorScheme';
import getColors, { schemes } from '../../../styles/colors';

import { useEffect, useState } from 'react';

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

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
function useColorScheme(): ColorSchemeProps {
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
  colors: schemes.light,
  scheme: 'light',
} as SchemeContextProps);

export function SchemeProvider({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme.scheme);

  return <SchemeContext.Provider value={{ ...colorScheme, colors }}>{children}</SchemeContext.Provider>;
}

export const useSchemeContext = (): SchemeContextProps => useContext(SchemeContext);
