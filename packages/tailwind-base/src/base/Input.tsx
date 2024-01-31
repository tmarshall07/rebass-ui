import React, { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';
import { ComponentThemeType, SharedProps, ThemePairings } from '../types';
import { getDefaultVariant, merge } from '../utils';

export type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & SharedProps;

export type ThemeInputProps<TTheme extends ComponentThemeType> = Omit<InputProps, 'theme' | 'variant' | 'color'> &
  ThemePairings<TTheme>;

export const BaseInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { cn = '', className, variant, theme, color, ...rest } = props;

  const classes = getDefaultVariant(theme, variant, color);
  const classNames = merge(classes, cn, className);

  return <input {...props} className={classNames} ref={ref} {...rest} />;
});

BaseInput.displayName = 'BaseInput';
