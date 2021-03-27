import path from 'path';
import { createTemplate } from '../src/templates';
import { runTests } from './run-tests';
jest.setTimeout(100000);

test('enzyme ts', async () => {
  const renderedFile = createTemplate({
    format: 'ts',
    renderer: 'enzyme',
    configPath: path.resolve(__dirname, '.config'),
  });
  expect(renderedFile).toMatchSnapshot();
  await runTests('ts', renderedFile);
});
