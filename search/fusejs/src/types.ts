import { SearchFields } from '@component-controls/core';

export interface FuseJSSearchOptions {
  /**
   * Whether the score should be included in the result set.
   * A score of 0indicates a perfect match, while a score of 1 indicates a complete mismatch.
   * Default false.
   */
  includeScore?: boolean;
  /**
   * Indicates whether comparisons should be case sensitive.
   * Default false.
   */
  isCaseSensitive?: boolean;
  /**
   * Whether the matches should be included in the result set.
   * When true, each record in the result set will include the indices of the matched characters.
   * These can consequently be used for highlighting purposes.
   * Default false.
   */
  includeMatches?: boolean;

  /**
   * Only the matches whose length exceeds this value will be returned.
   * For instance, if you want to ignore single character matches in the result, set it to 2.
   * Default 1.
   */
  minMatchCharLength?: number;

  /**
   * Whether to sort the result list, by score.
   * Default true.
   */
  shouldSort?: boolean;

  /**
   * When true, the matching function will continue to the end of a search pattern even if a perfect match has already been located in the string.
   * Default false.
   */
  findAllMatches?: boolean;

  /**
   * List of keys that will be searched. This supports nested paths, weighted search, searching in arrays of strings and objects.
   */
  keys?: { name: keyof SearchFields; weight: number }[];

  /**
   * Determines approximately where in the text is the pattern expected to be found.
   * Default 0.
   */
  location?: number;

  /**
   * At what point does the match algorithm give up.
   * A threshold of 0.0 requires a perfect match (of both letters and location), a threshold of 1.0 would match anything.
   * Default 0.6.
   */
  threshold?: number;

  /**
   * Determines how close the match must be to the fuzzy location (specified by location).
   * An exact letter match which is distance characters away from the fuzzy location would score as a complete mismatch.
   * A distance of 0 requires the match be at the exact location specified.
   * A distance of 1000 would require a perfect match to be within 800 characters of the location to be found using a threshold of 0.8.
   * Default 100.
   */
  distance?: number;
  /**
   * When true, search will ignore location and distance, so it won't matter where in the string the pattern appears.
   * Default false.
   */
  ignoreLocation?: boolean;

  /**
   * When true, it enables the use of unix-like search commands. See [example](https://fusejs.io/examples.html#extended-search).
   * Default false.
   */
  useExtendedSearch?: boolean;
  /**
   * The function to use to sort all the results. The default will sort by ascending relevance score, ascending index.
   * Default: (a, b) => number.
   */
  sortFn?: (a: any, b: any) => number;
}
