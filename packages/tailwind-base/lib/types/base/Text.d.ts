import React, { PropsWithChildren } from 'react';
import { ComponentThemeType, SharedProps, ThemePairings } from '../types';
export type BaseHeadingProps = PropsWithChildren & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
export type HeadingProps = BaseHeadingProps & SharedProps;
export type ThemeHeadingProps<TTheme extends ComponentThemeType> = Omit<HeadingProps, 'theme' | 'variant' | 'color'> & ThemePairings<TTheme>;
export declare const H1: React.ForwardRefExoticComponent<Omit<HeadingProps, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
export declare const H2: React.ForwardRefExoticComponent<Omit<HeadingProps, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
export declare const H3: React.ForwardRefExoticComponent<Omit<HeadingProps, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
export declare const H4: React.ForwardRefExoticComponent<Omit<HeadingProps, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
export declare const H5: React.ForwardRefExoticComponent<Omit<HeadingProps, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
export type BaseParagraphProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
export type ParagraphProps = BaseParagraphProps & SharedProps;
export type ThemeParagraphProps<TTheme extends ComponentThemeType> = Omit<HeadingProps, 'theme' | 'variant' | 'color'> & ThemePairings<TTheme>;
export declare const P: React.ForwardRefExoticComponent<Omit<ParagraphProps, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
export type BaseAnchorProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
export type AnchorProps = BaseAnchorProps & SharedProps;
export type ThemedAnchorProps<TTheme extends ComponentThemeType> = Omit<AnchorProps, 'theme' | 'variant' | 'color'> & ThemePairings<TTheme>;
export declare const A: React.ForwardRefExoticComponent<Omit<AnchorProps, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
//# sourceMappingURL=Text.d.ts.map