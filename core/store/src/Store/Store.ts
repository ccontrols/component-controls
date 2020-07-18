import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics';
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
} from '@component-controls/core';

import { StoreObserver, StoryStore, StoreOptions } from '../types';

export { StoreObserver, StoryStore };

/**
 * Store class used to query the stories and exchange information between processes
 */
export class Store implements StoryStore {
  protected loadedStore: StoriesStore | undefined;
  private observers: StoreObserver[];
  private _cachedPages: { [key: string]: Pages } = {};
  private _analytics: any = null;
  private _categoryItems: {
    [key: string]: {
      [key: string]: number;
    };
  } = {};
  private _firstDocument: { [key: string]: string | undefined } = {};
  /**
   * create a store with options
   */
  constructor(options?: StoreOptions) {
    const { store } = options || {};
    this.loadedStore = store;
    this.observers = [];
    this.initDocs();
    this.initializeAnalytics();
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
  /**
   * add observer callback function
   */
  addObserver = (observer: StoreObserver) => this.observers.push(observer);

  /**
   * remove installed observer callback function
   */
  removeObserver = (observer: StoreObserver) =>
    (this.observers = this.observers.filter(o => o !== observer));

  notifyObservers = (storyId?: string, propName?: string) => {
    if (this.observers.length > 0) {
      this.observers.forEach(observer => observer(storyId, propName));
    }
  };

  /**
   * internal set store, use for testing with mockup store.
   */
  setStore = (store?: StoriesStore) => {
    this.loadedStore = store;
    this.notifyObservers();
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

  /**
   * returns all the documents/pages of a certain type.
   */
  getPageList = (type: DocType = defDocType): Pages => {
    if (this.loadedStore?.docs) {
      if (!this._cachedPages[type]) {
        this._cachedPages[type] = Object.keys(this.loadedStore.docs).reduce(
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
      return this._cachedPages[type];
    }
    return [];
  };

  /**
   * returns the previous page of the same type.
   */
  getPrevPage = (
    type: DocType | undefined,
    docId: string,
  ): Document | undefined => {
    if (docId) {
      const pages = this.getPageList(type);
      const index = pages.findIndex(p => p.title === docId);
      if (index > 0) {
        return pages[index - 1];
      }
    }
    return undefined;
  };

  /**
   * returns the next page of the same type.
   */
  getNextPage = (
    type: DocType | undefined,
    docId: string,
  ): Document | undefined => {
    if (docId) {
      const pages = this.getPageList(type);
      const index = pages.findIndex(p => p.title === docId);
      if (index >= 0 && index < pages.length - 1) {
        return pages[index + 1];
      }
    }
    return undefined;
  };

  /**
   * returns all the documents/pages of a certain category value.
   */
  getPagesByCategory = (category: string, value?: any): Pages => {
    if (this.loadedStore?.docs) {
      const docs = this.loadedStore?.docs;
      return Object.keys(docs)
        .filter(key => {
          const doc = docs[key];
          //@ts-ignore
          const cateValue = doc[category];
          if (value === undefined) {
            return cateValue !== undefined;
          }
          const catValues = Array.isArray(cateValue) ? cateValue : [cateValue];
          return catValues.some(v => v === value);
        })
        .map(key => docs[key]);
    }
    return [];
  };

  /**
   * returns all the unique category values (and their cound) for a category field.
   */
  getUniquesByCategory = (category: string): { [key: string]: number } => {
    if (this.loadedStore?.docs) {
      const docs = this.loadedStore?.docs;
      if (!this._categoryItems[category]) {
        this._categoryItems[category] = Object.keys(docs).reduce(
          (acc: { [key: string]: number }, key) => {
            const doc = docs[key];
            //@ts-ignore
            const value = doc[category];
            const values = Array.isArray(value) ? value : [value];
            values.forEach(v => {
              if (v !== undefined) {
                if (typeof acc[v] === 'undefined') {
                  acc[v] = 0;
                }
                acc[v] = acc[v] + 1;
              }
            });
            return acc;
          },
          {},
        );
      }
      return this._categoryItems[category];
    }
    return {};
  };

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

  /**
   * returns the first document of a doc type.
   */
  getFirstDocument(type: DocType): string | undefined {
    return this._firstDocument[type];
  }

  /**
   * returns the url path to a document.
   */
  getPagePath = (
    type: DocType | undefined = defDocType,
    name: string,
    activeTab?: string,
  ): string => {
    const doc = this.getStoryDoc(name);
    return getDocPath(type, doc, this.config?.pages, name, activeTab);
  };

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

  initializeAnalytics = () => {
    if (this.loadedStore) {
      const options = this.loadedStore.config?.analytics;
      if (options) {
        if (typeof options === 'string') {
          this._analytics = Analytics({
            app: this.loadedStore.config?.siteTitle,
            plugins: [
              googleAnalytics({
                trackingId: options,
              }),
            ],
          });
        } else {
          this._analytics = Analytics(options);
        }
      }
    }
  };
  visitPage = () => {
    if (this._analytics) {
      this._analytics.page();
    }
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
}
