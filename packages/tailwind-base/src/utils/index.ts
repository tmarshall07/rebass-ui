import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ComponentThemeType } from '../types';

export const getDefaultVariant = (theme: ComponentThemeType, variant?: string, color?: string) => {
  const classes: string[] = [];
  // const classes = theme[variant || '']?.colors[color || ''] || [];
  let themeVariant = theme[variant || ''];
  if (!themeVariant) {
    // Get first variant as default
    themeVariant = theme[Object.keys(theme || {})[0]];
  }

  let colorVariant = themeVariant?.colors[color || ''];
  if (!colorVariant) {
    // Get first color as default
    classes.push(...(themeVariant?.colors[Object.keys(themeVariant?.colors || {})[0]] || []));
  } else {
    classes.push(...colorVariant);
  }
  
  return classes;
}

export const merge = (...values: clsx.ClassValue[]) => twMerge(clsx(values));