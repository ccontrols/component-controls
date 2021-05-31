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
          type: 'interface',
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
          type: 'interface',
          value: 'Home',
        },
        {
          type: 'interface',
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
      description: 'generics',
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
              description: 'the new value',
            },
          ],
          description: 'setter description',
          name: 'length',
          fnType: 'setter',
        },
      ],
    },
    ClassIndexSignature: {
      name: 'ClassIndexSignature',
      type: 'class',
      properties: [
        {
          type: 'index',
          description: 'class index',
          parameters: [
            {
              type: 'union',
              properties: [
                {
                  type: 'boolean',
                },
                {
                  type: 'function',
                  parameters: [
                    {
                      name: 's',
                      type: 'string',
                    },
                  ],
                  returns: {
                    type: 'boolean',
                  },
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
        {
          type: 'function',
          returns: {
            description: 'returns the chec return value',
          },
          parameters: [
            {
              name: 's',
              type: 'string',
              description: 'input string',
            },
          ],
          name: 'check',
        },
      ],
    },
    ClassImplements: {
      type: 'class',
      description: 'class implements an interface',
      name: 'ClassImplements',
      properties: [
        {
          type: 'number',
          description: 'member',
          name: 'length',
        },
        {
          type: 'function',
          description: 'pop function',
          name: 'pop',
          parameters: [],
          returns: {
            type: 'string',
          },
        },
        {
          type: 'function',
          parameters: [
            {
              name: 'items',
              type: 'array',
              description: 'those are items',
              properties: [
                {
                  type: 'string',
                },
              ],
            },
          ],
          description: 'push function',
          name: 'push',
          returns: {
            type: 'number',
          },
        },
      ],
      inherits: [
        {
          type: 'interface',
          value: 'InterfaceArrayType',
        },
      ],
    },
    ClassExtends: {
      name: 'ClassExtends',
      type: 'class',
      properties: [
        {
          name: 'woof',
          type: 'function',
          parameters: [
            {
              name: 'times',
              type: 'number',
            },
          ],
        },
      ],
      inherits: [
        {
          type: 'class',
          value: 'ClassImplements',
        },
      ],
    },
    MemberVisibikity: {
      name: 'MemberVisibikity',
      type: 'class',
      properties: [
        {
          type: 'function',
          description: 'a public method',
          name: 'method1',
          visibility: 'public',
          parameters: [],
        },
        {
          type: 'function',
          description: 'a protected method',
          name: 'method2',
          visibility: 'protected',
          parameters: [],
        },
        {
          type: 'function',
          description: 'a private method',
          name: 'method3',
          visibility: 'private',
          parameters: [],
        },
      ],
    },
    ClassStatic: {
      name: 'ClassStatic',
      type: 'class',
      properties: [
        {
          name: 'x',
          static: true,
          type: 'number',
          value: 0,
        },
        {
          name: 'printX',
          static: true,
          type: 'function',
          parameters: [],
        },
      ],
    },
    GenericClass: {
      name: 'GenericClass',
      type: 'class',
      properties: [
        {
          name: 'contents',
          type: 'reference',
          value: 'Type',
        },
        {
          type: 'function',
          parameters: [
            {
              name: 'value',
              type: 'reference',
              value: 'Type',
              description: 'generic type variable',
            },
          ],
          description: 'generic constructor',
          name: 'constructor',
          fnType: 'constructor',
        },
      ],
      parameters: [
        {
          name: 'Type',
        },
      ],
    },
    ArrowFunctionClass: {
      name: 'ArrowFunctionClass',
      type: 'class',
      properties: [
        {
          type: 'string',
          description: 'name value initialzied',
          name: 'name',
          value: 'MyClass',
        },
        {
          type: 'function',
          returns: {
            description: 'a string value',
            type: 'string',
          },
          description: 'name accessor',
          name: 'getName',
          parameters: [],
        },
      ],
    },
    ThisBasedClass: {
      name: 'ThisBasedClass',
      type: 'class',
      properties: [
        {
          name: 'isFile',
          type: 'function',
          parameters: [],
          returns: {
            fnType: 'predicate',
            type: 'reference',
            value: 'FileRep',
          },
        },
        {
          name: 'isDirectory',
          type: 'function',
          parameters: [],
          returns: {
            fnType: 'predicate',
            type: 'reference',
            value: 'Directory',
          },
        },
        {
          name: 'isNetworked',
          type: 'function',
          parameters: [],
          returns: {
            fnType: 'predicate',
            type: 'type',
            properties: [
              {
                type: 'reference',
                value: 'Networked',
              },
              {},
            ],
          },
        },
        {
          name: 'constructor',
          fnType: 'constructor',
          type: 'function',
          parameters: [
            {
              name: 'path',
              visibility: 'public',
              type: 'string',
            },
            {
              name: 'networked',
              visibility: 'private',
              type: 'boolean',
            },
          ],
        },
      ],
    },
    FileRep: {
      name: 'FileRep',
      type: 'class',
      properties: [
        {
          name: 'constructor',
          fnType: 'constructor',
          type: 'function',
          parameters: [
            {
              name: 'path',
              type: 'string',
            },
            {
              name: 'content',
              visibility: 'public',
              type: 'string',
            },
          ],
        },
      ],
      inherits: [
        {
          type: 'class',
          value: 'ThisBasedClass',
        },
      ],
    },
    Directory: {
      name: 'Directory',
      type: 'class',
      properties: [
        {
          name: 'children',
          type: 'array',
          properties: [
            {
              type: 'reference',
              value: 'ThisBasedClass',
            },
          ],
        },
      ],
      inherits: [
        {
          type: 'class',
          value: 'ThisBasedClass',
        },
      ],
    },
    Networked: {
      name: 'Networked',
      type: 'interface',
      properties: [
        {
          name: 'host',
          type: 'string',
        },
      ],
    },
    PredicateClass: {
      name: 'PredicateClass',
      type: 'class',
      properties: [
        {
          name: 'value',
          optional: true,
          type: 'reference',
          value: 'T',
        },
        {
          type: 'function',
          returns: {
            description: 'a predicate',
            fnType: 'predicate',
            type: 'type',
            properties: [
              {
                name: 'value',
                type: 'reference',
                value: 'T',
              },
            ],
          },
          description: 'checks if value is not undefined',
          name: 'hasValue',
          parameters: [],
        },
      ],
      parameters: [
        {
          name: 'T',
        },
      ],
    },
    ParameterModifiers: {
      type: 'class',
      description: 'parameter modifiers',
      name: 'ParameterModifiers',
      properties: [
        {
          type: 'function',
          parameters: [
            {
              name: 'x',
              type: 'number',
              description: 'x coordinate',
              visibility: 'public',
              readonly: true,
            },
            {
              name: 'y',
              type: 'number',
              description: 'y coordinate',
              visibility: 'protected',
            },
            {
              name: 'z',
              type: 'number',
              description: 'z coordinate',
              visibility: 'private',
            },
          ],
          description: 'constructor implementation',
          name: 'constructor',
          fnType: 'constructor',
        },
      ],
    },
    AbstraclClass: {
      name: 'AbstraclClass',
      abstract: true,
      type: 'class',
      properties: [
        {
          name: 'getName',
          abstract: true,
          type: 'function',
          parameters: [],
          returns: {
            type: 'string',
          },
        },
      ],
    },
    ComponentGenericsWithDefault: {
      name: 'ComponentGenericsWithDefault',
      type: 'class',
      properties: [
        {
          name: 'props',
          type: 'reference',
          value: 'Props',
        },
        {
          name: 'state',
          type: 'reference',
          value: 'State',
        },
      ],
      parameters: [
        {
          name: 'Props',
          type: 'reference',
          value: 'React.ReactPropTypes',
        },
        {
          name: 'State',
          type: 'unknown',
        },
      ],
    },
    ReactComponent: {
      name: 'ReactComponent',
      type: 'class',
      properties: [
        {
          name: 'render',
          type: 'function',
          parameters: [],
          returns: {
            type: 'reference',
            value: 'React.Node',
          },
        },
      ],
      inherits: [
        {
          type: 'class',
          name: 'React.Component',
        },
      ],
    },
  });
});
