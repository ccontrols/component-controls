import path from 'path';
import { parseFiles } from '../../src/index';
describe('react-no-plugin', () => {
  it('react types', () => {
    const result = parseFiles([
      path.resolve(__dirname, 'fixtures', 'react-types'),
    ]);
    expect(result).toMatchSnapshot();
  });
  it('react component', () => {
    const results = parseFiles([
      path.resolve(__dirname, 'fixtures', 'react-simple-class'),
    ]);
    expect(results).toEqual({
      ReactComponent: {
        displayName: 'ReactComponent',
        kind: 13,
        extends: ['React.Component'],
        properties: [
          {
            displayName: 'render',
            kind: 11,
          },
        ],
      },
    });
  });
});
