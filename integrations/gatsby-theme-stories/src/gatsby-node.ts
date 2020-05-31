import { compile } from '@component-controls/webpack-compile';
import { NodePluginArgs, NodeInput, CreatePagesArgs } from 'gatsby';
import { StoriesStore } from '@component-controls/specification';
import { loadStoryStore } from '@component-controls/store';
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
  const loadedStore: StoriesStore | undefined = loadStoryStore(store);

  if (loadedStore) {
    Object.keys(loadedStore.kinds).forEach(key => {
      //@ts-ignore
      const kind = loadedStore.kinds[key];

      const kindMetadata: NodeInput = {
        id: createNodeId(`storyKind-${key}`),
        children: [],
        internal: {
          type: 'storyKind',
          content: JSON.stringify(kind),
          contentDigest: createContentDigest(kind),
        },
      };

      const nodeKind = Object.assign({}, kind, kindMetadata);
      createNode(nodeKind);
    });
    Object.keys(loadedStore.stories).forEach(storyId => {
      //@ts-ignore
      const story = loadedStore.stories[storyId];
      const storyMetadata: NodeInput = {
        id: storyId,
        children: [],
        internal: {
          type: 'story',
          content: JSON.stringify(story),
          contentDigest: createContentDigest(story),
        },
      };

      const nodeStory = Object.assign({}, story, storyMetadata);
      createNode(nodeStory);
    });
  }
};

exports.createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const stories = await graphql<{
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
  if (stories.data) {
    stories.data.allStoryKind.edges.forEach(({ node }: any) => {
      createPage({
        path: `/docs/${node.title}`,
        component: require.resolve(`../src/templates/StoryPage.tsx`),
        context: {
          kind: node.title,
        },
      });
    });
  }
};
