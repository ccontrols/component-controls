import { parseCode } from '../../src/index';
describe('function', () => {
  it('spread tuple parameters', () => {
    const results = parseCode(`
    export const spreadTupleFunction = (
      ...args: [string, number, ...boolean[]]
    ): void => {};
  `);
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
                  elements: [
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
  it('tuple parameters', () => {
    const results = parseCode(`
    export function distanceFromOrigin([x, y]: [number, number]): number {}
  `);
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
  it('react fc', () => {
    const results = parseCode(`
    import React, { FC } from 'react';
    interface Props {
      m?: string;
    }
    export const TypedInitializedFunction: FC<Props> = props => {};
`);
    expect(results).toEqual({
      TypedInitializedFunction: {
        displayName: 'TypedInitializedFunction',
        kind: 11,
        type: {
          kind: 15,
          generics: [
            {
              kind: 15,
              properties: [
                {
                  kind: 1,
                  optional: true,
                  displayName: 'm',
                },
              ],
              displayName: 'Props',
            },
          ],
          displayName: 'FC',
        },
        parameters: [
          {
            displayName: 'props',
          },
        ],
      },
    });
  });
  it('generic function parameter', () => {
    const results = parseCode(`
    interface GenericInterface<T> {
      m: T;
    }
    export function genericFunction<Type>(
      box: GenericInterface<Type>,
      newContents: Type,
    ): GenericInterface<Type> {}
`);
    expect(results).toEqual({
      genericFunction: {
        displayName: 'genericFunction',
        kind: 11,
        parameters: [
          {
            displayName: 'box',
            kind: 15,
            generics: [
              {
                displayName: 'T',
              },
            ],
            properties: [
              {
                displayName: 'm',
                kind: 15,
                type: 'T',
              },
            ],
            type: {
              kind: 15,
              generics: [
                {
                  displayName: 'Type',
                  kind: 15,
                },
              ],
              displayName: 'GenericInterface',
            },
          },
          {
            displayName: 'newContents',
            kind: 15,
            type: 'Type',
          },
        ],
        returns: {
          kind: 15,
          generics: [
            {
              displayName: 'T',
            },
          ],
          properties: [
            {
              displayName: 'm',
              kind: 15,
              type: 'T',
            },
          ],
          type: {
            kind: 15,
            generics: [
              {
                displayName: 'Type',
                kind: 15,
              },
            ],
            displayName: 'GenericInterface',
          },
        },
        types: [
          {
            displayName: 'Type',
          },
        ],
      },
    });
  });
  it('extended parameter', () => {
    const results = parseCode(`
/**
 * base type
 */
type T = {
  /**
   * base type member property
   */
  m: string;
};

/**
 * extended type
 */ 
type ExtendT = T & {
  /**
   * own member
   */
  honey: boolean;
};

/**
 * internal interface with one member
 */ 
interface Internal {
  /**
   * string type member
   */ 
  m: string;
}
/**
 * interface extending another one
 */ 
interface Bear extends Internal, Home {
  /**
   * boolean type member
   */ 
  honey: boolean;
}
/**
 * exported function
 */    
export function paintHomeyBear({ m, honey = true }: ExtendT): Bear {
  return { honey, m };
}
    `);
    expect(results).toEqual({
      paintHomeyBear: {
        description: 'exported function',
        displayName: 'paintHomeyBear',
        kind: 11,
        parameters: [
          {
            kind: 15,
            description: 'extended type',
            properties: [
              {
                description: 'base type member property',
                kind: 1,
                displayName: 'm',
                parent: {
                  kind: 15,
                  description: 'base type',
                  displayName: 'T',
                },
              },
              {
                description: 'own member',
                kind: 3,
                displayName: 'honey',
              },
            ],
            displayName: 'ExtendT',
          },
        ],
        returns: {
          description: 'interface extending another one',
          kind: 15,
          properties: [
            {
              description: 'boolean type member',
              kind: 3,
              displayName: 'honey',
            },
            {
              description: 'string type member',
              kind: 1,
              displayName: 'm',
              parent: {
                description: 'internal interface with one member',
                displayName: 'Internal',
                kind: 14,
              },
            },
          ],
          displayName: 'Bear',
        },
      },
    });
  });
  it('union parameter', () => {
    const results = parseCode(`
    const printId = (id: number | string): void => {}
    export { printId };
  `);
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

  it('object parameter', () => {
    const results = parseCode(`
    /**
     * print coordinates
     * @param pt object parameter
     */
  
    export function printCoord(pt: {
      /**
       * x coordinate
       */
      x: number;
      /**
       * optional y coordinate
       */
      y?: number;
    }): void {}
`);
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
  it('jsdoc parameter', () => {
    const results = parseCode(`
    /**
     * greeting function
     * @param name string type parameters
     */
    export function greet(name: string) {}
`);
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
    const results = parseCode(`
/**
 * arrow greeting function
 */
export const arrowGreet = (
  /**
   * name parameter inline description
   */
  name: string,
): void => {};
`);
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
