import { Story, StoryComponent } from '@component-controls/specification';
import { PrettierOptions } from '@component-controls/instrument';

export interface LoaderOptions {
  type?: 'csf' | 'mdx';
  prettier?: PrettierOptions;
}

export interface StoriesKind {
  /**
   * file name of the file of stories
   */
  fileName?: string;

  title: string;
  stories: string[];
  source?: string;
  component?: StoryComponent;
}
export interface StoryStore {
  kinds: {
    [title: string]: StoriesKind;
  };
  stories: {
    [id: string]: Story & { kind: string };
  };
}
