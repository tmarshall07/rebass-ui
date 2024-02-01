"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transparentSharedSecondaryClasses = exports.transparentSharedPrimaryClasses = exports.transparentSharedBaseClasses = exports.buttonTheme = exports.baseSlateClasses = exports.baseSharedClasses = exports.baseSecondaryClasses = exports.basePrimaryClasses = void 0;
var baseSharedClasses = exports.baseSharedClasses = ['font-bold', 'py-[.5em]', 'px-[1em]', 'rounded', 'transition-colors'];
var baseSlateClasses = exports.baseSlateClasses = ['bg-base-600 hover:bg-base-700 active:bg-base-800', 'dark:text-base-800', 'dark:bg-base-300', 'dark:hover:bg-base-400', 'dark:active:bg-base-500', 'text-white'];
var basePrimaryClasses = exports.basePrimaryClasses = ['bg-primary-600 hover:bg-primary-700 active:bg-primary-800', 'dark:text-base-800', 'dark:bg-primary-300', 'dark:hover:bg-primary-400', 'dark:active:bg-primary-500', 'text-white'];
var baseSecondaryClasses = exports.baseSecondaryClasses = ['bg-secondary-600 hover:bg-secondary-700 active:bg-secondary-800', 'dark:text-base-800', 'dark:bg-secondary-300', 'dark:hover:bg-secondary-400', 'dark:active:bg-secondary-500', 'text-white'];
var transparentSharedBaseClasses = exports.transparentSharedBaseClasses = ['hover:bg-base-600/10', 'active:bg-base-600/15', 'text-base-600', 'dark:text-base-300', 'dark:hover:bg-base-200/10', 'dark:active:bg-base-200/15'];
var transparentSharedPrimaryClasses = exports.transparentSharedPrimaryClasses = ['hover:bg-primary-600/10', 'active:bg-primary-600/15', 'text-primary-600', 'dark:text-primary-300', 'dark:hover:bg-primary-300/10', 'dark:active:bg-primary-300/15'];
var transparentSharedSecondaryClasses = exports.transparentSharedSecondaryClasses = ['hover:bg-secondary-600/10', 'active:bg-secondary-600/15', 'text-secondary-600', 'dark:text-secondary-300', 'dark:hover:bg-secondary-300/10', 'dark:active:bg-secondary-300/15'];
var buttonTheme = exports.buttonTheme = {
  "default": {
    colors: {
      base: [].concat(baseSharedClasses, baseSlateClasses),
      primary: [].concat(baseSharedClasses, basePrimaryClasses),
      secondary: [].concat(baseSharedClasses, baseSecondaryClasses)
    }
  },
  transparent: {
    colors: {
      base: [].concat(baseSharedClasses, transparentSharedBaseClasses),
      primary: [].concat(baseSharedClasses, transparentSharedPrimaryClasses),
      secondary: [].concat(baseSharedClasses, transparentSharedSecondaryClasses)
    }
  },
  outline: {
    colors: {
      base: [].concat(baseSharedClasses, transparentSharedBaseClasses, ['border-2', 'border-base-300', 'dark:border-base-700']),
      primary: [].concat(baseSharedClasses, transparentSharedPrimaryClasses, ['border-2', 'border-primary-300', 'dark:border-primary-400']),
      secondary: [].concat(baseSharedClasses, transparentSharedSecondaryClasses, ['border-2', 'border-secondary-300', 'dark:border-secondary-400'])
    }
  }
};
//# sourceMappingURL=button.js.map