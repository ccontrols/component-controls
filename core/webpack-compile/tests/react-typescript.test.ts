import * as path from 'path';
import { compile } from '../src/index';

expect.addSnapshotSerializer({
  test: val => typeof val === 'object' && val instanceof String,
  print: val => {
    return `"${val.toString()}"`;
  },
});

describe('test typescript react settings', () => {
  it('compile', async () => {
    const { bundleName } = await compile({
      logOptions: {
        logLevel: 'none',
      },
      presets: ['react', 'react-docgen-typescript'],
      configPath: path.resolve(__dirname, 'fixtures'),
    });
    const bundle = require(bundleName);
    const store = bundle.stores[0];
    expect(store).toMatchObject({
      stories: {
        overview: {
          loc: {
            start: {
              column: 49,
              line: 27,
            },
            end: {
              column: 1,
              line: 43,
            },
          },
          name: 'overview',
          id: 'overview',
          arguments: [
            {
              value: [
                {
                  value: 'themeKey',
                  name: 'themeKey',
                  loc: {
                    start: {
                      line: 0,
                      column: 3,
                    },
                    end: {
                      line: 0,
                      column: 11,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 3,
                          column: 16,
                        },
                        end: {
                          line: 3,
                          column: 24,
                        },
                      },
                    },
                  ],
                },
              ],
              loc: {
                start: {
                  line: 0,
                  column: 1,
                },
                end: {
                  line: 0,
                  column: 13,
                },
              },
            },
          ],
          controls: {
            themeKey: {
              type: 'options',
              options: ['actionbar', 'toolbar', 'footer'],
              value: 'actionbar',
            },
          },
          source:
            "({ themeKey }) => (\n  <Container>\n    <ActionBar\n      themeKey={themeKey}\n      actions={[\n        {\n          node: 'action 1',\n          onClick: () => console.log('clicked'),\n        },\n        {\n          node: <ExternalLink href=\"https://google.com\">google</ExternalLink>,\n          onClick: () => console.log('clicked'),\n        },\n      ]}\n    />\n  </Container>\n)",
        },
        link: {
          loc: {
            start: {
              column: 29,
              line: 53,
            },
            end: {
              column: 1,
              line: 63,
            },
          },
          name: 'link',
          id: 'link',
          arguments: [],
          source:
            '() => (\n  <Container>\n    <ActionBar\n      actions={[\n        {\n          node: <ExternalLink href="https://google.com">google</ExternalLink>,\n        },\n      ]}\n    />\n  </Container>\n)',
        },
        order: {
          loc: {
            start: {
              column: 30,
              line: 65,
            },
            end: {
              column: 1,
              line: 82,
            },
          },
          name: 'order',
          id: 'order',
          arguments: [],
          source:
            "() => (\n  <Container>\n    <ActionBar\n      actions={[\n        {\n          node: 'action 1',\n          onClick: () => console.log('clicked'),\n          order: 1,\n        },\n        {\n          node: <ExternalLink href=\"https://google.com\">google</ExternalLink>,\n          onClick: () => console.log('clicked'),\n          order: 0,\n        },\n      ]}\n    />\n  </Container>\n)",
        },
        override: {
          loc: {
            start: {
              column: 33,
              line: 84,
            },
            end: {
              column: 1,
              line: 104,
            },
          },
          name: 'override',
          id: 'override',
          arguments: [],
          source:
            "() => (\n  <Container>\n    <ActionBar\n      actions={[\n        {\n          node: 'action 1',\n          onClick: () => console.log('clicked'),\n          id: 'copy',\n        },\n        {\n          node: <ExternalLink href=\"https://google.com\">google</ExternalLink>,\n          onClick: () => console.log('clicked'),\n        },\n        {\n          node: 'Copy',\n          id: 'copy',\n        },\n      ]}\n    />\n  </Container>\n)",
        },
        groupEnd: {
          loc: {
            start: {
              column: 33,
              line: 106,
            },
            end: {
              column: 1,
              line: 124,
            },
          },
          name: 'groupEnd',
          id: 'groupEnd',
          arguments: [],
          source:
            "() => (\n  <Container>\n    <ActionBar\n      actions={[\n        {\n          node: 'item 1',\n        },\n        {\n          node: 'item 2',\n          group: '1',\n        },\n        {\n          node: 'item 3',\n          group: '1',\n        },\n      ]}\n    />\n  </Container>\n)",
        },
        groupStart: {
          loc: {
            start: {
              column: 35,
              line: 126,
            },
            end: {
              column: 1,
              line: 144,
            },
          },
          name: 'groupStart',
          id: 'groupStart',
          arguments: [],
          source:
            "() => (\n  <Container>\n    <ActionBar\n      actions={[\n        {\n          node: 'item 1',\n          group: '1',\n        },\n        {\n          node: 'item 2',\n          group: '1',\n        },\n        {\n          node: 'item 3',\n        },\n      ]}\n    />\n  </Container>\n)",
        },
      },
      doc: {
        title: 'Components/ActionBar',
        component: 'ActionBar',
        category: 'Navigation',
        componentsLookup: {
          ActionBar: 'fded7dbaa855ea6869a794f877eab680',
        },
      },
    });

    expect(bundle.components).toMatchObject({
      fded7dbaa855ea6869a794f877eab680: {
        name: 'ActionBar',
        from: './ActionBar',
        externalDependencies: {
          react: [
            {
              name: 'FC',
              importedName: 'FC',
            },
            {
              name: 'useMemo',
              importedName: 'useMemo',
            },
          ],
          'theme-ui': [
            {
              name: 'Box',
              importedName: 'Box',
            },
            {
              name: 'Button',
              importedName: 'Button',
            },
            {
              name: 'jsx',
              importedName: 'jsx',
            },
          ],
        },
        localDependencies: {
          './utils': [
            {
              name: 'getSortedActions',
              importedName: 'getSortedActions',
            },
            {
              name: 'ActionItems',
              importedName: 'ActionItems',
            },
          ],
          '../Link': [
            {
              name: 'Link',
              importedName: 'Link',
            },
          ],
        },
        importedName: 'ActionBar',
        jsx: [
          {
            children: [
              {
                children: [],
                name: 'Link',
                attributes: ['variant', 'href', 'aria-label'],
                from: '../Link',
                importedName: 'Link',
              },
              {
                children: [],
                name: 'Button',
                attributes: ['variant', 'onClick', 'aria-label'],
                from: 'theme-ui',
                importedName: 'Button',
              },
            ],
            name: 'Box',
            attributes: ['key', 'sx'],
            from: 'theme-ui',
            importedName: 'Box',
          },
          {
            children: [
              {
                children: [],
                name: 'Box',
                attributes: ['variant'],
                from: 'theme-ui',
                importedName: 'Box',
              },
            ],
            name: 'Box',
            attributes: ['variant'],
            from: 'theme-ui',
            importedName: 'Box',
          },
        ],
        fileName: 'ActionBar.tsx',
        info: {
          tags: {},
          description:
            'A strip of actions to be attached to a container.\nThe action items contain the labels and click event handlers.\nActions can accept an order prop, and can also overwrite default actions.',
          displayName: 'ActionBar',
          methods: [],
          props: {
            actions: {
              description: 'collection of action items',
              parentName: 'ActionBarProps',
              defaultValue: '[]',
              type: {
                name: 'ActionItems',
                raw: 'ActionItems',
              },
            },
            themeKey: {
              description:
                "custom layouts from the theme, defaults to 'actionbar'",
              parentName: 'ActionBarProps',
              defaultValue: 'actionbar',
              type: {
                name: 'string',
                raw: 'string',
              },
            },
          },
        },
        fileInfo: {
          sloc: {
            total: 78,
            source: 62,
            comment: 13,
            single: 0,
            block: 13,
            mixed: 0,
            empty: 3,
            todo: 0,
            blockEmpty: 0,
          },
        },
      },
    });

    expect(bundle.buildConfig).toMatchObject({
      siteRoot: '/',
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
      stories: [
        '../../../../ui/components/src/ActionBar/*.stories.(js|jsx|tsx|mdx)',
      ],
    });
  }, 30000);
});
