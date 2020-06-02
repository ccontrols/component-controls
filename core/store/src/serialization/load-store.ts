/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
  StoriesStore,
  Story,
  deepMerge,
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
      } = newStore;

      if (stores) {
        const globalStore: StoriesStore = {
          docs: {},
          stories: {},
          components: {},
          packages: {},
        };
        stores.forEach(s => {
          const storeDocs = s.docs;
          const storeStories = s.stories;
          if (
            storeDocs &&
            storeStories &&
            s.stories &&
            Object.keys(storeDocs).length > 0
          ) {
            Object.keys(storeDocs).forEach(docName => {
              const doc = storeDocs[docName];
              globalStore.docs[docName] = doc;
              Object.keys(storeStories).forEach((storyName: string) => {
                const story: Story = storeStories[storyName];
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
                  ...rest
                } = doc;
                Object.assign(story, deepMerge(rest, story));
                const smartControls = addSmartControls(
                  story,
                  doc,
                  loadedComponents,
                );
                if (smartControls) {
                  story.controls = deepMerge(
                    smartControls,
                    story.controls || {},
                  );
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
