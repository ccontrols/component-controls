import { BroadcastChannel } from 'broadcast-channel';
import {
  Store,
  Story,
  StoreObserver,
  RunConfiguration,
  Documents,
  Stories,
  Components,
  Packages,
} from '@component-controls/core';
import { readStore, saveStore } from './store-local-storage';
export const UPDATE_STORY_MSG = 'component_controls_update_story';

export interface MessageType {
  story?: Story;
}

export class BroadcastStore implements Store {
  // eslint-disable-next-line react/display-name
  config: RunConfiguration = {};
  docs: Documents = {};
  stories: Stories = {};
  components: Components = {};
  packages: Packages = {};
  observers: StoreObserver[];
  channel: BroadcastChannel;

  constructor(store: Store) {
    this.assignStore(store);
    this.observers = [];
    this.channel = new BroadcastChannel<MessageType>(UPDATE_STORY_MSG, {
      type: 'localstorage',
    });
    this.channel.onmessage = ({ story }: MessageType) => {
      this.readData();
      this.notifyObservers(story);
    };
  }

  /**
   * add observer callback function
   */
  addObserver = (observer: StoreObserver): number =>
    this.observers.push(observer);

  /**
   * remove installed observer callback function
   */
  removeObserver = (observer: StoreObserver): StoreObserver[] =>
    (this.observers = this.observers.filter(o => o !== observer));

  notifyObservers = (story?: Story): void => {
    if (this.observers.length > 0) {
      this.observers.forEach(observer => observer(story));
    }
  };
  saveStore = (story?: Story): void => {
    saveStore(this);
    this.broadcastMessage(story);
  };
  private assignStore = (store: Store): void => {
    this.config = store.config;
    this.docs = store.docs;
    this.stories = store.stories;
    this.components = store.components;
    this.packages = store.packages;
  };
  readData = (): void => {
    const store = readStore(this.stories);
    this.assignStore(store);
  };

  private broadcastMessage = (story?: Story) => {
    const message: MessageType = {
      story,
    };
    this.channel.postMessage(message);
  };
  /**
   * modify story properties, for example controls values.
   * will notify all installed store observers of the changed story.
   */
  updateStory = (story: Story): void => {
    if (story) {
      if (story.id) {
        this.stories = {
          ...this.stories,
          [story.id]: story,
        };
      }
    }
    this.saveStore(story);
    this.notifyObservers(story);
  };
}
