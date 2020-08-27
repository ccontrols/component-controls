import { config } from '../../rollup-config';

export default config({
  input: [
    './src/index.ts',
    './src/cli.ts',
    './src/stories.test.ts',
    './src/renderers.ts',
    './src/args.ts',
  ],
});
