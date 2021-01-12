import { config } from '../../rollup-config';

export default config({
  input: ['./src/index.ts', './src/FigmaPage/FigmaPage.tsx'],
  output: {
    exports: 'auto',
  },
});
