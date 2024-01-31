/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    // './src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'
    './packages/**/src/**/*.ts',
    './packages/**/src/**/*.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
