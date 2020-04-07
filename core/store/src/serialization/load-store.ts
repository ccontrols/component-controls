/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/camelcase */
import { StoriesStore, Story } from '@component-controls/specification';
const deepMerge = require('deepmerge');
import { toId, storyNameFromExport } from '@storybook/csf';
import getInjectedStore from '@component-controls/loader/story-store-data';

let storyStore: StoriesStore | undefined = undefined;

export const loadStoryStore = (): StoriesStore | undefined => {
  if (storyStore) {
    return storyStore;
  }
  const injectedStories = getInjectedStore();
  if (injectedStories) {
    try {
      const {
        stores,
        hash,
      }: { stores: StoriesStore[]; hash: string } = JSON.parse(injectedStories);

      if (stores) {
        const globalStore: StoriesStore = {
          kinds: {},
          hash,
          stories: {},
          components: {},
        };
        stores.forEach(store => {
          if (Object.keys(store.kinds).length > 0) {
            Object.keys(store.kinds).forEach(kindName => {
              const kind = store.kinds[kindName];

              if (kind.moduleId && __webpack_require__) {
                try {
                  // './src/stories/smart-prop-type.stories.js'
                  const exports = __webpack_require__(kind.moduleId);
                  Object.keys(exports).forEach(key => {
                    const exported = exports[key];
                    if (exported) {
                      if (key === 'default') {
                        const { storySource, ...rest } = exported;
                        Object.assign(kind, rest);
                      } else {
                        const story = store.stories[key];
                        if (story) {
                          story.renderFn = exported;
                          if (exported.story) {
                            Object.assign(story, exported.story);
                          }
                        }
                      }
                    }
                  });
                } catch (e) {
                  console.error(`unable to load module ${kind.moduleId}`, e);
                }
                // clean-up
                delete kind.moduleId;
              }
              globalStore.kinds[kindName] = kind;
              Object.keys(store.stories).forEach(storyName => {
                const story: Story = store.stories[storyName];
                const {
                  title,
                  stories,
                  source,
                  component,
                  fileName,
                  repository,
                  components,
                  excludeStories,
                  includeStories,
                  ...rest
                } = kind;
                Object.assign(story, deepMerge(rest, story));
                if (kind.title && story.name) {
                  const id = toId(kind.title, storyNameFromExport(story.name));
                  if (!kind.stories) {
                    kind.stories = [];
                  }
                  kind.stories.push(id);
                  globalStore.stories[id] = {
                    ...story,
                    name: storyNameFromExport(story.name),
                    id,
                    kind: kind.title,
                  };
                }
              });
              Object.keys(store.components).forEach(key => {
                globalStore.components[key] = store.components[key];
              });
            });
          }
        });
        storyStore = globalStore;
      }
    } catch (e) {
      console.error(e);
    }
  }
  return storyStore;
};
