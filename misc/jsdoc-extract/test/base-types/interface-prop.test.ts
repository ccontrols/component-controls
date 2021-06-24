import { parseCode } from '../../src/index';
describe('interface', () => {
  it('interface array', () => {
    const results = parseCode(`  
  export interface InterfaceArrayType<Type> {
    /**
     * Gets or sets the length of the array.
     */
    length: number;
      /**
     * Removes the last element from an array and returns it.
     */
    pop(): Type | undefined;
   /**
     * Appends new elements to an array, and returns the new length of the array.
     */
    push(...items: Type[]): number;
  }
`);
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
  it('index interface', () => {
    const results = parseCode(`
export interface IndexInterface {
  [index: number]: string;
}    
`);
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
  it('enum prop', () => {
    const results = parseCode(`  
enum StringEnums {
  Up: 'UP',
}
export interface InterfaceWithEnumConstant {
    /**
     * kind is an enumm constant
     */
    kind: StringEnums.Up;
    /**
     * radius property
     */
    radius: number;
  }
`);
    expect(results).toEqual({
      InterfaceWithEnumConstant: {
        displayName: 'InterfaceWithEnumConstant',
        kind: 14,
        properties: [
          {
            displayName: 'kind',
            kind: 15,
            description: 'kind is an enumm constant',
            propParents: {
              StringEnums: {
                displayName: 'StringEnums',
                kind: 5,
                properties: [
                  {
                    displayName: 'Up',
                  },
                  {
                    displayName: "'UP'",
                  },
                ],
              },
            },
            parent: 'StringEnums',
            type: 'Up',
          },
          {
            kind: 2,
            displayName: 'radius',
            description: 'radius property',
          },
        ],
      },
    });
  });
  it('extends interface', () => {
    const results = parseCode(`
    interface Home {
      resident: { name: string; age: number };
    }
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
    export interface Bear extends Internal, Home {
      /**
       * boolean type member
       */ 
      honey: boolean;
    }
`);
    expect(results).toEqual({
      Bear: {
        displayName: 'Bear',
        propParents: {
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
            propParents: {
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
    });
  });

  it('combination properties', () => {
    const results = parseCode(`
    export interface StringNumberPair {
      /**
       *  specialized properties
       */
      length: 2;
      0: string;
      1: number;
      /**
       *  Other 'Array<string | number>' members...
       */
      slice(start?: number, end?: number): Array<string | number>;
    }
`);
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
  it('generic type', () => {
    const results = parseCode(`
export interface GenericInterface<Type> {
  contents: Type;
}
`);
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

  it('jsdoc default value', () => {
    const results = parseCode(`  
  export interface Interface {
    /**
     * union prop
     * @default bread
     */
    eat: 'honey' | 'bread' | 'meat';
  
  }
`);
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

  it('basic interface', () => {
    const results = parseCode(`
/**
 * this is interface
 * multiple lines
 */
export interface I {
  /**
   * interface member property
   */
  m: string;
}
`);
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
