import { config } from '../../rollup-config';

export default config({
  input: ['./src/index.ts', './src/build.ts', './src/store.ts'],
});
