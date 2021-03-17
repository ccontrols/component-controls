import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['mdx', 'component'], fileName, callback);

describe('mdx-component', () => {
  createTest('component-parameters.mdx', parsed => {
    const component = parsed.components[parsed.doc?.componentsLookup['Button']];
    expect(component).toMatchObject({
      name: 'Button',
      from: '../../components/button-named-arrow-func',
      externalDependencies: {
        react: [
          {
            name: 'React',
            importedName: 'default',
          },
        ],
      },
      importedName: 'Button',
      jsx: [
        {
          children: [],
          name: 'button',
          attributes: [],
        },
      ],
      fileName: 'button-named-arrow-func.js',
    });
  });

  createTest('named-alias-import.mdx', parsed => {
    const component = parsed.components[parsed.doc?.componentsLookup['Button']];
    expect(component).toMatchObject({
      name: 'Button',
      from: '../../components/button-named-class',
      importedName: 'Btn',
    });
  });

  createTest('propstable-of.mdx', parsed => {
    const component =
      parsed.components[parsed.doc?.componentsLookup['ArrowButton']];
    expect(component).toMatchObject({
      name: 'ArrowButton',
      from: '../../components/button-default-arrow-func',
      externalDependencies: {
        react: [
          {
            name: 'React',
            importedName: 'default',
          },
        ],
      },
      importedName: 'default',
      jsx: [
        {
          children: [],
          name: 'button',
          attributes: [],
        },
      ],
      fileName: 'button-default-arrow-func.js',
    });
  });

  createTest('story-import.mdx', parsed => {
    const component1 =
      parsed.components[parsed.doc?.componentsLookup['Button']];
    expect(component1).toMatchObject({
      name: 'Button',
      from: './Button',
      importedName: 'Btn',
    });

    const component2 =
      parsed.components[parsed.doc?.componentsLookup['Toggle']];
    expect(component2).toMatchObject({
      name: 'Toggle',
      from: './Toggle',
      importedName: 'Toggle',
    });
    expect(parsed.doc).toMatchObject({
      component: 'Button',
    });
    expect(parsed.stories['myStory']).toMatchObject({
      name: 'my-story',
      component: 'Toggle',
      mdxType: 'Story',
      id: 'myStory',
      source: '<Story name="my-story" component={Toggle} />',
    });
  });

  createTest('story-subcomponents.mdx', parsed => {
    const component1 =
      parsed.components[parsed.doc?.componentsLookup['Button']];
    expect(component1).toMatchObject({
      name: 'Button',
      from: '../../components/button-named-arrow-func',
      externalDependencies: {
        react: [
          {
            name: 'React',
            importedName: 'default',
          },
        ],
      },
      importedName: 'Button',
      jsx: [
        {
          children: [],
          name: 'button',
          attributes: [],
        },
      ],
      fileName: 'button-named-arrow-func.js',
    });

    const component2 =
      parsed.components[parsed.doc?.componentsLookup['ArrowButton']];
    expect(component2).toMatchObject({
      name: 'ArrowButton',
      from: '../../components/button-default-arrow-func',
      externalDependencies: {
        react: [
          {
            name: 'React',
            importedName: 'default',
          },
        ],
      },
      importedName: 'default',
      fileName: 'button-default-arrow-func.js',
    });
    expect(parsed.stories['story']).toMatchObject({
      name: 'story',
      component: 'ArrowButton',
      subcomponents: {
        'My Button Tab': 'Button',
      },
      mdxType: 'Story',
      id: 'story',
    });
  });

  createTest('subcomponents.mdx', parsed => {
    const component1 =
      parsed.components[parsed.doc?.componentsLookup['Button']];
    expect(component1).toMatchObject({
      name: 'Button',
      from: '../../components/button-named-arrow-func',
      externalDependencies: {
        react: [
          {
            name: 'React',
            importedName: 'default',
          },
        ],
      },
      importedName: 'Button',
      fileName: 'button-named-arrow-func.js',
    });

    const component2 =
      parsed.components[parsed.doc?.componentsLookup['ArrowButton']];
    expect(component2).toMatchObject({
      name: 'ArrowButton',
      from: '../../components/button-default-arrow-func',
      externalDependencies: {
        react: [
          {
            name: 'React',
            importedName: 'default',
          },
        ],
      },
      importedName: 'default',
      fileName: 'button-default-arrow-func.js',
    });
    expect(parsed.doc).toMatchObject({
      title: 'Story',
      component: 'ArrowButton',
      subcomponents: {
        Button: 'Button',
      },
      mdxType: 'Meta',
    });
  });
});
