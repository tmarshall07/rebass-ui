import React, { PropsWithChildren } from 'react';
import { ComponentThemeType, ThemePairings } from '../types';
type BaseProps = PropsWithChildren & React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export type ButtonProps = BaseProps & {
    theme: ComponentThemeType;
    cn?: string;
    rounded?: boolean;
    disabled?: boolean;
    variant?: string;
    color?: string;
};
export type ThemeButtonProps<TTheme extends ComponentThemeType> = Omit<ButtonProps, 'theme' | 'variant' | 'color'> & ThemePairings<TTheme>;
export declare const BaseButton: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=Button.d.ts.map