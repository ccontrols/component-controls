import { Story } from '@component-controls/instrument';

export interface LoaderOptions {
  type?: 'csf' | 'mdx';
}

export interface StoryStore {
  [id: string]: Story & { kind: string };
}
