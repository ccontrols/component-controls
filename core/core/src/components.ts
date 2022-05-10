/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { PropTypes, PropType } from '@structured-types/api';
import { CodeLocation, ImportType, Imports } from './utility';
import { FileInfo } from './files';
import { JestTests } from './jest';

/**
 * docgen generated property types
 * mapped to common types to be consumed by component-controls
 * check props-info packages for implementations
 */
export { PropType, PropTypes };

/**
 * DocGen type onfo generated for a compoennt
 */

export type ComponentInfo = PropType & {
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
  /**
   * component props
   */
  props: PropTypes;
};

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
   * component full file path
   */
  filePath?: string;

  /**
   * component file name with extension
   */
  fileName?: string;

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
   * source file info
   */
  fileInfo?: FileInfo;

  /**
   * jest test and coverage results for the component
   */
  jest?: JestTests;
}

/**
 * list of components used in store
 */

export type Components = Record<string, Component>;

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
