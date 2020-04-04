import { config } from '../../rollup-config';

export default config({
  input: [
    './src/index.ts',
    './src/preset.ts',
    './src/config.ts',
    './src/register.tsx',
    './src/register-panel.tsx',
  ],
});
