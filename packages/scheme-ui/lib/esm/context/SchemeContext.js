import React, { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
const SCHEMES = ['light', 'dark'];
const PREFERS_COLOR_SCHEME = '(prefers-color-scheme: dark)';
var STORAGE_KEYS;

(function (STORAGE_KEYS) {
  STORAGE_KEYS["mode"] = "settings:dark:mode";
  STORAGE_KEYS["value"] = "settings:dark:value";
})(STORAGE_KEYS || (STORAGE_KEYS = {}));

export const getSchemeSettings = async () => await Promise.all([localStorage.getItem(STORAGE_KEYS['mode']), localStorage.getItem(STORAGE_KEYS['value'])]);

// The useLightDarkScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
function useLightDarkScheme() {
  const [systemScheme, setSystemScheme] = useState('light');
  const [scheme, setScheme] = useState('light');
  const [auto, setAuto] = useState(true); // Set whether we should be using the device scheme or user's scheme

  const handleSetAuto = isAuto => {
    if (isAuto) {
      void localStorage.setItem(STORAGE_KEYS['mode'], 'auto');
    } else {
      void localStorage.setItem(STORAGE_KEYS['mode'], 'user');
    }

    setAuto(isAuto);
  }; // Set the current scheme


  const handleSetScheme = scheme => {
    void localStorage.setItem(STORAGE_KEYS['value'], scheme);
    setScheme(scheme);
  }; // Get initial stored user preference


  const getUserPreference = async () => {
    const [state, userScheme] = await getSchemeSettings();

    if (state === 'user') {
      if (userScheme && userScheme !== scheme) setScheme(userScheme);
      setAuto(false);
    }
  };

  useEffect(() => {
    const updateSchemes = event => {
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
    setAuto: handleSetAuto
  };
}

const SchemeContext = /*#__PURE__*/React.createContext({
  colors: null,
  scheme: 'light'
});
export function SchemeProvider({
  theme = {},
  scheme = '',
  colorSchemes = {},
  children
}) {
  // Get current light / dark scheme
  const colorScheme = useLightDarkScheme(); // Use passed scheme if it exists, otherwise use light / dark, otherwise use first available scheme

  const colors = colorSchemes[scheme] || colorSchemes[colorScheme.scheme] || colorSchemes[Object.keys(colorSchemes)[0]];
  return /*#__PURE__*/React.createElement(SchemeContext.Provider, {
    value: { ...colorScheme,
      colors
    }
  }, /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: { ...theme,
      colors
    }
  }, children));
}
export const useSchemeContext = () => useContext(SchemeContext);
//# sourceMappingURL=SchemeContext.js.map