export const getComponentName = (component: any): string | undefined => {
  return component
    ? typeof component === 'string'
      ? component
      : component.name || component.displayName
    : undefined;
};
