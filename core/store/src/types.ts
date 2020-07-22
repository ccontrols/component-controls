import {
  StoriesStore,
  Story,
  Document,
  Pages,
  RunConfiguration,
  DocType,
  Documents,
} from '@component-controls/core';

/**
 * store on change observer.
 */
export type StoreObserver = (storyId?: string, propName?: string) => void;

export interface DocPageInfo {
  type: string;
  activeTab?: string;
  docId?: string;
  storyId?: string;
  category?: string;
}
export interface HomePageInfo {
  type: string;
  docId?: string;
}

export interface StoryStore {
  getStore: () => StoriesStore | undefined;
  getStory: (storyId: string) => Story | undefined;
  getStoryDoc: (name: string) => Document | undefined;
  getPagesByCategory: (category: string, value?: any) => Pages;
  config: RunConfiguration | undefined;
  pages: Pages;
  docs: Documents;
  getFirstDocument: (type: DocType) => string | undefined;
  getPagePath: (
    type: DocType | undefined,
    name: string,
    activeTab?: string,
  ) => string;
  updateStoryProp: (storyId: string, propName: string, newValue: any) => void;

  getStoryPath: (storyId: string, activeTab?: string) => string;
  getDocDescription: (doc: Document) => string | undefined;

  getIndexPage: () => HomePageInfo;
  getHomePage: (path: string) => HomePageInfo | undefined;
  getHomePaths: () => string[];

  getDocPage: (path: string) => DocPageInfo | undefined;
  getDocPaths: () => string[];
}

export interface BroadcastStore extends StoryStore {
  updateStoryProp: (storyId: string, propName: string, newValue: any) => void;
}

export const UPDATE_STORY_MSG = 'component_controls_update_story';
export const COMPONENT_CONTROLS_STORAGE = 'component-controls-store-data';

export interface MessageType {
  storyId: string;
  moduleId: number;
  propName: string;
}
