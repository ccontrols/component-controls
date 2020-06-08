import {
  StoriesStore,
  StoryDocs,
  StoriesDoc,
  Configuration,
} from '@component-controls/specification';
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
  private _docs: StoryDocs = {};
  private _blogs: StoryDocs = {};

  private _firstStory: string | undefined;
  private _firstDoc: string | undefined;
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
      const { options } = this.loadedStore.config || {};
      if (options && options.storySort) {
        this.loadedStore.docs = docs
          .sort((a: string, b: string) => {
            //@ts-ignore
            const sort = options.storySort(a, b);
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
      this._firstDoc = sortedDocs.find(name => {
        //@ts-ignore
        const doc = this.loadedStore.docs[name];
        return doc.stories && doc.stories.length;
      });
      if (this._firstDoc) {
        const doc = this.loadedStore.docs[this._firstDoc];
        //point to first story of first doc
        this._firstStory = doc.stories?.[0];
      }
      if (this.loadedStore.docs) {
        this._docs = Object.keys(this.loadedStore.docs).reduce(
          (acc: StoryDocs, key: string) => {
            const doc: StoriesDoc | undefined = this.loadedStore?.docs[key];
            if (doc && (doc.type === undefined || doc.type === 'story')) {
              return { ...acc, [key]: doc };
            }
            return acc;
          },
          {},
        );
        this._blogs = Object.keys(this.loadedStore.docs).reduce(
          (acc: StoryDocs, key: string) => {
            const doc: StoriesDoc | undefined = this.loadedStore?.docs[key];
            if (doc && doc.type === 'blog') {
              return { ...acc, [key]: doc };
            }
            return acc;
          },
          {},
        );
      }
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
   s* given a story doc file title, return a story doc file from the store
   */

  getStoryDoc = (name: string) => {
    const store = this.getStore();
    return store ? store.docs[name] : undefined;
  };
  /**
   * returns all the documentation files
   */
  getDocs = () => this._docs;

  getBlogs = () => this._blogs;

  get config(): Configuration | undefined {
    return this.loadedStore?.config;
  }
  get firstStory(): string | undefined {
    return this._firstStory;
  }
  get firstDoc(): string | undefined {
    return this._firstDoc;
  }

  getDocPath = (name: string): string => {
    const doc = this.getStoryDoc(name);
    const docsPath = this.config?.options?.docsPath || '';
    return doc ? doc.route || `/${docsPath}${name.toLowerCase()}/` : '';
  };

  getStoryPath = (storyId: string): string => {
    const story = this.getStory(storyId);
    if (!story) {
      return '';
    }
    const doc = this.getStoryDoc(story?.doc || '');
    const docsPath = this.config?.options?.docsPath || '';
    return doc
      ? doc.route || `/${docsPath}${doc.title.toLowerCase()}/#${story.id}`
      : '';
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
