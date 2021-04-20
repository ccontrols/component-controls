import path from 'path';
import { loadConfiguration, configRequireContext } from '../src/index';

describe('require-context', () => {
  it('exact names', () => {
    expect(
      configRequireContext(
        loadConfiguration(__dirname, undefined, [
          'file',
          'name',
          '--config',
          'fixtures/exact-names',
        ]),
      ),
    ).toMatchObject([
      {
        directory: path.resolve(
          __dirname,
          '../../../examples/stories/src/stories',
        ),
        regExp: /controls-editors-starter\\.stories\\.tsx/,
        useSubdirectories: false,
      },
      {
        directory: path.resolve(
          __dirname,
          '../../../examples/stories/src/blogs',
        ),
        regExp: /gatsby-nextjs-storybook\\.mdx/,
        useSubdirectories: false,
      },
    ]);
  });
});
