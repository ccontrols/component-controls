/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
  StoriesStore,
  Story,
  deepMergeArrays,
  deepMerge,
  defaultRunConfig,
  docStoryToId,
  storyNameFromExport,
  defDocType,
  PageConfiguration,
} from '@component-controls/core';
import { LoadingStore } from '@component-controls/loader';
import { transformControls } from './transform-controls';

export const loadStoryStore = (
  store: LoadingStore,
): StoriesStore | undefined => {
  if (store) {
    try {
      const {
        stores,
        packages: loadedPackages,
        components: loadedComponents,
        config = {},
        buildConfig = {},
      } = store;

      if (stores) {
        const globalStore: StoriesStore = {
          docs: {},
          stories: {},
          components: {},
          packages: {},
          config: deepMergeArrays(
            buildConfig,
            deepMergeArrays(defaultRunConfig, config),
          ),
        };
        stores.forEach(s => {
          const storeDoc = s.doc;
          const storeStories = s.stories;
          if (storeDoc && storeStories && s.stories) {
            const page = globalStore.config?.pages?.[
              storeDoc.type || defDocType
            ] as PageConfiguration;
            const doc = {
              fullPage: page.fullPage,
              navSidebar: page.navSidebar,
              contextSidebar: page.contextSidebar,
              ...storeDoc,
            };

            const {
              isMDXComponent,
              tags,
              title,
              order,
              type,
              MDXPage,
              author,
              date,
              dateModified,
              description,
              fullPage,
              route,
              navSidebar,
              contextSidebar,
              stories,
              source,
              fileName,
              componentsLookup,
              package: docPackage,
              ...otherDocProps
            } = doc;
            globalStore.docs[doc.title] = doc;
            Object.keys(storeStories).forEach((storyName: string) => {
              const story: Story = storeStories[storyName];
              Object.assign(story, deepMerge(otherDocProps, story));
              story.controls = transformControls(story, doc, loadedComponents);
              if (doc.title && story.id) {
                const id = docStoryToId(doc.title, story.id);
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
        globalStore.packages = loadedPackages;
        globalStore.components = loadedComponents;
        return globalStore;
      }
    } catch (e) {
      console.error(e);
    }
  }
  return undefined;
};
