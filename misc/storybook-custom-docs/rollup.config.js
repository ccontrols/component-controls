import { config } from '../../rollup-config';

export default config({
  input: [
    './src/index.tsx',
    './src/preset.ts',
    './src/preview.tsx',
    './src/preview-loader.ts',
    './src/manager.tsx',
    './src/manager-loader.ts',
    './src/components/ManagerContainer.tsx',
  ],
});
