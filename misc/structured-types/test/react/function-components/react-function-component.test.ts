import path from 'path';
import { parseFiles } from '../../../src/index';
import reactPlugin from '../../../src/frameworks/react';

describe('function-component', () => {
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
