import {
  StoriesStore,
  Pages,
  StoriesDoc,
  RunConfiguration,
  getDocPath,
  getStoryPath,
  PageType,
  defPageType,
} from '@component-controls/core';
import { BroadcastChannel } from 'broadcast-channel';
import {
  StoreObserver,
  StoryStore,
  MessageType,
  UPDATE_STORY_MSG,
} from '../types';
import { readStore, updateStory } from '../serialization/StoreStorage';

export { BroadcastChannel };
export { StoreObserver, StoryStore };

export interface StoreOptions {
  /**
   * optional store initializer
   */
  store?: StoriesStore;
  /**
   * set to false to prevent the Store from updating localStorage values
   */
  updateLocalStorage?: boolean;
}
/**
 * Store class used to query the stories and exchange information between processes
 */
export class Store implements StoryStore {
  private loadedStore: StoriesStore | undefined;
  private updateLocalStorage: boolean = true;
  private channel: BroadcastChannel | undefined;
  private observers: StoreObserver[];
  private moduleId: number;
  private _cachedPages: { [key: string]: Pages } = {};
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
    const { store, updateLocalStorage = true } = options || {};
    this.moduleId = Math.random();
    this.loadedStore = store;
    this.updateLocalStorage = updateLocalStorage;
    this.observers = [];
    this.initDocs();
    if (updateLocalStorage) {
      this.channel = new BroadcastChannel<MessageType>(UPDATE_STORY_MSG, {
        type: 'localstorage',
      });
      this.channel.onmessage = ({
        storyId,
        moduleId,
        propName,
      }: MessageType) => {
        if (storyId && moduleId) {
          if (this.moduleId !== moduleId) {
            this.readData(storyId, propName);
            this.notifyObservers(storyId, propName);
          }
        }
      };
    }
  }

  /**
   * sort documents if a sortfunction is provided.
   * separate docs and blogs
   */
  initDocs = () => {
    if (this.loadedStore) {
      const docs: string[] = Object.keys(this.loadedStore.docs || []);
      const { storySort } = this.loadedStore.config || {};
      if (storySort) {
        this.loadedStore.docs = docs
          .sort((a: string, b: string) => {
            //@ts-ignore
            const sort = storySort(a, b);
            if (sort !== 0) {
              return sort;
            }
            return docs.indexOf(a) - docs.indexOf(b);
          })
          .reduce(
            //@ts-ignore
            (acc, key) => ({ ...acc, [key]: this.loadedStore.docs[key] }),
            {},
          );
      }

      const sortedDocs = Object.keys(this.loadedStore.docs);
      const { pages = {} } = this.loadedStore?.config || {};
      Object.keys(pages).forEach(type => {
        this._firstDocument[type as PageType] = sortedDocs.find(name => {
          //@ts-ignore
          const { type: docType = defPageType } = this.loadedStore.docs[name];
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

  private notifyObservers = (storyId?: string, propName?: string) => {
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
  private readData = (storyId?: string, propName?: string) => {
    this.loadedStore = readStore(this.loadedStore, storyId, propName);
  };

  /**
   * returns an instance of the store
   */
  getStore = () => {
    if (this.loadedStore) {
      return this.loadedStore;
    }
    this.readData();
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
  getPageList = (type: PageType = defPageType): Pages => {
    if (this.loadedStore?.docs) {
      if (!this._cachedPages[type]) {
        this._cachedPages[type] = Object.keys(this.loadedStore.docs).reduce(
          (acc: StoriesDoc[], key: string) => {
            const doc: StoriesDoc | undefined = this.loadedStore?.docs[key];
            if (doc) {
              const { type: docTYpe = defPageType } = doc;
              if (docTYpe === type) {
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
    type: PageType | undefined,
    docId: string,
  ): StoriesDoc | undefined => {
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
    type: PageType | undefined,
    docId: string,
  ): StoriesDoc | undefined => {
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
                acc[v] = acc[v] = 1;
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
   * returns the first document of a page type.
   */
  getFirstDocument(pageType: PageType): string | undefined {
    return this._firstDocument[pageType];
  }

  /**
   * returns the url path to a document.
   */
  getPagePath = (
    pageType: PageType | undefined = defPageType,
    name: string,
    activeTab?: string,
  ): string => {
    const doc = this.getStoryDoc(name);
    return getDocPath(pageType, doc, this.config?.pages, name, activeTab);
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
    return getStoryPath(story, doc, this.config?.pages, activeTab);
  };

  /**
   * modify story properties, for example controls values.
   * will notify all installed store observers of the changed story.
   */
  updateStoryProp = (
    storyId: string,
    propName: string,
    newValue: any,
  ): StoriesStore | undefined => {
    this.loadedStore = updateStory(
      this.loadedStore,
      storyId,
      propName,
      newValue,
      this.updateLocalStorage,
    );
    if (this.loadedStore) {
      if (this.channel) {
        const message: MessageType = {
          storyId,
          moduleId: this.moduleId,
          propName,
        };
        this.channel.postMessage(message);
      }
      this.notifyObservers(storyId, propName);
    }
    return this.loadedStore;
  };
}
