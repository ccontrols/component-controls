/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
  StoriesStore,
  StoryProps,
  Story,
  Document,
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
            const doc: Document = deepMerge({ layout: page.layout }, storeDoc);
            //props shared by document and story, extract so story gets default values from doc
            const docStoryProps: StoryProps = {
              component: doc.component,
              subcomponents: doc.subcomponents,
              controls: doc.controls,
              smartControls: doc.smartControls,
              decorators: doc.decorators,
            };
            globalStore.docs[doc.title] = doc;
            Object.keys(storeStories).forEach((storyName: string) => {
              const story: Story = storeStories[storyName];
              Object.assign(story, deepMerge(docStoryProps, story));
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
