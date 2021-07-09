import path from 'path';
import { parseFiles } from '../../../src/index';

describe('@description', () => {
  const expected = {
    add: {
      kind: 11,
      description: 'Add two numbers.',
      parameters: [{ displayName: 'a' }, { displayName: 'b' }],
      displayName: 'add',
    },
  };
  it('desc tag', () => {
    const results = parseFiles([path.resolve(__dirname, 'desc-tag.js')]);
    expect(results).toEqual(expected);
  });
  it('description tag', () => {
    const results = parseFiles([path.resolve(__dirname, 'description-tag.js')]);
    expect(results).toEqual(expected);
  });
  it('comment', () => {
    const results = parseFiles([path.resolve(__dirname, 'comment.js')]);
    expect(results).toEqual(expected);
  });
});
