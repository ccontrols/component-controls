import { FrameworkPlugin, JSDocType, JSImports } from '../utils';

const isReactComponent = (
  component: JSDocType,
  imports: JSImports,
): JSDocType | undefined => {
  if (
    component?.properties?.find(
      p => p.type === 'function' && p.name === 'render',
    )
  ) {
    return component;
  }
  const classes = component.inherits?.filter(i => i.type === 'class' && i.name);
  const reactImports = imports.filter(i => i.module === 'react');
  const inheritsReact = classes?.some(({ name }) => {
    const nameParts = name?.split('.');
    if (nameParts) {
      const namedImport = nameParts.pop();
      const defaultImport = nameParts.length ? nameParts[0] : null;
      if (namedImport) {
        return reactImports.some(
          i => i.name === defaultImport || i.namedImports?.[namedImport],
        );
      }
    }
    return false;
  });
  return inheritsReact ? component : undefined;
};

export const extractProps: FrameworkPlugin = (names, parse) => {
  return names.reduce((acc, name) => {
    const component = isReactComponent(parse.structures[name], parse.imports);
    if (component) {
      return { ...acc, [name]: component };
    }
    return acc;
  }, {});
};
