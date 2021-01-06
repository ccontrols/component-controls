import { config } from '../../rollup-config';

export default config({
  input: [
    './src/index.ts',
    './src/pages/CanvasPage.tsx',
    './src/pages/ClassicPage.tsx',
    './src/pages/ComponentPage.tsx',
    './src/pages/CurrentStoryPage.tsx',
    './src/pages/DesignPage.tsx',
    './src/pages/StoriesPage.tsx',
    './src/pages/TestingPage.tsx',
  ],
  output: {
    exports: 'auto',
  },
});
