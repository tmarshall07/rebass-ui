const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './packages/**/src/**/*.ts',
    './packages/**/src/**/*.tsx',
    './stories/**/*.ts',
    './stories/**/*.tsx',
    './.storybook/preview.tsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        base: colors.slate,
      },
    },
  },
  plugins: [],
};
