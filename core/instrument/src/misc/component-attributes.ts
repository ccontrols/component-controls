import { Story, Document } from '@component-controls/core';

const componentName = (
  component: string | Record<string, unknown> | undefined,
) => {
  if (component) {
    if (typeof component === 'string') {
      return component;
    }
    if (typeof component.toString === 'function') {
      return component.toString();
    }
  }
  return undefined;
};
export const componentsFromParams = (
  element: (Document | Story) & { of?: string },
): string[] => {
  const result = [];
  const { component } = element;
  const name = componentName(component);
  if (name) {
    result.push(name);
  }
  const { of: componentShorthand } = element;
  const ofName = componentName(componentShorthand);
  if (ofName) {
    result.push(ofName);
  }
  const { subcomponents } = element;
  if (typeof subcomponents === 'string') {
    result.push(subcomponents);
  }
  if (typeof subcomponents === 'object') {
    Object.keys(subcomponents).forEach(key =>
      result.push((subcomponents as any)[key]),
    );
  }
  return result;
};
