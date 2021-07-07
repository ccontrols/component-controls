import path from 'path';
import { parseFiles } from '../../../src/index';
describe('react-no-plugin', () => {
  it('react types', () => {
    const result = parseFiles([path.resolve(__dirname, 'react-types.tsx')]);
    expect(result).toMatchSnapshot();
  });
});
