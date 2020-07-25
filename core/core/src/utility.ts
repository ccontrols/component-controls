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
) => any;

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
