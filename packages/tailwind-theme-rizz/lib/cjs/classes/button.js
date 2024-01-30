"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transparentSharedSlateClasses = exports.transparentSharedBlueClasses = exports.buttonTheme = exports.baseSharedClasses = void 0;
var baseSharedClasses = ['font-bold', 'py-[.5em]', 'px-[1em]', 'rounded'];
exports.baseSharedClasses = baseSharedClasses;
var transparentSharedSlateClasses = ['hover:bg-slate-100', 'active:bg-slate-200', 'text-slate-600', 'dark:text-slate-300', 'dark:hover:bg-slate-800', 'dark:active:bg-slate-700'];
exports.transparentSharedSlateClasses = transparentSharedSlateClasses;
var transparentSharedBlueClasses = ['hover:bg-blue-100', 'active:bg-blue-200', 'text-blue-600', 'dark:text-blue-300', 'dark:hover:bg-blue-800', 'dark:active:bg-blue-700'];
exports.transparentSharedBlueClasses = transparentSharedBlueClasses;
var buttonTheme = {
  "default": {
    colors: {
      blue: [].concat(baseSharedClasses, ['bg-blue-600 hover:bg-blue-700 active:bg-blue-800', 'text-white']),
      slate: [].concat(baseSharedClasses, ['bg-slate-600 hover:bg-slate-700 active:bg-slate-800', 'text-white'])
    }
  },
  transparent: {
    colors: {
      blue: [].concat(baseSharedClasses, transparentSharedBlueClasses),
      slate: [].concat(baseSharedClasses, transparentSharedSlateClasses)
    }
  },
  outline: {
    colors: {
      blue: [].concat(baseSharedClasses, transparentSharedBlueClasses, ['border-blue-400', 'dark:border-blue-700']),
      slate: [].concat(baseSharedClasses, transparentSharedSlateClasses, ['border-slate-400', 'dark:border-slate-700'])
    }
  }
};
exports.buttonTheme = buttonTheme;
//# sourceMappingURL=button.js.map