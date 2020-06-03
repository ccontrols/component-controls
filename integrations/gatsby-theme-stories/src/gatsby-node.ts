import {
  compile,
  watch,
  CompileProps,
} from '@component-controls/webpack-compile';
import { NodePluginArgs, NodeInput, CreatePagesArgs } from 'gatsby';
import { LoaderOptions } from './types';

const defaultPresets = ['react', 'react-docgen-typescript'];

exports.sourceNodes = async function sourceNodes(
  { actions, createContentDigest, createNodeId }: NodePluginArgs,
  options: LoaderOptions,
) {
  const { createNode } = actions;
  const config: CompileProps = {
    webPack: options.webpack,
    presets: defaultPresets,
    configPath: options.configPath,
  };
  const { store } = true ? await watch(config) : await compile(config);

  if (store) {
    store.stores.forEach(s => {
      //@ts-ignore
      const doc = s.doc;

      const docMetadata: NodeInput = {
        id: createNodeId(`storyDoc-${doc?.title}`),
        children: [],
        internal: {
          type: 'storyDoc',
          content: JSON.stringify(doc),
          contentDigest: createContentDigest(doc),
        },
      };

      const nodeDoc = Object.assign({}, doc, docMetadata);
      createNode(nodeDoc);
    });
  }
};

exports.createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const stories = await graphql<{
    allStoryDoc: any;
  }>(`
    query {
      allStoryDoc {
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
    stories.data.allStoryDoc.edges.forEach(({ node }: any) => {
      createPage({
        path: `/docs/${node.title}`,
        component: require.resolve(`../src/templates/StoryPage.tsx`),
        context: {
          doc: node.title,
        },
      });
    });
  }
};
