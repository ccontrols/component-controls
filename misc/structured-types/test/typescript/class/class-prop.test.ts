import path from 'path';
import { parseFiles } from '../../../src/index';

describe('class', () => {
  it('getters/setters', () => {
    const results = parseFiles([path.resolve(__dirname, 'getters-setters.ts')]);

    expect(results).toEqual({
      ClassGetters: {
        displayName: 'ClassGetters',
        kind: 13,
        properties: [
          {
            description: 'member description',
            kind: 2,
            displayName: '_length',
            value: 0,
          },
          {
            description: 'getter description',
            kind: 22,
            returns: {
              kind: 2,
            },
          },
          {
            parameters: [
              {
                kind: 2,
                displayName: 'value',
                description: 'the new value',
              },
            ],
            description: 'setter description',
            kind: 23,
          },
        ],
      },
    });
  });
  it('index signature', () => {
    const results = parseFiles([path.resolve(__dirname, 'index-signature.ts')]);
    expect(results).toEqual({
      ClassIndexSignature: {
        displayName: 'ClassIndexSignature',
        kind: 13,
        properties: [
          {
            description: 'class index',
            kind: 20,
            index: {
              kind: 1,
              displayName: 's',
            },
            type: {
              kind: 4,
              properties: [
                {
                  kind: 3,
                },
                {
                  kind: 11,
                  parameters: [
                    {
                      kind: 1,
                      displayName: 's',
                    },
                  ],
                  returns: {
                    kind: 3,
                  },
                },
              ],
            },
          },
          {
            returns: {
              description: 'returns the value',
              kind: 3,
            },
            parameters: [
              {
                displayName: 's',
                description: 'input string',
                kind: 1,
              },
            ],
            displayName: 'check',
            kind: 11,
          },
        ],
      },
    });
  });
  it('arrow function', () => {
    const results = parseFiles([path.resolve(__dirname, 'arrow-function.ts')]);
    expect(results).toEqual({
      ArrowFunctionClass: {
        displayName: 'ArrowFunctionClass',
        kind: 13,
        properties: [
          {
            description: 'name value initialzied',
            kind: 1,
            displayName: 'name',
            value: 'MyClass',
          },
          {
            returns: {
              description: 'a string value',
              kind: 1,
            },
            description: 'name accessor',
            displayName: 'getName',
            kind: 11,
          },
        ],
      },
    });
  });

  it('param modifiers', () => {
    const results = parseFiles([path.resolve(__dirname, 'param-modifiers.ts')]);
    expect(results).toEqual({
      ParameterModifiers: {
        displayName: 'ParameterModifiers',
        kind: 13,
        properties: [
          {
            parameters: [
              {
                displayName: 'x',
                description: 'x coordinate',
                kind: 2,
                visibility: 'public',
                readonly: true,
              },
              {
                displayName: 'y',
                description: 'y coordinate',
                kind: 2,
                visibility: 'protected',
              },
              {
                displayName: 'z',
                description: 'z coordinate',
                kind: 2,
                visibility: 'private',
              },
            ],
            description: 'constructor implementation',
            kind: 21,
          },
        ],
      },
    });
  });
  it('initialized prop', () => {
    const results = parseFiles([
      path.resolve(__dirname, 'initialized-props.ts'),
    ]);
    expect(results).toEqual({
      GreeterInitializedMembers: {
        displayName: 'GreeterInitializedMembers',
        kind: 13,
        properties: [
          {
            kind: 1,
            readonly: true,
            displayName: 'name',
            value: 'world',
          },
          {
            displayName: 'err',
            kind: 11,
            returns: {
              kind: 12,
            },
          },
        ],
      },
    });
  });

  it('constructor', () => {
    const results = parseFiles([path.resolve(__dirname, 'constructor.ts')]);
    expect(results).toEqual({
      ClassWithConstrunctor: {
        displayName: 'ClassWithConstrunctor',
        kind: 13,
        properties: [
          {
            kind: 1,
            displayName: 'name',
          },
          {
            description: 'constructor description',
            kind: 21,
            parameters: [
              {
                kind: 1,
                optional: true,
                displayName: 'x',
              },
            ],
          },
        ],
      },
    });
  });
  it('simple class', () => {
    const results = parseFiles([path.resolve(__dirname, 'simple.ts')]);
    expect(results).toEqual({
      Point: {
        description: 'this is a class with two members',
        displayName: 'Point',
        kind: 13,
        properties: [
          {
            description: 'COORDINATE X',
            kind: 2,
            displayName: 'x',
          },
          {
            description: 'COORDINATE Y',
            kind: 2,
            displayName: 'y',
          },
        ],
      },
    });
  });

  it('static members', () => {
    const results = parseFiles([path.resolve(__dirname, 'static-members.ts')]);
    expect(results).toEqual({
      ClassStatic: {
        displayName: 'ClassStatic',
        kind: 13,
        properties: [
          {
            kind: 2,
            static: true,
            displayName: 'x',
            value: 0,
          },
          {
            static: true,
            displayName: 'printX',
            kind: 11,
          },
        ],
      },
    });
  });
  it('member visibility', () => {
    const results = parseFiles([
      path.resolve(__dirname, 'member-visibility.ts'),
    ]);

    expect(results).toEqual({
      MemberVisibikity: {
        displayName: 'MemberVisibikity',
        kind: 13,
        properties: [
          {
            description: 'a public method',
            visibility: 'public',
            displayName: 'method1',
            kind: 11,
          },
          {
            description: 'a protected method',
            visibility: 'protected',
            displayName: 'method2',
            kind: 11,
          },
          {
            description: 'a private method',
            visibility: 'private',
            displayName: 'method3',
            kind: 11,
          },
        ],
      },
    });
  });
});
