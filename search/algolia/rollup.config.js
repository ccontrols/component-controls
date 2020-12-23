import { config } from '../../rollup-config';

export default config({
  input: ['./src/index.ts', './src/indexing.ts'],
  output: {
    exports: 'auto',
  },
});
