import { StoryAttributes } from '@component-controls/specification';

interface StoryAttribute {
  name: string;
  value: any;
}
const nodeToAttribute = (node: any): StoryAttribute | undefined => {
  const value = node.value || node;
  const name = node.key ? node.key.name : node.name;
  if (value) {
    switch (value.type) {
      case 'BooleanLiteral':
      case 'NumericLiteral':
      case 'StringLiteral': {
        return {
          value: value.value,
          name,
        };
      }
      case 'Identifier':
        return {
          value: value.name,
          name,
        };
      case 'MemberExpression':
        return {
          value: `${value.object.name}.${value.property.name}`,
          name,
        };
      case 'ObjectExpression': {
        const val = extractAttributes(value);
        if (val) {
          return {
            value: val,
            name,
          };
        }
        break;
      }
      default:
        // console.log(property.value);
        return undefined;
    }
  }
  return undefined;
};
export const extractAttributes = (
  node: any,
): StoryAttributes | any | undefined => {
  if (node) {
    if (node.properties) {
      const attributes: StoryAttributes = node.properties.reduce(
        (acc: StoryAttributes, propNode: any) => {
          const attribute = nodeToAttribute(propNode);
          if (attribute) {
            return { ...acc, [attribute.name]: attribute.value };
          } else {
            return acc;
          }
        },
        {},
      );
      return attributes;
    }
    const attribute = nodeToAttribute(node);
    if (attribute) {
      return attribute.value;
    }
  }
  return undefined;
};
