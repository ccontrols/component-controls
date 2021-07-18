import path from 'path';
import { parseFiles } from '../../../src/index';

describe('type', () => {
  it('index-prop', () => {
    const results = parseFiles([path.resolve(__dirname, 'index-prop.ts')]);
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
  it('generic-type', () => {
    const results = parseFiles([path.resolve(__dirname, 'generic-type.ts')]);
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

  it('generic-array', () => {
    const results = parseFiles([path.resolve(__dirname, 'generic-array.ts')]);
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
  it('initialized', () => {
    const results = parseFiles([path.resolve(__dirname, 'initialized.ts')]);
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

  it('generics', () => {
    const results = parseFiles([path.resolve(__dirname, 'generics.ts')]);
    expect(results).toEqual({
      GenericConsumer: {
        description: 'reference type description',
        kind: 15,
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
      __parents: {
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

  it('intersection', () => {
    const results = parseFiles([path.resolve(__dirname, 'intersection.ts')]);
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
      __parents: {
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

  it('extend-type', () => {
    const results = parseFiles([path.resolve(__dirname, 'extend-type.ts')]);
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
      __parents: {
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
  it('nested-generic', () => {
    const results = parseFiles([path.resolve(__dirname, 'nested-generic.ts')]);
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
      __parents: {
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

  it('union-generic', () => {
    const results = parseFiles([path.resolve(__dirname, 'union-generic.ts')]);
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

  it('basic type', () => {
    const results = parseFiles([path.resolve(__dirname, 'simple.ts')]);
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
