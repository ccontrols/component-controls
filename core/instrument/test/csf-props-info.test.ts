import path from 'path';
import { loadStoriesTests } from './loadTestFiles';

describe('csf-props-info', () => {
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
    ['csf', 'props-info'],
  );
});
