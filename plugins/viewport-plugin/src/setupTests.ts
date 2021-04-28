import { configure } from 'axe-core';

beforeAll(() => {
  configure({
    rules: [{ id: 'duplicate-id', enabled: false }],
  });
});
