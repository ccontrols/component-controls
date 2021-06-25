import { parseCode } from '../../src/index';

describe('type', () => {
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
              displayName: 'index',
              kind: 1,
            },
            type: {
              kind: 15,
              properties: [
                {
                  displayName: 'a',
                  kind: 15,
                  type: 'Bear',
                },
                {
                  displayName: 'b',
                  kind: 10,
                },
              ],
            },
          },
          {
            description: 'this is an additional name prop',
            optional: true,
            displayName: 'name',
            kind: 1,
          },
        ],
        displayName: 'IndexT',
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
        properties: [
          {
            kind: 15,
            displayName: 'Type',
          },
        ],
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
            displayName: 'a',
            kind: 1,
            value: 'field a',
          },
          {
            description: 'field b',
            optional: true,
            displayName: 'b',
            kind: 2,
          },
        ],
        displayName: 'obj',
      },
    });
  });

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

    /**
     * reference type description
     */ 
    export type GenericConsumer = GenericInterface<string>;
`);
    expect(results).toEqual({
      GenericConsumer: {
        description: 'reference type description',
        kind: 14,
        properties: [
          {
            description: 'interface prop',
            displayName: 'm',
            kind: 15,
            type: 'Type',
            parent: 'GenericInterface',
          },
        ],
        displayName: 'GenericConsumer',
      },
      _parents: {
        GenericInterface: {
          description: 'upstream interface',
          displayName: 'GenericInterface',
          kind: 14,
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
        },
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
            displayName: 'a',
            kind: 1,
            parent: 'A',
          },
          {
            displayName: 'b',
            kind: 2,
            parent: 'B',
          },
        ],
        displayName: 'Intersect',
      },
      _parents: {
        A: {
          description: 'type A',
          displayName: 'A',
          kind: 15,
          properties: [
            {
              displayName: 'a',
              kind: 1,
            },
          ],
        },
        B: {
          description: 'type B',
          displayName: 'B',
          kind: 15,
          properties: [
            {
              displayName: 'b',
              kind: 2,
            },
          ],
        },
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
            displayName: 'm',
            kind: 1,
            parent: 'T',
          },
          {
            description: 'own member',
            displayName: 'honey',
            kind: 3,
          },
        ],
        displayName: 'ExtendT',
      },
      _parents: {
        T: {
          description: 'base type',
          displayName: 'T',
          kind: 15,
          properties: [
            {
              description: 'base type member property',
              displayName: 'm',
              kind: 1,
            },
          ],
        },
      },
    });
  });
  it('nested generic type', () => {
    const results = parseCode(`
    type UnionGenericType<Type> = Type | 'a string';

    /**
     * generic interface 
     */ 
    type GenericArrayType<Type> = {
      /**
       * member field
       */ 
      m: Type
    } 
    export type NestedGenericType<Type> = GenericArrayType<UnionGenericType<Type>>;
`);
    expect(results).toEqual({
      NestedGenericType: {
        kind: 15,
        properties: [
          {
            description: 'member field',
            displayName: 'm',
            kind: 15,
            type: 'Type',
            parent: 'GenericArrayType',
          },
        ],
        displayName: 'NestedGenericType',

        generics: [
          {
            displayName: 'Type',
          },
        ],
      },
      _parents: {
        GenericArrayType: {
          description: 'generic interface',
          displayName: 'GenericArrayType',
          kind: 15,
          generics: [
            {
              displayName: 'Type',
            },
          ],
          properties: [
            {
              description: 'member field',
              displayName: 'm',
              kind: 15,
              type: 'Type',
            },
          ],
        },
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
});
