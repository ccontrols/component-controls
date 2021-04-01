import path from 'path';
import { runTests } from './run-story-tests';
jest.setTimeout(100000);

runTests({
  format: 'ts',
  renderer: 'enzyme',
  bundle: path.resolve(__dirname, 'bundle/component-controls.js'),
});
