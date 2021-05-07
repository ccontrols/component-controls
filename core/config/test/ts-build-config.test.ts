import path from 'path';
import { loadConfiguration } from '../src/index';

describe('ts-build-config', () => {
  it('typescript building config', () => {
    const config = loadConfiguration(
      path.resolve(__dirname, './fixtures', 'ts-config'),
    );
    expect(config.config).toMatchObject({
      stories: ['../*.docs.tsx'],
      instrument: {
        components: {
          tests: true,
        },
      },
    });
  });
});
