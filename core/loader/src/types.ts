import { Story } from '@component-controls/specification';

export interface LoaderOptions {
  type?: 'csf' | 'mdx';
}

export interface StoriesKind {
  /**
   * file name of the file of stories
   */
  fileName?: string;

  title: string;
  stories: string[];
  source?: string;
}
export interface StoryStore {
  kinds: {
    [title: string]: StoriesKind;
  };
  stories: {
    [id: string]: Story & { kind: string };
  };
}
