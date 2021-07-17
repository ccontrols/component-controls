import path from 'path';
import { parseFiles } from '../../../src/index';
import { typeResolver } from '../../../src/frameworks/react';

describe('function-component', () => {
  it('inline-props', () => {
    const result = parseFiles([path.resolve(__dirname, 'inline-props.tsx')], {
      resolvers: [typeResolver],
    });
    expect(result).toEqual({
      MyComponent: {
        displayName: 'MyComponent',
        kind: 11,
        properties: [
          {
            displayName: 'name',
            optional: true,
            kind: 1,
            value: 'hello',
          },
        ],
      },
    });
  });
  it('no-props', () => {
    const result = parseFiles([path.resolve(__dirname, 'no-props.tsx')], {
      resolvers: [typeResolver],
    });
    expect(result).toEqual({
      MyComponent: {
        displayName: 'MyComponent',
        kind: 11,
      },
    });
  });
});
