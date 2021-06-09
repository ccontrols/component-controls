import {
  FrameworkPlugin,
  PropType,
  PropTypes,
  JSImports,
  isClassProp,
  isFunctionProp,
  FunctionProp,
  ClassProp,
  JSAnalyzeResults,
} from '../utils';
import { walkProps } from '../utils/resolve-props';

const reactImport = (
  names: PropType[],
  imports: JSImports,
): PropType | undefined => {
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
  prop: PropType,
  imports: JSImports,
): ClassProp | undefined => {
  if (isClassProp(prop)) {
    const classes = prop.extends?.filter(i => i.name);
    if (classes) {
      return reactImport(classes, imports);
    }
  }
  return undefined;
};

const reactFunctionComponent = (
  prop: PropType,
  imports: JSImports,
): FunctionProp | undefined => {
  if (isFunctionProp(prop)) {
    if (prop.types) {
      return reactImport(prop.types, imports);
    }
    if (prop.parameters?.length) {
      return {
        parameters: prop.parameters,
      } as FunctionProp;
    }
  }

  return undefined;
};
const reactComponent = (
  component: PropType,
  imports: JSImports,
): PropType | undefined => {
  return (
    reactClassComponent(component, imports) ||
    reactFunctionComponent(component, imports)
  );
};
const componentToProps = (
  props: PropTypes,
  typeProp: ClassProp | FunctionProp,
): PropType[] => {
  const classProp = typeProp as ClassProp;
  if (classProp.properties?.length) {
    return walkProps(props, classProp.properties[0]);
  }
  const fnProp = typeProp as FunctionProp;
  if (fnProp.parameters?.length) {
    return walkProps(props, fnProp.parameters[0]);
  }
  return [];
};
export const extractProps: FrameworkPlugin = (
  name: string,
  jsDocs: JSAnalyzeResults,
) => {
  const component = jsDocs.structures[name];
  if (component) {
    const typeProp = reactComponent(component, jsDocs.imports);
    if (typeProp) {
      const reactComponent = { ...component } as ClassProp;
      reactComponent.properties = componentToProps(jsDocs.structures, typeProp);
      delete (reactComponent as FunctionProp).parameters;
      delete reactComponent.extends;
      delete reactComponent.implements;
      return reactComponent;
    }
    return component;
  }
  return undefined;
};
