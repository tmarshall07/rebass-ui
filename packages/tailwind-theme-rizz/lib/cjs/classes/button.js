"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transparentSharedSlateClasses = exports.transparentSharedPrimaryClasses = exports.buttonTheme = exports.baseSlateClasses = exports.baseSharedClasses = exports.basePrimaryClasses = void 0;
var baseSharedClasses = exports.baseSharedClasses = ['font-bold', 'py-[.5em]', 'px-[1em]', 'rounded', 'transition-colors'];
var baseSlateClasses = exports.baseSlateClasses = ['bg-base-600 hover:bg-base-700 active:bg-base-800', 'dark:text-base-800', 'dark:bg-base-300', 'dark:hover:bg-base-400', 'dark:active:bg-base-500', 'text-white'];
var basePrimaryClasses = exports.basePrimaryClasses = ['bg-primary-600 hover:bg-primary-700 active:bg-primary-800', 'dark:text-base-800', 'dark:bg-primary-300', 'dark:hover:bg-primary-400', 'dark:active:bg-primary-500', 'text-white'];
var transparentSharedSlateClasses = exports.transparentSharedSlateClasses = ['hover:bg-base-600/10', 'active:bg-base-600/15', 'text-base-600', 'dark:text-base-300', 'dark:hover:bg-base-200/10', 'dark:active:bg-base-200/15'];
var transparentSharedPrimaryClasses = exports.transparentSharedPrimaryClasses = ['hover:bg-primary-600/10', 'active:bg-primary-600/15', 'text-primary-600', 'dark:text-primary-300', 'dark:hover:bg-primary-300/10', 'dark:active:bg-primary-300/15'];
var buttonTheme = exports.buttonTheme = {
  "default": {
    colors: {
      base: [].concat(baseSharedClasses, baseSlateClasses),
      primary: [].concat(baseSharedClasses, basePrimaryClasses)
    }
  },
  transparent: {
    colors: {
      base: [].concat(baseSharedClasses, transparentSharedSlateClasses),
      primary: [].concat(baseSharedClasses, transparentSharedPrimaryClasses)
    }
  },
  outline: {
    colors: {
      base: [].concat(baseSharedClasses, transparentSharedSlateClasses, ['border-2', 'border-base-300', 'dark:border-base-700']),
      primary: [].concat(baseSharedClasses, transparentSharedPrimaryClasses, ['border-2', 'border-primary-300', 'dark:border-primary-400'])
    }
  }
};
//# sourceMappingURL=button.js.map