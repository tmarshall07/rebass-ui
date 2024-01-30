export * from './Button';
const baseSharedClasses = ['font-bold', 'py-[.5em]', 'px-[1em]', 'rounded'];
const transparentSharedSlateClasses = ['hover:bg-slate-100', 'active:bg-slate-200', 'text-slate-600', 'dark:text-slate-300', 'dark:hover:bg-slate-800', 'dark:active:bg-slate-700'];
const transparentSharedBlueClasses = ['hover:bg-blue-100', 'active:bg-blue-200', 'text-blue-600', 'dark:text-blue-300', 'dark:hover:bg-blue-800', 'dark:active:bg-blue-700'];
export const theme = {
  button: {
    default: {
      colors: {
        blue: [...baseSharedClasses, 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800', 'text-white'],
        slate: [...baseSharedClasses, 'bg-slate-600 hover:bg-slate-700 active:bg-slate-800', 'text-white']
      }
    },
    transparent: {
      colors: {
        blue: [...baseSharedClasses, ...transparentSharedBlueClasses],
        slate: [...baseSharedClasses, ...transparentSharedSlateClasses]
      }
    },
    outline: {
      colors: {
        blue: [...baseSharedClasses, ...transparentSharedBlueClasses, 'border-blue-400', 'dark:border-blue-700'],
        slate: [...baseSharedClasses, ...transparentSharedSlateClasses, 'border-slate-400', 'dark:border-slate-700']
      }
    }
  }
};
//# sourceMappingURL=index.js.map