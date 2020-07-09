import { Story, Document } from '@component-controls/core';

const componentName = (component: string | object | undefined) => {
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
  let { component } = element;
  const name = componentName(component);
  if (name) {
    result.push(name);
  }
  const { of: componentShorthand } = element;
  const ofName = componentName(componentShorthand);
  if (ofName) {
    result.push(ofName);
  }
  let { subcomponents } = element;
  if (typeof subcomponents === 'string') {
    result.push(subcomponents);
  }
  if (typeof subcomponents === 'object') {
    //@ts-ignore
    Object.keys(subcomponents).forEach(key => result.push(subcomponents[key]));
  }
  return result;
};
