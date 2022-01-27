import React from 'react';
declare type ColorsProps = {
    [index: string]: string;
};
declare type SchemeProps = {
    [index: string]: ColorsProps;
};
declare const SCHEMES: readonly ["light", "dark"];
declare type SchemeType = typeof SCHEMES[number];
declare type StateType = 'auto' | 'user';
declare type SchemeSettingsRes = [StateType | null, SchemeType | null];
export declare const getSchemeSettings: () => Promise<SchemeSettingsRes>;
export declare type ColorSchemeProps = {
    scheme: SchemeType;
    userScheme: SchemeType;
    setScheme: (newScheme: SchemeType) => void;
    auto: boolean;
    setAuto: (newAuto: boolean) => void;
};
declare type SchemeContextProps = ColorSchemeProps & {
    colors: ColorsProps;
};
export declare type SchemeProviderProps = {
    colorSchemes?: SchemeProps;
    theme?: {
        [index: string]: any;
    };
    scheme?: string;
    children: React.ReactNode;
};
export declare function SchemeProvider({ theme, scheme, colorSchemes, children }: SchemeProviderProps): JSX.Element;
export declare const useSchemeContext: () => SchemeContextProps;
export {};
