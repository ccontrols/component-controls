import { config } from 'docz-rollup';
import resolve from '@rollup/plugin-node-resolve';

export default config({
  input: ['./src/index.ts'],
  plugins: [
    resolve({
      preferBuiltins: false,
    }),
  ],
});
