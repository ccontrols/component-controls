/**
 * git commits fields
 */
export interface Commit {
  commitHash?: string;
  subject?: string;
  authorName?: string;
  authorData?: string;
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
  dateCreated?: Date;

  /**
   *  date last modified
   */
  dateModified?: Date;

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
