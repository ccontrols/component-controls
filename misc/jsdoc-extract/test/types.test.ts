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
      kind: 1,
      value: 'a',
    },
    n: {
      description: 'this is a number',
      name: 'n',
      kind: 2,
      value: 3.14,
    },
    b: {
      description: 'this is a false',
      name: 'b',
      kind: 3,
      value: false,
    },
    t: {
      description: 'this is a true',
      name: 't',
      kind: 3,
      value: true,
    },
    bool: {
      description: 'this is an undefined boolean value',
      name: 'bool',
      kind: 3,
    },
    a: {
      description: 'this is any type',
      name: 'a',
      kind: 17,
      value: 'as',
    },
    u: {
      description: 'this is unknown type',
      name: 'u',
      kind: 9,
      value: undefined,
    },
    obj: {
      description: 'this is an undefined object',
      name: 'obj',
      kind: 0,
      value: undefined,
    },
    initializedObj: {
      description: 'this is an initialized object',
      name: 'initializedObj',
      kind: 0,
      value: [
        {
          name: 'a',
          kind: 2,
          value: 12,
        },
        {
          name: 'b',
          kind: 1,
          value: 'test',
        },
      ],
    },
    T: {
      description: 'this is type',
      name: 'T',
      kind: 15,
      type: {
        kind: 15,
        properties: [
          {
            description: 'type member property',
            name: 'm',
            kind: 1,
          },
        ],
      },
    },
    ExtendT: {
      name: 'ExtendT',
      kind: 15,
      type: {
        kind: 15,
        properties: [
          {
            kind: 18,
            name: 'T',
          },
          {
            kind: 15,
            properties: [
              {
                description: 'honey',
                name: 'honey',
                kind: 3,
              },
            ],
          },
        ],
      },
    },
    IndexT: {
      name: 'IndexT',
      kind: 15,
      type: {
        kind: 15,
        properties: [
          {
            readonly: true,
            kind: 20,
            index: {
              kind: 15,
              properties: [
                {
                  name: 'Bear',
                  kind: 18,
                },
                {
                  name: 'b',
                  kind: 10,
                },
              ],
            },
            properties: [
              {
                kind: 1,
              },
            ],
          },
        ],
      },
    },
    IntersectionType: {
      name: 'IntersectionType',
      kind: 15,
      type: {
        kind: 15,
        properties: [
          {
            kind: 18,
            name: 'IndexT',
          },
          {
            kind: 18,
            name: 'Internal',
          },
        ],
      },
    },
    GenericType: {
      name: 'GenericType',
      kind: 15,
      type: {
        kind: 15,
        properties: [
          {
            name: 'Type',
            kind: 18,
          },
        ],
      },
    },
    UnionGenericType: {
      name: 'UnionGenericType',
      kind: 15,
      type: {
        kind: 4,
        properties: [
          {
            kind: 18,
            name: 'Type',
          },
          {
            kind: 10,
          },
        ],
      },
    },
    GenericArrayType: {
      name: 'GenericArrayType',
      kind: 15,
      type: {
        kind: 16,
        elements: [
          {
            kind: 18,
            name: 'Type',
          },
        ],
      },
    },
    NestedGenericType: {
      name: 'NestedGenericType',
      kind: 15,
      type: {
        kind: 18,
        name: 'GenericArrayType',
        types: [
          {
            kind: 18,
            name: 'UnionGenericType',
            types: [
              {
                kind: 18,
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
      kind: 14,
      properties: [
        {
          description: 'interface member property',
          name: 'm',
          kind: 1,
        },
      ],
    },
    Internal: {
      name: 'Internal',
      kind: 14,
      properties: [],
    },
    Bear: {
      name: 'Bear',
      kind: 14,
      extends: [
        {
          kind: 14,
          name: 'I',
        },
      ],
      properties: [
        {
          name: 'honey',
          kind: 3,
        },
      ],
    },
    Home: {
      name: 'Home',
      kind: 14,
      properties: [
        {
          name: 'resident',
          readonly: true,
          kind: 15,
          properties: [
            {
              name: 'name',
              kind: 1,
            },
            {
              name: 'age',
              kind: 2,
            },
          ],
        },
      ],
    },
    IndexInterface: {
      name: 'IndexInterface',
      kind: 14,
      properties: [
        {
          kind: 20,
          index: {
            kind: 1,
          },
          properties: [
            {
              kind: 2,
            },
          ],
        },
      ],
    },
    MultipleInheritance: {
      name: 'MultipleInheritance',
      kind: 14,
      extends: [
        {
          kind: 14,
          name: 'Home',
        },
        {
          kind: 14,
          name: 'Bear',
        },
      ],
      properties: [
        {
          name: 'ownfield',
          kind: 4,
          properties: [
            {
              kind: 1,
              value: 'test',
            },
            {
              kind: 2,
              value: 1,
            },
          ],
        },
      ],
    },
    GenericInterface: {
      description: 'generics',
      name: 'GenericInterface',
      kind: 14,
      properties: [
        {
          description: 'configurable property type',
          name: 'Type',
          kind: 18,
        },
      ],
      generics: [
        {
          name: 'Type',
        },
      ],
    },
    InterfaceArrayType: {
      name: 'InterfaceArrayType',
      kind: 14,
      properties: [
        {
          description: 'Gets or sets the length of the array.',
          name: 'length',
          kind: 2,
        },
        {
          description: 'Removes the last element from an array and returns it.',
          name: 'pop',
          kind: 11,
          returns: {
            kind: 4,
            properties: [
              {
                kind: 18,
                name: 'Type',
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
          name: 'push',
          kind: 11,
          parameters: [
            {
              name: 'items',
              kind: 16,
              elements: [
                {
                  kind: 18,
                  name: 'Type',
                },
              ],
            },
          ],
          returns: {
            kind: 2,
          },
        },
      ],
      generics: [
        {
          name: 'Type',
        },
      ],
    },
    InterfaceWithEnumConstant: {
      name: 'InterfaceWithEnumConstant',
      kind: 14,
      properties: [
        {
          description: 'kind is an enumm constant',
          name: 'StringEnums.Up',
          kind: 18,
        },
        {
          description: 'radius property',
          name: 'radius',
          kind: 2,
        },
      ],
    },
    GenericConsumer: {
      name: 'GenericConsumer',
      kind: 15,
      type: {
        kind: 18,
        name: 'GenericInterface',
        types: [
          {
            kind: 1,
          },
        ],
      },
    },
    arrString: {
      deprecated: 'yes',
      description: 'this is an array of strings',
      name: 'arrString',
      kind: 16,
      elements: [
        {
          kind: 1,
        },
      ],
      value: [
        {
          kind: 1,
          value: 'one',
        },
        {
          kind: 1,
          value: 'two',
        },
      ],
    },
    arrType: {
      description: 'type array of interface type',
      name: 'arrType',
      kind: 15,
      type: {
        kind: 16,
        elements: [
          {
            kind: 18,
            name: 'Internal',
          },
        ],
      },
    },
    names: {
      description: 'const array of strings',
      name: 'names',
      kind: 16,
      value: [
        {
          kind: 1,
          value: 'Alice',
        },
        {
          kind: 1,
          value: 'Bob',
        },
        {
          kind: 1,
          value: 'Eve',
        },
      ],
    },
    ArrayKeyword: {
      name: 'ArrayKeyword',
      kind: 16,
      elements: [
        {
          kind: 1,
        },
      ],
      value: [
        {
          kind: 1,
          value: 'test',
        },
      ],
    },
    ArrayNew: {
      name: 'ArrayNew',
      kind: 0,
      reference: {
        kind: 18,
        name: 'Array',
      },
      properties: [
        {
          kind: 1,
          value: 'red',
        },
        {
          kind: 1,
          value: 'green',
        },
        {
          kind: 1,
          value: 'blue',
        },
      ],
    },
    union: {
      description: 'strings union',
      name: 'union',
      kind: 15,
      type: {
        kind: 4,
        properties: [
          {
            kind: 1,
            value: 'this',
          },
          {
            kind: 2,
            value: 1,
          },
          {
            kind: 3,
            value: false,
          },
          {
            kind: 10,
          },
          {
            kind: 8,
          },
        ],
      },
    },
    InitializedEnum: {
      description: 'this is an enum with an initialized element',
      name: 'InitializedEnum',
      kind: 5,
      properties: [
        {
          description: 'enum starts at 1',
          name: 'Up',
          kind: 2,
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
      kind: 5,
      properties: [
        {
          name: 'Up',
          kind: 1,
          value: 'UP',
        },
        {
          name: 'Down',
          kind: 1,
          value: 'DOWN',
        },
        {
          name: 'Left',
          kind: 1,
          value: 'LEFT',
        },
        {
          name: 'Right',
          kind: 1,
          value: 'RIGHT',
        },
      ],
    },
    Tuple: {
      name: 'Tuple',
      kind: 15,
      type: {
        kind: 6,
        properties: [
          {
            kind: 1,
          },
          {
            kind: 2,
          },
        ],
      },
    },
    OptionalTuple: {
      name: 'OptionalTuple',
      kind: 15,
      type: {
        kind: 6,
        properties: [
          {
            kind: 2,
          },
          {
            kind: 2,
          },
          {
            optional: true,
            kind: 2,
          },
        ],
      },
    },
    SpreadTuple: {
      name: 'SpreadTuple',
      kind: 15,
      type: {
        kind: 6,
        properties: [
          {
            kind: 7,
            type: {
              kind: 16,
              elements: [
                {
                  kind: 3,
                },
              ],
            },
          },
          {
            kind: 1,
          },
          {
            kind: 2,
          },
        ],
      },
    },
    greet: {
      parameters: [
        {
          name: 'name',
          description: 'string type parameters',
          kind: 1,
        },
      ],
      description: 'greeting function',
      name: 'greet',
      kind: 11,
    },
    arrowGreet: {
      description: 'arrow greeting function',
      name: 'arrowGreet',
      kind: 11,
      parameters: [
        {
          description: 'name parameter inline description',
          name: 'name',
          kind: 1,
        },
      ],
      returns: {
        kind: 12,
      },
    },
    printCoord: {
      parameters: [
        {
          name: 'pt',
          description: 'object parameter',
          kind: 15,
          properties: [
            {
              description: 'x coordinate',
              name: 'x',
              kind: 2,
            },
            {
              description: 'optional y coordinate',
              name: 'y',
              optional: true,
              kind: 2,
            },
          ],
        },
      ],
      description: 'print coordinates',
      name: 'printCoord',
      kind: 11,
      returns: {
        kind: 12,
      },
    },
    printId: {
      name: 'printId',
      kind: 11,
      parameters: [
        {
          name: 'id',
          kind: 4,
          properties: [
            {
              kind: 2,
            },
            {
              kind: 1,
            },
          ],
        },
      ],
      returns: {
        kind: 12,
      },
    },
    paintHomeyBear: {
      name: 'paintHomeyBear',
      kind: 11,
      parameters: [
        {
          kind: 18,
          name: 'ExtendT',
        },
      ],
      returns: {
        kind: 18,
        name: 'Bear',
      },
    },
    genericFunction: {
      name: 'genericFunction',
      kind: 11,
      parameters: [
        {
          name: 'GenericInterface',
          kind: 18,
          types: [
            {
              kind: 18,
              name: 'Type',
            },
          ],
        },
        {
          name: 'Type',
          kind: 18,
        },
      ],
      returns: {
        kind: 18,
        name: 'GenericInterface',
        types: [
          {
            kind: 18,
            name: 'Type',
          },
        ],
      },
      types: [
        {
          name: 'Type',
        },
      ],
    },
    readOnlyParameters: {
      name: 'readOnlyParameters',
      kind: 11,
      parameters: [
        {
          name: 'values',
          kind: 16,
          elements: [
            {
              kind: 1,
            },
          ],
        },
      ],
      returns: {
        kind: 12,
      },
    },
    FC: {
      name: 'FC',
      kind: 11,
      types: [
        {
          kind: 18,
          name: 'Bear',
        },
      ],
      parameters: [
        {
          name: 'props',
        },
      ],
    },
    StringNumberPair: {
      name: 'StringNumberPair',
      kind: 14,
      properties: [
        {
          description: 'specialized properties',
          name: 'length',
          kind: 2,
          value: 2,
        },
        {
          name: '0',
          kind: 1,
        },
        {
          name: '1',
          kind: 2,
        },
        {
          description: "Other 'Array<string | number>' members...",
          name: 'slice',
          kind: 11,
          parameters: [
            {
              name: 'start',
              optional: true,
              kind: 2,
            },
            {
              name: 'end',
              optional: true,
              kind: 2,
            },
          ],
          returns: {
            kind: 16,
            elements: [
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
    spreadTupleFunction: {
      name: 'spreadTupleFunction',
      kind: 11,
      parameters: [
        {
          name: 'args',
          kind: 6,
          properties: [
            {
              kind: 1,
            },
            {
              kind: 2,
            },
            {
              kind: 7,
              type: {
                kind: 16,
                elements: [
                  {
                    kind: 3,
                  },
                ],
              },
            },
          ],
        },
      ],
      returns: {
        kind: 12,
      },
    },
    distanceFromOrigin: {
      name: 'distanceFromOrigin',
      kind: 11,
      parameters: [
        {
          kind: 6,
          properties: [
            {
              kind: 2,
            },
            {
              kind: 2,
            },
          ],
        },
      ],
      returns: {
        kind: 2,
      },
    },
    Point: {
      description: 'this is a class with two members',
      name: 'Point',
      kind: 13,
      properties: [
        {
          description: 'COORDINATE X',
          name: 'x',
          kind: 2,
        },
        {
          description: 'COORDINATE Y',
          name: 'y',
          kind: 2,
        },
      ],
    },
    ClassWithConstrunctor: {
      name: 'ClassWithConstrunctor',
      kind: 13,
      properties: [
        {
          name: 'name',
          kind: 1,
        },
        {
          description: 'constructor description',
          kind: 21,
          parameters: [
            {
              name: 'x',
              optional: true,
              kind: 1,
            },
          ],
        },
      ],
    },
    GreeterInitializedMembers: {
      name: 'GreeterInitializedMembers',
      kind: 13,
      properties: [
        {
          name: 'name',
          readonly: true,
          kind: 1,
          value: 'world',
        },
        {
          name: 'err',
          kind: 11,
          returns: {
            kind: 12,
          },
        },
      ],
    },
    OverloadConstructor: {
      name: 'OverloadConstructor',
      kind: 13,
      properties: [
        {
          kind: 21,
          parameters: [
            {
              name: 'x',
              kind: 2,
              value: 0,
            },
            {
              name: 'y',
              kind: 2,
              value: 15,
            },
          ],
        },
        {
          kind: 21,
          parameters: [
            {
              name: 's',
              kind: 1,
            },
          ],
        },
        {
          kind: 21,
          parameters: [
            {
              name: 'xs',
              kind: 17,
            },
            {
              name: 'y',
              optional: true,
              kind: 17,
            },
          ],
        },
      ],
    },
    ClassGetters: {
      name: 'ClassGetters',
      kind: 13,
      properties: [
        {
          description: 'member description',
          name: '_length',
          kind: 2,
          value: 0,
        },
        {
          description: 'getter description',
          name: 'length',
          kind: 22,
        },
        {
          parameters: [
            {
              name: 'value',
              description: 'the new value',
              kind: 2,
            },
          ],
          description: 'setter description',
          name: 'length',
          kind: 23,
        },
      ],
    },
    ClassIndexSignature: {
      name: 'ClassIndexSignature',
      kind: 13,
      properties: [
        {
          description: 'class index',
          kind: 20,
          index: {
            kind: 4,
            properties: [
              {
                kind: 3,
              },
              {
                kind: 11,
                parameters: [
                  {
                    name: 's',
                    kind: 1,
                  },
                ],
                returns: {
                  kind: 3,
                },
              },
            ],
          },
          properties: [
            {
              kind: 1,
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
              kind: 1,
            },
          ],
          name: 'check',
          kind: 11,
        },
      ],
    },
    ClassImplements: {
      description: 'class implements an interface',
      name: 'ClassImplements',
      kind: 13,
      properties: [
        {
          description: 'member',
          name: 'length',
          kind: 2,
        },
        {
          description: 'pop function',
          name: 'pop',
          kind: 11,
          returns: {
            kind: 1,
          },
        },
        {
          parameters: [
            {
              name: 'items',
              description: 'those are items',
              kind: 16,
              elements: [
                {
                  kind: 1,
                },
              ],
            },
          ],
          description: 'push function',
          name: 'push',
          kind: 11,
          returns: {
            kind: 2,
          },
        },
      ],
      implements: [
        {
          properties: [
            {
              kind: 1,
            },
          ],
          kind: 14,
          name: 'InterfaceArrayType',
        },
      ],
    },
    ClassExtends: {
      name: 'ClassExtends',
      kind: 13,
      properties: [
        {
          name: 'woof',
          kind: 11,
          parameters: [
            {
              name: 'times',
              kind: 2,
            },
          ],
        },
      ],
      extends: [
        {
          kind: 13,
          name: 'ClassImplements',
        },
      ],
    },
    MemberVisibikity: {
      name: 'MemberVisibikity',
      kind: 13,
      properties: [
        {
          description: 'a public method',
          name: 'method1',
          visibility: 'public',
          kind: 11,
        },
        {
          description: 'a protected method',
          name: 'method2',
          visibility: 'protected',
          kind: 11,
        },
        {
          description: 'a private method',
          name: 'method3',
          visibility: 'private',
          kind: 11,
        },
      ],
    },
    ClassStatic: {
      name: 'ClassStatic',
      kind: 13,
      properties: [
        {
          name: 'x',
          static: true,
          kind: 2,
          value: 0,
        },
        {
          name: 'printX',
          static: true,
          kind: 11,
        },
      ],
    },
    GenericClass: {
      name: 'GenericClass',
      kind: 13,
      properties: [
        {
          name: 'Type',
          kind: 18,
        },
        {
          parameters: [
            {
              name: 'Type',
              kind: 18,
            },
          ],
          description: 'generic constructor',
          kind: 21,
        },
      ],
      generics: [
        {
          name: 'Type',
        },
      ],
    },
    ArrowFunctionClass: {
      name: 'ArrowFunctionClass',
      kind: 13,
      properties: [
        {
          description: 'name value initialzied',
          name: 'name',
          kind: 1,
          value: 'MyClass',
        },
        {
          returns: {
            description: 'a string value',
            kind: 1,
          },
          description: 'name accessor',
          name: 'getName',
          kind: 11,
        },
      ],
    },
    ThisBasedClass: {
      name: 'ThisBasedClass',
      kind: 13,
      properties: [
        {
          name: 'isFile',
          kind: 11,
          returns: {
            kind: 18,
            name: 'FileRep',
          },
        },
        {
          name: 'isDirectory',
          kind: 11,
          returns: {
            kind: 18,
            name: 'Directory',
          },
        },
        {
          name: 'isNetworked',
          kind: 11,
          returns: {
            kind: 15,
            properties: [
              {
                kind: 18,
                name: 'Networked',
              },
              {},
            ],
          },
        },
        {
          kind: 21,
          parameters: [
            {
              name: 'path',
              visibility: 'public',
              kind: 1,
            },
            {
              name: 'networked',
              visibility: 'private',
              kind: 3,
            },
          ],
        },
      ],
    },
    FileRep: {
      name: 'FileRep',
      kind: 13,
      properties: [
        {
          kind: 21,
          parameters: [
            {
              name: 'path',
              kind: 1,
            },
            {
              name: 'content',
              visibility: 'public',
              kind: 1,
            },
          ],
        },
      ],
      extends: [
        {
          kind: 13,
          name: 'ThisBasedClass',
        },
      ],
    },
    Directory: {
      name: 'Directory',
      kind: 13,
      properties: [
        {
          name: 'children',
          kind: 16,
          elements: [
            {
              kind: 18,
              name: 'ThisBasedClass',
            },
          ],
        },
      ],
      extends: [
        {
          kind: 13,
          name: 'ThisBasedClass',
        },
      ],
    },
    Networked: {
      name: 'Networked',
      kind: 14,
      properties: [
        {
          name: 'host',
          kind: 1,
        },
      ],
    },
    PredicateClass: {
      name: 'PredicateClass',
      kind: 13,
      properties: [
        {
          name: 'T',
          optional: true,
          kind: 18,
        },
        {
          returns: {
            description: 'a predicate',
            kind: 15,
            properties: [
              {
                name: 'T',
                kind: 18,
              },
            ],
          },
          description: 'checks if value is not undefined',
          name: 'hasValue',
          kind: 11,
        },
      ],
      generics: [
        {
          name: 'T',
        },
      ],
    },
    ParameterModifiers: {
      description: 'parameter modifiers',
      name: 'ParameterModifiers',
      kind: 13,
      properties: [
        {
          parameters: [
            {
              name: 'x',
              description: 'x coordinate',
              kind: 2,
              visibility: 'public',
              readonly: true,
            },
            {
              name: 'y',
              description: 'y coordinate',
              kind: 2,
              visibility: 'protected',
            },
            {
              name: 'z',
              description: 'z coordinate',
              kind: 2,
              visibility: 'private',
            },
          ],
          description: 'constructor implementation',
          kind: 21,
        },
      ],
    },
    AbstraclClass: {
      name: 'AbstraclClass',
      abstract: true,
      kind: 13,
      properties: [
        {
          name: 'getName',
          abstract: true,
          kind: 11,
          returns: {
            kind: 1,
          },
        },
      ],
    },
    ComponentGenericsWithDefault: {
      name: 'ComponentGenericsWithDefault',
      kind: 13,
      properties: [
        {
          name: 'Props',
          kind: 18,
        },
        {
          name: 'State',
          kind: 18,
        },
      ],
      generics: [
        {
          name: 'React.ReactPropTypes',
          kind: 18,
        },
        {
          name: 'State',
          kind: 9,
        },
      ],
    },
    ReactComponent: {
      name: 'ReactComponent',
      kind: 13,
      properties: [
        {
          name: 'render',
          kind: 11,
          returns: {
            kind: 18,
            name: 'React.Node',
          },
        },
      ],
      extends: [
        {
          kind: 13,
          name: 'React.Component',
        },
      ],
    },
    ReactGenerics: {
      name: 'ReactGenerics',
      kind: 13,
      properties: [
        {
          name: 'render',
          kind: 11,
        },
      ],
      extends: [
        {
          properties: [
            {
              kind: 18,
              name: 'GreetingProps',
            },
            {
              kind: 17,
            },
          ],
          kind: 13,
          name: 'React.Component',
        },
      ],
    },
  });
});
