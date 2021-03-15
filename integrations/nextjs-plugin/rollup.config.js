import { config } from '../../rollup-config';

export default config({
  input: ['./src/index.tsx', './src/build.ts', './src/component-controls.ts'],
});
