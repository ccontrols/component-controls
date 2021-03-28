import path from 'path';
import { createTemplate } from '../src/templates';
import { runTests } from './run-tests';

jest.setTimeout(1000000);
test('enzyme bundle cjs', async () => {
  const renderedFile = createTemplate({
    format: 'cjs',
    renderer: 'enzyme',
    bundle: path.resolve(__dirname, 'bundle/component-controls.js'),
  });
  expect(renderedFile).toMatchSnapshot();
  await runTests('cjs', renderedFile);
});
