/* eslint-disable @typescript-eslint/no-unused-vars */
const { store } = require('@component-controls/gatsby-plugin-stories');

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;
  const data = store.loadedStore;
  if (data) {
    Object.keys(data.kinds).forEach(key => {
      const kind = data.kinds[key];
      const nodeContent = JSON.stringify(kind);
      const nodeMeta = {
        id: createNodeId(`kind-${key}`),
        parent: null,
        children: [],
        internal: {
          type: `Kinds`,
          mediaType: `text/html`,
          content: nodeContent,
          contentDigest: createContentDigest(kind),
        },
      };
      const node = Object.assign({}, kind, nodeMeta);
      createNode(node);
    });
  }
};
