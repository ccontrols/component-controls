import path from 'path';
import { parseFiles } from '../../../src/index';
import { typeResolver } from '../../../src/frameworks/react';
describe('react-class-components', () => {
  it('default-export', () => {
    const result = parseFiles([path.resolve(__dirname, 'default-export.tsx')], {
      resolvers: [typeResolver],
      saveParentProps: false,
    });
    expect(result).toMatchSnapshot();
  });
  it('named-export', () => {
    const result = parseFiles([path.resolve(__dirname, 'named-export.tsx')], {
      resolvers: [typeResolver],
      saveParentProps: false,
    });
    expect(result).toMatchSnapshot();
  });
  it('inline-props', () => {
    const result = parseFiles([path.resolve(__dirname, 'inline-props.tsx')], {
      resolvers: [typeResolver],
    });
    expect(result).toEqual({
      ReactComponent: {
        kind: 15,
        properties: [
          {
            kind: 1,
            displayName: 'name',
          },
        ],
        displayName: 'ReactComponent',
      },
    });
  });
});
