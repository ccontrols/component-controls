import path from 'path';
import { createTemplate } from '../src/templates';
import { runTests } from './run-tests';

jest.setTimeout(100000);
test('rtl bundle cjs', async () => {
  const renderedFile = createTemplate({
    format: 'cjs',
    renderer: 'rtl',
    bundle: path.resolve(__dirname, 'bundle/component-controls.js'),
  });
  expect(renderedFile).toMatchSnapshot();
  await runTests('cjs', renderedFile);
});
