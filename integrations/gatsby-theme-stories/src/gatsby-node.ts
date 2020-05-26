import { compile } from '@component-controls/webpack-compile';
import { NodePluginArgs, CreatePagesArgs } from 'gatsby';
import { LoaderOptions } from './types';

const defaultPresets = ['react', 'react-docgen-typescript'];

exports.sourceNodes = async function sourceNodes(
  { actions, createContentDigest, createNodeId }: NodePluginArgs,
  options: LoaderOptions,
) {
  const { createNode } = actions;

  const { store } = await compile({
    webPack: options.webpack,
    presets: defaultPresets,
    configPath: options.configPath,
  });
  store.stores.forEach(s => {
    Object.keys(s.kinds).forEach(key => {
      const kind = s.kinds[key];

      const nodeMetadata = {
        id: createNodeId(`storyKind-${key}`),
        children: [],
        internal: {
          type: 'storyKind',
          content: JSON.stringify(kind),
          contentDigest: createContentDigest(kind),
        },
      };

      const node = Object.assign({}, kind, nodeMetadata);
      createNode(node);
    });
  });
};

exports.createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const kinds = await graphql<{
    allStoryKind: any;
  }>(`
    query {
      allStoryKind {
        edges {
          node {
            title
          }
        }
      }
    }
  `);
  const { createPage } = actions;
  if (kinds.data) {
    kinds.data.allStoryKind.edges.forEach(({ node }: any) => {
      createPage({
        path: node.title.toLowerCase(),
        component: require.resolve(`../src/templates/StoryPage.tsx`),
        context: {
          title: node.title,
        },
      });
    });
  }
};
