import path from 'path';
import { analyzeFiles } from '../src/index';

it('types', () => {
  const { structures } = analyzeFiles([
    path.resolve(__dirname, './fixtures/types.ts'),
  ]);
  expect(structures).toEqual({
    s: {
      description: 'this is a string',
      name: 's',
      type: 'string',
      value: 'a',
    },
    n: {
      description: 'this is a number',
      name: 'n',
      type: 'number',
      value: 3.14,
    },
    b: {
      description: 'this is a false',
      name: 'b',
      value: false,
      type: 'boolean',
    },
    t: {
      description: 'this is a true',
      name: 't',
      value: true,
      type: 'boolean',
    },
    bool: {
      description: 'this is an undefined boolean value',
      name: 'bool',
      type: 'boolean',
    },
    a: {
      description: 'this is any type',
      name: 'a',
      type: 'any',
      value: 'as',
    },
    u: {
      description: 'this is unknown type',
      name: 'u',
      type: 'unknown',
      value: undefined,
    },
    obj: {
      description: 'this is an undefined object',
      name: 'obj',
      type: 'object',
      value: undefined,
    },
    initializedObj: {
      description: 'this is an initialized object',
      name: 'initializedObj',
      type: 'object',
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
      description: 'this is type',
      name: 'T',
      type: 'type',
      returns: {
        type: 'type',
        properties: [
          {
            description: 'type member property',
            name: 'm',
            type: 'string',
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
                description: 'honey',
                name: 'honey',
                type: 'boolean',
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
            readonly: true,
            type: 'index',
            parameters: [
              {
                type: 'type',
                properties: [
                  {
                    name: 'Bear',
                    type: 'reference',
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
            name: 'Type',
            type: 'reference',
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
      description: 'this is interface\nmultiple lines',
      name: 'I',
      type: 'interface',
      properties: [
        {
          description: 'interface member property',
          name: 'm',
          type: 'string',
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
          type: 'interface',
          name: 'Home',
        },
        {
          type: 'interface',
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
      description: 'generics',
      name: 'GenericInterface',
      type: 'interface',
      properties: [
        {
          description: 'configurable property type',
          name: 'Type',
          type: 'reference',
        },
      ],
      parameters: [
        {
          name: 'Type',
        },
      ],
    },
    InterfaceArrayType: {
      name: 'InterfaceArrayType',
      type: 'interface',
      properties: [
        {
          description: 'Gets or sets the length of the array.',
          name: 'length',
          type: 'number',
        },
        {
          description: 'Removes the last element from an array and returns it.',
          name: 'pop',
          type: 'function',
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
          description:
            'Appends new elements to an array, and returns the new length of the array.',
          name: 'push',
          type: 'function',
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
    InterfaceWithEnumConstant: {
      name: 'InterfaceWithEnumConstant',
      type: 'interface',
      properties: [
        {
          description: 'kind is an enumm constant',
          name: 'StringEnums.Up',
          type: 'reference',
        },
        {
          description: 'radius property',
          name: 'radius',
          type: 'number',
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
    arrString: {
      deprecated: 'yes',
      description: 'this is an array of strings',
      name: 'arrString',
      type: 'array',
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
      description: 'type array of interface type',
      name: 'arrType',
      type: 'type',
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
      description: 'const array of strings',
      name: 'names',
      type: 'array',
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
      value: {
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
    },
    ArrayNew: {
      name: 'ArrayNew',
      type: 'object',
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
      description: 'strings union',
      name: 'union',
      type: 'type',
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
    InitializedEnum: {
      description: 'this is an enum with an initialized element',
      name: 'InitializedEnum',
      type: 'enum',
      properties: [
        {
          description: 'enum starts at 1',
          name: 'Up',
          type: 'number',
          value: 1,
        },
        {
          description: 'second element',
          name: 'Down',
        },
        {
          name: 'Left',
        },
        {
          name: 'Right',
        },
      ],
    },
    StringEnums: {
      name: 'StringEnums',
      type: 'enum',
      properties: [
        {
          name: 'Up',
          type: 'string',
          value: 'UP',
        },
        {
          name: 'Down',
          type: 'string',
          value: 'DOWN',
        },
        {
          name: 'Left',
          type: 'string',
          value: 'LEFT',
        },
        {
          name: 'Right',
          type: 'string',
          value: 'RIGHT',
        },
      ],
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
      parameters: [
        {
          name: 'name',
          description: 'string type parameters',
          type: 'string',
        },
      ],
      description: 'greeting function',
      name: 'greet',
      type: 'function',
    },
    arrowGreet: {
      description: 'arrow greeting function',
      name: 'arrowGreet',
      type: 'function',
      parameters: [
        {
          description: 'name parameter inline description',
          name: 'name',
          type: 'string',
        },
      ],
      returns: {
        type: 'void',
      },
    },
    printCoord: {
      parameters: [
        {
          name: 'pt',
          description: 'object parameter',
          type: 'type',
          properties: [
            {
              description: 'x coordinate',
              name: 'x',
              type: 'number',
            },
            {
              description: 'optional y coordinate',
              name: 'y',
              optional: true,
              type: 'number',
            },
          ],
        },
      ],
      description: 'print coordinates',
      name: 'printCoord',
      type: 'function',
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
          name: 'GenericInterface',
          type: 'reference',
          parameters: [
            {
              type: 'reference',
              name: 'Type',
            },
          ],
        },
        {
          name: 'Type',
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
          description: 'specialized properties',
          name: 'length',
          type: 'number',
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
          description: "Other 'Array<string | number>' members...",
          name: 'slice',
          type: 'function',
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
      description: 'this is a class with two members',
      name: 'Point',
      type: 'class',
      properties: [
        {
          description: 'COORDINATE X',
          name: 'x',
          value: {
            type: 'number',
          },
        },
        {
          description: 'COORDINATE Y',
          name: 'y',
          value: {
            type: 'number',
          },
        },
      ],
    },
    ClassWithConstrunctor: {
      name: 'ClassWithConstrunctor',
      type: 'class',
      properties: [
        {
          name: 'name',
          value: {
            type: 'string',
          },
        },
        {
          description: 'constructor description',
          name: 'constructor',
          fnType: 'constructor',
          type: 'function',
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
          value: {
            type: 'string',
            value: 'world',
          },
        },
        {
          name: 'err',
          type: 'function',
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
          fnType: 'constructor',
          type: 'function',
          parameters: [
            {
              name: 's',
              type: 'string',
            },
          ],
        },
        {
          name: 'constructor',
          fnType: 'constructor',
          type: 'function',
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
          description: 'member description',
          name: '_length',
          value: {
            type: 'number',
            value: 0,
          },
        },
        {
          description: 'getter description',
          name: 'length',
          type: 'function',
          fnType: 'getter',
        },
        {
          parameters: [
            {
              name: 'value',
              description: 'the new value',
              type: 'number',
            },
          ],
          description: 'setter description',
          name: 'length',
          type: 'function',
          fnType: 'setter',
        },
      ],
    },
    ClassIndexSignature: {
      name: 'ClassIndexSignature',
      type: 'class',
      properties: [
        {
          description: 'class index',
          type: 'index',
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
          returns: {
            description: 'returns the chec return value',
          },
          parameters: [
            {
              name: 's',
              description: 'input string',
              type: 'string',
            },
          ],
          name: 'check',
          type: 'function',
        },
      ],
    },
    ClassImplements: {
      description: 'class implements an interface',
      name: 'ClassImplements',
      type: 'class',
      properties: [
        {
          description: 'member',
          name: 'length',
          value: {
            type: 'number',
          },
        },
        {
          description: 'pop function',
          name: 'pop',
          type: 'function',
          returns: {
            type: 'string',
          },
        },
        {
          parameters: [
            {
              name: 'items',
              description: 'those are items',
              type: 'array',
              properties: [
                {
                  type: 'string',
                },
              ],
            },
          ],
          description: 'push function',
          name: 'push',
          type: 'function',
          returns: {
            type: 'number',
          },
        },
      ],
      inherits: [
        {
          type: 'interface',
          parameters: [
            {
              type: 'string',
            },
          ],
          name: 'InterfaceArrayType',
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
          name: 'ClassImplements',
        },
      ],
    },
    MemberVisibikity: {
      name: 'MemberVisibikity',
      type: 'class',
      properties: [
        {
          description: 'a public method',
          name: 'method1',
          visibility: 'public',
          type: 'function',
        },
        {
          description: 'a protected method',
          name: 'method2',
          visibility: 'protected',
          type: 'function',
        },
        {
          description: 'a private method',
          name: 'method3',
          visibility: 'private',
          type: 'function',
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
          value: {
            type: 'number',
            value: 0,
          },
        },
        {
          name: 'printX',
          static: true,
          type: 'function',
        },
      ],
    },
    GenericClass: {
      name: 'GenericClass',
      type: 'class',
      properties: [
        {
          name: 'contents',
          value: {
            type: 'reference',
            name: 'Type',
          },
        },
        {
          parameters: [
            {
              name: 'Type',
              type: 'reference',
            },
          ],
          description: 'generic constructor',
          name: 'constructor',
          fnType: 'constructor',
          type: 'function',
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
          description: 'name value initialzied',
          name: 'name',
          value: {
            type: 'string',
            value: 'MyClass',
          },
        },
        {
          returns: {
            description: 'a string value',
          },
          description: 'name accessor',
          name: 'getName',
          value: {
            type: 'function',
            returns: {
              type: 'string',
            },
          },
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
          returns: {
            fnType: 'predicate',
            type: 'reference',
            name: 'FileRep',
          },
        },
        {
          name: 'isDirectory',
          type: 'function',
          returns: {
            fnType: 'predicate',
            type: 'reference',
            name: 'Directory',
          },
        },
        {
          name: 'isNetworked',
          type: 'function',
          returns: {
            fnType: 'predicate',
            type: 'type',
            properties: [
              {
                type: 'reference',
                name: 'Networked',
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
          name: 'ThisBasedClass',
        },
      ],
    },
    Directory: {
      name: 'Directory',
      type: 'class',
      properties: [
        {
          name: 'children',
          value: {
            type: 'array',
            properties: [
              {
                type: 'reference',
                name: 'ThisBasedClass',
              },
            ],
          },
        },
      ],
      inherits: [
        {
          type: 'class',
          name: 'ThisBasedClass',
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
          value: {
            type: 'reference',
            name: 'T',
          },
        },
        {
          returns: {
            description: 'a predicate',
            fnType: 'predicate',
            type: 'type',
            properties: [
              {
                name: 'T',
                type: 'reference',
              },
            ],
          },
          description: 'checks if value is not undefined',
          name: 'hasValue',
          type: 'function',
        },
      ],
      parameters: [
        {
          name: 'T',
        },
      ],
    },
    ParameterModifiers: {
      description: 'parameter modifiers',
      name: 'ParameterModifiers',
      type: 'class',
      properties: [
        {
          parameters: [
            {
              name: 'x',
              description: 'x coordinate',
              type: 'number',
              visibility: 'public',
              readonly: true,
            },
            {
              name: 'y',
              description: 'y coordinate',
              type: 'number',
              visibility: 'protected',
            },
            {
              name: 'z',
              description: 'z coordinate',
              type: 'number',
              visibility: 'private',
            },
          ],
          description: 'constructor implementation',
          name: 'constructor',
          fnType: 'constructor',
          type: 'function',
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
          value: {
            type: 'reference',
            name: 'Props',
          },
        },
        {
          name: 'state',
          value: {
            type: 'reference',
            name: 'State',
          },
        },
      ],
      parameters: [
        {
          name: 'React.ReactPropTypes',
          type: 'reference',
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
          returns: {
            type: 'reference',
            name: 'React.Node',
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
    ReactGenerics: {
      name: 'ReactGenerics',
      type: 'class',
      properties: [
        {
          name: 'render',
          type: 'function',
        },
      ],
      inherits: [
        {
          type: 'class',
          parameters: [
            {
              type: 'reference',
              name: 'GreetingProps',
            },
            {
              type: 'any',
            },
          ],
          name: 'React.Component',
        },
      ],
    },
    TypedInitializedFunction: {
      name: 'TypedInitializedFunction',
      value: {
        name: 'FC',
        type: 'reference',
        parameters: [
          {
            type: 'reference',
            name: 'Bear',
          },
        ],
      },
      type: 'function',
      parameters: [
        {
          name: 'props',
        },
      ],
    },
  });
});
