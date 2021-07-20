import path from 'path';
import { parseFiles } from '../../../src/index';
import reactPlugin from '../../../src/frameworks/react';

describe('function-component', () => {
  it('pick-props', () => {
    const result = parseFiles([path.resolve(__dirname, 'pick-props.tsx')], {
      plugins: [reactPlugin],
      saveParentProps: false,
    });
    expect(result).toEqual({
      MyComponent: {
        displayName: 'MyComponent',
        framework: 'react',
        kind: 11,
        properties: [
          {
            parent: 'HTMLAttributes',
            optional: true,
            displayName: 'inputMode',
            kind: 4,
            properties: [
              {
                kind: 1,
                value: 'none',
              },
              {
                kind: 1,
                value: 'text',
              },
              {
                kind: 1,
                value: 'tel',
              },
              {
                kind: 1,
                value: 'url',
              },
              {
                kind: 1,
                value: 'email',
              },
              {
                kind: 1,
                value: 'numeric',
              },
              {
                kind: 1,
                value: 'decimal',
              },
              {
                kind: 1,
                value: 'search',
              },
            ],
            description:
              'Hints at the type of data that might be entered by the user while editing the element or its contents',
            see: [
              'https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute',
            ],
          },
          {
            parent: 'HTMLAttributes',
            optional: true,
            displayName: 'style',
            kind: 15,
            type: 'CSSProperties',
          },
        ],
        description: 'MyComponent special component',
      },
    });
  });
  it('display-name', () => {
    const result = parseFiles([path.resolve(__dirname, 'display-name.tsx')], {
      plugins: [reactPlugin],
      saveParentProps: false,
    });
    expect(result).toEqual({
      default: {
        displayName: 'CustomComponentName',
        framework: 'react',
        kind: 11,
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
            displayName: 'numberProp',
            kind: 2,
            description: 'numberProp description',
          },
        ],
      },
    });
  });
  it('default-props', () => {
    const result = parseFiles([path.resolve(__dirname, 'default-props.tsx')], {
      plugins: [reactPlugin],
      saveParentProps: false,
    });
    expect(result).toEqual({
      default: {
        displayName: 'MyComponent',
        framework: 'react',
        kind: 11,
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
            displayName: 'numberProp',
            kind: 2,
            description: 'numberProp description',
          },
        ],
      },
    });
  });
  it('omit-props', () => {
    const result = parseFiles([path.resolve(__dirname, 'omit-props.tsx')], {
      plugins: [reactPlugin],
      saveParentProps: false,
    });
    expect(result).toEqual({
      MyComponent: {
        displayName: 'MyComponent',
        kind: 11,
        framework: 'react',
        properties: [
          {
            parent: 'PrimitmiveProps',
            displayName: 'stringProp',
            kind: 1,
          },
          {
            parent: 'ComponentProps',
            optional: true,
            displayName: 'prop1',
            kind: 4,
            properties: [
              {
                kind: 1,
                value: 'this',
              },
              {
                kind: 1,
                value: 'that',
              },
            ],
          },
        ],
      },
    });
  });
  it('no-props', () => {
    const result = parseFiles([path.resolve(__dirname, 'no-props.tsx')], {
      plugins: [reactPlugin],
    });
    expect(result).toEqual({
      MyComponent: {
        displayName: 'MyComponent',
        kind: 11,
        framework: 'react',
      },
    });
  });

  it('typed-props', () => {
    const result = parseFiles([path.resolve(__dirname, 'typed-props.tsx')], {
      plugins: [reactPlugin],
    });
    expect(result).toEqual({
      MyComponent: {
        displayName: 'MyComponent',
        kind: 11,
        framework: 'react',
        properties: [
          {
            optional: true,
            displayName: 'name',
            kind: 1,
            description: 'optional string prop',
            value: 'hello',
          },
          {
            displayName: 'numProp',
            kind: 2,
            description: 'a required number prop',
          },
        ],
        description: 'special react component',
      },
    });
  });
  it('function-inline-props', () => {
    const result = parseFiles(
      [path.resolve(__dirname, 'function-inline-props.tsx')],
      {
        plugins: [reactPlugin],
      },
    );
    expect(result).toEqual({
      MyComponent: {
        displayName: 'MyComponent',
        kind: 11,
        framework: 'react',
        properties: [
          {
            displayName: 'name',
            optional: true,
            kind: 1,
            value: 'hello',
          },
        ],
      },
    });
  });
  it('inline-props', () => {
    const result = parseFiles([path.resolve(__dirname, 'inline-props.tsx')], {
      plugins: [reactPlugin],
    });
    expect(result).toEqual({
      MyComponent: {
        displayName: 'MyComponent',
        kind: 11,
        framework: 'react',
        properties: [
          {
            displayName: 'name',
            optional: true,
            kind: 1,
            value: 'hello',
          },
        ],
      },
    });
  });
});
