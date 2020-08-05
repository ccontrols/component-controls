import path from 'path';
import { loadStoriesTests, extractComponentProps } from './loadTestFiles';

describe('external-library', () => {
  loadStoriesTests(
    {
      stories: { storeSourceFile: false },
      propsLoaders: [
        { name: '@component-controls/react-docgen-info', test: /\.(js|jsx)$/ },
        {
          name: '@component-controls/react-docgen-typescript-info',
          test: /\.(ts|tsx)$/,
        },
        ,
      ],
      components: {
        storeSourceFile: false,
        resolveFile: (componentName, filePath) => {
          if (filePath.includes('theme-ui/dist')) {
            const resolved = path.resolve(
              path.dirname(filePath),
              `../../@theme-ui/components/index.d.ts`,
            );
            return resolved;
          }
          return filePath;
        },
      },
    },
    ['esm', 'props-info-external'],
  );
  extractComponentProps(
    'Button',
    path.resolve(
      __dirname,
      '../../../node_modules/@theme-ui/components/index.d.ts',
    ),
  );
});
