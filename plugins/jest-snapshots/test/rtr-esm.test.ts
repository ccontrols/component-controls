import path from 'path';
import { createTemplate } from '../src/templates';
import { runTests } from './run-tests';

jest.setTimeout(100000);
test('rtr esm', async () => {
  const renderedFile = createTemplate({
    format: 'esm',
    renderer: 'rtr',
    configPath: path.resolve(__dirname, '.config'),
  });
  expect(renderedFile).toMatchSnapshot();
  await runTests('esm', renderedFile);
});
