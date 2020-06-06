import {
  StoriesStore,
  Story,
  StoryDocs,
  Configuration,
} from '@component-controls/specification';

/**
 * store on change observer.
 * when updateStoryProp is called on the store, the store observers will be notified
 * so they can re-load the stories
 */
export type StoreObserver = (storyId?: string, propName?: string) => void;

export interface StoryStore {
  getStore: () => StoriesStore | undefined;
  getStory: (storyId: string) => Story | undefined;
  getStoryDoc: (name: string) => StoryDocs | undefined;
  getDocs: () => StoryDocs | undefined;
  config: Configuration | undefined;
  firstStory: string | undefined;
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

export const defaultConfig: Configuration = {
  options: {
    siteTitle: 'Component controls',
    siteTitleAlt:
      'Component controls - https://github.com/ccontrols/component-controls',
    siteHeadline: 'Component controls gatsby',
    siteUrl: 'https://component-controls-gatsby.netlify.app',
    siteDescription:
      'Component controls stories. Write your components documentation with MDX and JSX. Design, develop, test and review in a single site.',
    siteLanguage: 'en',
    author: '@component-controls',
    basePath: 'docs/',
  },
};
