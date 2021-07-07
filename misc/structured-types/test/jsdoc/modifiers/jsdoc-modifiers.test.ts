import path from 'path';
import { parseFiles } from '../../../src/index';

describe('modifiers', () => {
  it('readonly', () => {
    const results = parseFiles([path.resolve(__dirname, 'readonly.js')]);
    expect(results).toEqual({
      pieOptions: {
        displayName: 'pieOptions',
        kind: 15,
        properties: [
          {
            kind: 1,
            displayName: 'plain',
            value: 'pie',
            description: 'Plain.',
          },
          {
            kind: 22,
            displayName: 'aLaMode',
            description: 'A la mode.',
            readonly: true,
          },
        ],
        description: 'Options for ordering a delicious slice of pie.',
      },
    });
  });
  it('public', () => {
    const results = parseFiles([path.resolve(__dirname, 'public.js')]);
    expect(results).toEqual({
      Documents: {
        displayName: 'Documents',
        kind: 15,
        properties: [
          {
            kind: 2,
            displayName: 'Newspaper',
            value: 1,
            description: 'An ordinary newspaper.',
          },
          {
            kind: 2,
            displayName: 'Diary',
            value: 2,
            description: 'My diary.',
            visibility: 'public',
          },
        ],
      },
    });
  });
  it('protected', () => {
    const results = parseFiles([path.resolve(__dirname, 'protected.js')]);
    expect(results).toEqual({
      Documents: {
        displayName: 'Documents',
        kind: 15,
        properties: [
          {
            kind: 2,
            displayName: 'Newspaper',
            value: 1,
            description: 'An ordinary newspaper.',
          },
          {
            kind: 2,
            displayName: 'Diary',
            value: 2,
            description: 'My diary.',
            visibility: 'protected',
          },
        ],
      },
    });
  });
  it('private', () => {
    const results = parseFiles([path.resolve(__dirname, 'private.js')]);
    expect(results).toEqual({
      Documents: {
        displayName: 'Documents',
        kind: 15,
        properties: [
          {
            kind: 2,
            displayName: 'Newspaper',
            value: 1,
            description: 'An ordinary newspaper.',
          },
          {
            kind: 2,
            displayName: 'Diary',
            value: 2,
            description: 'My diary.',
            visibility: 'private',
          },
        ],
      },
    });
  });
});
