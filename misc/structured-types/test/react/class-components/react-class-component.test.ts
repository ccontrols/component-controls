import path from 'path';
import { parseFiles } from '../../../src/index';
import reactPlugin from '../../../src/frameworks/react';

const simpleResults = {
  MyComponent: {
    kind: 13,
    framework: 'react',
    properties: [
      {
        kind: 1,
        displayName: 'name',
      },
    ],
    displayName: 'MyComponent',
  },
};
describe('class-component', () => {
  it('display-name-field', () => {
    const result = parseFiles(
      [path.resolve(__dirname, 'display-name-field.tsx')],
      {
        plugins: [reactPlugin],
        saveParentProps: false,
      },
    );
    expect(result).toEqual({
      default: {
        displayName: 'CustomComponentName',
        framework: 'react',
        kind: 13,
        properties: [
          {
            parent: 'OwnProps',
            optional: true,
            displayName: 'stringProp',
            kind: 1,
            description: 'stringProp description',
            value: 'test',
          },
          {
            parent: 'OwnProps',
            kind: 2,
            displayName: 'numberProp',
            description: 'numberProp description',
          },
        ],
        description: 'MyComponent special component',
      },
    });
  });
  it('default-props-field', () => {
    const result = parseFiles(
      [path.resolve(__dirname, 'default-props-field.tsx')],
      {
        plugins: [reactPlugin],
        saveParentProps: false,
      },
    );
    expect(result).toEqual({
      default: {
        displayName: 'MyComponent',
        kind: 13,
        framework: 'react',
        properties: [
          {
            parent: 'OwnProps',
            optional: true,
            displayName: 'stringProp',
            kind: 1,
            description: 'stringProp description',
            value: 'test',
          },
          {
            parent: 'OwnProps',
            kind: 2,
            displayName: 'numberProp',
            description: 'numberProp description',
          },
        ],
        description: 'MyComponent special component',
      },
    });
  });
  it('display-name-static', () => {
    const result = parseFiles(
      [path.resolve(__dirname, 'display-name-static.tsx')],
      {
        plugins: [reactPlugin],
        saveParentProps: false,
      },
    );
    expect(result).toEqual({
      MyComponent: {
        framework: 'react',
        displayName: 'CustomComponentName',
        kind: 13,
        description: 'MyComponent special component',
      },
    });
  });

  it('default-props-static', () => {
    const result = parseFiles(
      [path.resolve(__dirname, 'default-props-static.tsx')],
      {
        plugins: [reactPlugin],
        saveParentProps: false,
      },
    );
    expect(result).toEqual({
      MyComponent: {
        framework: 'react',
        displayName: 'MyComponent',
        kind: 13,
        properties: [
          {
            parent: 'OwnProps',
            optional: true,
            displayName: 'stringProp',
            kind: 1,
            description: 'stringProp description',
            value: 'test',
          },
          {
            parent: 'OwnProps',
            kind: 2,
            displayName: 'numberProp',
            description: 'numberProp description',
          },
        ],
        description: 'MyComponent special component',
      },
    });
  });
  it('pure-component', () => {
    const result = parseFiles([path.resolve(__dirname, 'pure-component.tsx')], {
      plugins: [reactPlugin],
    });
    expect(result).toEqual(simpleResults);
  });
  it('star-import', () => {
    const result = parseFiles([path.resolve(__dirname, 'star-import.tsx')], {
      plugins: [reactPlugin],
    });
    expect(result).toEqual(simpleResults);
  });
  it('inline-props', () => {
    const result = parseFiles([path.resolve(__dirname, 'inline-props.tsx')], {
      plugins: [reactPlugin],
    });
    expect(result).toEqual(simpleResults);
  });
  it('alias-component', () => {
    const result = parseFiles(
      [path.resolve(__dirname, 'alias-component.tsx')],
      {
        plugins: [reactPlugin],
      },
    );
    expect(result).toEqual(simpleResults);
  });
  it('named-component', () => {
    const result = parseFiles(
      [path.resolve(__dirname, 'named-component.tsx')],
      {
        plugins: [reactPlugin],
      },
    );
    expect(result).toEqual(simpleResults);
  });
  it('composed-props', () => {
    const result = parseFiles([path.resolve(__dirname, 'composed-props.tsx')], {
      plugins: [reactPlugin],
    });
    expect(result).toMatchSnapshot();
  });
  it('default-export', () => {
    const result = parseFiles([path.resolve(__dirname, 'default-export.tsx')], {
      plugins: [reactPlugin],
      saveParentProps: false,
    });
    expect(result).toEqual({
      default: {
        displayName: 'MyComponent',
        kind: 13,
        framework: 'react',
        properties: [
          {
            parent: 'OwnProps',
            optional: true,
            displayName: 'stringProp',
            kind: 1,
            description: 'stringProp description',
          },
          {
            parent: 'OwnProps',
            kind: 2,
            displayName: 'numberProp',
            description: 'numberProp description',
          },
        ],
        description: 'MyComponent special component',
      },
    });
  });
  it('named-export', () => {
    const result = parseFiles([path.resolve(__dirname, 'named-export.tsx')], {
      plugins: [reactPlugin],
      saveParentProps: false,
    });
    expect(result).toEqual({
      MyComponent: {
        displayName: 'MyComponent',
        kind: 13,
        framework: 'react',
        properties: [
          {
            parent: 'OwnProps',
            optional: true,
            displayName: 'stringProp',
            kind: 1,
            description: 'stringProp description',
          },
          {
            parent: 'OwnProps',
            kind: 2,
            displayName: 'numberProp',
            description: 'numberProp description',
          },
        ],
        description: 'MyComponent special component',
      },
    });
  });
});
