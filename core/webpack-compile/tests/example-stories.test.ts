import * as path from 'path';
import { compile } from '../src/index';

describe('test example stories', () => {
  it('compile', async () => {
    const { store } = await compile({
      presets: ['react', 'react-docgen-typescript'],
      configPath: path.resolve(__dirname, 'fixtures', 'examples'),
    });
    expect(store).toMatchSnapshot();
  }, 30000);
});
