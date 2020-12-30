import { CodeLocation, ImportType, Imports } from './utility';

export type TypeValue =
  | 'any'
  | 'boolean'
  | 'number'
  | 'string'
  | 'array'
  | 'object'
  | 'enum'
  | 'union'
  | 'literal'
  | 'symbol'
  | 'function'
  | string;

export interface TypeInformation {
  name: TypeValue;

  /**
   * type value
   * elements of enum, array, fields of object
   * return value of function
   */
  value?: TypeInformation[] | any;

  /**
   * raw type code
   */
  raw?: string;

  /**
   * argument types of function
   */
  arguments?: TypeInformation[] | any;
  /**
   * is the property required
   */
  required?: boolean;
}

/**
 * docgen generated property types
 * mapped to common types to be consumed by component-controls
 * check props-info packages for implementations
 */
export interface PropType {
  /**
   * default value for the property
   */
  defaultValue?: any;
  /**
   * propertty type
   */
  type: TypeInformation;
  /**
   * description of the property
   */
  description?: string;
  /**
   * name of the parent/inherited property
   */
  parentName?: string;
}

/**
 * list of properties of the component
 */
export interface PropTypes {
  [key: string]: PropType;
}

/**
 * DocGen type onfo generated for a compoennt
 */
export interface ComponentInfo {
  /**
   * name of the component
   */
  displayName: string;

  /**
   * optional description
   */
  description?: string;

  /**
   * component props
   */
  props: PropTypes;
}

export type JSXNode = Partial<ImportType> & {
  attributes?: string[];
  children?: JSXTree;
};
/**
 * jsx tree of elements for the component
 */
export type JSXTree = JSXNode[];

/**
 * component specified for stories or story files
 */
export interface Component {
  /**
   * name of the component as used in the fiel
   */
  name: string;
  /**
   * imported name ex:
   * - default import import Button from 'buttons';
   * - namespace import import * as Button from 'buttons';
   * - named import import { Button } from 'buttons';
   * - named alias import import { Btn as Button } from 'buttons';
   */
  importedName?: 'default' | 'namespace' | string;

  /**
   * imported from
   */
  from?: string;

  /**
   * resolved import request
   */
  request?: string;

  /**
   * file containing the component's props info
   * sometimes different from the component source file
   * for example external libraries that have a separate index.d.ts file
   */
  propsInfoFile?: string;

  /**
   * location of the import statement in the source code file
   */
  loc?: CodeLocation;

  /**
   * lookup into the global store of PackageInfo package.json
   */
  package?: string;

  /**
   * the source code of the component file, extracted by the AST instrumenting loaders. Can also be overriden manually.
   */
  source?: string;
  /**
   * docgen generated component info
   */
  info?: ComponentInfo;
  /**
   * list of component's file imports from external libraries
   */
  externalDependencies?: Imports;

  /**
   * list of component's file imports from local (imported via relative import) files
   */
  localDependencies?: Imports;

  /**
   * jsx component tree
   */
  jsx?: JSXTree;
}
/**
 * given a component, return its name
 * @param component a string component name, or a component class, with a name or displayName static property
 */
export const getComponentName = (component: any): string | undefined => {
  return component
    ? typeof component === 'string'
      ? component
      : component.name || component.displayName
    : undefined;
};
