/* eslint-disable react/display-name */
import React, { ReactElement } from 'react';
import { Button, Heading } from 'theme-ui';
import {
  Store,
  getDefaultStore,
  ControlTypes,
  defaultBuildConfig,
  deepMerge,
  defaultRunConfig,
} from '@component-controls/core';
import { render as reactRender } from '@component-controls/render/react';
import ClassicPage from '@component-controls/pages/ClassicPage';
import { Donut } from '@component-controls/components';
import { MDXContent } from './MDXStory';

import img_example from './image_example.jpg';

export const store: Store = {
  ...getDefaultStore(),
  search: require('@component-controls/search-fusejs').default,
  config: {
    ...deepMerge(defaultBuildConfig, defaultRunConfig),
    renderFn: reactRender,
    pages: {
      ...defaultBuildConfig.pages,
      story: {
        ...defaultBuildConfig.pages?.story,
        tabs: { page: ClassicPage },
      },
    },
  },
  packages: {
    'test-package': {
      fileHash: '28feb04b2447384a0bd648387e62bbc7',
      name: '@component-controls/blocks',
      version: '1.0.3',
      repository: {
        browse:
          'https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/Title/Title.stories.tsx',
        docs: 'https://github.com/ccontrols/component-controls/tree/master#readme',
        issues: 'https://github.com/ccontrols/component-controls/issues',
      },
      dependencies: {
        '@component-controls/components': '^1.0.1',
        '@component-controls/core': '^1.0.1',
        '@component-controls/editors': '^1.0.1',
        '@component-controls/store': '^1.0.3',
        '@mdx-js/react': '^1.6.5',
        '@primer/octicons-react': '^10.0.0',
        'copy-to-clipboard': '^3.2.1',
        global: '^4.3.2',
        'js-string-escape': '^1.0.1',
        react: '^16.13.1',
        'react-dom': '^16.13.1',
        'react-table': '^7.0.0',
        'stringify-object': '^3.3.0',
        'theme-ui': '^0.3.1',
      },
      devDependencies: {
        '@theme-ui/presets': '^0.6.0-alpha.7',
        '@types/jest': '^26.0.10',
        '@types/mdx-js__react': '^1.5.1',
        '@types/stringify-object': '^3.2.0',
        '@types/theme-ui': '^0.3.0',
        'cross-env': '^5.2.1',
        eslint: '^6.5.1',
        jest: '^26.4.2',
      },
      peerDependencies: {
        '@primer/octicons-react': '*',
        react: '^16.13.1',
        'react-dom': '^16.13.1',
        'react-table': '*',
        'theme-ui': '*',
      },
    },
  },
  components: {
    ArrowButton: {
      from: '../../components/button-default-arrow-func',
      importedName: 'default',
      name: 'ArrowButton',
      jsx: [
        {
          from: './Button',
          name: 'Button',
          componentKey: 'Button',
          importedName: 'Button',
          attributes: ['ref', 'id'],
        },
      ],
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
        '@component-controls/components': [
          {
            name: 'Table',
            importedName: 'Table',
          },
        ],
      },
      localDependencies: {
        './Button': [
          {
            name: 'Button',
            importedName: 'Button',
          },
          {
            name: 'ButtonProps',
            importedName: 'ButtonProps',
          },
        ],
        '@component-controls/components': [
          {
            name: 'Table',
            importedName: 'Table',
          },
        ],
      },
      package: 'test-package',
    },
    Button: {
      from: '../../components/button-named-arrow-func',
      importedName: 'Button',
      name: 'Button',
      info: {
        description: `
Markdown descripton for component.
# With a heading
and some bold **text**
        `,
        displayName: 'typescript',
        props: {
          optionalArray: {
            parentName: 'MyComponentProps',
            type: {
              name: 'array',
              raw: 'any[]',
              value: [
                {
                  name: 'any',
                },
              ],
            },
          },
          optionalArrayOf: {
            parentName: 'MyComponentProps',
            type: {
              name: 'array',
              raw: 'number[]',
              value: [
                {
                  name: 'number',
                },
              ],
            },
          },
          optionalBool: {
            parentName: 'MyComponentProps',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          optionalElement: {
            parentName: 'MyComponentProps',
            type: {
              name: 'any',
              raw: 'any',
            },
          },
          optionalElementType: {
            parentName: 'MyComponentProps',
            type: {
              name: 'Element',
              raw: 'Element',
            },
          },
          optionalEnum: {
            parentName: 'MyComponentProps',
            type: {
              name: 'enum',
              raw: '"News" | "Photos"',
              value: [
                {
                  name: 'string',
                  value: 'News',
                },
                {
                  name: 'string',
                  value: 'Photos',
                },
              ],
            },
          },
          optionalFunc: {
            parentName: 'MyComponentProps',
            type: {
              name: 'function',
              raw: '(args: any) => any',
            },
          },
          optionalMessage: {
            parentName: 'MyComponentProps',
            type: {
              name: 'Message',
              raw: 'Message',
            },
          },
          optionalNode: {
            parentName: 'MyComponentProps',
            type: {
              name: 'any',
              raw: 'any',
            },
          },
          optionalNumber: {
            defaultValue: 21,
            parentName: 'MyComponentProps',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          optionalObject: {
            parentName: 'MyComponentProps',
            type: {
              name: 'object',
              raw: 'object',
            },
          },
          optionalObjectOf: {
            parentName: 'MyComponentProps',
            type: {
              name: 'object',
              raw: '{ [key: string]: number; }',
            },
          },
          optionalObjectWithShape: {
            parentName: 'MyComponentProps',
            type: {
              name: 'object',
              raw: '{ optionalProperty?: string; requiredProperty: number; }',
            },
          },
          optionalObjectWithStrictShape: {
            parentName: 'MyComponentProps',
            type: {
              name: 'object',
              raw: '{ optionalProperty?: string; requiredProperty: number; }',
            },
          },
          optionalString: {
            parentName: 'MyComponentProps',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          optionalSymbol: {
            parentName: 'MyComponentProps',
            type: {
              name: 'symbol',
              raw: 'symbol',
            },
          },
          optionalUnion: {
            parentName: 'MyComponentProps',
            type: {
              name: 'union',
              raw: 'string | number | Message',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'Message',
                },
              ],
            },
          },
          requiredAny: {
            parentName: 'MyComponentProps',
            type: {
              name: 'any',
              raw: 'any',
              required: true,
            },
          },
          requiredFunc: {
            parentName: 'MyComponentProps',
            type: {
              name: 'function',
              raw: '(prop: any) => any',
              required: true,
            },
          },
        },
      },
    },
    Control: {
      from: '../../components/button-named-arrow-func',
      importedName: 'Button',
      name: 'Button',
      fileInfo: {
        sloc: {
          total: 28,
          source: 25,
          comment: 1,
          single: 0,
          block: 1,
          mixed: 0,
          empty: 2,
          todo: 5,
          blockEmpty: 0,
        },
        commits: [
          {
            committerName: 'martin-stoyanov',
            authorName: 'martin-stoyanov',
            authorDate: '2021-02-23T22:48:26.000Z',
            subject: 'third commit',
          },
          {
            committerName: 'martin-stoyanov',
            authorName: 'martin-stoyanov',
            authorDate: '2021-02-22T22:48:26.000Z',
            subject: '(งツ)ว',
          },
          {
            committerName: 'atanasster',
            authorName: 'atanasster',
            authorDate: '2021-02-21T22:48:26.000Z',
            subject: 'first commit!',
          },
          {
            committerName: 'atanasster',
            authorName: 'atanasster',
            authorDate: '2021-02-21T22:48:26.000Z',
            subject: 'first commit!',
          },
          {
            committerName: 'martin-stoyanov',
            authorName: 'martin-stoyanov',
            authorDate: '2021-02-21T22:48:26.000Z',
            subject: 'first commit!',
          },
          {
            committerName: 'atanasster',
            authorName: 'atanasster',
            authorDate: '2021-02-21T22:48:26.000Z',
            subject: 'first commit!',
          },
          {
            committerName: 'atanasster',
            authorName: 'atanasster',
            authorDate: '2021-02-21T22:48:26.000Z',
            subject: 'first commit!',
          },
          {
            committerName: 'atanasster',
            authorName: 'atanasster',
            authorDate: '2021-02-21T22:48:26.000Z',
            subject: 'first commit!',
          },
          {
            committerName: 'atanasster',
            authorName: 'atanasster',
            authorDate: '2021-02-21T22:48:26.000Z',
            subject: 'first commit!',
          },
          {
            committerName: 'atanasster',
            authorName: 'atanasster',
            authorDate: '2021-02-21T22:48:26.000Z',
            subject: 'first commit!',
          },
          {
            committerName: 'atanasster',
            authorName: 'atanasster',
            authorDate: '2021-02-21T22:48:26.000Z',
            subject: 'first commit!',
          },
          {
            committerName: 'atanasster',
            authorName: 'atanasster',
            authorDate: '2021-02-21T22:48:26.000Z',
            subject: 'first commit!',
          },
        ],
      },
      jest: {
        results: [
          {
            leaks: false,
            perfStats: {
              end: 1618979220883,
              runtime: 5950,
              slow: true,
              start: 1618979214933,
            },
            testFilePath: 'Table.test.ts',
            testResults: [
              {
                ancestorTitles: ['Table'],
                duration: 196,
                failureDetails: [],
                fullName: 'Table overview',
                numPassingAsserts: 0,
                status: 'passed',
                title: 'overview',
              },
              {
                ancestorTitles: ['Table'],
                duration: 91,
                failureDetails: [],
                fullName: 'Table noHeader',
                numPassingAsserts: 0,
                status: 'passed',
                title: 'noHeader',
              },
              {
                ancestorTitles: ['Table'],
                duration: 33,
                failureDetails: [
                  {
                    message:
                      '\u001b[2mexpect(\u001b[22m\u001b[38;2;0;95;95m\u001b[48;2;215;255;255mreceived\u001b[49m\u001b[39m\u001b[2m).\u001b[22mtoMatchSnapshot\u001b[2m()\u001b[22m\n\nSnapshot name: `Table editing 1`\n\n\u001b[38;2;128;0;128m\u001b[48;2;255;215;255m- Snapshot  - 1\u001b[49m\u001b[39m\n\u001b[38;2;0;95;95m\u001b[48;2;215;255;255m+ Received  + 1\u001b[49m\u001b[39m\n\n\u001b[33m@@ -40,11 +40,11 @@\u001b[39m\n\u001b[2m            class="css-l4u9co"\u001b[22m\n\u001b[2m            role="cell"\u001b[22m\n\u001b[2m            style="width: 150px;"\u001b[22m\n\u001b[2m          >\u001b[22m\n\u001b[2m            <input\u001b[22m\n\u001b[38;2;128;0;128m\u001b[48;2;255;215;255m-             value="sample"\u001b[49m\u001b[39m\n\u001b[38;2;0;95;95m\u001b[48;2;215;255;255m+             value="example"\u001b[49m\u001b[39m\n\u001b[2m            />\u001b[22m\n\u001b[2m          </td>\u001b[22m\n\u001b[2m        </tr>\u001b[22m\n\u001b[2m      </tbody>\u001b[22m\n\u001b[2m    </table>\u001b[22m',
                  },
                ],
                fullName: 'Table editing',
                numPassingAsserts: 0,
                status: 'failed',
                title: 'editing',
              },
              {
                ancestorTitles: ['Table'],
                duration: 33,
                failureDetails: [],
                fullName: 'Table disable',
                numPassingAsserts: 0,
                status: 'disabled',
                title: 'disable',
              },
              {
                ancestorTitles: ['Table'],
                duration: 33,
                failureDetails: [],
                fullName: 'Table pending',
                numPassingAsserts: 0,
                status: 'pending',
                title: 'pending',
              },
              {
                ancestorTitles: ['Table'],
                duration: 33,
                failureDetails: [],
                fullName: 'Table skipped',
                numPassingAsserts: 0,
                status: 'skipped',
                title: 'skipped',
              },
              {
                ancestorTitles: ['Table'],
                duration: 33,
                failureDetails: [],
                fullName: 'Table todo',
                numPassingAsserts: 0,
                status: 'todo',
                title: 'todo',
              },
              {
                ancestorTitles: ['Table'],
                duration: 144,
                failureDetails: [],
                fullName: 'Table rowSelect',
                numPassingAsserts: 0,
                status: 'passed',
                title: 'rowSelect',
              },
              {
                ancestorTitles: ['Table'],
                duration: 169,
                failureDetails: [],
                fullName: 'Table pagination',
                numPassingAsserts: 0,
                status: 'passed',
                title: 'pagination',
              },
              {
                ancestorTitles: ['Table'],
                duration: 115,
                failureDetails: [],
                fullName: 'Table sortable',
                numPassingAsserts: 0,
                status: 'passed',
                title: 'sortable',
              },
              {
                ancestorTitles: ['Table'],
                duration: 115,
                failureDetails: [],
                fullName: 'Table filterable',
                numPassingAsserts: 0,
                status: 'passed',
                title: 'filterable',
              },
              {
                ancestorTitles: ['Table'],
                duration: 89,
                failureDetails: [],
                fullName: 'Table grouping',
                numPassingAsserts: 0,
                status: 'passed',
                title: 'grouping',
              },
            ],
          },
        ],
        coverage: {
          'Table.tsx': {
            lines: {
              total: 51,
              covered: 50,
              skipped: 0,
              pct: 98.04,
            },
            functions: {
              total: 10,
              covered: 7,
              skipped: 0,
              pct: 70,
            },
            statements: {
              total: 56,
              covered: 55,
              skipped: 0,
              pct: 98.21,
            },
            branches: {
              total: 49,
              covered: 40,
              skipped: 0,
              pct: 81.63,
            },
          },
          'TableFilter.tsx': {
            lines: {
              total: 6,
              covered: 5,
              skipped: 0,
              pct: 83.33,
            },
            functions: {
              total: 2,
              covered: 1,
              skipped: 0,
              pct: 50,
            },
            statements: {
              total: 6,
              covered: 5,
              skipped: 0,
              pct: 83.33,
            },
            branches: {
              total: 4,
              covered: 1,
              skipped: 0,
              pct: 25,
            },
          },
          'TableGrouping.tsx': {
            lines: {
              total: 20,
              covered: 19,
              skipped: 0,
              pct: 95,
            },
            functions: {
              total: 8,
              covered: 8,
              skipped: 0,
              pct: 100,
            },
            statements: {
              total: 21,
              covered: 20,
              skipped: 0,
              pct: 95.24,
            },
            branches: {
              total: 20,
              covered: 15,
              skipped: 0,
              pct: 75,
            },
          },
          'TableRowSelection.tsx': {
            lines: {
              total: 8,
              covered: 8,
              skipped: 0,
              pct: 100,
            },
            functions: {
              total: 5,
              covered: 5,
              skipped: 0,
              pct: 100,
            },
            statements: {
              total: 10,
              covered: 10,
              skipped: 0,
              pct: 100,
            },
            branches: {
              total: 0,
              covered: 0,
              skipped: 0,
              pct: 100,
            },
          },
          'useTableLayout.ts': {
            lines: {
              total: 7,
              covered: 7,
              skipped: 0,
              pct: 100,
            },
            functions: {
              total: 3,
              covered: 3,
              skipped: 0,
              pct: 100,
            },
            statements: {
              total: 8,
              covered: 8,
              skipped: 0,
              pct: 100,
            },
            branches: {
              total: 4,
              covered: 4,
              skipped: 0,
              pct: 100,
            },
          },
          'TablePagination.tsx': {
            lines: {
              total: 17,
              covered: 9,
              skipped: 0,
              pct: 52.94,
            },
            functions: {
              total: 10,
              covered: 3,
              skipped: 0,
              pct: 30,
            },
            statements: {
              total: 18,
              covered: 10,
              skipped: 0,
              pct: 55.56,
            },
            branches: {
              total: 24,
              covered: 8,
              skipped: 0,
              pct: 33.33,
            },
          },
        },
      },
      info: {
        description: `
Markdown **descripton** for *component*.
        `,
        displayName: 'Control',
        props: {
          name: {
            type: {
              name: 'string',
            },
            description: 'a name property',
          },
          age: {
            type: {
              name: 'number',
            },
            description: 'age is a number property',
          },
        },
      },
    },
  },
  docs: {
    Story: {
      renderFn: reactRender,
      date: new Date('2020-01-01').toISOString(),
      dateModified: new Date('2020-03-31').toISOString(),
      package: 'test-package',
      componentsLookup: {
        ArrowButton: 'ArrowButton',
        Button: 'Button',
        Control: 'Control',
      },
      author: 'atanasster',
      title: 'Story',
      data: {
        'plain--controls': {
          '1': {
            name: 'Cecelia Langosh',
            age: 16,
          },
          '2': {
            name: 'Murl Green I',
            age: 26,
          },
          '3': {
            name: 'Lela McClure',
            age: 24,
          },
          '4': {
            name: 'Ms. Jean Barrows',
            age: 23,
          },
          '5': {
            name: 'Tanya Sanford',
            age: 19,
          },
        },
      },
      stories: [
        'id-of-story',
        'id-of-button-story',
        'blocks-core-story-plain--controls',
        'id-of-single',
      ],
    },
    mdxStory: {
      renderFn: reactRender,
      title: 'MDX Story',
      componentsLookup: {},
      author: 'atanasster',
      MDXPage: (): ReactElement => <MDXContent components={{}} />,
      stories: ['mdx-story'],
    },
  },
  stories: {
    'id-of-story': {
      storyFn: (): ReactElement => <Heading>Components</Heading>,
      id: 'id-of-story',
      doc: 'Story',
      component: 'ArrowButton',
      description: 'description of story',
      loc: {
        end: {
          column: 34,
          line: 8,
        },
        start: {
          column: 21,
          line: 8,
        },
      },
      name: 'story',
      source: "() => 'hello'",
      subcomponents: {
        'My Button Tab': 'Button',
      },
      subtitle: 'story subtitle',
    },
    'id-of-single': {
      id: 'id-of-single',
      storyFn: (): ReactElement => <Heading>Components</Heading>,
      doc: 'Story',
      component: 'ArrowButton',
      loc: {
        end: {
          column: 34,
          line: 8,
        },
        start: {
          column: 21,
          line: 8,
        },
      },
      name: 'story',
      source: "() => 'hello'",
      subcomponents: {
        'My Button Tab': 'Button',
      },
      subtitle: 'story subtitle',
    },
    'id-of-button-story': {
      id: 'id-of-button-story',
      storyFn: (): ReactElement => <Button>test</Button>,
      doc: 'Story',
      component: 'Button',
      loc: {
        end: {
          column: 34,
          line: 8,
        },
        start: {
          column: 21,
          line: 8,
        },
      },
      name: 'button',
      source: "() => 'hello'",
    },
    'blocks-core-story-plain--controls': {
      storyFn: (): ReactElement => (
        <Donut value={1 / 2} aria-label="example donut graphic" />
      ),
      id: 'blocks-core-story-plain--controls',
      rawId: 'plain--controls',
      doc: 'Story',
      name: 'controls',
      component: 'Control',
      controls: {
        name: {
          type: ControlTypes.TEXT,
          label: 'Name',
          value: 'Mark',
        },
        age: {
          type: ControlTypes.NUMBER,
          label: 'Age',
          value: 19,
        },
      },
      plugins: {
        figma: [
          {
            url: 'https://www.figma.com/file/vgf0guEmC5IKtjHJKkRVSr/Button?node-id=0%3A1',
            title: 'figma design file',
          },
        ],
        notes: [
          {
            text: `
## Component *design notes*

1. Be user-friendly
2. Be a11y accessible
3. **Go to 1**
            `,
          },
        ],
        images: [{ src: img_example, 'aria-label': 'design resource image' }],
      },
      arguments: [
        {
          loc: {
            end: {
              column: 14,
              line: 0,
            },
            start: {
              column: 1,
              line: 0,
            },
          },
          name: undefined,
          value: [
            {
              loc: {
                end: {
                  column: 7,
                  line: 0,
                },
                start: {
                  column: 3,
                  line: 0,
                },
              },
              name: 'name',
              usage: [
                {
                  loc: {
                    end: {
                      column: 32,
                      line: 1,
                    },
                    start: {
                      column: 28,
                      line: 1,
                    },
                  },
                },
              ],
              value: 'name',
            },
            {
              loc: {
                end: {
                  column: 12,
                  line: 0,
                },
                start: {
                  column: 9,
                  line: 0,
                },
              },
              name: 'age',
              value: 'age',
              usage: [
                {
                  loc: {
                    end: {
                      column: 49,
                      line: 1,
                    },
                    start: {
                      column: 46,
                      line: 1,
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
      source: `({ name, age }) => (
  <h2>{\`Hello, my name is \${name}, and I am \${age} years old.\`}</h2>
);
`,
    },
    'id-no-component': {
      storyFn: (): ReactElement => <Heading>Components</Heading>,
      id: 'id-no-component',
      doc: 'Story',
      name: 'no component',
      source: "() => 'hello'",
    },
    'mdx-story': {
      storyFn: (): ReactElement => <Heading>mdx story</Heading>,
      id: 'mdx-story',
      doc: 'mdxStory',
      name: 'mdx story',
      source: "() => 'hello'",
    },
  },
};
