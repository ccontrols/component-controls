/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
  StoriesStore,
  Story,
  deepMerge,
  defaultRunConfig,
} from '@component-controls/specification';
import { LoadingStore } from '@component-controls/loader';
import { toId, storyNameFromExport } from '@storybook/csf';
import { addSmartControls } from './smart-controls';

let storyStore: StoriesStore | undefined = undefined;

export const loadStoryStore = (
  store?: LoadingStore,
): StoriesStore | undefined => {
  if (storyStore) {
    return storyStore;
  }
  const newStore: LoadingStore =
    store || require('@component-controls/loader/story-store-data.js');
  if (newStore) {
    try {
      const {
        stores,
        packages: loadedPackages,
        components: loadedComponents,
        config,
        buildConfig,
      } = newStore;

      if (stores) {
        const globalStore: StoriesStore = {
          docs: {},
          stories: {},
          components: {},
          packages: {},
          config: deepMerge(buildConfig, deepMerge(config, defaultRunConfig)),
        };
        stores.forEach(s => {
          const storeDoc = s.doc;
          const storeStories = s.stories;
          if (storeDoc && storeStories && s.stories) {
            const doc = storeDoc;
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
              package: docPackage,
              ...otherDocProps
            } = doc;
            globalStore.docs[doc.title] = doc;
            Object.keys(storeStories).forEach((storyName: string) => {
              const story: Story = storeStories[storyName];
              Object.assign(story, deepMerge(otherDocProps, story));
              const smartControls = addSmartControls(
                story,
                doc,
                loadedComponents,
              );
              if (smartControls) {
                story.controls = deepMerge(smartControls, story.controls || {});
              }
              if (doc.title && story.name) {
                const id = toId(doc.title, storyNameFromExport(story.name));
                if (!doc.stories) {
                  doc.stories = [];
                }
                doc.stories.push(id);
                globalStore.stories[id] = {
                  ...story,
                  name: storyNameFromExport(story.name),
                  id,
                  doc: doc.title,
                };
              }
            });
          }
        });
        storyStore = globalStore;
        storyStore.packages = loadedPackages;
        storyStore.components = loadedComponents;
      }
    } catch (e) {
      console.error(e);
    }
  }
  return storyStore;
};
