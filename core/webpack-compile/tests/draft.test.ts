import * as path from 'path';
import { compile } from '../src/index';

expect.addSnapshotSerializer({
  test: val => typeof val === 'object' && val instanceof String,
  print: val => {
    return `"${val.toString().trim()}"`;
  },
});

describe('test draft', () => {
  it('compile', async () => {
    const { store } = await compile({
      logOptions: {
        logLevel: 'none',
      },
      presets: ['react', 'react-docgen-typescript'],
      //configPath: path.resolve(__dirname, 'fixtures', 'draft'),
      configPath: path.resolve(
        __dirname,
        '../../../examples',
        'starter',
        '.config',
      ),
    });
    const store1 = store.stores.find(
      store => store.doc.title === 'Library/Components/Button',
    );
    expect(store1).toMatchObject({
      stories: {
        overview: {
          name: 'overview',
          id: 'overview',
          source: '() => <Button>theme-ui</Button>',
        },
      },
      doc: {
        title: 'Library/Components/Button',
        order: 2,
        component: 'Button',
      },
    });

    const store2 = store.stores.find(store => store.doc.title === 'First blog');
    expect(store2).toMatchObject({
      stories: {},
      doc: {
        isMDXComponent: true,
        type: 'blog',
        title: 'First blog',
      },
    });
    const store3 = store.stores.find(store => store.doc.title === 'First Page');
    expect(store3).toMatchObject({
      stories: {},
      doc: {
        isMDXComponent: true,
        title: 'First Page',
      },
    });

    const store4 = store.stores.find(
      store => store.doc.title === 'Library/Components/MDX',
    );
    expect(store4).toMatchObject({
      stories: {
        overview: {
          name: 'overview',
          component: 'Spinner',
          id: 'overview',
          loc: {
            start: {
              column: 9,
              line: 13,
            },
            end: {
              column: 65,
              line: 13,
            },
          },
          arguments: [
            {
              value: [
                {
                  value: 'color',
                  name: 'color',
                  loc: {
                    start: {
                      line: 0,
                      column: 3,
                    },
                    end: {
                      line: 0,
                      column: 8,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 0,
                          column: 31,
                        },
                        end: {
                          line: 0,
                          column: 36,
                        },
                      },
                    },
                  ],
                },
              ],
              name: undefined,
              loc: {
                start: {
                  line: 0,
                  column: 1,
                },
                end: {
                  line: 0,
                  column: 10,
                },
              },
            },
          ],
          source: '({ color }) => <Spinner color={color}>click me</Spinner>',
        },
      },
      doc: {
        isMDXComponent: true,
        order: 0,
        title: 'Library/Components/MDX',
      },
    });

    expect(store.components).toMatchObject({
      ef6966a6426a2258b8bb2a8cd8daf14e: {
        name: 'Spinner',
        from: '../components/Spinner',
        externalDependencies: {
          react: [
            {
              name: 'React',
              importedName: 'default',
            },
          ],
          polished: [
            {
              name: 'lighten',
              importedName: 'lighten',
            },
          ],
          'prop-types': [
            {
              name: 'PropTypes',
              importedName: 'default',
            },
          ],
        },
        importedName: 'Spinner',
        jsx: [
          {
            children: [],
            name: 'button',
            attributes: ['type', 'disabled', 'onClick', 'style'],
          },
        ],
        fileName: 'Spinner.js',
        source:
          "import React from 'react';\nimport { lighten } from 'polished';\nimport PropTypes from 'prop-types';\n\n/**\n * Spinner with react PropTypes\n */\nexport const Spinner = ({\n  disabled,\n  children,\n  onClick,\n  style,\n  backgroundColor,\n  color,\n  type,\n  padding,\n}) => (\n  <button\n    type={type}\n    disabled={disabled}\n    onClick={onClick}\n    style={{\n      ...style,\n      backgroundColor,\n      color: lighten(disabled ? 0.4 : 0, color),\n      padding,\n    }}\n  >\n    {children}\n  </button>\n);\n\nSpinner.defaultProps = {\n  disabled: false,\n  children: 'default',\n  onClick: () => {},\n  style: {},\n  backgroundColor: '#fefefe',\n  color: 'black',\n  type: 'button',\n  padding: 5,\n};\n\nSpinner.propTypes = {\n  /**\n   * Boolean indicating whether the button should render as disabled\n   */\n  disabled: PropTypes.bool,\n\n  /**\n   * button label\n   */\n  children: PropTypes.string,\n\n  /**\n   * onClick handler\n   */\n  onClick: PropTypes.func,\n\n  /**\n   * Custom styles\n   */\n  style: PropTypes.shape({}),\n\n  /**\n   * Background color\n   */\n  backgroundColor: PropTypes.string,\n\n  /**\n   * Text color, default black\n   */\n  color: PropTypes.string,\n\n  /**\n   * Button type\n   */\n  type: PropTypes.oneOf(['button', 'reset', 'submit']),\n\n  /**\n   * Numeric  field type\n   */\n  padding: PropTypes.number,\n};\n",
        info: {
          description: 'Spinner with react PropTypes',
          displayName: 'Spinner',
          methods: [],
          props: {
            disabled: {
              description:
                'Boolean indicating whether the button should render as disabled',
              defaultValue: 'false',
              type: {
                name: 'boolean',
              },
            },
            children: {
              description: 'button label',
              defaultValue: "'default'",
              type: {
                name: 'string',
                required: false,
              },
            },
            onClick: {
              description: 'onClick handler',
              defaultValue: '() => {}',
              type: {
                name: 'function',
                required: false,
              },
            },
            style: {
              description: 'Custom styles',
              defaultValue: '{}',
              type: {
                name: 'object',
                value: [],
              },
            },
            backgroundColor: {
              description: 'Background color',
              defaultValue: "'#fefefe'",
              type: {
                name: 'string',
                required: false,
              },
            },
            color: {
              description: 'Text color, default black',
              defaultValue: "'black'",
              type: {
                name: 'string',
                required: false,
              },
            },
            type: {
              description: 'Button type',
              defaultValue: "'button'",
              type: {
                name: 'enum',
                value: [
                  {
                    name: 'string',
                    value: "'button'",
                  },
                  {
                    name: 'string',
                    value: "'reset'",
                  },
                  {
                    name: 'string',
                    value: "'submit'",
                  },
                ],
              },
            },
            padding: {
              description: 'Numeric  field type',
              defaultValue: '5',
              type: {
                name: 'number',
                required: false,
              },
            },
          },
        },
        fileInfo: {
          sloc: {
            total: 84,
            source: 47,
            comment: 27,
            single: 0,
            block: 27,
            mixed: 0,
            empty: 10,
            todo: 0,
            blockEmpty: 0,
          },
          commits: [
            {
              hash: '3e9724f3d740da33bd277b03f8a83017159be114',
              subject: 'docs: added starter example',
              authorName: 'atanasster',
              authorDate: '2020-07-19T04:05:43.000Z',
              authorEmail: 'atanasster@gmail.com',
              committerName: 'atanasster',
              committerDate: '2020-07-19T04:05:43.000Z',
              committerEmail: 'atanasster@gmail.com',
            },
          ],
        },
      },
      '5a3b7658720a0f4b8c0fd61ba5fb8c34': {
        name: 'Button',
        from: '../components/Button',
        externalDependencies: {
          react: [
            {
              name: 'React',
              importedName: 'default',
            },
            {
              name: 'FC',
              importedName: 'FC',
            },
          ],
        },
        localDependencies: {},
        importedName: 'Button',
        jsx: [
          {
            children: [],
            name: 'button',
            attributes: ['type', 'disabled', 'onClick', 'style'],
          },
        ],
        fileName: 'Button.tsx',
        source:
          "import React, { FC } from 'react';\n\nexport interface ButtonProps {\n  /**\n   *  Boolean indicating whether the button should render as disabled\n   */\n  disabled?: boolean;\n\n  /**\n   * Background color\n   */\n  backgroundColor?: string;\n\n  /**\n   * Text color, default black\n   */\n  color?: string;\n\n  /**\n   * Numeric  field type\n   */\n  padding?: number;\n\n  /**\n   * Button type\n   */\n  type?: 'button' | 'reset' | 'submit';\n\n  /**\n   * Custom styles\n   */\n  style?: object;\n  /**\n   * button label\n   */\n  children?: string;\n\n  /**\n   * onClick handler\n   */\n  onClick?: () => void;\n}\n\n/**\n * Button with react Typescript properties\n */\nexport const Button: FC<ButtonProps> = ({\n  disabled,\n  children,\n  onClick,\n  style,\n  backgroundColor,\n  color,\n  type,\n  padding,\n}) => (\n  <button\n    type={type}\n    disabled={disabled}\n    onClick={onClick}\n    style={{\n      ...style,\n      backgroundColor,\n      color,\n      padding,\n    }}\n  >\n    {children}\n  </button>\n);\n\nButton.defaultProps = {\n  disabled: false,\n  children: 'default',\n  onClick: () => {},\n  style: {},\n  backgroundColor: '#fefefe',\n  color: 'black',\n  type: 'button',\n  padding: 5,\n};\n",
        info: {
          tags: {},
          description: 'Button with react Typescript properties',
          displayName: 'Button',
          methods: [],
          props: {
            disabled: {
              description:
                'Boolean indicating whether the button should render as disabled',
              parentName: 'ButtonProps',
              defaultValue: false,
              type: {
                name: 'boolean',
                raw: 'boolean',
              },
            },
            backgroundColor: {
              description: 'Background color',
              parentName: 'ButtonProps',
              defaultValue: '#fefefe',
              type: {
                name: 'string',
                raw: 'string',
              },
            },
            color: {
              description: 'Text color, default black',
              parentName: 'ButtonProps',
              defaultValue: 'black',
              type: {
                name: 'string',
                raw: 'string',
              },
            },
            padding: {
              description: 'Numeric  field type',
              parentName: 'ButtonProps',
              defaultValue: 5,
              type: {
                name: 'number',
                raw: 'number',
              },
            },
            type: {
              description: 'Button type',
              parentName: 'ButtonProps',
              defaultValue: 'button',
              type: {
                name: 'enum',
                value: [
                  {
                    name: 'string',
                    value: 'undefined',
                  },
                  {
                    name: 'string',
                    value: 'button',
                  },
                  {
                    name: 'string',
                    value: 'reset',
                  },
                  {
                    name: 'string',
                    value: 'submit',
                  },
                ],
                raw: '"button" | "reset" | "submit" | undefined',
              },
            },
            style: {
              description: 'Custom styles',
              parentName: 'ButtonProps',
              defaultValue: '{}',
              type: {
                name: 'object',
                raw: 'object',
              },
            },
            children: {
              description: 'button label',
              parentName: 'ButtonProps',
              defaultValue: 'default',
              type: {
                name: 'function',
                raw:
                  'string | (string & {}) | (string & ReactElement<any, string | ((props: any) => ReactElement<any, any> | null) | (new (props: any) => Component<any, any, any>)>) | (string & ReactNodeArray) | (string & ReactPortal)',
              },
            },
            onClick: {
              description: 'onClick handler',
              parentName: 'ButtonProps',
              defaultValue: '() => {}',
              type: {
                name: 'function',
                raw: '(() => void)',
              },
            },
          },
        },
        fileInfo: {
          sloc: {
            total: 81,
            source: 45,
            comment: 27,
            single: 0,
            block: 27,
            mixed: 0,
            empty: 9,
            todo: 0,
            blockEmpty: 0,
          },
          commits: [
            {
              hash: 'e9fc88d90f6f9541d8744530b49c8c595fbe7b99',
              subject: 'docs: update tutorial stories',
              authorName: 'atanasster',
              authorDate: '2020-07-20T04:41:19.000Z',
              authorEmail: 'atanasster@gmail.com',
              committerName: 'atanasster',
              committerDate: '2020-07-20T04:41:19.000Z',
              committerEmail: 'atanasster@gmail.com',
            },
            {
              hash: '3e9724f3d740da33bd277b03f8a83017159be114',
              subject: 'docs: added starter example',
              authorName: 'atanasster',
              authorDate: '2020-07-19T04:05:43.000Z',
              authorEmail: 'atanasster@gmail.com',
              committerName: 'atanasster',
              committerDate: '2020-07-19T04:05:43.000Z',
              committerEmail: 'atanasster@gmail.com',
            },
          ],
        },
      },
    });
    expect(store.buildConfig).toMatchObject({
      siteRoot: '/root/',
      siteMap: {
        pages: {
          home: {
            priority: 1,
          },
          index: {
            priority: 0.8,
          },
          doc: {
            priority: 0.5,
          },
        },
      },
      categories: ['author', 'tags'],
      ignore: [
        'readme.md',
        'changelog.md',
        'code_of_conduct.md',
        'contributing.md',
        'license.md',
      ],
      pages: {
        story: {
          basePath: 'docs/',
          sideNav: {
            storyPaths: true,
            collapseSingle: true,
          },
          tabs: {},
        },
        blog: {
          basePath: 'blogs/',
        },
        author: {
          basePath: 'authors/',
        },
        page: {
          basePath: 'pages/',
        },
        tags: {
          basePath: 'tags/',
        },
      },
      search: {
        searchingModule: '@component-controls/search-fusejs',
      },
      bundleName: 'component-controls.js',
      cssFileName: undefined,
      stories: ['../src/docs/*.@(mdx|tsx)'],
    });
  }, 50000);
});
