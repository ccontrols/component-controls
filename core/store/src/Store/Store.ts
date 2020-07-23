import {
  StoriesStore,
  Pages,
  Document,
  RunConfiguration,
  getDocPath,
  getStoryPath,
  DocType,
  defDocType,
  getComponentName,
  TabConfiguration,
  removeTrailingSlash,
  ensureStartingSlash,
  getDocTypePath,
  PageConfiguration,
  Documents,
} from '@component-controls/core';

import { StoreObserver, StoryStore, DocPageInfo, HomePageInfo } from '../types';

export { StoreObserver, StoryStore };

/**
 * Store class used to query the stories and exchange information between processes
 */
export class Store implements StoryStore {
  protected loadedStore: StoriesStore | undefined;
  private _homepaths: { [path: string]: HomePageInfo } | undefined = undefined;
  private _docpaths: { [path: string]: DocPageInfo } | undefined = undefined;
  private observers: StoreObserver[] = [];
  private _firstDocument: { [key: string]: string | undefined } = {};
  /**
   * create a store with options
   */
  constructor(store?: StoriesStore) {
    this.loadedStore = store;
    this.initDocs();
  }

  /**
   * sort documents if a sortfunction is provided.
   * separate docs and blogs
   */
  initDocs = () => {
    if (this.loadedStore) {
      let sortedDocs: string[] = Object.keys(this.loadedStore.docs || []);
      //custom sort function
      const { storySort } = this.loadedStore.config || {};
      if (storySort) {
        sortedDocs = sortedDocs.sort((a: string, b: string) => {
          //@ts-ignore
          const sort = storySort(a, b);
          if (sort !== 0) {
            return sort;
          }
          return sortedDocs.indexOf(a) - sortedDocs.indexOf(b);
        });
      }
      const store = this.loadedStore;
      //split documents by their common 'parent'
      sortedDocs = sortedDocs
        .map(doc => {
          const levels = doc.split('/');
          const parent = levels.slice(0, -1).join('/');
          return { id: doc, parent };
        })
        .sort((a, b) => {
          if (a.parent === b.parent) {
            return (
              (store.docs[a.id].order || 0) - (store.docs[b.id].order || 0)
            );
          }
          return 0;
        })
        .map(item => item.id);
      this.loadedStore.docs = sortedDocs.reduce(
        //@ts-ignore
        (acc, key) => ({ ...acc, [key]: this.loadedStore.docs[key] }),
        {},
      );
      const { pages = {} } = this.loadedStore?.config || {};
      Object.keys(pages).forEach(type => {
        this._firstDocument[type as DocType] = sortedDocs.find(name => {
          //@ts-ignore
          const { type: docType = defDocType } = this.loadedStore.docs[name];
          return docType === type;
        });
      });
    }
  };
  notifyObservers = (storyId?: string, propName?: string) => {
    if (this.observers.length > 0) {
      this.observers.forEach(observer => observer(storyId, propName));
    }
  };
  /**
   * modify story properties, for example controls values.
   * will notify all installed store observers of the changed story.
   */
  updateStoryProp = (
    storyId: string,
    propName: string,
    newValue: any,
  ): void => {
    if (this.loadedStore) {
      this.loadedStore.stories = {
        ...this.loadedStore.stories,
        [storyId]: {
          ...this.loadedStore.stories[storyId],
          [propName]: newValue,
        },
      };
    }
    if (this.loadedStore) {
      // this.notifyObservers(storyId, propName);
    }
  };
  /**
   * returns an instance of the store
   */
  getStore = () => {
    return this.loadedStore;
  };

  /**
   * given a story id return a story from the store
   */
  getStory = (storyId: string) => {
    const store = this.getStore();
    return store ? store.stories[storyId] : undefined;
  };

  /**
   * given a story doc file title, return a story doc file from the store
   */
  getStoryDoc = (name: string) => {
    const store = this.getStore();
    return store ? store.docs[name] : undefined;
  };

  get store(): StoriesStore {
    return (
      this.loadedStore || {
        docs: {},
        stories: {},
        components: {},
        packages: {},
      }
    );
  }

  /**
   * returns the run time configuration object.
   */
  get config(): RunConfiguration | undefined {
    return this.loadedStore?.config;
  }

  /**
   * returns all pages(documents) in the store
   */
  get pages(): Pages {
    return this.loadedStore?.docs
      ? Object.keys(this.loadedStore.docs).map(
          //@ts-ignore
          key => this.loadedStore.docs[key],
        )
      : [];
  }

  get docs(): Documents {
    return this.loadedStore?.docs || {};
  }

  /**
   * returns the first document of a doc type.
   */
  getFirstDocument(type: DocType): string | undefined {
    return this._firstDocument[type];
  }

  /**
   * returns the url path to a story.
   */
  getStoryPath = (storyId: string, activeTab?: string): string => {
    const story = this.getStory(storyId);
    if (!story) {
      return '';
    }
    const doc = this.getStoryDoc(story?.doc || '');
    return getStoryPath(story.id, doc, this.config?.pages, activeTab);
  };

  getDocDescription = (doc: Document): string | undefined => {
    if (doc.description) {
      return doc.description;
    }
    const componentName = getComponentName(doc.component);
    if (componentName) {
      const componnetHash = doc.componentsLookup[componentName];
      const component = this.loadedStore?.components[componnetHash];
      if (component?.info?.description) {
        return component.info.description;
      }
    }
    return undefined;
  };

  getUniquesByField = (field: string): { [key: string]: number } => {
    const documents = this.pages;
    return documents.reduce((acc: { [key: string]: number }, doc) => {
      const value = (doc as any)[field];
      const values = Array.isArray(value) ? value : [value];
      values.forEach(v => {
        if (v !== undefined) {
          if (typeof acc[v] === 'undefined') {
            acc[v] = 0;
          }
          acc[v] = acc[v] = 1;
        }
      });
      return acc;
    }, {});
  };
  getIndexPage = (): HomePageInfo => {
    const homePage = this.pages.find(doc => doc.route === '/');
    return {
      docId: homePage?.title,
      type: homePage?.type || defDocType,
    };
  };
  /**
   * returns all the documents/pages of a certain type.
   */
  getPageList = (type: DocType = defDocType): Pages => {
    if (this.loadedStore?.docs) {
      return Object.keys(this.loadedStore.docs).reduce(
        (acc: Pages, key: string) => {
          const doc: Document | undefined = this.loadedStore?.docs[key];
          if (doc) {
            const { type: docType = defDocType } = doc;
            if (docType === type) {
              return [...acc, doc];
            }
          }
          return acc;
        },
        [],
      );
    }
    return [];
  };
  buildHomePaths = () => {
    if (this._homepaths === undefined) {
      const { pages = {} } = this.loadedStore?.config || {};
      if (pages) {
        this._homepaths = {};
        Object.keys(pages).forEach(type => {
          const page = pages[type as DocType];
          const path = getDocTypePath(page as PageConfiguration);
          const docs = this.getPageList(type as DocType);
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
      const { pages, categories = [] } = this.loadedStore?.config || {};
      if (pages) {
        Object.keys(pages).forEach(type => {
          if (!categories.includes(type as DocType)) {
            const page = pages[type as DocType];
            const docType = type as DocType;
            const docs: Pages = this.getPageList(docType);
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
