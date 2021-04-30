/**
 * git commits fields
 */
export interface Commit {
  hash?: string;
  subject?: string;
  authorName?: string;
  authorDate?: string;
  authorEmail?: string;
  committerName?: string;
  committerDate?: string;
  committerEmail?: string;
}

export type Commits = Commit[];

export interface FileInfo {
  /**
   *  date file created
   */
  dateCreated?: string;

  /**
   *  date last modified
   */
  dateModified?: string;

  /**
   * git commits for the file
   */
  commits?: Commits;
  /**
   * number of lines of code
   */
  sloc?: {
    /**
     * lines of block comments
     */
    block: number;

    /**
     * empty lines of block comments
     */

    blockEmpty: number;
    /**
     * total lines of comments
     */
    comment: number;

    /**
     * empty lines
     */
    empty: number;

    /**
     * lines mixed up with source and comments
     */
    mixed: number;

    /**
     * lines with single-line comments
     */
    single: number;

    /**
     * lines of code (source)
     */
    source: number;

    /**
     * lines with TODO's
     */
    todo: number;

    /**
     * physical total lines
     */
    total: number;
  };
}
