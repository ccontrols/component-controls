import path from 'path';
import { parseFiles } from '../../src/index';
import { typeResolver } from '../../src/frameworks/react';
it('load from file', () => {
  const result = parseFiles(
    [path.resolve(__dirname, 'fixtures', 'react-simple-class.tsx')],
    { typeResolver },
  );
  expect(result).toEqual({
    ReactComponent: {
      kind: 15,
      properties: [
        {
          kind: 1,
          displayName: 'name',
        },
      ],
      displayName: 'ReactComponent',
    },
  });
});
