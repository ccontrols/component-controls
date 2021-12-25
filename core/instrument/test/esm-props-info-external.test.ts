import path from 'path';
import { fixtureToTest, TestCallback } from './loadTestFiles';
import { getComponentProps } from '../src/misc/props-info';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['esm', 'props-info-external'], fileName, callback, {
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
  });

describe('esm-props-info-external', () => {
  createTest('theme-ui.jsx', parsed => {
    const component = parsed.components[parsed.doc.componentsLookup['Button']];
    expect(component).toMatchObject({
      name: 'Button',
      from: 'theme-ui',
      externalDependencies: {
        react: [
          {
            name: 'React',
            importedName: 'namespace',
          },
        ],
        '@emotion/styled': [
          {
            name: 'StyledComponent',
            importedName: 'StyledComponent',
          },
        ],
        '@emotion/react': [
          {
            name: 'Interpolation',
            importedName: 'Interpolation',
          },
        ],
        'styled-system': [
          {
            name: 'SpaceProps',
            importedName: 'SpaceProps',
          },
          {
            name: 'ColorProps',
            importedName: 'ColorProps',
          },
          {
            name: 'MarginProps',
            importedName: 'MarginProps',
          },
        ],
        '@theme-ui/css': [
          {
            name: 'ResponsiveStyleValue',
            importedName: 'ResponsiveStyleValue',
          },
          {
            name: 'ThemeUIStyleObject',
            importedName: 'ThemeUIStyleObject',
          },
        ],
      },
      localDependencies: {},
      importedName: 'Button',
      jsx: [],
      fileName: 'index.d.ts',
      info: {
        tags: {
          see: 'https://theme-ui.com/components/button',
        },
        description: 'Primitive button component with variants',
        displayName: 'Button',
        methods: [],
        props: {
          as: {
            parentName: 'BoxOwnProps',
            type: {
              name: 'ElementType<any>',
              raw: 'ElementType<any>',
            },
          },
          m: {
            description: 'Margin on top, left, bottom and right',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw: 'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
        },
      },
      fileInfo: {
        sloc: {
          total: 395,
          source: 162,
          comment: 193,
          single: 2,
          block: 191,
          mixed: 0,
          empty: 40,
          todo: 0,
          blockEmpty: 0,
        },
      },
    });
  });

  it('component', async () => {
    const props = await getComponentProps(
      [
        {
          name: '@component-controls/react-docgen-info',
          test: /\.(js|jsx)$/,
        },
        {
          name: '@component-controls/react-docgen-typescript-info',
          test: /\.(ts|tsx)$/,
        },
      ],
      path.resolve(
        __dirname,
        '../../../node_modules/@theme-ui/components/index.d.ts',
      ),
      'Button',
    );

    expect(props).toMatchObject({
      tags: {
        see: 'https://theme-ui.com/components/button',
      },
      description: 'Primitive button component with variants',
      displayName: 'Button',
      methods: [],
      props: {
        margin: {
          description: 'Margin on top, left, bottom and right',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw: 'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
      },
    });
  });
});
