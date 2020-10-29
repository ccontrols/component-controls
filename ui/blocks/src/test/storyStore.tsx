/* eslint-disable react/display-name */
import React, { ReactElement } from 'react';
import { Donut, Button, Heading } from 'theme-ui';
import {
  Store,
  getDefaultStore,
  ControlTypes,
  defaultBuildConfig,
  deepMerge,
  defaultRunConfig,
} from '@component-controls/core';
import { render as reactRender } from '@component-controls/render/react';

import { MDXContent } from './MDXStory';

export const store: Store = {
  ...getDefaultStore(),
  config: {
    renderFn: reactRender,
    ...deepMerge(defaultBuildConfig, defaultRunConfig),
  },
  packages: {
    'test-package': {
      fileHash: '28feb04b2447384a0bd648387e62bbc7',
      name: '@component-controls/blocks',
      version: '1.0.3',
      repository: {
        browse:
          'https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/Title/Title.stories.tsx',
        docs:
          'https://github.com/ccontrols/component-controls/tree/master#readme',
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
        '@theme-ui/presets': '^0.3.0',
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
    '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/button-default-arrow-func.js': {
      from: '../../components/button-default-arrow-func',
      importedName: 'default',
      name: 'ArrowButton',
      request:
        '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/button-default-arrow-func.js',
      imports: {
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
      package: 'test-package',
    },
    '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/button-named-arrow-func.js': {
      from: '../../components/button-named-arrow-func',
      importedName: 'Button',
      name: 'Button',
      request:
        '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/button-named-arrow-func.js',
      info: {
        description: `
Markdown descripton for component.

# With a heading

and a [link](https://google.com)
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
    '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/custom-controls.js': {
      from: '../../components/button-named-arrow-func',
      importedName: 'Button',
      name: 'Button',
      request:
        '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/button-named-arrow-func.js',
      info: {
        description: '',
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
      date: new Date('2020-01-01'),
      dateModified: new Date('2020-03-31'),
      package: 'test-package',
      componentsLookup: {
        ArrowButton:
          '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/button-default-arrow-func.js',
        Button:
          '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/button-named-arrow-func.js',
        Control:
          '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/custom-controls.js',
      },
      author: 'atanasster',
      title: 'Story',
      stories: [
        'id-of-story',
        'id-of-single',
        'id-of-button-story',
        'blocks-core-story-plain--controls',
      ],
    },
    mdxStory: {
      title: 'MDX Story',
      componentsLookup: {},
      author: 'atanasster',
      MDXPage: (): ReactElement => <MDXContent components={{}} />,
      stories: ['mdx-story'],
    },
  },
  stories: {
    'id-of-story': {
      renderFn: (): ReactElement => <Heading>Components</Heading>,
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
      renderFn: (): ReactElement => <Heading>Components</Heading>,
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
      renderFn: (): ReactElement => <Button>test</Button>,
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
      renderFn: (): ReactElement => <Donut value={1 / 2} />,
      id: 'blocks-core-story-plain--controls',
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
      renderFn: (): ReactElement => <Heading>Components</Heading>,
      id: 'id-no-component',
      doc: 'Story',
      name: 'no component',
      source: "() => 'hello'",
    },
    'mdx-story': {
      renderFn: (): ReactElement => <Heading>mdx story</Heading>,
      id: 'mdx-story',
      doc: 'mdxStory',
      name: 'mdx story',
      source: "() => 'hello'",
    },
  },
};
