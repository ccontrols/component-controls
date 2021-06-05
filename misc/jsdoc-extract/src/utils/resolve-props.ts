import {
  JSDocTypes,
  PropType,
  isReferenceProp,
  isTypeProp,
  isObjectLikeProp,
} from '../utils';

export const resolveProps = (component: PropType): PropType => {
  return component;
};

const walkProp = (
  jsDocs: JSDocTypes,
  node: PropType,
  props: PropType[],
): void => {
  if (isReferenceProp(node) && node.name) {
    walkProp(jsDocs, jsDocs[node.name], props);
  } else if (isObjectLikeProp(node)) {
    if (
      isTypeProp(node) &&
      node.type &&
      isTypeProp(node.type) &&
      node.type.properties
    ) {
      node.type.properties.map(p => walkProp(jsDocs, p, props));
    } else if (node.properties) {
      node.properties.map(p => walkProp(jsDocs, p, props));
    }
  } else {
    props.push(node);
  }
};

export const walkProps = (jsDocs: JSDocTypes, node: PropType): PropType[] => {
  const props: PropType[] = [];
  walkProp(jsDocs, node, props);
  return props;
};
