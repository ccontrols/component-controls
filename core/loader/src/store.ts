import {
  StoryComponents,
  StoryPackages,
  BuildConfiguration,
  RunConfiguration,
  StoriesDoc,
} from '@component-controls/specification';
import { LoadingDocStore } from '@component-controls/instrument';
export interface LoadingStore {
  /**
   * global configuration from project config file
   */
  config?: RunConfiguration;

  /**
   * global configuration from project config file
   */
  buildConfig?: BuildConfiguration;

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
  stores: (Partial<Pick<LoadingDocStore, 'stories' | 'doc'>> & {
    filePath: string;
  })[];
  getDocs: () => StoriesDoc[];
  getBlogs: () => StoriesDoc[];
}

class Store implements LoadingStore {
  stores: LoadingStore['stores'] = [];
  components: LoadingStore['components'] = {};
  packages: LoadingStore['packages'] = {};
  config: LoadingStore['config'] = {};
  buildConfig: LoadingStore['buildConfig'] = {};
  getDocs = () =>
    this.stores
      .filter(
        store =>
          store?.doc &&
          (store.doc?.type === undefined || store.doc?.type === 'story'),
      )
      .map(store => store.doc as StoriesDoc);
  getBlogs = () =>
    this.stores
      .filter(store => store?.doc && store.doc?.type === 'blog')
      .map(store => store.doc as StoriesDoc);
}

export const store = new Store();

export const reserveStories = (filePaths: string[]) => {
  if (store.stores.length === 0) {
    filePaths.forEach(filePath => store.stores.push({ filePath }));
  }
};
export const addStoriesDoc = (filePath: string, added: LoadingDocStore) => {
  const { components, packages, stories, doc } = added;
  Object.keys(components).forEach(key => {
    store.components[key] = components[key];
  });
  Object.keys(packages).forEach(key => {
    store.packages[key] = packages[key];
  });
  const storeStore = store.stores.find(s => s.filePath === filePath);
  if (storeStore) {
    storeStore.stories = stories;
    storeStore.doc = doc;
  } else {
    store.stores.push({ filePath, stories, doc });
  }
};
