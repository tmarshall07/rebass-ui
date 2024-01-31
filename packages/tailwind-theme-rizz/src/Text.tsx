import React, { PropsWithRef } from 'react';
import {
  H1 as BaseH1,
  H2 as BaseH2,
  H3 as BaseH3,
  H4 as BaseH4,
  H5 as BaseH5,
  P as BaseP,
  A as BaseA,
  ThemeHeadingProps,
  ThemeParagraphProps,
  ThemedAnchorProps,
} from '@tannerjs/tailwind-base';
import { theme } from './theme';

export type H1Props = ThemeHeadingProps<typeof theme.h1>;
export const H1 = (props: PropsWithRef<H1Props>) => <BaseH1 theme={theme.h1} {...props} />;

export type H2Props = ThemeHeadingProps<typeof theme.h2>;
export const H2 = (props: PropsWithRef<H2Props>) => <BaseH2 theme={theme.h2} {...props} />;

export type H3Props = ThemeHeadingProps<typeof theme.h3>;
export const H3 = (props: PropsWithRef<H3Props>) => <BaseH3 theme={theme.h3} {...props} />;

export type H4Props = ThemeHeadingProps<typeof theme.h4>;
export const H4 = (props: PropsWithRef<H4Props>) => <BaseH4 theme={theme.h4} {...props} />;

export type H5Props = ThemeHeadingProps<typeof theme.h5>;
export const H5 = (props: PropsWithRef<H5Props>) => <BaseH5 theme={theme.h5} {...props} />;

export type PProps = ThemeParagraphProps<typeof theme.p>;
export const P = (props: PropsWithRef<PProps>) => <BaseP theme={theme.p} {...props} />;

export type AProps = ThemedAnchorProps<typeof theme.a>;
export const A = (props: PropsWithRef<AProps>) => <BaseA theme={theme.a} {...props} />;
