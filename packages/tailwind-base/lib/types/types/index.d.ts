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
export type CnProps = {
    cn?: string;
};
export type SharedProps = CnProps & {
    theme: ComponentThemeType;
    variant?: string;
    color?: string;
};
//# sourceMappingURL=index.d.ts.map