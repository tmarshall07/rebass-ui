import React, { PropsWithChildren, forwardRef } from 'react';
import { ComponentThemeType, SharedProps, ThemePairings } from '../types';
import { merge } from '../utils';

export type BaseHeadingProps = PropsWithChildren &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export type HeadingProps = BaseHeadingProps & SharedProps;
export type ThemeHeadingProps<TTheme extends ComponentThemeType> = Omit<HeadingProps, 'theme' | 'variant' | 'color'> & ThemePairings<TTheme>;

const getClassesFromProps = (props: HeadingProps) => {
  const { theme, variant, color, cn, className } = props;
  const classes = theme[variant || '']?.colors[color || ''] || [];
  return merge(classes, cn, className);
};

export const H1 = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const { cn, theme, variant, color, className, ...rest } = props;
  const classNames = getClassesFromProps({ theme, variant, color, cn, className });

  return <h1 ref={ref} className={classNames} {...rest} />;
});

H1.displayName = 'H1';

export const H2 = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const { cn, theme, variant, color, className, ...rest } = props;
  const classNames = getClassesFromProps({ theme, variant, color, cn, className });

  return <h2 ref={ref} className={classNames} {...rest} />;
});

H2.displayName = 'H2';

export const H3 = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const { cn, theme, variant, color, className, ...rest } = props;
  const classNames = getClassesFromProps({ theme, variant, color, cn, className });

  return <h3 ref={ref} className={classNames} {...rest} />;
});

H3.displayName = 'H3';

export const H4 = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const { cn, theme, variant, color, className, ...rest } = props;
  const classNames = getClassesFromProps({ theme, variant, color, cn, className });

  return <h4 ref={ref} className={classNames} {...rest} />;
});

H4.displayName = 'H4';

export const H5 = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const { cn, theme, variant, color, className, ...rest } = props;
  const classNames = getClassesFromProps({ theme, variant, color, cn, className });

  return <h5 ref={ref} className={classNames} {...rest} />;
});

H5.displayName = 'H5';

export type BaseParagraphProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export type ParagraphProps = BaseParagraphProps & SharedProps;
export type ThemeParagraphProps<TTheme extends ComponentThemeType> = Omit<HeadingProps, 'theme' | 'variant' | 'color'> & ThemePairings<TTheme>;

export const P = forwardRef<HTMLParagraphElement, ParagraphProps>((props, ref) => {
  const { cn, theme, variant, color, className, ...rest } = props;
  const classNames = getClassesFromProps({ theme, variant, color, cn, className });

  return <p ref={ref} className={classNames} {...rest} />;
});

P.displayName = 'P';

export type BaseAnchorProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
export type AnchorProps = BaseAnchorProps & SharedProps;
export type ThemedAnchorProps<TTheme extends ComponentThemeType> = Omit<AnchorProps, 'theme' | 'variant' | 'color'> & ThemePairings<TTheme>;

export const A = forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => {
  const { cn, theme, variant, color, className, ...rest } = props;
  const classNames = getClassesFromProps({ theme, variant, color, cn, className });

  return <a ref={ref} className={classNames} {...rest} />;
});

A.displayName = 'A';
