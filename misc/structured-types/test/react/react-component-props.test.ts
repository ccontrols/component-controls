import path from 'path';
import { parseFiles } from '../../src/index';
import { typeResolver } from '../../src/frameworks/react';
it('load from file', () => {
  const result = parseFiles(
    [path.resolve(__dirname, 'fixtures', 'react-component-props.tsx')],
    {
      resolvers: [typeResolver],
      saveParentProps: false,
      extractNames: ['default'],
    },
  );
  expect(result).toMatchSnapshot();
});
