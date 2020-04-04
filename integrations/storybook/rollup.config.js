import { config } from 'docz-rollup';

export default config({
  input: [
    './src/index.ts',
    './src/preset.ts',
    './src/config.ts',
    './src/register.tsx',
    './src/register-panel.tsx',
  ],
});
