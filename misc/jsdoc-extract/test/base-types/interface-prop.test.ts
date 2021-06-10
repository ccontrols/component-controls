import { parseCode } from '../../src/index';
describe('interface', () => {
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
