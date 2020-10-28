import React, { MouseEvent, useEffect, useState, useCallback } from 'react';

/**
 * position in the stories source code
 * usually taken from AST traverse loaders
 */

export interface CodePosition {
  line: number;
  column: number;
}

/**
 * location in the source code of a story or part of it
 * ie. arguments, usage of arguments
 
*/
export interface CodeLocation {
  start: CodePosition;
  end: CodePosition;
}

/**
 * repository information from package.json
 */
export interface PackageRepository {
  /**
   * link for browsing the file
   */
  browse?: string;

  /**
   * link for project readme
   */
  docs?: string;

  /**
   * link for filing issues with the project
   */
  issues?: string;
}

/**
 * dependecy string - the package version number
 */
export type PackageDependency = string;

/**
 * list of dependencies - package name as the key and the version as the value
 */
export interface PackageDependencies {
  [name: string]: PackageDependency;
}
/**
 * package.json
 * information about the repository of the stories and components
 *
 */
export interface PackageInfo {
  /**
   * file name hash of package.json
   */
  fileHash: string;
  /**
   * package name
   */
  name?: string;

  /**
   * package version
   */
  version?: string;

  /**
   * extracted package.json 'dependencies' section
   */
  dependencies?: PackageDependencies;

  /**
   * extracted package.json 'devDependencies' section
   */
  devDependencies?: PackageDependencies;

  /**
   * extracted package.json 'peerDependencies' section
   */
  peerDependencies?: PackageDependencies;

  /**
   * repository information extracted from the "repository" field in package.json.
   */
  repository: PackageRepository;
}

/**
 * story render function
 * @param controlValues props values passed by controls
 * @param context context parameters passed as second parameter
 */
export type StoryRenderFn = (
  controlValues: { [key: string]: any },
  context?: any,
) => Promise<() => any> | any;

/**
 * an import name
 */
export interface ImportName {
  /**
   * the imported name from the import file
   */
  name: string;
  /**
   * alias imported as. If a default import, the string 'default' is here.
   */
  importedName: string;
}

/**
 * imports - library/file as key and the imported names as an array
 */
export interface Imports {
  [key: string]: ImportName[];
}

/**
 * default export keyword
 */
export const defaultExport = 'default';

/**
 * an item in the ActionBar component
 */
export interface ActionItem {
  /**
   * optional id, used if title is not set
   */
  id?: string;
  /**
   * title - if a string, will use the built-in components, else can prvide custom React component
   */
  node: React.ReactNode;

  /**
   * if the title is a string and href is set will use a default `<Link />` component
   */
  href?: string;

  /**
   * if the title is a string and href is not set, onClick will be used on a `<Button />` component
   */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void | boolean;
  /**
   * hide an action item
   */
  hidden?: boolean;

  /**
   * optional order, if not provided will use the natural order of items from right to left
   */
  order?: number;

  /**
   * optional group. ActionItems in the same group will not be separated by horizonal margin
   */
  group?: string | number;

  /**
   * optional label visible to screen readers for aria accessibility.
   */
  'aria-label'?: string;

  /**
   * panel for Tab-enabled UI, where an action item can open up a panel with tabs
   * in this case, the onClick function can return true/false whether to open up the panel
   */
  panel?: React.ReactNode;
}

export type ActionItems = ActionItem[];

export type AsyncFnReturn<T, E> = {
  execute: () => Promise<void>;
  status: 'idle' | 'pending' | 'success' | 'error';
  value: T | null;
  error: E | null;
};
// source https://usehooks.com/useAsync/
export const useAsync = <T, E = string>(
  asyncFunction: () => Promise<T>,
  immediate = true,
): AsyncFnReturn<T, E> => {
  const [status, setStatus] = useState<AsyncFnReturn<T, E>['status']>('idle');
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);

  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(() => {
    setStatus('pending');
    setValue(null);
    setError(null);
    return asyncFunction()
      .then((response: any) => {
        setStatus('success');
        setValue(response);
      })
      .catch((error: any) => {
        setError(error);
        setStatus('error');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
};
