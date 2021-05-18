import path from 'path';
import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['esm', 'props-info'], fileName, callback, {
    propsLoaders: [
      { name: '@component-controls/react-docgen-info', test: /\.(js|jsx)$/ },
      {
        name: '@component-controls/react-docgen-typescript-info',
        test: /\.(ts|tsx)$/,
      },
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
  });

describe('esm-props-info', () => {
  createTest('resolve-node-modules.jsx', parsed => {
    const component =
      parsed.components[parsed.doc.componentsLookup['PropsTable']];
    expect(component).toMatchObject({
      name: 'PropsTable',
      from: '@component-controls/blocks',
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
        '../BlockContainer/components/ComponentsBlockContainer': [
          {
            name: 'ComponentsBlockContainer',
            importedName: 'ComponentsBlockContainer',
          },
          {
            name: 'ComponentsBlockContainerProps',
            importedName: 'ComponentsBlockContainerProps',
          },
        ],
        '../context': [
          {
            name: 'useCustomProps',
            importedName: 'useCustomProps',
          },
        ],
        './BasePropsTable': [
          {
            name: 'BasePropsTable',
            importedName: 'BasePropsTable',
          },
        ],
      },
      importedName: 'PropsTable',
      jsx: [
        {
          children: [
            {
              children: [],
              name: 'BasePropsTable',
              attributes: [
                'component',
                'visibility',
                'extraColumns',
                'tableProps',
                'flat',
              ],
              from: './BasePropsTable',
              importedName: 'BasePropsTable',
            },
            {
              children: [
                {
                  children: [],
                  name: 'ControlsContextStoryProvider',
                  attributes: [],
                  from: '@component-controls/store',
                  importedName: 'ControlsContextStoryProvider',
                },
              ],
              name: 'StoryContextProvider',
              attributes: ['storyId'],
              from: '@component-controls/store',
              importedName: 'StoryContextProvider',
            },
          ],
          name: 'ComponentsBlockContainer',
          attributes: ['data-testid', 'visibility'],
          from: '../BlockContainer/components/ComponentsBlockContainer',
          importedName: 'ComponentsBlockContainer',
        },
      ],
      fileName: 'PropsTable.tsx',
    });
  });
});
