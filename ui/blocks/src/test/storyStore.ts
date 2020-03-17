export const storyStore = {
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
    },
  },
  kinds: {
    Story: {
      components: {
        ArrowButton:
          '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/button-default-arrow-func.js',
        Button:
          '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/button-named-arrow-func.js',
      },
      title: 'Story',
    },
  },
  stories: {
    story: {
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
  },
};
