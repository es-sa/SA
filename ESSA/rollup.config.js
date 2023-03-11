import typescript from '@rollup/plugin-typescript';
import react from 'react';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: { main: './src/js/es-sa.js', component: './src/js/SaBox.js' },
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
      declaration: true,
      declarationDir: './dist/types',
      rootDir: './src',
    }),
    terser(),
    commonjs(),
  ],
  external: ['react'],
};
