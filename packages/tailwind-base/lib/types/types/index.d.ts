export type VariantType = {
    colors: Record<string, string[]>;
};
export type ComponentThemeType = {
    [index: string]: VariantType;
};
export type ThemeType = {
    [key: string]: ComponentThemeType;
};
export type ThemePairings<TTheme extends ComponentThemeType> = {
    [VariantName in keyof TTheme]: {
        variant?: VariantName;
        color?: keyof TTheme[VariantName]['colors'];
    };
}[keyof TTheme];
export type SharedProps = {
    theme: ComponentThemeType;
    variant?: string;
    color?: string;
    cn?: string;
};
//# sourceMappingURL=index.d.ts.map