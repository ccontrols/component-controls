import {
  StoriesStore,
  StoryComponents,
  StoryPackages,
  Configuration,
} from '@component-controls/specification';

export interface LoadingStore {
  /**
   * global configuration from project config file
   */
  config?: Configuration;
  /**
   * global store of packages
   */
  packages: StoryPackages;
  /**
   * global store of components
   */
  components: StoryComponents;
  /**
   * stores, loaded from each .stories.* file
   */
  stores: (Partial<Pick<StoriesStore, 'stories' | 'docs'>> & {
    filePath: string;
  })[];
}
export const store: LoadingStore = {
  stores: [],
  components: {},
  packages: {},
};

export const reserveStoriesDoc = (filePath: string) => {
  store.stores.push({ filePath });
};
export const addStoriesDoc = (filePath: string, added: StoriesStore) => {
  const { components, packages, stories, docs } = added;
  Object.keys(components).forEach(key => {
    store.components[key] = components[key];
  });
  Object.keys(packages).forEach(key => {
    store.packages[key] = packages[key];
  });
  const storeStore = store.stores.find(s => s.filePath === filePath);
  if (storeStore) {
    storeStore.stories = stories;
    storeStore.docs = docs;
  }
};
