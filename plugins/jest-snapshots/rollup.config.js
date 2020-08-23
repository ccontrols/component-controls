import { config } from '../../rollup-config';

export default config({
  input: ['./src/index.ts', './src/renderers/react.ts'],
});
