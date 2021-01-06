import { config } from '../../rollup-config';

export default config({
  input: ['./src/index.tsx', './src/AllyPage/AllyPage.tsx'],
  output: {
    exports: 'auto',
  },
});
