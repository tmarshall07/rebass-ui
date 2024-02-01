export const baseSharedClasses = ['font-bold', 'py-[.5em]', 'px-[1em]', 'rounded', 'transition-colors'];

export const baseSlateClasses = [
  'bg-base-600 hover:bg-base-700 active:bg-base-800',
  'dark:text-base-800',
  'dark:bg-base-300',
  'dark:hover:bg-base-400',
  'dark:active:bg-base-500',
  'text-white',
];

export const basePrimaryClasses = [
  'bg-primary-600 hover:bg-primary-700 active:bg-primary-800',
  'dark:text-base-800',
  'dark:bg-primary-300',
  'dark:hover:bg-primary-400',
  'dark:active:bg-primary-500',
  'text-white',
];

export const baseSecondaryClasses = [
  'bg-secondary-600 hover:bg-secondary-700 active:bg-secondary-800',
  'dark:text-base-800',
  'dark:bg-secondary-300',
  'dark:hover:bg-secondary-400',
  'dark:active:bg-secondary-500',
  'text-white',
];

export const transparentSharedBaseClasses = [
  'hover:bg-base-600/10',
  'active:bg-base-600/15',
  'text-base-600',
  'dark:text-base-300',
  'dark:hover:bg-base-200/10',
  'dark:active:bg-base-200/15',
];

export const transparentSharedPrimaryClasses = [
  'hover:bg-primary-600/10',
  'active:bg-primary-600/15',
  'text-primary-600',
  'dark:text-primary-300',
  'dark:hover:bg-primary-300/10',
  'dark:active:bg-primary-300/15',
];

export const transparentSharedSecondaryClasses = [
  'hover:bg-secondary-600/10',
  'active:bg-secondary-600/15',
  'text-secondary-600',
  'dark:text-secondary-300',
  'dark:hover:bg-secondary-300/10',
  'dark:active:bg-secondary-300/15',
];

export const buttonTheme = {
  default: {
    colors: {
      base: [...baseSharedClasses, ...baseSlateClasses],
      primary: [...baseSharedClasses, ...basePrimaryClasses],
      secondary: [...baseSharedClasses, ...baseSecondaryClasses],
    },
  },
  transparent: {
    colors: {
      base: [...baseSharedClasses, ...transparentSharedBaseClasses],
      primary: [...baseSharedClasses, ...transparentSharedPrimaryClasses],
      secondary: [...baseSharedClasses, ...transparentSharedSecondaryClasses],
    },
  },
  outline: {
    colors: {
      base: [
        ...baseSharedClasses,
        ...transparentSharedBaseClasses,
        'border-2',
        'border-base-300',
        'dark:border-base-700',
      ],
      primary: [
        ...baseSharedClasses,
        ...transparentSharedPrimaryClasses,
        'border-2',
        'border-primary-300',
        'dark:border-primary-400',
      ],
      secondary: [
        ...baseSharedClasses,
        ...transparentSharedSecondaryClasses,
        'border-2',
        'border-secondary-300',
        'dark:border-secondary-400',
      ],
    },
  },
};
