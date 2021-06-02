import { JSDocTypes, JSDocType } from '../utils';

export const resolveProps = (jsDocs: JSDocTypes, name: string): JSDocType => {
  const component = jsDocs[name];

  return component;
};

const walkProp = (
  jsDocs: JSDocTypes,
  node: JSDocType,
  props: JSDocType[],
): void => {
  switch (node.type) {
    case 'reference':
      if (node.name && jsDocs[node.name]) {
        walkProp(jsDocs, jsDocs[node.name], props);
      }
      break;
    case 'type':
      const properties = node?.returns?.properties || node.properties;
      if (properties) {
        properties.map(p => walkProp(jsDocs, p, props));
      }
      break;
    default:
      props.push(node);
      break;
  }
};

export const walkProps = (jsDocs: JSDocTypes, node: JSDocType): JSDocType[] => {
  const props: JSDocType[] = [];
  walkProp(jsDocs, node, props);
  return props;
};
