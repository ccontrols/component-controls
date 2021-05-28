import path from 'path';
import { run } from '../src/index';

it('types', () => {
  const result = run(path.resolve(__dirname, './fixtures/types.ts'));
  expect(result).toMatchObject({
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
      value: undefined,
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
      type: 'interface',
      description: 'this is type',
      value: undefined,
      name: 'T',
      properties: [
        {
          type: 'string',
          description: 'type member property',
          value: undefined,
          name: 'm',
        },
      ],
    },
    I: {
      type: 'interface',
      description: 'this is interface\nmultiple lines',
      value: undefined,
      name: 'I',
      properties: [
        {
          type: 'string',
          description: 'interface member property',
          value: undefined,
          name: 'm',
        },
      ],
    },
    arrString: {
      type: 'array',
      deprecated: 'yes',
      description: 'this is an array of strings',
      value: ['one', 'two'],
      name: 'arrString',
      properties: [
        {
          type: 'string',
        },
      ],
    },
    Internal: {
      value: undefined,
      name: 'Internal',
      type: 'interface',
      properties: [],
    },
    arrType: {
      type: 'array',
      description: 'type array of interface type',
      value: undefined,
      name: 'arrType',
      properties: [
        {
          type: 'reference',
          name: 'Internal',
        },
      ],
    },
  });
});
