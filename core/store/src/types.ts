import {
  StoriesStore,
  Story,
  StoriesDoc,
  Pages,
  RunConfiguration,
  PageType,
} from '@component-controls/core';

/**
 * store on change observer.
 * when updateStoryProp is called on the store, the store observers will be notified
 * so they can re-load the stories
 */
export type StoreObserver = (storyId?: string, propName?: string) => void;

export interface StoryStore {
  getStore: () => StoriesStore | undefined;
  getStory: (storyId: string) => Story | undefined;
  getStoryDoc: (name: string) => StoriesDoc | undefined;
  getPageList: (type: PageType) => Pages;
  getPrevPage: (
    type: PageType | undefined,
    docId: string,
  ) => StoriesDoc | undefined;
  getNextPage: (
    type: PageType | undefined,
    docId: string,
  ) => StoriesDoc | undefined;
  getPagesByCategory: (category: string, value?: any) => Pages;
  getUniquesByCategory: (category: string) => { [key: string]: number };
  config: RunConfiguration | undefined;
  pages: Pages;
  getFirstDocument: (pageType: PageType) => string | undefined;
  getPagePath: (
    pageType: PageType | undefined,
    name: string,
    activeTab?: string,
  ) => string;
  getStoryPath: (storyId: string, activeTab?: string) => string;
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
  propName: string;
}
