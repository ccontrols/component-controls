import path from 'path';
import { run } from '../src/index';

it('react-hoc-usage', () => {
  const result = run(path.resolve(__dirname, './fixtures/react-hoc-usage.tsx'));
  expect(result).toMatchObject({});
});
