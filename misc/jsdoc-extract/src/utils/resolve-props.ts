import { JSDocTypes, JSDocType } from '../utils';

export const resolveProps = (jsDocs: JSDocTypes, name: string): JSDocType => {
  const component = jsDocs[name];

  return component;
};

export const walkProps = (jsDocs: JSDocTypes, node: JSDocType): JSDocType => {
  switch (node.type) {
    case 'reference':
      if (node.name) {
        return jsDocs[node.name];
      }
      break;
  }
  return node;
};
