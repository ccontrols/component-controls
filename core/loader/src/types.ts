import { Story } from '@component-controls/specification';

export interface LoaderOptions {
  type?: 'csf' | 'mdx';
}

export interface StoriesKind {
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
