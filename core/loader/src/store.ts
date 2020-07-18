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
  TabConfiguration,
  getStoryPath,
  getDocPath,
  removeTrailingSlash,
  ensureStartingSlash,
  getDocTypePath,
  PageConfiguration,
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

  getDocs: (docType: DocType) => Pages;

  getUniquesByField: (field: string) => { [key: string]: number };
  getIndexPage: () => HomePageInfo;
  getHomePage: (path: string) => HomePageInfo | undefined;
  getHomePaths: () => string[];

  getDocPage: (path: string) => DocPageInfo | undefined;
  getDocPaths: () => string[];
}

export interface HomePageInfo {
  type: string;
  docId?: string;
}

export interface DocPageInfo {
  type: string;
  activeTab?: string;
  docId?: string;
  storyId?: string;
  category?: string;
}
export class Store implements LoadingStore {
  _homepaths: { [path: string]: HomePageInfo } | undefined = undefined;
  _docpaths: { [path: string]: DocPageInfo } | undefined = undefined;
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
  getUniquesByField = (field: string): { [key: string]: number } => {
    return this.stores.reduce((acc: { [key: string]: number }, store) => {
      if (store?.doc) {
        //@ts-ignore
        const value = store.doc[field];
        const values = Array.isArray(value) ? value : [value];
        values.forEach(v => {
          if (v !== undefined) {
            if (typeof acc[v] === 'undefined') {
              acc[v] = 0;
            }
            acc[v] = acc[v] = 1;
          }
        });
      }
      return acc;
    }, {});
  };
  getIndexPage = (): HomePageInfo => {
    const homePage = this.stores.find(s => s.doc?.route === '/');
    return {
      docId: homePage?.doc?.title,
      type: homePage?.doc?.type || defDocType,
    };
  };

  buildHomePaths = () => {
    if (this._homepaths === undefined) {
      const { pages } = this.buildConfig || {};
      if (pages) {
        this._homepaths = {};
        Object.keys(pages).forEach(type => {
          const page = pages[type as DocType];
          const path = getDocTypePath(page as PageConfiguration);
          const docs = this.getDocs(type as DocType);
          const doc = docs.find(
            doc =>
              removeTrailingSlash(ensureStartingSlash(doc?.route || '')) ===
              path,
          );
          //@ts-ignore
          this._homepaths[path] = {
            type,
            docId: doc?.title,
          };
        });
      }
    }
  };
  getHomePage = (path: string): HomePageInfo | undefined => {
    this.buildHomePaths();
    return this._homepaths ? this._homepaths[path] : undefined;
  };
  getHomePaths = (): string[] => {
    this.buildHomePaths();
    return this._homepaths ? Object.keys(this._homepaths) : [];
  };

  buildDocPaths = () => {
    if (this._docpaths === undefined) {
      this._docpaths = {};
      const { pages, categories = [] } = this.buildConfig || {};
      if (pages) {
        Object.keys(pages).forEach(type => {
          if (!categories.includes(type as DocType)) {
            const page = pages[type as DocType];
            const docType = type as DocType;
            const docs: Pages = this.getDocs(docType);
            const tabs: Pick<TabConfiguration, 'route'>[] = page.tabs || [
              { route: undefined },
            ];
            tabs.forEach((tab, tabIndex) => {
              const route = tabIndex > 0 ? tab.route : undefined;
              docs.forEach(doc => {
                if (doc.route !== '/') {
                  const stories =
                    page.storyPaths && doc.stories?.length
                      ? doc.stories
                      : [undefined];
                  stories.forEach((storyId?: string) => {
                    const url = getStoryPath(storyId, doc, pages, route);
                    //@ts-ignore
                    this._docpaths[url] = {
                      type: docType,
                      activeTab: route,
                      docId: doc.title,
                      storyId,
                    };
                  });
                }
              });
            });
          } else {
            const cats = this.getUniquesByField(type);
            const catKeys = Object.keys(cats);
            catKeys.forEach(tag => {
              const url = getDocPath(
                type as DocType,
                { title: tag, componentsLookup: {} },
                pages,
              );
              //@ts-ignore
              this._docpaths[url] = {
                type,
                category: tag,
              };
            });
          }
        });
      }
    }
  };

  getDocPage = (path: string): DocPageInfo | undefined => {
    this.buildDocPaths();
    if (this._docpaths && !this._docpaths[path]) {
      console.log(
        path,
        Object.keys(this._docpaths).filter(key =>
          key.startsWith('/tutorial/structure/'),
        ),
      );
    }
    return this._docpaths ? this._docpaths[path] : undefined;
  };
  getDocPaths = (): string[] => {
    this.buildDocPaths();
    return this._docpaths ? Object.keys(this._docpaths) : [];
  };
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
