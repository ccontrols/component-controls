import { config } from '../../rollup-config';

export default config({
  input: [
    './src/index.ts',
    './src/preset.ts',
    './src/config-legacy.ts',
    './src/config-preview.ts',
    './src/config-props-table.ts',
    './src/config-smart.ts',
    './src/manager/register.tsx',
  ],
});
