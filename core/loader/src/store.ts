import { toId, storyNameFromExport } from '@storybook/csf';
import { StoriesGroup, Story } from '@component-controls/instrument';
import { StoryStore } from './types';

const storyFiles: StoryStore = {};

export const addStoriesKind = (kind: StoriesGroup) => {
  Object.keys(kind.stories).forEach(key => {
    const story: Story = kind.stories[key];
    if (kind.title && story.name) {
      const id = toId(kind.title, storyNameFromExport(story.name));
      storyFiles[id] = {
        ...story,
        kind: kind.title,
      };
    }
  });
};
export default storyFiles;
