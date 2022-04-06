const sharedPresets = ['@babel/preset-typescript', '@babel/preset-react'];
const shared = {
  ignore: ['src/**/*.spec.ts'],
  presets: sharedPresets
}

module.exports = {
  // plugins: ["@babel/plugin-transform-runtime"],
  env: {
    esmUnbundled: shared,
    esmBundled: {
      ...shared,
      presets: [['@babel/env', {
        targets: "> 0.25%, not dead"
      }], ...sharedPresets],
    },
    cjs: {
      ...shared,
      presets: [['@babel/env', {
        modules: 'commonjs'
      }], ...sharedPresets],
    },
    test: {
      presets: ['@babel/env', ...sharedPresets]    
    },
  }
}