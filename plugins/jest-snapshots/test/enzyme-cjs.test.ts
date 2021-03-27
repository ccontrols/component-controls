import path from 'path';
import { createTemplate } from '../src/templates';
import { runTests } from './run-tests';

jest.setTimeout(1000000);
test('enzyme cjs', async () => {
  const renderedFile = createTemplate({
    format: 'cjs',
    renderer: 'enzyme',
    configPath: path.resolve(__dirname, '.config'),
  });
  expect(renderedFile).toMatchSnapshot();
  await runTests('cjs', renderedFile);
});
