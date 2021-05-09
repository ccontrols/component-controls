import path from 'path';
import { dynamicRequire } from '../src/modules';
describe('dynamic-import', () => {
  it('typescript', () => {
    const config = dynamicRequire(
      path.resolve(__dirname, './fixtures/buildtime.ts'),
    );
    expect(config).toMatchObject({
      default: {
        stories: ['../../stories/src/blogs/*.mdx'],
      },
    });
  });
  it('typescript config', () => {
    const config = dynamicRequire(
      path.resolve(__dirname, '../../../examples/gatsby/.config/buildtime.ts'),
    );
    expect(config).toMatchObject({
      default: {
        search: {
          indexingModule:
            '/Users/atanasster/component-controls/search/algolia/indexing.js',
          searchingModule:
            '/Users/atanasster/component-controls/search/algolia/dist/index.js',
          fields: ['title', 'description', 'source', 'tags', 'components'],
          emptySearchDocuments: [
            'Getting started/Site generators/Gatsby',
            'Getting started/Site generators/Nextjs',
            'Getting started/Site generators/Webpack',
            'Getting started/Documentation site',
            'Writing Documentation/ESM Stories',
            'Getting started/UI customization',
            'Writing Documentation/MDX Documentation',
            'Writing Documentation/MDX Stories',
          ],
          options: {
            saveIndex: true,
            indexName: undefined,
            appID: undefined,
            searchAPIKey: undefined,
            adminAPIKey: undefined,
          },
        },
      },
    });
  });
  it('esm', () => {
    const config = dynamicRequire(
      path.resolve(__dirname, './fixtures/buildtime.js'),
    );
    expect(config).toMatchObject({
      default: {
        stories: ['../../stories/src/blogs/*.mdx'],
      },
    });
  });
});
