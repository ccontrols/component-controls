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
  const name = componentName(component as string);
  if (name) {
    // transform to string
    element.component = name;
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
    element.subcomponents = Object.keys(subcomponents).reduce(
      (acc, key) => ({
        ...acc,
        [key]: componentName(subcomponents[key] as string),
      }),
      {},
    );
    Object.keys(element.subcomponents).forEach(key =>
      result.push((element.subcomponents as any)[key]),
    );
  }
  return result;
};
