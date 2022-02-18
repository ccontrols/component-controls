import path from 'path';
import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['esm', 'props-info'], fileName, callback, {
    components: {
      sourceFiles: false,
      resolveFile: (componentName, filePath) => {
        if (filePath.includes('blocks/dist')) {
          const resolved = path.resolve(
            path.dirname(filePath),
            `../../src/${componentName}/${componentName}.tsx`,
          );
          return resolved;
        }
        return filePath;
      },
    },
  });

describe('esm-props-info', () => {
  createTest('resolve-node-modules.jsx', parsed => {
    const component =
      parsed.components[parsed.doc.componentsLookup['PropsTable']];
    expect(component).toMatchObject({
      name: 'PropsTable',
      from: '@component-controls/blocks',
      info: {
        externalDependencies: {
          'theme-ui': [
            {
              name: 'jsx',
              importedName: 'jsx',
            },
          ],
          react: [
            {
              name: 'FC',
              importedName: 'FC',
            },
          ],
          '@component-controls/store': [
            {
              name: 'StoryContextProvider',
              importedName: 'StoryContextProvider',
            },
            {
              name: 'ControlsContextStoryProvider',
              importedName: 'ControlsContextStoryProvider',
            },
          ],
        },
        localDependencies: {
          '../BlockContainer/components/ComponentsBlockContainer.tsx': [
            {
              name: 'ComponentsBlockContainer',
              importedName: 'ComponentsBlockContainer',
            },
            {
              name: 'ComponentsBlockContainerProps',
              importedName: 'ComponentsBlockContainerProps',
            },
          ],
          '../context.ts': [
            {
              name: 'useCustomProps',
              importedName: 'useCustomProps',
            },
          ],
          './BasePropsTable.tsx': [
            {
              name: 'BasePropsTable',
              importedName: 'BasePropsTable',
            },
          ],
        },
      },
      importedName: 'PropsTable',
      fileName: 'PropsTable.tsx',
    });
  });
});
