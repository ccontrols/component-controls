import { BroadcastChannel } from 'broadcast-channel';
import { StoriesStore } from '@component-controls/core';
import { LoadingStore } from '@component-controls/loader';
import { MessageType, UPDATE_STORY_MSG } from '../types';
import { HMRStore } from './HMRStore';
import { readStore, updateStory } from '../serialization/StoreStorage';
export { BroadcastChannel };

export class BroadcastStore extends HMRStore {
  private moduleId: number;
  private channel: BroadcastChannel | undefined;

  constructor(store?: LoadingStore) {
    super(store);
    this.moduleId = Math.random();
    this.channel = new BroadcastChannel<MessageType>(UPDATE_STORY_MSG, {
      type: 'localstorage',
    });
    this.channel.onmessage = ({ storyId, moduleId, propName }: MessageType) => {
      if (storyId && moduleId) {
        if (this.moduleId !== moduleId) {
          this.readData(storyId, propName);
          this.notifyObservers(storyId, propName);
        }
      }
    };
  }
  /**
   * internal set store, use for testing with mockup store.
   */
  setStore = (store?: StoriesStore) => {
    this.loadedStore = store;
    this.notifyObservers();
  };
  getStore = () => {
    if (this.loadedStore) {
      return this.loadedStore;
    }
    this.readData();
    return this.loadedStore;
  };
  private readData = (storyId?: string, propName?: string) => {
    this.setStore(readStore(this.loadedStore, storyId, propName));
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
    this.loadedStore = updateStory(
      this.loadedStore,
      storyId,
      propName,
      newValue,
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
  };
}
