import path from 'path';
import { parseFiles } from '../../../src/index';

describe('interface', () => {
  it('enum-prop', () => {
    const results = parseFiles([path.resolve(__dirname, 'enum-prop.ts')]);
    expect(results).toEqual({
      InterfaceWithEnumConstant: {
        displayName: 'InterfaceWithEnumConstant',
        kind: 14,
        properties: [
          {
            displayName: 'kind',
            kind: 1,
            description: 'kind is an enumm constant',
            parent: 'StringEnums',
            value: 'UP',
            type: 'Up',
          },
          {
            kind: 2,
            displayName: 'radius',
            description: 'radius property',
          },
        ],
      },
      __parents: {
        StringEnums: {
          displayName: 'StringEnums',
          kind: 5,
          properties: [
            {
              displayName: 'Up',
              kind: 1,
              value: 'UP',
            },
          ],
        },
      },
    });
  });
  it('index-prop', () => {
    const results = parseFiles([path.resolve(__dirname, 'index-prop.ts')]);

    expect(results).toEqual({
      IndexInterface: {
        displayName: 'IndexInterface',
        kind: 14,
        properties: [
          {
            kind: 20,
            index: {
              kind: 2,
              displayName: 'index',
            },
            type: {
              kind: 1,
            },
          },
        ],
      },
    });
  });
  it('jsdoc-default', () => {
    const results = parseFiles([path.resolve(__dirname, 'jsdoc-default.ts')]);
    expect(results).toEqual({
      Interface: {
        displayName: 'Interface',
        kind: 14,
        properties: [
          {
            displayName: 'eat',
            kind: 4,
            properties: [
              {
                kind: 1,
                value: 'honey',
              },
              {
                kind: 1,
                value: 'bread',
              },
              {
                kind: 1,
                value: 'meat',
              },
            ],
            value: 'bread',
            description: 'union prop',
          },
        ],
      },
    });
  });
  it('array-implementation', () => {
    const results = parseFiles([
      path.resolve(__dirname, 'array-implementation.ts'),
    ]);
    expect(results).toEqual({
      InterfaceArrayType: {
        displayName: 'InterfaceArrayType',
        kind: 14,
        properties: [
          {
            kind: 2,
            displayName: 'length',
            description: 'Gets or sets the length of the array.',
          },
          {
            displayName: 'pop',
            kind: 11,
            returns: {
              kind: 4,
              properties: [
                {
                  kind: 15,
                  displayName: 'Type',
                },
                {
                  kind: 8,
                },
              ],
            },
            description:
              'Removes the last element from an array and returns it.',
          },
          {
            displayName: 'push',
            kind: 11,
            parameters: [
              {
                displayName: 'items',
                kind: 16,
                properties: [
                  {
                    kind: 15,
                    displayName: 'Type',
                  },
                ],
              },
            ],
            returns: {
              kind: 2,
            },
            description:
              'Appends new elements to an array, and returns the new length of the array.',
          },
        ],
        generics: [
          {
            displayName: 'Type',
          },
        ],
      },
    });
  });

  it('extends', () => {
    const results = parseFiles([path.resolve(__dirname, 'extends.ts')]);
    expect(results).toEqual({
      Bear: {
        displayName: 'Bear',
        kind: 14,
        properties: [
          {
            kind: 3,
            displayName: 'honey',
            description: 'boolean type member',
          },
          {
            parent: 'Internal',
            kind: 1,
            displayName: 'm',
            description: 'string type member',
          },
          {
            parent: 'Home',
            displayName: 'resident',
            kind: 15,
            properties: [
              {
                parent: 'Home',
                kind: 1,
                displayName: 'name',
              },
              {
                parent: 'Home',
                kind: 2,
                displayName: 'age',
              },
            ],
          },
        ],
        description: 'interface extending another one',
      },
      __parents: {
        Internal: {
          displayName: 'Internal',
          kind: 14,
          properties: [
            {
              kind: 1,
              displayName: 'm',
              description: 'string type member',
            },
          ],
          description: 'internal interface with one member',
        },
        Home: {
          displayName: 'Home',
          kind: 14,
          properties: [
            {
              displayName: 'resident',
              kind: 15,
              properties: [
                {
                  kind: 1,
                  displayName: 'name',
                },
                {
                  kind: 2,
                  displayName: 'age',
                },
              ],
            },
          ],
        },
      },
    });
  });

  it('combined-props', () => {
    const results = parseFiles([path.resolve(__dirname, 'combined-props.ts')]);
    expect(results).toEqual({
      StringNumberPair: {
        displayName: 'StringNumberPair',
        kind: 14,
        properties: [
          {
            description: 'specialized properties',
            displayName: 'length',
            kind: 2,
            value: 2,
          },
          {
            kind: 1,
            displayName: '0',
          },
          {
            kind: 2,
            displayName: '1',
          },
          {
            description: "Other 'Array<string | number>' members...",
            displayName: 'slice',
            kind: 11,
            parameters: [
              {
                kind: 2,
                optional: true,
                displayName: 'start',
              },
              {
                kind: 2,
                optional: true,
                displayName: 'end',
              },
            ],
            returns: {
              kind: 16,
              properties: [
                {
                  kind: 4,
                  properties: [
                    {
                      kind: 1,
                    },
                    {
                      kind: 2,
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    });
  });
  it('generics', () => {
    const results = parseFiles([path.resolve(__dirname, 'generics.ts')]);
    expect(results).toEqual({
      GenericInterface: {
        displayName: 'GenericInterface',
        kind: 14,
        generics: [
          {
            displayName: 'Type',
          },
        ],
        properties: [
          {
            displayName: 'contents',
            kind: 15,
            type: 'Type',
          },
        ],
      },
    });
  });

  it('simple', () => {
    const results = parseFiles([path.resolve(__dirname, 'simple.ts')]);
    expect(results).toEqual({
      I: {
        description: 'this is interface\nmultiple lines',
        displayName: 'I',
        kind: 14,
        properties: [
          {
            description: 'interface member property',
            kind: 1,
            displayName: 'm',
          },
        ],
      },
    });
  });
});
