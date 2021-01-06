import { config } from '../../rollup-config';

export default config({
  input: ['./src/index.ts', './src/FigmaEmbedPage/FigmaEmbedPage.tsx'],
  output: {
    exports: 'auto',
  },
});
