import { config } from 'docz-rollup';

export default config({
  input: [
    './src/index.ts',
    './src/store.ts',
    './src/loader.ts',
    './src/plugin.ts',
    './src/runtimeLoader.ts',
    './src/story-store-data.ts',
  ],
});
