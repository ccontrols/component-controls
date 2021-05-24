import path from 'path';
import { run } from '../src/index';

describe('class-interface-props', () => {
  it('class-interface-props', () => {
    const result = run(
      path.resolve(__dirname, './fixtures/class-interface-props.tsx'),
    );
    expect(result).toMatchObject({
      IColumnProps: {
        properties: [
          {
            type: 'string',
            description: 'stringProp description ',
            name: 'stringProp',
            optional: true,
          },
          {
            type: 'number',
            description: 'numberProp description ',
            name: 'numberProp',
          },
          {
            type: 'function',
            description: 'function props description',
            name: 'fnProp',
            parameters: [],
            returns: {
              type: 'void',
            },
          },
          {
            type: 'union',
            deprecated: 'since version 1.0',
            description: 'unionProp description',
            name: 'unionProp',
            properties: [
              {
                type: 'string',
                value: 'option1',
              },
              {
                type: 'string',
                value: 'option2',
              },
              {
                type: 'string',
                value: 'option3',
              },
            ],
          },
        ],
      },
      Column: {
        type: 'class',
        description: 'Column description',
        parameters: [
          {
            type: 'IColumnProps',
          },
          {
            type: 'Record',
            parameters: [
              {
                type: 'string',
              },
              {
                type: 'unknown',
              },
            ],
          },
        ],
      },
    });
  });
});
