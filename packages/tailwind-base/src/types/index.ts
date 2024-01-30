export type VariantType = {
  colors: Record<string, string[]>;
};

export type ComponentThemeType = { [index: string]: VariantType };

export type ThemeType = {
  [key: string]: ComponentThemeType;
};

export type ThemePairings<TTheme extends ComponentThemeType> = {
  [VariantName in keyof TTheme]: {
    variant?: VariantName;
    color?: keyof TTheme[VariantName]['colors'];
  };
  // access by keyof icon to flatten the map into a union
}[keyof TTheme];
