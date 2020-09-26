import { config } from '../../rollup-config';

export default config({
  input: [
    './src/index.ts',
    './src/cli.ts',
    './src/args.ts',
    './src/renderers.ts',
  ],
});
