import path from 'path';
import { run } from '../src/index';
import { parse } from '../src/react-docgen-typescript';

it('react-hoc-usage', () => {
  const result = run(path.resolve(__dirname, './fixtures/react-hoc-usage.tsx'));
  const parsed = parse(
    path.resolve(__dirname, './fixtures/react-hoc-usage.tsx'),
  );
  expect(parsed).toMatchObject({});
  expect(result).toMatchObject({});
});
