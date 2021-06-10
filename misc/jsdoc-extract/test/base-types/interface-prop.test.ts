import { parseCode } from '../../src/index';
describe('interface', () => {
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
        generics: [
          {
            displayName: 'Type',
          },
        ],
        properties: [
          {
            description: 'Gets or sets the length of the array.',
            kind: 2,
            displayName: 'length',
          },
          {
            description:
              'Removes the last element from an array and returns it.',
            displayName: 'pop',
            kind: 11,
            parameters: [],
            returns: {
              kind: 4,
              properties: [
                {
                  displayName: 'Type',
                  kind: 15,
                },
                {
                  kind: 8,
                },
              ],
            },
          },
          {
            description:
              'Appends new elements to an array, and returns the new length of the array.',
            displayName: 'push',
            kind: 11,
            parameters: [
              {
                displayName: 'items',
                kind: 16,
                elements: [
                  {
                    displayName: 'Type',
                    kind: 15,
                  },
                ],
              },
            ],
            returns: {
              kind: 2,
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
            description: 'kind is an enumm constant',
            displayName: 'kind',
            kind: 15,
            parent: {
              displayName: 'StringEnums',
              kind: 5,
            },
            type: 'Up',
          },
          {
            description: 'radius property',
            kind: 2,
            displayName: 'radius',
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
        description: 'interface extending another one',
        displayName: 'Bear',
        kind: 14,
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
            parent: {
              displayName: 'Home',
              kind: 14,
            },
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
