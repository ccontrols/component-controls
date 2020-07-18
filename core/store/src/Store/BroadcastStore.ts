import { BroadcastChannel } from 'broadcast-channel';
import { MessageType, UPDATE_STORY_MSG, StoreOptions } from '../types';
import { Store } from './Store';
import { readStore, updateStory } from '../serialization/StoreStorage';

export { BroadcastChannel };

export class BroadcastStore extends Store {
  private moduleId: number;
  private channel: BroadcastChannel | undefined;

  constructor(options?: StoreOptions) {
    super(options);
    this.moduleId = Math.random();
    this.channel = new BroadcastChannel<MessageType>(UPDATE_STORY_MSG, {
      type: 'localstorage',
    });
    this.channel.onmessage = ({ storyId, moduleId, propName }: MessageType) => {
      if (storyId && moduleId) {
        if (this.moduleId !== moduleId) {
          this.readData(storyId, propName);
          super.notifyObservers(storyId, propName);
        }
      }
    };
  }

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
