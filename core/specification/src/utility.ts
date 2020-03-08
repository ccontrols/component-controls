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
 * information about the repository of the stories and components
 *
 */
export interface Repository {
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
