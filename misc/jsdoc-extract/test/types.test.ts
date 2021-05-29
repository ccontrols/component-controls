import path from 'path';
import { run } from '../src/index';

it('types', () => {
  const result = run(path.resolve(__dirname, './fixtures/types.ts'));
  expect(result).toEqual({
    s: {
      type: 'string',
      description: 'this is a string',
      name: 's',
      value: 'a',
    },
    n: {
      type: 'number',
      description: 'this is a number',
      name: 'n',
      value: 3.14,
    },
    b: {
      type: 'boolean',
      description: 'this is a false',
      name: 'b',
      value: false,
    },
    t: {
      type: 'boolean',
      description: 'this is a true',
      name: 't',
      value: true,
    },
    bool: {
      type: 'boolean',
      description: 'this is an undefined boolean value',
      name: 'bool',
    },
    a: {
      type: 'any',
      description: 'this is any type',
      name: 'a',
      value: 'as',
    },
    u: {
      type: 'unknown',
      description: 'this is unknown type',
      name: 'u',
      value: undefined,
    },
    obj: {
      type: 'object',
      description: 'this is an undefined object',
      name: 'obj',
      value: undefined,
    },
    initializedObj: {
      type: 'object',
      description: 'this is an initialized object',
      name: 'initializedObj',
      value: [
        {
          name: 'a',
          type: 'number',
          value: 12,
        },
        {
          name: 'b',
          type: 'string',
          value: 'test',
        },
      ],
    },
    T: {
      type: 'type',
      description: 'this is type',
      name: 'T',
      returns: {
        type: 'type',
        properties: [
          {
            type: 'string',
            description: 'type member property',
            name: 'm',
          },
        ],
      },
    },
    ExtendT: {
      name: 'ExtendT',
      type: 'type',
      returns: {
        type: 'type',
        properties: [
          {
            type: 'reference',
            name: 'T',
          },
          {
            type: 'type',
            properties: [
              {
                type: 'boolean',
                description: 'honey',
                name: 'honey',
              },
            ],
          },
        ],
      },
    },
    IndexT: {
      name: 'IndexT',
      type: 'type',
      returns: {
        type: 'type',
        properties: [
          {
            type: 'index',
            readonly: true,
            parameters: [
              {
                type: 'type',
                properties: [
                  {
                    name: 'a',
                    type: 'reference',
                    value: 'Bear',
                  },
                  {
                    name: 'b',
                    type: 'null',
                    value: null,
                  },
                ],
              },
            ],
            properties: [
              {
                type: 'string',
              },
            ],
          },
        ],
      },
    },
    IntersectionType: {
      name: 'IntersectionType',
      type: 'type',
      returns: {
        type: 'type',
        properties: [
          {
            type: 'reference',
            name: 'IndexT',
          },
          {
            type: 'reference',
            name: 'Internal',
          },
        ],
      },
    },
    GenericType: {
      name: 'GenericType',
      type: 'type',
      returns: {
        type: 'type',
        properties: [
          {
            name: 'contents',
            type: 'reference',
            value: 'Type',
          },
        ],
      },
    },
    UnionGenericType: {
      name: 'UnionGenericType',
      type: 'type',
      returns: {
        type: 'union',
        properties: [
          {
            type: 'reference',
            name: 'Type',
          },
          {
            type: 'null',
            value: null,
          },
        ],
      },
    },
    GenericArrayType: {
      name: 'GenericArrayType',
      type: 'type',
      returns: {
        type: 'array',
        properties: [
          {
            type: 'reference',
            name: 'Type',
          },
        ],
      },
    },
    NestedGenericType: {
      name: 'NestedGenericType',
      type: 'type',
      returns: {
        type: 'reference',
        name: 'GenericArrayType',
        parameters: [
          {
            type: 'reference',
            name: 'UnionGenericType',
            parameters: [
              {
                type: 'reference',
                name: 'Type',
              },
            ],
          },
        ],
      },
    },
    I: {
      type: 'interface',
      description: 'this is interface\nmultiple lines',
      name: 'I',
      properties: [
        {
          type: 'string',
          description: 'interface member property',
          name: 'm',
        },
      ],
    },
    Internal: {
      name: 'Internal',
      type: 'interface',
      properties: [],
    },
    Bear: {
      name: 'Bear',
      type: 'interface',
      inherits: [
        {
          type: 'reference',
          name: 'I',
        },
      ],
      properties: [
        {
          name: 'honey',
          type: 'boolean',
        },
      ],
    },
    Home: {
      name: 'Home',
      type: 'interface',
      properties: [
        {
          name: 'resident',
          readonly: true,
          type: 'type',
          properties: [
            {
              name: 'name',
              type: 'string',
            },
            {
              name: 'age',
              type: 'number',
            },
          ],
        },
      ],
    },
    IndexInterface: {
      name: 'IndexInterface',
      type: 'interface',
      properties: [
        {
          type: 'index',
          parameters: [
            {
              type: 'string',
            },
          ],
          properties: [
            {
              type: 'number',
            },
          ],
        },
      ],
    },
    MultipleInheritance: {
      name: 'MultipleInheritance',
      type: 'interface',
      inherits: [
        {
          type: 'reference',
          name: 'Home',
        },
        {
          type: 'reference',
          name: 'Bear',
        },
      ],
      properties: [
        {
          name: 'ownfield',
          type: 'union',
          properties: [
            {
              type: 'string',
              value: 'test',
            },
            {
              type: 'number',
              value: 1,
            },
          ],
        },
      ],
    },
    GenericInterface: {
      name: 'GenericInterface',
      type: 'interface',
      properties: [
        {
          type: 'reference',
          description: 'configurable property type',
          name: 'contents',
          value: 'Type',
        },
      ],
      parameters: [
        {
          name: 'Type',
        },
      ],
    },
    GenericConsumer: {
      name: 'GenericConsumer',
      type: 'type',
      returns: {
        type: 'reference',
        name: 'GenericInterface',
        parameters: [
          {
            type: 'string',
          },
        ],
      },
    },
    InterfaceArrayType: {
      name: 'InterfaceArrayType',
      type: 'interface',
      properties: [
        {
          type: 'number',
          description: 'Gets or sets the length of the array.',
          name: 'length',
        },
        {
          type: 'function',
          description: 'Removes the last element from an array and returns it.',
          name: 'pop',
          parameters: [],
          returns: {
            type: 'union',
            properties: [
              {
                type: 'reference',
                name: 'Type',
              },
              {
                type: 'undefined',
                value: undefined,
              },
            ],
          },
        },
        {
          type: 'function',
          description:
            'Appends new elements to an array, and returns the new length of the array.',
          name: 'push',
          parameters: [
            {
              name: 'items',
              type: 'array',
              properties: [
                {
                  type: 'reference',
                  name: 'Type',
                },
              ],
            },
          ],
          returns: {
            type: 'number',
          },
        },
      ],
      parameters: [
        {
          name: 'Type',
        },
      ],
    },
    arrString: {
      type: 'array',
      deprecated: 'yes',
      description: 'this is an array of strings',
      name: 'arrString',
      properties: [
        {
          type: 'string',
        },
      ],
      value: [
        {
          type: 'string',
          value: 'one',
        },
        {
          type: 'string',
          value: 'two',
        },
      ],
    },
    arrType: {
      type: 'type',
      description: 'type array of interface type',
      name: 'arrType',
      returns: {
        type: 'array',
        properties: [
          {
            type: 'reference',
            name: 'Internal',
          },
        ],
      },
    },
    names: {
      type: 'array',
      description: 'const array of strings',
      name: 'names',
      value: [
        {
          type: 'string',
          value: 'Alice',
        },
        {
          type: 'string',
          value: 'Bob',
        },
        {
          type: 'string',
          value: 'Eve',
        },
      ],
    },
    ArrayKeyword: {
      name: 'ArrayKeyword',
      type: 'array',
      properties: [
        {
          type: 'string',
        },
      ],
      value: [
        {
          type: 'string',
          value: 'test',
        },
      ],
    },
    ArrayNew: {
      name: 'ArrayNew',
      parameters: [
        {
          type: 'reference',
          name: 'Array',
        },
      ],
      properties: [
        {
          type: 'string',
          value: 'red',
        },
        {
          type: 'string',
          value: 'green',
        },
        {
          type: 'string',
          value: 'blue',
        },
      ],
    },
    union: {
      type: 'type',
      description: 'strings union',
      name: 'union',
      returns: {
        type: 'union',
        properties: [
          {
            type: 'string',
            value: 'this',
          },
          {
            type: 'number',
            value: 1,
          },
          {
            value: false,
            type: 'boolean',
          },
          {
            type: 'null',
            value: null,
          },
          {
            type: 'undefined',
            value: undefined,
          },
        ],
      },
    },
    Tuple: {
      name: 'Tuple',
      type: 'type',
      returns: {
        type: 'tuple',
        properties: [
          {
            type: 'string',
          },
          {
            type: 'number',
          },
        ],
      },
    },
    OptionalTuple: {
      name: 'OptionalTuple',
      type: 'type',
      returns: {
        type: 'tuple',
        properties: [
          {
            type: 'number',
          },
          {
            type: 'number',
          },
          {
            optional: true,
            type: 'number',
          },
        ],
      },
    },
    SpreadTuple: {
      name: 'SpreadTuple',
      type: 'type',
      returns: {
        type: 'tuple',
        properties: [
          {
            type: 'rest',
            returns: {
              type: 'array',
              properties: [
                {
                  type: 'boolean',
                },
              ],
            },
          },
          {
            type: 'string',
          },
          {
            type: 'number',
          },
        ],
      },
    },
    greet: {
      type: 'function',
      parameters: [
        {
          name: 'name',
          type: 'string',
          optional: false,
          value: undefined,
          description: 'string type parameters',
        },
      ],
      description: 'greeting function',
      name: 'greet',
    },
    arrowGreet: {
      type: 'function',
      description: 'arrow greeting function',
      name: 'arrowGreet',
      parameters: [
        {
          type: 'string',
          description: 'name parameter inline description',
          name: 'name',
        },
      ],
      returns: {
        type: 'void',
      },
    },
    printCoord: {
      type: 'function',
      parameters: [
        {
          name: 'pt',
          type: 'type',
          optional: false,
          value: undefined,
          description: 'object parameter',
          properties: [
            {
              type: 'number',
              description: 'x coordinate',
              name: 'x',
            },
            {
              type: 'number',
              description: 'optional y coordinate',
              name: 'y',
              optional: true,
            },
          ],
        },
      ],
      description: 'print coordinates',
      name: 'printCoord',
      returns: {
        type: 'void',
      },
    },
    printId: {
      name: 'printId',
      type: 'function',
      parameters: [
        {
          name: 'id',
          type: 'union',
          properties: [
            {
              type: 'number',
            },
            {
              type: 'string',
            },
          ],
        },
      ],
      returns: {
        type: 'void',
      },
    },
    paintHomeyBear: {
      name: 'paintHomeyBear',
      type: 'function',
      parameters: [
        {
          type: 'reference',
          name: 'ExtendT',
        },
      ],
      returns: {
        type: 'reference',
        name: 'Bear',
      },
    },
    genericFunction: {
      name: 'genericFunction',
      type: 'function',
      parameters: [
        {
          name: 'box',
          value: 'GenericInterface',
          type: 'reference',
          parameters: [
            {
              type: 'reference',
              name: 'Type',
            },
          ],
        },
        {
          name: 'newContents',
          value: 'Type',
          type: 'reference',
        },
      ],
      returns: {
        type: 'reference',
        name: 'GenericInterface',
        parameters: [
          {
            type: 'reference',
            name: 'Type',
          },
        ],
      },
      properties: [
        {
          name: 'Type',
        },
      ],
    },
    readOnlyParameters: {
      name: 'readOnlyParameters',
      type: 'function',
      parameters: [
        {
          name: 'values',
          type: 'array',
          properties: [
            {
              type: 'string',
            },
          ],
        },
      ],
      returns: {
        type: 'void',
      },
    },
    StringNumberPair: {
      name: 'StringNumberPair',
      type: 'interface',
      properties: [
        {
          type: 'number',
          description: 'specialized properties',
          name: 'length',
          value: 2,
        },
        {
          name: '0',
          type: 'string',
        },
        {
          name: '1',
          type: 'number',
        },
        {
          type: 'function',
          description: "Other 'Array<string | number>' members...",
          name: 'slice',
          parameters: [
            {
              name: 'start',
              optional: true,
              type: 'number',
            },
            {
              name: 'end',
              optional: true,
              type: 'number',
            },
          ],
          returns: {
            type: 'array',
            properties: [
              {
                type: 'union',
                properties: [
                  {
                    type: 'string',
                  },
                  {
                    type: 'number',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    spreadTupleFunction: {
      name: 'spreadTupleFunction',
      type: 'function',
      parameters: [
        {
          name: 'args',
          type: 'tuple',
          properties: [
            {
              type: 'string',
            },
            {
              type: 'number',
            },
            {
              type: 'rest',
              returns: {
                type: 'array',
                properties: [
                  {
                    type: 'boolean',
                  },
                ],
              },
            },
          ],
        },
      ],
      returns: {
        type: 'void',
      },
    },
  });
});
