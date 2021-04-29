import { configure } from 'axe-core';

beforeAll(() => {
  configure({
    rules: [{ id: 'color-contrast', enabled: false }],
  });
});
