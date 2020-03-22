import { StoriesStore, ControlTypes } from '@component-controls/specification';

export const storyStore: StoriesStore = {
  components: {
    '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/button-default-arrow-func.js': {
      from: '../../components/button-default-arrow-func',
      importedName: 'default',
      name: 'ArrowButton',
      request:
        '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/button-default-arrow-func.js',
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
  kinds: {
    Story: {
      components: {
        ArrowButton:
          '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/button-default-arrow-func.js',
        Button:
          '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/button-named-arrow-func.js',
        Control:
          '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/custom-controls.js',
      },
      title: 'Story',
    },
  },
  stories: {
    story: {
      id: 'story',
      arguments: [],
      kind: 'Story',
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
      parameters: {
        componentSubtitle: 'story subtitle',
      },
    },
    single: {
      id: 'single',
      arguments: [],
      kind: 'Story',
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
      parameters: {
        componentSubtitle: 'story subtitle',
      },
    },
    button: {
      id: 'button',
      arguments: [],
      kind: 'Story',
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
    controls: {
      id: 'controls',
      arguments: [],
      kind: 'Story',
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
    },
  },
};
