import { config } from '../../rollup-config';

export default config({
  input: ['./src/index.ts', './src/ImagesPage/ImagesPage.tsx'],
  output: {
    exports: 'auto',
  },
});
