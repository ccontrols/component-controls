/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/camelcase */
import { StoriesStore, Story } from '@component-controls/specification';
const deepMerge = require('deepmerge');
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
