import path from 'path';
import { parseFiles } from '../../../src/index';

describe('function', () => {
  it('react fc', () => {
    const results = parseFiles([path.resolve(__dirname, 'react-fc.ts')]);
    expect(results).toMatchSnapshot();
  });
  it('function properties', () => {
    const results = parseFiles([path.resolve(__dirname, 'function-props.ts')]);

    expect(results).toEqual({
      fn: {
        displayName: 'fn',
        kind: 11,
        properties: [
          {
            kind: 1,
            description: 'custom property for a function',
            displayName: 'customProp',
            value: 'my custom prop',
          },
        ],
        returns: {
          kind: 12,
        },
      },
    });
  });

  it('object parameter', () => {
    const results = parseFiles([
      path.resolve(__dirname, 'object-parameter.ts'),
    ]);

    expect(results).toEqual({
      printCoord: {
        parameters: [
          {
            displayName: 'pt',
            description: 'object parameter',
            kind: 15,
            properties: [
              {
                description: 'x coordinate',
                kind: 2,
                displayName: 'x',
              },
              {
                description: 'optional y coordinate',
                kind: 2,
                optional: true,
                displayName: 'y',
              },
            ],
          },
        ],
        description: 'print coordinates',
        displayName: 'printCoord',
        kind: 11,
        returns: {
          kind: 12,
        },
      },
    });
  });
  it('generic function parameter', () => {
    const results = parseFiles([
      path.resolve(__dirname, 'generic-parameter.ts'),
    ]);
    expect(results).toEqual({
      genericFunction: {
        displayName: 'genericFunction',
        kind: 11,
        parameters: [
          {
            displayName: 'box',
            kind: 14,
            properties: [
              {
                parent: 'GenericInterface',
                displayName: 'm',
                kind: 15,
                type: 'T',
              },
            ],
            generics: [
              {
                displayName: 'T',
              },
            ],
          },
          {
            displayName: 'newContents',
            kind: 15,
            type: 'Type',
          },
        ],
        returns: {
          kind: 14,
          properties: [
            {
              displayName: 'm',
              kind: 15,
              type: 'T',
            },
          ],
          generics: [
            {
              displayName: 'T',
            },
          ],
          displayName: 'GenericInterface',
        },
        types: [
          {
            displayName: 'Type',
          },
        ],
      },
      __parents: {
        GenericInterface: {
          displayName: 'GenericInterface',
          kind: 14,
          properties: [
            {
              displayName: 'm',
              kind: 15,
              type: 'T',
            },
          ],
          generics: [
            {
              displayName: 'T',
            },
          ],
        },
      },
    });
  });

  it('extended parameter', () => {
    const results = parseFiles([
      path.resolve(__dirname, 'extends-parameter.ts'),
    ]);
    expect(results).toEqual({
      paintHomeyBear: {
        displayName: 'paintHomeyBear',
        kind: 11,
        parameters: [
          {
            kind: 15,
            properties: [
              {
                parent: 'T',
                kind: 1,
                displayName: 'm',
                description: 'base type member property',
              },
              {
                kind: 3,
                displayName: 'honey',
                description: 'own member',
              },
            ],
            description: 'extended type',
            displayName: 'ExtendT',
          },
        ],
        returns: {
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
          ],
          description: 'interface extending another one',
          displayName: 'Bear',
        },
        description: 'exported function',
      },
      __parents: {
        T: {
          displayName: 'T',
          kind: 15,
          properties: [
            {
              kind: 1,
              displayName: 'm',
              description: 'base type member property',
            },
          ],
          description: 'base type',
        },
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
      },
    });
  });

  it('tuple parameters', () => {
    const results = parseFiles([path.resolve(__dirname, 'tuple-parameter.ts')]);
    expect(results).toEqual({
      distanceFromOrigin: {
        displayName: 'distanceFromOrigin',
        kind: 11,
        parameters: [
          {
            kind: 6,
            properties: [
              {
                kind: 2,
              },
              {
                kind: 2,
              },
            ],
          },
        ],
        returns: {
          kind: 2,
        },
      },
    });
  });
  it('spread tuple parameters', () => {
    const results = parseFiles([
      path.resolve(__dirname, 'spread-tuple-parameter.ts'),
    ]);
    expect(results).toEqual({
      spreadTupleFunction: {
        displayName: 'spreadTupleFunction',
        kind: 11,
        parameters: [
          {
            displayName: 'args',
            kind: 6,
            properties: [
              {
                kind: 1,
              },
              {
                kind: 2,
              },
              {
                kind: 7,
                type: {
                  kind: 16,
                  properties: [
                    {
                      kind: 3,
                    },
                  ],
                },
              },
            ],
          },
        ],
        returns: {
          kind: 12,
        },
      },
    });
  });

  it('union parameter', () => {
    const results = parseFiles([path.resolve(__dirname, 'union-parameter.ts')]);
    expect(results).toEqual({
      printId: {
        displayName: 'printId',
        kind: 11,
        parameters: [
          {
            displayName: 'id',
            kind: 4,
            properties: [
              {
                kind: 2,
              },
              {
                kind: 1,
              },
            ],
          },
        ],
        returns: {
          kind: 12,
        },
      },
    });
  });

  it('jsdoc parameter', () => {
    const results = parseFiles([path.resolve(__dirname, 'jsdoc-parameter.ts')]);
    expect(results).toEqual({
      greet: {
        parameters: [
          {
            displayName: 'name',
            description: 'string type parameters',
            kind: 1,
          },
        ],
        description: 'greeting function',
        displayName: 'greet',
        kind: 11,
      },
    });
  });
  it('arrow fn jsdoc', () => {
    const results = parseFiles([path.resolve(__dirname, 'arrow-function.ts')]);
    expect(results).toEqual({
      arrowGreet: {
        description: 'arrow greeting function',
        displayName: 'arrowGreet',
        kind: 11,
        parameters: [
          {
            description: 'name parameter inline description',
            kind: 1,
            displayName: 'name',
          },
        ],
        returns: {
          kind: 12,
        },
      },
    });
  });
});
