import path from 'path';
import { getTypescriptConfig } from '../src';

it('jsfile', () => {
  const config = getTypescriptConfig(
    path.resolve(__dirname, './fixtures/jsfile/jsfile.js'),
  );
  expect(config).toBe(undefined);
});
