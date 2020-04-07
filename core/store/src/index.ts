import { StoriesStore, Story } from '@component-controls/specification';

import { BroadcastChannel } from 'broadcast-channel';
export { BroadcastChannel };
import { loadStoryStore } from './serialization/load-store';

export type StoreObserver = (storyId?: string) => void;

export interface StoryStore {
  getStore: () => StoriesStore | undefined;
  getStory: (storyId: string) => Story | undefined;
  updateStoryProp: (
    storyId: string,
    propName: string,
    newVal: any,
  ) => StoriesStore | undefined;
  addObserver: (observer: StoreObserver) => void;
  removeObserver: (observer: StoreObserver) => void;
}

const UPDATE_STORY_MSG = 'component_controls_update_story';
const COMPONENT_CONTROLS_STORAGE = 'component-controls-store-data';

class Store implements StoryStore {
  loadedStore: StoriesStore | undefined;
  channel: BroadcastChannel;
  observers: StoreObserver[];
  moduleId: number;
  constructor(store?: StoriesStore) {
    this.moduleId = Math.random();
    this.loadedStore = store;
    this.channel = new BroadcastChannel(UPDATE_STORY_MSG);
    this.observers = [];
    this.channel.onmessage = ({ storyId, moduleId }) => {
      if (storyId && moduleId) {
        console.log(
          'ON MESSAGE',
          this.moduleId,
          moduleId,
          storyId,
          this.moduleId !== moduleId,
        );
        if (this.moduleId !== moduleId) {
          this.readData(storyId);
          this.notifyObservers(storyId);
        }
      }
    };
  }
  addObserver = (observer: StoreObserver) => this.observers.push(observer);

  removeObserver = (observer: StoreObserver) =>
    (this.observers = this.observers.filter(o => o !== observer));

  notifyObservers = (storyId?: string) => {
    if (this.observers.length > 0) {
      this.observers.forEach(observer => observer(storyId));
    }
  };

  setStore = (store?: StoriesStore) => {
    this.loadedStore = store;
    this.notifyObservers();
  };
  readData = (storyId?: string) => {
    const data = localStorage.getItem(COMPONENT_CONTROLS_STORAGE);
    if (data) {
      try {
        const newStore = JSON.parse(data) as StoriesStore;
        if (this.loadedStore && storyId) {
          this.loadedStore.stories[storyId] = {
            ...newStore.stories[storyId],
            renderFn: this.loadedStore.stories[storyId].renderFn,
          };
        } else {
          console.log('OVERRIDE DATA');
          this.loadedStore = newStore;
        }
        this.loadedStore = newStore;
      } catch (e) {}
    }
  };
  getStore = () => {
    if (this.loadedStore) {
      return this.loadedStore;
    }
    this.readData();
    return this.loadedStore;
  };
  getStory = (storyId: string) => {
    const store = this.getStore();
    return store ? store.stories[storyId] : undefined;
  };
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
      localStorage.setItem(
        COMPONENT_CONTROLS_STORAGE,
        JSON.stringify(this.loadedStore),
      );
      const message = { storyId, moduleId: this.moduleId };
      console.log('POST MESSAGE', message);
      this.channel.postMessage(message);
    }
    return this.loadedStore;
  };
}

export const store = new Store();

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
