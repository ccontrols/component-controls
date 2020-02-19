export const removeMDXAttributes = () => {
  return {
    JSXAttribute: (path: any) => {
      const node = path.node;
      if (node.name && node.name.name === 'mdxType') {
        path.remove();
      }
    },
  };
};
