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
            value: 'T',
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
            value: 'IndexT',
          },
          {
            type: 'reference',
            value: 'Internal',
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
            value: 'Type',
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
            value: 'Type',
          },
        ],
      },
    },
    NestedGenericType: {
      name: 'NestedGenericType',
      type: 'type',
      returns: {
        type: 'reference',
        value: 'GenericArrayType',
        parameters: [
          {
            type: 'reference',
            value: 'UnionGenericType',
            parameters: [
              {
                type: 'reference',
                value: 'Type',
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
          value: 'I',
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
          value: 'Home',
        },
        {
          type: 'reference',
          value: 'Bear',
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
        value: 'GenericInterface',
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
                value: 'Type',
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
                  value: 'Type',
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
            value: 'Internal',
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
      type: 'object',
      parameters: [
        {
          type: 'reference',
          value: 'Array',
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
          value: 'ExtendT',
        },
      ],
      returns: {
        type: 'reference',
        value: 'Bear',
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
              value: 'Type',
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
        value: 'GenericInterface',
        parameters: [
          {
            type: 'reference',
            value: 'Type',
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
    distanceFromOrigin: {
      name: 'distanceFromOrigin',
      type: 'function',
      parameters: [
        {
          type: 'tuple',
          properties: [
            {
              type: 'number',
            },
            {
              type: 'number',
            },
          ],
        },
      ],
      returns: {
        type: 'number',
      },
    },
    Point: {
      type: 'class',
      description: 'this is a class with two members',
      name: 'Point',
      properties: [
        {
          type: 'number',
          description: 'COORDINATE X',
          name: 'x',
        },
        {
          type: 'number',
          description: 'COORDINATE Y',
          name: 'y',
        },
      ],
    },
    ClassWithConstrunctor: {
      name: 'ClassWithConstrunctor',
      type: 'class',
      properties: [
        {
          name: 'name',
          type: 'string',
        },
        {
          description: 'constructor description',
          name: 'constructor',
          type: 'function',
          fnType: 'constructor',
          parameters: [
            {
              name: 'x',
              optional: true,
              type: 'string',
            },
          ],
        },
      ],
    },
    GreeterInitializedMembers: {
      name: 'GreeterInitializedMembers',
      type: 'class',
      properties: [
        {
          name: 'name',
          readonly: true,
          type: 'string',
          value: 'world',
        },
        {
          name: 'err',
          type: 'function',
          parameters: [],
          returns: {
            type: 'void',
          },
        },
      ],
    },
    OverloadConstructor: {
      name: 'OverloadConstructor',
      type: 'class',
      properties: [
        {
          name: 'constructor',
          fnType: 'constructor',
          type: 'function',
          parameters: [
            {
              name: 'x',
              type: 'number',
              value: 0,
            },
            {
              name: 'y',
              type: 'number',
              value: 15,
            },
          ],
        },
        {
          name: 'constructor',
          type: 'function',
          fnType: 'constructor',
          parameters: [
            {
              name: 's',
              type: 'string',
            },
          ],
        },
        {
          name: 'constructor',
          type: 'function',
          fnType: 'constructor',
          parameters: [
            {
              name: 'xs',
              type: 'any',
            },
            {
              name: 'y',
              optional: true,
              type: 'any',
            },
          ],
        },
      ],
    },

    ClassGetters: {
      name: 'ClassGetters',
      type: 'class',
      properties: [
        {
          type: 'number',
          description: 'member description',
          name: '_length',
          value: 0,
        },
        {
          type: 'function',
          description: 'getter description',
          name: 'length',
          fnType: 'getter',
          parameters: [],
        },
        {
          type: 'function',
          parameters: [
            {
              name: 'value',
              type: 'number',
              optional: false,
              value: undefined,
              description: 'the new value',
            },
          ],
          description: 'setter description',
          name: 'length',
          fnType: 'setter',
        },
      ],
    },
  });
});
