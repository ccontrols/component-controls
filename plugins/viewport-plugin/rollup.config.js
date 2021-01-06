import { config } from '../../rollup-config';

export default config({
  input: ['./src/index.ts', './src/ViewportPage/ViewportPage.tsx'],
  output: {
    exports: 'auto',
  },
});
