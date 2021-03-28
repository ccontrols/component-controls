import path from 'path';
import { createTemplate } from '../src/templates';
import { runTests } from './run-tests';
jest.setTimeout(100000);

test('enzyme bundle esm', async () => {
  const renderedFile = createTemplate({
    format: 'esm',
    renderer: 'enzyme',
    bundle: path.resolve(__dirname, 'bundle/component-controls.js'),
  });
  expect(renderedFile).toMatchSnapshot();
  await runTests('esm', renderedFile);
});
