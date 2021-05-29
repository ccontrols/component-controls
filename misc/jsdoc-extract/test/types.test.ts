import path from 'path';
import { run } from '../src/index';

it('types', () => {
  const result = run(path.resolve(__dirname, './fixtures/types.ts'));
  expect(result).toEqual({
    s: {
      type: 'string',
      description: 'this is a string',
      value: 'a',
      name: 's',
    },
    n: {
      type: 'number',
      description: 'this is a number',
      value: 3.14,
      name: 'n',
    },
    b: {
      type: 'boolean',
      description: 'this is a false',
      value: false,
      name: 'b',
    },
    t: {
      type: 'boolean',
      description: 'this is a true',
      value: true,
      name: 't',
    },
    bool: {
      type: 'boolean',
      description: 'this is an undefined boolean value',
      name: 'bool',
    },
    a: {
      type: 'any',
      description: 'this is any type',
      value: 'as',
      name: 'a',
    },
    u: {
      type: 'unknown',
      description: 'this is unknown type',
      value: undefined,
      name: 'u',
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
      properties: [
        {
          type: 'string',
          description: 'type member property',
          name: 'm',
        },
      ],
    },
    ExtendT: {
      name: 'ExtendT',
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
    IndexT: {
      name: 'IndexT',
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
    IntersectionType: {
      name: 'IntersectionType',
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
    arrString: {
      type: 'array',
      deprecated: 'yes',
      description: 'this is an array of strings',
      value: [
        { type: 'string', value: 'one' },
        { type: 'string', value: 'two' },
      ],
      name: 'arrString',
      properties: [
        {
          type: 'string',
        },
      ],
    },
    Internal: {
      name: 'Internal',
      type: 'interface',
      properties: [],
    },
    arrType: {
      type: 'array',
      description: 'type array of interface type',
      name: 'arrType',
      properties: [
        {
          type: 'reference',
          name: 'Internal',
        },
      ],
    },
    union: {
      type: 'union',
      description: 'strings union',
      name: 'union',
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
          value: null,
          type: 'null',
        },
        {
          value: undefined,
          type: 'undefined',
        },
      ],
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
      returns: { type: 'void' },
      parameters: [
        {
          type: 'string',
          description: 'name parameter inline description',
          name: 'name',
        },
      ],
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
  });
});
