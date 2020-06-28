interface StoryAttribute {
  name: string;
  value: any;
}
const nodeToValue = (node: any): any => {
  if (node) {
    switch (node.type) {
      case 'BooleanLiteral':
      case 'NumericLiteral':
      case 'StringLiteral':
        return node.value;
      case 'Identifier':
        return node.name;
      case 'Property':
        return node.name;
      case 'ObjectProperty':
        return node.key.value;

      case 'Literal':
        return node.raw;
      case 'RegExpLiteral':
        const value = node.raw ?? node.extra ? node.extra.raw : undefined;
        // remove leading trailing slashes for string to reg xonversion
        return typeof value === 'string'
          ? value.replace(/^\/|\/$/g, '')
          : value;
      case 'MemberExpression':
        return `${node.object.name}.${node.property.name}`;
      case 'ObjectExpression':
        return extractAttributes(node);
      case 'ArrayExpression':
        if (Array.isArray(node.elements)) {
          return node.elements.map((v: any) => nodeToValue(v));
        }
        break;
      default:
        // console.log(property.value);
        return undefined;
    }
  }
  return undefined;
};
const nodeToAttribute = (node: any): StoryAttribute | undefined => {
  const value = node.value || node;
  const name = node.key
    ? node.key.name ?? node.key.value
    : node.property?.name || node.name;

  const retVal = nodeToValue(value);
  return retVal !== undefined
    ? name
      ? { value: retVal, name }
      : retVal
    : value
    ? { value }
    : undefined;
};
export const extractAttributes = (
  node: any,
): Record<string, any> | any | undefined => {
  if (node) {
    if (node.properties) {
      const attributes: Record<string, any> = node.properties.reduce(
        (acc: Record<string, any>, propNode: any) => {
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
