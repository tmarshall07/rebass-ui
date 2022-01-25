import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
// import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

// this should always be last
// const minifierPlugin = terser({
//   compress: {
//     passes: 2,
//   },
// });

// const globals = { react: 'React', 'react-dom': 'ReactDOM', polished: 'polished', 'styled-components': 'styled' };

const input = './src/index.ts';
const external = (id) => !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/');

const esm = {
  input,
  output: {
    file: `dist/${pkg.name}.esm.js`,
    format: 'esm',
  },
  external,
  plugins: [resolve(), typescript({ tsconfig: '../../tsconfig.json' })],
};

const cjs = {
  input,
  output: {
    file: `dist/${pkg.name}.cjs.js`,
    format: 'cjs',
  },
  external,
  plugins: [resolve(), typescript({ tsconfig: '../../tsconfig.json' })],
};

// const umdDev = {
//   input,
//   output: { file: `dist/${pkg.name}.js`, format: 'umd', name: pkg.name, globals },
//   external,
//   plugins: [
//     // sourceMaps(),
//     resolve(),
//     typescript({ tsconfig: '../../tsconfig.json' }),
//     replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
//   ],
// };

export default [
  esm,
  cjs,
  //  umdDev
];
