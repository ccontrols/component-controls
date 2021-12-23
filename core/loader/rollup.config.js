import { config } from '../../rollup-config';

export default config({
  output: {
    exports: 'auto',
  },
  input: [
    './src/index.ts',
    './src/store.ts',
    './src/loader.ts',
    './src/plugin.ts',
    './src/runtimeLoader.ts',
  ],
});
