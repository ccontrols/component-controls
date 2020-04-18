import { StoriesStore } from '@component-controls/specification';

import { BroadcastChannel } from 'broadcast-channel';
export { BroadcastChannel };
import { loadStoryStore } from './serialization/load-store';
import {
  StoreObserver,
  StoryStore,
  MessageType,
  UPDATE_STORY_MSG,
  COMPONENT_CONTROLS_STORAGE,
} from './types';

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
  private channel: BroadcastChannel;
  private observers: StoreObserver[];
  private moduleId: number;

  /**
   * create a store with options
   */
  constructor(options?: StoreOptions) {
    const { store, updateLocalStorage = true } = options || {};
    this.moduleId = Math.random();
    this.loadedStore = store;
    this.updateLocalStorage = updateLocalStorage;
    this.channel = new BroadcastChannel<MessageType>(UPDATE_STORY_MSG);
    this.observers = [];
    this.channel.onmessage = ({ storyId, moduleId }: MessageType) => {
      if (storyId && moduleId) {
        if (this.moduleId !== moduleId) {
          this.readData(storyId);
          this.notifyObservers(storyId);
        }
      }
    };
  }
  /**
   * add observer callback function
   */
  addObserver = (observer: StoreObserver) => this.observers.push(observer);

  /**
   * remove installed observer callback function
   */
  removeObserver = (observer: StoreObserver) =>
    (this.observers = this.observers.filter(o => o !== observer));

  private notifyObservers = (storyId?: string) => {
    if (this.observers.length > 0) {
      this.observers.forEach(observer => observer(storyId));
    }
  };

  /**
   * internal set store, use for testing with mockup store.
   */
  setStore = (store?: StoriesStore) => {
    this.loadedStore = store;
    this.notifyObservers();
  };
  private readData = (storyId?: string) => {
    const data = localStorage.getItem(COMPONENT_CONTROLS_STORAGE);
    if (data) {
      try {
        const newStore = JSON.parse(data) as StoriesStore;

        if (this.loadedStore && storyId) {
          this.loadedStore.stories[storyId] = {
            ...this.loadedStore.stories[storyId],
            controls: { ...newStore.stories[storyId].controls },
          };
        } else {
          this.loadedStore = newStore;
        }
      } catch (e) {}
    }
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
   * modify story properties, for example controls values.
   * will notify all installed store observers of the changed story.
   */
  updateStoryProp = (
    storyId: string,
    propName: string,
    newVal: any,
  ): StoriesStore | undefined => {
    if (this.loadedStore) {
      this.loadedStore.stories[storyId] = {
        ...this.loadedStore.stories[storyId],
        [propName]: newVal,
      };
      if (this.updateLocalStorage) {
        localStorage.setItem(
          COMPONENT_CONTROLS_STORAGE,
          JSON.stringify(this.loadedStore),
        );
        const message: MessageType = { storyId, moduleId: this.moduleId };
        this.channel.postMessage(message);
      }
      this.notifyObservers(storyId);
    }
    return this.loadedStore;
  };
}
/**
 * store variable, automatically filled with stories.
 */
export const store = new Store();

/**
 * @ignore
 */
const stores = loadStoryStore();
if (stores) {
  store.setStore(stores);
  for (var key in localStorage) {
    if (key.indexOf(COMPONENT_CONTROLS_STORAGE) == 0) {
      localStorage.removeItem(key);
    }
  }
  localStorage.setItem(COMPONENT_CONTROLS_STORAGE, JSON.stringify(stores));
}
