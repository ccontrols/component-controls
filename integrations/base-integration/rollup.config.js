import { config } from '../../rollup-config';

export default config({
  input: ['./src/index.tsx', './src/webpack-build.ts'],
});
