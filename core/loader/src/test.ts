/**
 * store of stories information in memory afte the loader is applied
 */
export interface StoriesStore {
  kinds: {
    [title: string]: string;
  };
}
