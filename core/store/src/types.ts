import { StoriesStore, Story } from '@component-controls/specification';

/**
 * store on change observer.
 * when updateStoryProp is called on the store, the store observers will be notified
 * so they can re-load the stories
 */
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

export const UPDATE_STORY_MSG = 'component_controls_update_story';
export const COMPONENT_CONTROLS_STORAGE = 'component-controls-store-data';

export interface MessageType {
  storyId: string;
  moduleId: number;
}
