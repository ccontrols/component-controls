import * as path from 'path';
import { compile } from '../src/index';

expect.addSnapshotSerializer({
  test: val => typeof val === 'object' && val instanceof String,
  print: val => {
    return `"${val.toString().trim()}"`;
  },
});

describe('test subcomponents', () => {
  it('compile', async () => {
    const { store } = await compile({
      presets: ['react', 'react-docgen-typescript'],
      configPath: path.resolve(__dirname, 'fixtures', 'subcomponents'),
    });
    expect(store).toMatchSnapshot();
  }, 30000);
});
