import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { ComponentThemeType, SharedProps, ThemePairings } from '../types';
export type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & SharedProps;
export type ThemeInputProps<TTheme extends ComponentThemeType> = Omit<InputProps, 'theme' | 'variant' | 'color'> & ThemePairings<TTheme>;
export declare const BaseInput: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Input.d.ts.map