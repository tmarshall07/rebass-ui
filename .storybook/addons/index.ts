export const tailwindAddon = {
  name: '@storybook/addon-styling-webpack',
  options: {
    rules: [
      {
        test: /\.css$/,
        sideEffects: true,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              implementation: require.resolve('postcss'),
            },
          },
        ],
      },
    ],
  },
};