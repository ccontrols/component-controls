import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['esm', 'components'], fileName, callback);

describe('esm-components', () => {
  createTest('subcomponents.js', parsed => {
    expect(parsed).toMatchObject({
      doc: {
        component: 'ArrowButton',
        subcomponents: {
          Button: 'Button',
        },
      },
    });
    const component =
      parsed.components[parsed.doc?.componentsLookup['ArrowButton']];
    expect(component).toMatchObject({
      externalDependencies: {
        react: [
          {
            importedName: 'default',
            name: 'React',
          },
        ],
      },
      fileName: 'button-default-arrow-func.js',
      from: '../../components/button-default-arrow-func',
      importedName: 'default',
      jsx: [
        {
          attributes: [],
          children: [],
          name: 'button',
        },
      ],
      name: 'ArrowButton',
    });
    const subComponent =
      parsed.components[parsed.doc?.componentsLookup['Button']];
    expect(subComponent).toMatchObject({
      importedName: 'Button',
      name: 'Button',
    });
  });
  createTest('story-subcomponents.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        story: {
          component: 'ArrowButton',
          id: 'story',
          name: 'story',
          subcomponents: {
            'My Button Tab': 'Button',
          },
        },
      },
    });
    const component =
      parsed.components[parsed.doc?.componentsLookup['ArrowButton']];
    expect(component).toMatchObject({
      externalDependencies: {
        react: [
          {
            importedName: 'default',
            name: 'React',
          },
        ],
      },
      fileName: 'button-default-arrow-func.js',
      from: '../../components/button-default-arrow-func',
      importedName: 'default',
      jsx: [
        {
          attributes: [],
          children: [],
          name: 'button',
        },
      ],
      name: 'ArrowButton',
    });
    const subComponent =
      parsed.components[parsed.doc?.componentsLookup['Button']];
    expect(subComponent).toMatchObject({
      importedName: 'Button',
      name: 'Button',
    });
  });
  createTest('default-import.js', parsed => {
    expect(parsed).toMatchObject({
      doc: {
        component: 'Button',
      },
    });
    const component = parsed.components[parsed.doc?.componentsLookup['Button']];
    expect(component).toMatchObject({
      externalDependencies: {
        react: [
          {
            importedName: 'default',
            name: 'React',
          },
        ],
      },
      fileName: 'button-default-arrow-func.js',
      from: '../../components/button-default-arrow-func',
      importedName: 'default',
      jsx: [
        {
          attributes: [],
          children: [],
          name: 'button',
        },
      ],
      name: 'Button',
    });
  });
});
