import { StoryParameters } from '../types';
export const extractProperties = (node: any): StoryParameters | undefined => {
  if (node && node.properties) {
    const properties: StoryParameters = node.properties
      .map((property: any) => {
        if (property.value) {
          switch (property.value.type) {
            case 'BooleanLiteral':
            case 'NumericLiteral':
            case 'StringLiteral': {
              return {
                value: property.value.value,
                name: property.key.name,
                loc: property.loc,
              };
            }
            case 'Identifier':
              return {
                value: property.value.name,
                name: property.key.name,
                loc: property.loc,
              };
            case 'MemberExpression':
              return {
                value: `${property.value.object.name}.${property.value.property.name}`,
                name: property.key.name,
                loc: property.loc,
              };

            case 'ObjectExpression': {
              return {
                value: extractProperties(property.value),
                name: property.key.name,
                loc: property.loc,
              };
            }
            default:
              // console.log(property.value);
              return null;
          }
        }
        return null;
      })
      .filter((p: any) => p);
    return properties;
  }
  return undefined;
};
