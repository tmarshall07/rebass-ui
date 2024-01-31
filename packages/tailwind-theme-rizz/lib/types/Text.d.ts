import { PropsWithRef } from 'react';
import { ThemeHeadingProps, ThemeParagraphProps, ThemedAnchorProps } from '@tannerjs/tailwind-base';
import { theme } from './theme';
export type H1Props = ThemeHeadingProps<typeof theme.h1>;
export declare const H1: (props: PropsWithRef<H1Props>) => JSX.Element;
export type H2Props = ThemeHeadingProps<typeof theme.h2>;
export declare const H2: (props: PropsWithRef<H2Props>) => JSX.Element;
export type H3Props = ThemeHeadingProps<typeof theme.h3>;
export declare const H3: (props: PropsWithRef<H3Props>) => JSX.Element;
export type H4Props = ThemeHeadingProps<typeof theme.h4>;
export declare const H4: (props: PropsWithRef<H4Props>) => JSX.Element;
export type H5Props = ThemeHeadingProps<typeof theme.h5>;
export declare const H5: (props: PropsWithRef<H5Props>) => JSX.Element;
export type PProps = ThemeParagraphProps<typeof theme.p>;
export declare const P: (props: PropsWithRef<PProps>) => JSX.Element;
export type AProps = ThemedAnchorProps<typeof theme.a>;
export declare const A: (props: PropsWithRef<AProps>) => JSX.Element;
//# sourceMappingURL=Text.d.ts.map