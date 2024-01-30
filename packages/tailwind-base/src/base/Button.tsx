import React, { PropsWithChildren, forwardRef } from 'react';
import { merge } from '../utils';
import { ComponentThemeType, ThemePairings } from '../types';

type BaseProps = PropsWithChildren &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type ButtonProps = BaseProps & {
  theme: ComponentThemeType;
  cn?: string;
  rounded?: boolean;
  disabled?: boolean;
  variant?: string;
  color?: string;
};

export type ThemeButtonProps<TTheme extends ComponentThemeType> = Omit<ButtonProps, 'theme' | 'variant' | 'color'> &
  ThemePairings<TTheme>;

export const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { cn = '', className, disabled, rounded = false, variant, theme, color, ...rest } = props;

  const classes = theme[variant || '']?.colors[color || ''] || [];

  if (rounded) classes.push('rounded-full');

  const classNames = merge(classes, className, cn);

  return <button disabled={disabled} className={classNames} ref={ref} {...rest} />;
});

BaseButton.displayName = 'BaseButton';
