import { loader } from 'webpack';
import { toId, storyNameFromExport } from '@storybook/csf';
import { StoriesGroup, Story } from '@component-controls/specification';
import { StoryStore, StoriesKind } from './types';

const store: StoryStore = {
  kinds: {},
  stories: {},
};

export const addStoriesKind = async (
  kind: StoriesGroup,
  context: loader.LoaderContext,
) => {
  let stories: StoriesKind;
  if (kind.title) {
    if (kind.component && kind.component.from) {
      context.resolve(context.context, kind.component.from, function(
        err,
        result: string,
      ) {
        if (!err && kind.component) {
          kind.component.request = result;
        }
      });
    }
    stories = {
      fileName: context.resourcePath,
      title: kind.title,
      stories: [],
      source: kind.source,
      component: kind.component,
    };
    store.kinds[kind.title] = stories;
  }
  Object.keys(kind.stories).forEach(key => {
    const story: Story = kind.stories[key];
    if (kind.title && story.name) {
      const id = toId(kind.title, storyNameFromExport(story.name));
      if (stories) {
        stories.stories.push(id);
      }
      store.stories[id] = {
        ...story,
        kind: kind.title,
      };
    }
  });
};
export default store;
