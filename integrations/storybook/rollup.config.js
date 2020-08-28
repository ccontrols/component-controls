import { config } from '../../rollup-config';

export default config({
  input: [
    './src/index.ts',
    './src/preset.ts',
    './src/config.tsx',
    './src/register-props-panel.tsx',
    './src/register-storysource-panel.tsx',
    './src/register-storyconfig-panel.tsx',
    './src/docs-page/full-page.tsx',
    './src/docs-page/DocsContainer.tsx',
  ],
});
