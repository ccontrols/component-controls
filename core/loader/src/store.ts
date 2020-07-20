import {
  StoryComponents,
  StoryPackages,
  BuildConfiguration,
  RunConfiguration,
  Pages,
  Document,
  defDocType,
  DocType,
  docStoryToId,
} from '@component-controls/core';
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
    hash?: string;
  })[];
}

export class Store implements LoadingStore {
  stores: LoadingStore['stores'] = [];
  components: LoadingStore['components'] = {};
  packages: LoadingStore['packages'] = {};
  config: LoadingStore['config'] = {};
  buildConfig: LoadingStore['buildConfig'] = {};

  constructor(initial?: LoadingStore) {
    if (initial) {
      this.stores = initial.stores;
      this.components = initial.components;
      this.packages = initial.packages;
      this.config = initial.config;
      this.buildConfig = initial.buildConfig;
    }
  }
  getDocs = (docType: DocType): Pages =>
    this.stores
      .filter(store => {
        if (store?.doc) {
          const { type = defDocType } = store.doc;
          return type === docType;
        }
        return false;
      })
      .map(
        store =>
          ({
            ...store.doc,
            stories:
              store.doc && store.stories
                ? Object.keys(store.stories).map(id =>
                    //@ts-ignore
                    docStoryToId(store.doc.title, id),
                  )
                : undefined,
          } as Document),
      );
}

export const store = new Store();

export const reserveStories = (filePaths: string[]) => {
  if (store.stores.length === 0) {
    filePaths.forEach(filePath => store.stores.push({ filePath }));
  }
};
export const removeStoriesDoc = (filePath: string) => {
  store.stores = store.stores.filter(s => s.filePath !== filePath);
};
export const addStoriesDoc = (
  filePath: string,
  hash: string,
  added: LoadingDocStore,
) => {
  const { components, packages, stories, doc } = added;
  if (!doc) {
    throw new Error(`Invalid store with no document ${filePath}`);
  }

  Object.keys(components).forEach(key => {
    store.components[key] = components[key];
  });
  Object.keys(packages).forEach(key => {
    store.packages[key] = packages[key];
  });
  const { title } = doc;
  if (
    store.stores.find(s => s.filePath !== filePath && s.doc?.title === title)
  ) {
    throw new Error(`Duplicate document title "${title}"`);
  }
  const storeStore = store.stores.find(s => s.filePath === filePath);
  if (storeStore) {
    storeStore.stories = stories;
    storeStore.doc = doc;
    storeStore.hash = hash;
  } else {
    store.stores.push({ filePath, hash, stories, doc });
  }
};
