import path from 'path';
import { run } from '../src/index';

it('import-props', () => {
  const result = run(path.resolve(__dirname, './fixtures/import-props.tsx'));
  expect(result).toMatchObject({
    Column: {
      type: 'function',
      parameters: [
        {
          type: 'void',
          name: 'props',
        },
      ],
    },
  });
});
