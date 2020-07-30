import {
  Store,
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

export const COMPONENT_CONTROLS_STORAGE = 'component-controls-store-data';

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
  getStore: () => Store | undefined;
  getStory: (storyId: string) => Story | undefined;
  getStoryDoc: (name: string) => Document | undefined;
  config: RunConfiguration;
  store: Store;
  pages: Pages;
  docs: Documents;
  getFirstDocument: (type: DocType) => string | undefined;
  updateStoryProp: (storyId: string, propName: string, newValue: any) => void;

  getStoryPath: (storyId: string, activeTab?: string) => string;
  getDocDescription: (doc: Document) => string | undefined;

  getIndexPage: () => HomePageInfo;
  getHomePage: (path: string) => HomePageInfo | undefined;
  getHomePaths: () => string[];

  getDocPage: (path: string) => DocPageInfo | undefined;
  getDocPaths: () => string[];
}
