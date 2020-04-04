import { config } from '../../rollup-config';
import resolve from '@rollup/plugin-node-resolve';

export default config({
  input: ['./src/index.ts'],
  plugins: [
    resolve({
      preferBuiltins: false,
    }),
  ],
});
