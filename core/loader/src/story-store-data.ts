import { StoriesStore, Story } from '@component-controls/specification';
import { toId, storyNameFromExport } from '@storybook/csf';
const injectedStories = '__STORIES_HASH__INJECTED_STORIES__';

let storyStore: StoriesStore | undefined = undefined;

const loadStoryStore = (): StoriesStore | undefined => {
  if (storyStore) {
    return storyStore;
  }
  if (injectedStories) {
    const globalStore: StoriesStore = {
      kinds: {},
      stories: {},
      components: {},
    };
    try {
      const stores: StoriesStore[] = (storyStore = JSON.parse(injectedStories));
      if (stores) {
        stores.forEach(store => {
          if (Object.keys(store.kinds).length > 0) {
            Object.keys(store.kinds).forEach(kindName => {
              const kind = store.kinds[kindName];
              globalStore.kinds[kindName] = kind;
              Object.keys(store.stories).forEach(storyName => {
                const story: Story = store.stories[storyName];
                if (kind.title && story.name) {
                  const id = toId(kind.title, storyNameFromExport(story.name));
                  if (!kind.stories) {
                    kind.stories = [];
                  }
                  kind.stories.push(id);
                  globalStore.stories[id] = { ...story, id, kind: kind.title };
                }
              });
              Object.keys(store.components).forEach(key => {
                globalStore.components[key] = store.components[key];
              });
            });
          }
        });
      }
    } catch (e) {}
    storyStore = globalStore;
  }
  return storyStore;
};

export default storyStore ? storyStore : loadStoryStore();
