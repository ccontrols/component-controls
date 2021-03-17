import { Story, Document } from '@component-controls/core';

export const componentsFromParams = (
  element: (Document | Story) & { of?: string },
): string[] => {
  const result = [];
  const { component } = element;
  if (component) {
    result.push(component as string);
  }
  const { of: ofName } = element;
  if (ofName) {
    result.push(ofName);
  }
  const { subcomponents } = element;
  if (typeof subcomponents === 'string') {
    result.push(subcomponents as string);
  }
  if (typeof subcomponents === 'object') {
    Object.keys(subcomponents).forEach(key =>
      result.push((subcomponents as any)[key] as string),
    );
  }
  return result;
};
