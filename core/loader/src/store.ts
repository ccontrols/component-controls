import {
  StoriesStore,
  StoryComponents,
  StoryPackages,
} from '@component-controls/specification';

export interface LoadingStore {
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
  stores: Pick<StoriesStore, 'stories' | 'docs'>[];
}
export const store: LoadingStore = {
  stores: [],
  components: {},
  packages: {},
};

export const addStoriesDoc = async (added: StoriesStore) => {
  const { components, packages, stories, docs } = added;
  Object.keys(components).forEach(key => {
    store.components[key] = components[key];
  });
  Object.keys(packages).forEach(key => {
    store.packages[key] = packages[key];
  });

  store.stores.push({ stories, docs });
};
