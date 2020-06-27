import { Story, Document } from '@component-controls/core';

export const componentsFromParams = (
  element: (Document | Story) & { of?: string },
): string[] => {
  const result = [];
  let { component } = element;

  if (typeof component === 'string') {
    result.push(component);
  }
  const { of: componentShorthand } = element;
  if (typeof componentShorthand === 'string') {
    result.push(componentShorthand);
  }
  let { subcomponents } = element;
  if (typeof subcomponents === 'string') {
    result.push(subcomponents);
  }
  if (typeof subcomponents === 'object') {
    //@ts-ignore
    Object.keys(subcomponents).forEach(key => result.push(subcomponents[key]));
  }
  if (typeof componentShorthand === 'object') {
    Object.keys(componentShorthand).forEach(key =>
      result.push(componentShorthand[key]),
    );
  }

  return result;
};
