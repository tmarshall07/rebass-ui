"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textThemes = exports.colorPrimary900 = exports.colorPrimary800 = exports.colorPrimary700 = exports.colorPrimary600 = exports.colorPrimary500 = exports.colorPrimary300 = exports.colorBase900 = exports.colorBase800 = exports.colorBase700 = exports.colorBase600 = exports.colorBase500 = exports.colorBase400 = exports.colorBase300 = exports.baseP = exports.baseH5 = exports.baseH4 = exports.baseH3 = exports.baseH2 = exports.baseH1 = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var sharedClasses = ['dark:text-slate-100'];
var sharedHeadingClasses = [].concat(sharedClasses, ['font-bold', 'text-slate-800']);
var baseH1 = ['sm:text-4xl text-3xl'].concat((0, _toConsumableArray2["default"])(sharedHeadingClasses));
exports.baseH1 = baseH1;
var baseH2 = ['sm:text-3xl text-2xl'].concat((0, _toConsumableArray2["default"])(sharedHeadingClasses));
exports.baseH2 = baseH2;
var baseH3 = ['sm:text-2xl text-xl'].concat((0, _toConsumableArray2["default"])(sharedHeadingClasses));
exports.baseH3 = baseH3;
var baseH4 = ['sm:text-xl text-lg'].concat((0, _toConsumableArray2["default"])(sharedHeadingClasses));
exports.baseH4 = baseH4;
var baseH5 = ['sm:text-lg text-base'].concat((0, _toConsumableArray2["default"])(sharedHeadingClasses));
exports.baseH5 = baseH5;
var baseP = ['font-paragraph sm:text-base text-sm'].concat(sharedClasses);
exports.baseP = baseP;
var colorBase300 = 'text-slate-300 dark:text-slate-700';
exports.colorBase300 = colorBase300;
var colorBase400 = 'text-slate-400 dark:text-slate-600';
exports.colorBase400 = colorBase400;
var colorBase500 = 'text-slate-500 dark:text-slate-500';
exports.colorBase500 = colorBase500;
var colorBase600 = 'text-slate-600 dark:text-slate-400';
exports.colorBase600 = colorBase600;
var colorBase700 = 'text-slate-700 dark:text-slate-300';
exports.colorBase700 = colorBase700;
var colorBase800 = 'text-slate-800 dark:text-slate-200';
exports.colorBase800 = colorBase800;
var colorBase900 = 'text-slate-900 dark:text-slate-100';
exports.colorBase900 = colorBase900;
var colorPrimary300 = 'text-primary-300 dark:text-primary-700';
exports.colorPrimary300 = colorPrimary300;
var colorPrimary500 = 'text-primary-500 dark:text-primary-500';
exports.colorPrimary500 = colorPrimary500;
var colorPrimary600 = 'text-primary-600 dark:text-primary-400';
exports.colorPrimary600 = colorPrimary600;
var colorPrimary700 = 'text-primary-700 dark:text-primary-300';
exports.colorPrimary700 = colorPrimary700;
var colorPrimary800 = 'text-primary-800 dark:text-primary-200';
exports.colorPrimary800 = colorPrimary800;
var colorPrimary900 = 'text-primary-900 dark:text-primary-100';
exports.colorPrimary900 = colorPrimary900;
var textThemes = {
  h1: {
    regular: {
      colors: {
        slate: (0, _toConsumableArray2["default"])(baseH1)
      }
    }
  },
  h2: {
    regular: {
      colors: {
        slate: (0, _toConsumableArray2["default"])(baseH2)
      }
    }
  },
  h3: {
    regular: {
      colors: {
        slate: (0, _toConsumableArray2["default"])(baseH3)
      }
    }
  },
  h4: {
    regular: {
      colors: {
        slate: (0, _toConsumableArray2["default"])(baseH4)
      }
    }
  },
  h5: {
    regular: {
      colors: {
        slate: (0, _toConsumableArray2["default"])(baseH5)
      }
    }
  },
  p: {
    regular: {
      colors: {
        slate: (0, _toConsumableArray2["default"])(baseP)
      }
    }
  },
  a: {
    regular: {
      colors: {
        slate: ['text-blue-500 dark:text-blue-300']
      }
    }
  }
};
exports.textThemes = textThemes;
//# sourceMappingURL=text.js.map