import path from 'path';
import { loadStoriesTests } from './loadTestFiles';

describe('esm-props-info', () => {
  loadStoriesTests(
    {
      stories: { sourceFiles: false },
      propsLoaders: [
        { name: '@component-controls/react-docgen-info', test: /\.(js|jsx)$/ },
        {
          name: '@component-controls/react-docgen-typescript-info',
          test: /\.(ts|tsx)$/,
        },
        ,
      ],
      components: {
        sourceFiles: false,
        resolveFile: (componentName, filePath) => {
          if (filePath.includes('@component-controls/blocks')) {
            const resolved = path.resolve(
              path.dirname(filePath),
              `../../../../ui/blocks/src/${componentName}/${componentName}.tsx`,
            );
            return resolved;
          }
          return filePath;
        },
      },
    },
    ['esm', 'props-info'],
  );
});
