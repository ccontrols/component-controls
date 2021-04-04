import { config } from '../../rollup-config';

export default config({
  input: ['./src/index.ts', './src/cli/cli.ts'],
});
