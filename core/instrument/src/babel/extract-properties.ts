import {
  StoryArguments,
  StoryArgument,
} from '@component-controls/specification';
import { sourceLocation } from './utils';

const nodeToParameter = (node: any): StoryArgument | undefined => {
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
          loc: sourceLocation(node.loc),
        };
      }
      case 'Identifier':
        return {
          value: value.name,
          name,
          loc: sourceLocation(node.loc),
        };
      case 'MemberExpression':
        return {
          value: `${value.object.name}.${value.property.name}`,
          name,
          loc: sourceLocation(node.loc),
        };
      case 'ObjectExpression': {
        const val = extractProperties(value);
        if (val) {
          return {
            value: val,
            name,
            loc: sourceLocation(node.loc),
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
export const extractProperties = (node: any): StoryArguments | undefined => {
  if (node) {
    if (node.properties) {
      const properties: StoryArguments = node.properties
        .map((propNode: any) => nodeToParameter(propNode))
        .filter((p: any) => p);
      return properties;
    }
    const parameter = nodeToParameter(node);
    if (parameter) {
      return [parameter];
    }
  }
  return undefined;
};
