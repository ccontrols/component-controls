import { config } from '../../rollup-config';

export default config({
  input: [
    './src/index.ts',
    './src/preset.ts',
    './src/config.tsx',
    './src/register-controls-panel.tsx',
    './src/register-props-panel.tsx',
    './src//docs-page/full-page.tsx',
  ],
});
