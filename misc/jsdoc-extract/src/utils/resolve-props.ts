import { JSDocTypes, JSDocType } from '../utils';

export const resolveProps = (jsDocs: JSDocTypes, name: string): JSDocType => {
  const component = jsDocs[name];

  return component;
};

export const walkProps = (jsDocs: JSDocTypes, node: JSDocType): JSDocType[] => {
  switch (node.type) {
    case 'reference':
      if (node.name) {
        return walkProps(jsDocs, jsDocs[node.name]);
      }
      break;
    case 'type':
      if (node.name) {
        const component = jsDocs[node.name];
        return (
          component?.returns?.properties ||
          component.properties ||
          node.properties ||
          []
        );
      }
      break;
  }
  return node.properties || [];
};
