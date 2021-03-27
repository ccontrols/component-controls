import path from 'path';
import { loadConfigurations } from '../src';

describe('load both configurations', () => {
  test('load', () => {
    const config = loadConfigurations(
      path.resolve(__dirname, 'fixtures/.config'),
    );
    expect(config).toMatchObject({
      title: 'Component controls',
      description:
        'A next-generation tool to create blazing-fast documentation sites',
      language: 'en',
      author: '@component-controls',
      pages: {
        story: {
          label: 'Docs',
          navSidebar: true,
          contextSidebar: true,
          topMenu: true,
          basePath: 'docs/',
          sideNav: {
            storyPaths: true,
            collapseSingle: true,
          },
        },
        blog: {
          label: 'Blog',
          contextSidebar: true,
          topMenu: true,
          indexHome: true,
          basePath: 'blogs/',
        },
        author: {
          label: 'Authors',
          basePath: 'authors/',
        },
        page: {
          label: 'Page',
          container: null,
          basePath: 'pages/',
        },
        tags: {
          label: 'Tags',
          basePath: 'tags/',
        },
      },
      siteRoot: '/',
      siteMap: {
        pages: {
          home: {
            priority: 1,
          },
          index: {
            priority: 0.8,
          },
          doc: {
            priority: 0.5,
          },
        },
      },
      categories: ['author', 'tags'],
      ignore: [
        'readme.md',
        'changelog.md',
        'code_of_conduct.md',
        'contributing.md',
        'license.md',
      ],
      search: {
        searchingModule: '@component-controls/search-fusejs',
      },
      stories: ['../*.docs.tsx'],
      instrument: {
        components: {
          tests: true,
        },
      },
    });
  });
});
