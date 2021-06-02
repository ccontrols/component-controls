import { FrameworkPlugin, JSDocType, JSDocTypes, JSImports } from '../utils';
import { walkProps } from '../utils/resolve-props';

const reactImport = (
  names: JSDocType[],
  imports: JSImports,
): JSDocType | undefined => {
  const reactImports = imports.filter(i => i.module === 'react');
  const foundReact = names?.find(({ name }) => {
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
  return foundReact;
};
const reactClassComponent = (
  component: JSDocType,
  imports: JSImports,
): JSDocType | undefined => {
  const classes = component.inherits?.filter(i => i.type === 'class' && i.name);
  if (classes) {
    return reactImport(classes, imports);
  }
  return undefined;
};

const reactFunctionComponent = (
  component: JSDocType,
  imports: JSImports,
): JSDocType | undefined => {
  if (component.type === 'function') {
    if (component.value) {
      return reactImport([component.value], imports);
    }
    if (component.parameters?.length) {
      return {
        parameters: component.parameters,
      };
    }
  }

  return undefined;
};
const reactComponent = (
  component: JSDocType,
  imports: JSImports,
): JSDocType | undefined => {
  return (
    reactClassComponent(component, imports) ||
    reactFunctionComponent(component, imports)
  );
};
const componentToProps = (
  jsDocs: JSDocTypes,
  component: JSDocType,
  typeProp: JSDocType,
): JSDocType[] => {
  if (typeProp.parameters?.length) {
    return walkProps(jsDocs, typeProp.parameters[0]);
  }
  return [];
};
export const extractProps: FrameworkPlugin = parse => {
  return Object.keys(parse.structures).reduce((acc, name) => {
    const component = parse.structures[name];
    const typeProp = reactComponent(component, parse.imports);
    if (typeProp) {
      const reactComponent = { ...component };
      reactComponent.properties = componentToProps(
        parse.structures,
        component,
        typeProp,
      );
      delete reactComponent.parameters;
      delete reactComponent.inherits;
      delete reactComponent.value;
      return { ...acc, [name]: reactComponent };
    }
    return { ...acc, [name]: component };
  }, {});
};
