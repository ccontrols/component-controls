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
  });
});
