import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const merge = (...values: clsx.ClassValue[]) => twMerge(clsx(values));