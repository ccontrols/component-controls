import path from 'path';
import { createTemplate } from '../src/templates';
import { runTests } from './run-tests';

jest.setTimeout(100000);
test('rtl esm', async () => {
  const renderedFile = createTemplate({
    format: 'esm',
    renderer: 'rtl',
    configPath: path.resolve(__dirname, '.config'),
  });
  expect(renderedFile).toMatchSnapshot();
  await runTests('esm', renderedFile);
});
