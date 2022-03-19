import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const input = './src/index.ts';
const external = (id) => !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/');
const minifierPlugin = terser({
  compress: {
    passes: 2,
  },
});

const typescriptPlugin = typescript({
  tsconfig: './tsconfig.build.json',
  outputToFilesystem: false,
});

const esm = {
  input,
  output: {
    file: pkg.module,
    format: 'esm',
  },
  external,
  plugins: [typescriptPlugin, resolve(), minifierPlugin],
};

const cjs = {
  input,
  output: {
    file: pkg.main,
    format: 'cjs',
  },
  external,
  plugins: [resolve(), typescriptPlugin, minifierPlugin],
};

// const umdDev = {
//   input,
//   output: { file: `dist/${name}.js`, format: 'umd', name: name, globals },
//   external,
//   plugins: [
//     // sourceMaps(),
//     resolve(),
//     typescript({ tsconfig: '../../tsconfig.json' }),
//     replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
//   ],
// };

// Export types
const types = {
  input: './dist/types/index.d.ts',
  output: [{ file: 'dist/index.d.ts', format: 'es' }],
  plugins: [dts()],
};

export default [
  esm,
  cjs,
  types,
  //  umdDev
];