import { parseCode } from '../../src/index';

describe('type', () => {
  it('generic consumer type', () => {
    const results = parseCode(`
    /**
     * upstream interface
     */ 
    interface GenericInterface<Type> {
      /**
       * interface prop
       */ 
      m: Type
    }
    export type GenericConsumer = GenericInterface<string>;
`);
    expect(results).toEqual({
      GenericConsumer: {
        displayName: 'GenericConsumer',
        kind: 15,
        description: 'upstream interface',
        generics: [
          {
            displayName: 'Type',
          },
        ],
        properties: [
          {
            description: 'interface prop',
            displayName: 'm',
            kind: 15,
            type: 'Type',
          },
        ],
        type: 'GenericInterface',
      },
    });
  });

  it('nested generic type', () => {
    const results = parseCode(`
    type UnionGenericType<Type> = Type | 'a string';
    type GenericArrayType<Type> = {
      m: Type
    } 
    export type NestedGenericType<Type> = GenericArrayType<UnionGenericType<Type>>;
`);
    expect(results).toEqual({
      NestedGenericType: {
        displayName: 'NestedGenericType',
        kind: 15,
        generics: [
          {
            displayName: 'Type',
          },
        ],
        properties: [
          {
            displayName: 'm',
            type: 'Type',
            kind: 15,
          },
        ],
        type: 'GenericArrayType',
      },
    });
  });

  it('generic array type', () => {
    const results = parseCode(`
    export type GenericArrayType<Type> = Type[];
`);
    expect(results).toEqual({
      GenericArrayType: {
        displayName: 'GenericArrayType',
        kind: 16,
        generics: [
          {
            displayName: 'Type',
          },
        ],
        elements: [
          {
            displayName: 'Type',
            kind: 15,
          },
        ],
      },
    });
  });

  it('union generic type', () => {
    const results = parseCode(`
    export type UnionGenericType<Type> = Type | null;
`);
    expect(results).toEqual({
      UnionGenericType: {
        displayName: 'UnionGenericType',
        kind: 4,
        properties: [
          {
            displayName: 'Type',
            kind: 15,
          },
          {
            kind: 10,
          },
        ],
      },
    });
  });

  it('extend', () => {
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
export type ExtendT = T & {
  /**
   * own member
   */
  honey: boolean;
};
`);
    expect(results).toEqual({
      ExtendT: {
        description: 'extended type',
        kind: 15,
        properties: [
          {
            description: 'base type member property',
            kind: 1,
            displayName: 'm',
            parent: {
              description: 'base type',
              kind: 15,
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
    });
  });

  it('intersection type', () => {
    const results = parseCode(`
      /** type A */
    type A = {
      a: string;
    };
    /**
     * type B
     */ 
    type B = {
      b: number;
    };
    /** intersect type */
    export type Intersect = A & B;
    `);
    expect(results).toEqual({
      Intersect: {
        description: 'intersect type',
        kind: 15,
        properties: [
          {
            kind: 1,
            displayName: 'a',
            parent: {
              description: 'type A',
              kind: 15,
              displayName: 'A',
            },
          },
          {
            kind: 2,
            displayName: 'b',
            parent: {
              description: 'type B',
              kind: 15,
              displayName: 'B',
            },
          },
        ],
        displayName: 'Intersect',
      },
    });
  });
  it('generic type', () => {
    const results = parseCode(`
    export type GenericType<Type> = {
      contents: Type;
    };
  `);
    expect(results).toEqual({
      GenericType: {
        kind: 15,
        generics: [
          {
            displayName: 'Type',
          },
        ],
        properties: [
          {
            type: 'Type',
            kind: 15,
            displayName: 'contents',
          },
        ],
        displayName: 'GenericType',
      },
    });
  });
  it('index prop', () => {
    const results = parseCode(`
    export type IndexT = {
      /**
       * type index property
       */ 
      [index: string]: { a: Bear; b: null };
      /**
       * this is an additional name prop
       */ 
      name?: string;
    };
`);
    expect(results).toEqual({
      IndexT: {
        kind: 15,
        properties: [
          {
            description: 'type index property',
            kind: 20,
            index: {
              kind: 1,
              displayName: 'index',
            },
            type: {
              kind: 15,
              properties: [
                {
                  kind: 15,
                  type: 'Bear',
                  displayName: 'a',
                },
                {
                  kind: 10,
                  displayName: 'b',
                },
              ],
            },
          },
          {
            description: 'this is an additional name prop',
            kind: 1,
            optional: true,
            displayName: 'name',
          },
        ],
        displayName: 'IndexT',
      },
    });
  });

  it('basic type', () => {
    const results = parseCode(`
      /**
       * this is type
       */
      export type T = {
        /**
         * type member property
         */
        m: string;
      };
      
  `);
    expect(results).toEqual({
      T: {
        description: 'this is type',
        kind: 15,
        properties: [
          {
            description: 'type member property',
            kind: 1,
            displayName: 'm',
          },
        ],
        displayName: 'T',
      },
    });
  });

  it('typed and initialized', () => {
    const results = parseCode(`
    /**
     * this is an object
     */
    export const obj: {
      /**
       * field a
       */ 
      a: string;
      /**
       * field b
       */ 
      b?: number;
    } = { a: 'field a'};
`);
    expect(results).toEqual({
      obj: {
        description: 'this is an object',
        kind: 15,
        properties: [
          {
            description: 'field a',
            kind: 1,
            displayName: 'a',
            value: 'field a',
          },
          {
            description: 'field b',
            kind: 2,
            optional: true,
            displayName: 'b',
          },
        ],
        displayName: 'obj',
      },
    });
  });
});
