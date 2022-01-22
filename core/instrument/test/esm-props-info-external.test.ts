import path from 'path';
import { fixtureToTest, TestCallback } from './loadTestFiles';
import { getComponentProps } from '../src/misc/props-info';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['esm', 'props-info-external'], fileName, callback, {
    stories: { sourceFiles: false },
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
        Button: {
          see: ['https://theme-ui.com/components/button'],
          description: 'Primitive button component with variants',
          name: 'Button',
          properties: {
            as: {
              name: 'as',
              parent: {
                name: 'BoxOwnProps',
              },
              optional: true,
              kind: 15,
              type: 'React.ElementType',
              properties: [
                {
                  name: 'encodeHTML',
                  parent: {
                    name: 'String',
                  },
                  kind: 25,
                },
                {
                  name: 'at',
                  parent: {
                    name: 'RelativeIndexable',
                  },
                  kind: 11,
                  parameters: [
                    {
                      name: 'index',
                      kind: 2,
                    },
                  ],
                  returns: {
                    kind: 4,
                    properties: [
                      {
                        type: 'T',
                      },
                      {
                        kind: 8,
                      },
                    ],
                    optional: true,
                  },
                  description:
                    'Takes an integer value and returns the item at that index,\nallowing for positive and negative integers.\nNegative integers count back from the last item in the array.',
                },
              ],
            },
            m: {
              name: 'm',
              parent: {
                name: 'SpaceProps',
              },
              optional: true,
              kind: 4,
              properties: [
                {
                  kind: 4,
                  type: 'ResponsiveValue',
                  generics: [
                    {
                      type: 'TVal',
                    },
                    {
                      type: 'ThemeType',
                    },
                  ],
                  properties: [
                    {
                      type: 'T',
                    },
                    {
                      kind: 10,
                    },
                    {
                      kind: 16,
                      properties: [
                        {
                          kind: 4,
                          properties: [
                            {
                              type: 'T',
                            },
                            {
                              kind: 10,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: 'T',
                    },
                  ],
                },
                {
                  kind: 8,
                },
              ],
              description: 'Margin on top, left, bottom and right',
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
