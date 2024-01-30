const sharedClasses = ['dark:text-slate-100'];
const sharedHeadingClasses = [...sharedClasses, 'font-bold', 'text-slate-800'];

export const baseH1 = ['sm:text-4xl text-3xl', ...sharedHeadingClasses];
export const baseH2 = ['sm:text-3xl text-2xl', ...sharedHeadingClasses];
export const baseH3 = ['sm:text-2xl text-xl', ...sharedHeadingClasses];
export const baseH4 = ['sm:text-xl text-lg', ...sharedHeadingClasses];
export const baseH5 = ['sm:text-lg text-base', ...sharedHeadingClasses];

export const baseP = ['font-paragraph sm:text-base text-sm', ...sharedClasses];

export const colorBase300 = 'text-slate-300 dark:text-slate-700';
export const colorBase400 = 'text-slate-400 dark:text-slate-600';
export const colorBase500 = 'text-slate-500 dark:text-slate-500';
export const colorBase600 = 'text-slate-600 dark:text-slate-400';
export const colorBase700 = 'text-slate-700 dark:text-slate-300';
export const colorBase800 = 'text-slate-800 dark:text-slate-200';
export const colorBase900 = 'text-slate-900 dark:text-slate-100';

export const colorPrimary300 = 'text-primary-300 dark:text-primary-700';
export const colorPrimary500 = 'text-primary-500 dark:text-primary-500';
export const colorPrimary600 = 'text-primary-600 dark:text-primary-400';
export const colorPrimary700 = 'text-primary-700 dark:text-primary-300';
export const colorPrimary800 = 'text-primary-800 dark:text-primary-200';
export const colorPrimary900 = 'text-primary-900 dark:text-primary-100';

export const textThemes = {
  h1: {
    regular: {
      colors: {
        slate: [...baseH1],
      },
    }
  },
  h2: {
    regular: {
      colors: {
        slate: [...baseH2],
      },
    }
  },
  h3: {
    regular: {
      colors: {
        slate: [...baseH3],
      },
    }
  },
  h4: {
    regular: {
      colors: {
        slate: [...baseH4],
      },
    }
  },
  h5: {
    regular: {
      colors: {
        slate: [...baseH5],
      },
    }
  },
  p: {
    regular: {
      colors: {
        slate: [...baseP],
      },
    }
  },
}