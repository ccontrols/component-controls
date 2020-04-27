import { config } from '../../rollup-config';

export default config({
  input: [
    './src/index.ts',
    './src/store.ts',
    './src/loader.ts',
    './src/runtimeLoader.ts',
  ],
});
