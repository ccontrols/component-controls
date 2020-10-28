import {
  Store,
  getDefaultStore,
  StoryProps,
  Story,
  Document,
  deepMergeArrays,
  deepMerge,
  defaultRunConfig,
  convertConfig,
  docStoryToId,
  storyNameFromExport,
  defDocType,
  PageConfiguration,
  Pages,
  PageLayoutProps,
  mapDynamicStories,
} from '@component-controls/core';
import { LoadingStore } from '@component-controls/loader';
import { render as reactRender } from '@component-controls/render/react';
import { transformControls } from './transform-controls';

export { LoadingStore };

export const loadStore = (store: LoadingStore, building?: boolean): Store => {
  const globalStore: Store = getDefaultStore();
  try {
    const {
      error,
      stores,
      packages: loadedPackages,
      components: loadedComponents,
      config = {},
      buildConfig = {},
    } = store;
    if (stores) {
      globalStore.config = deepMergeArrays(
        defaultRunConfig,
        convertConfig(deepMergeArrays(buildConfig, config)),
      );
      if (!globalStore.config.renderFn) {
        globalStore.config.renderFn = reactRender;
      }
      stores.forEach(s => {
        const storeDoc = s.doc;
        const storeStories = s.stories;
        if (storeDoc && storeStories && s.stories) {
          const page =
            (globalStore.config.pages?.[
              storeDoc.type || defDocType
            ] as PageConfiguration) || defaultRunConfig.pages?.[defDocType];
          const pageLayout: PageLayoutProps = {
            contextSidebar: page.contextSidebar,
            fullPage: page.fullPage,
            navSidebar: page.navSidebar,
          };
          const docGlobalProps = {
            decorators: globalStore.config.decorators,
          };
          const doc: Document = deepMerge<Document>(
            pageLayout,
            deepMerge(docGlobalProps, storeDoc),
          );
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
            const exportedStory: Story = storeStories[storyName];
            const stories: Story[] = mapDynamicStories(
              exportedStory,
              doc,
              building,
            );
            stories.forEach(story => {
              story.id = story.id || story.name;
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
          });
        }
      });
      globalStore.error = error;
      globalStore.packages = loadedPackages;
      globalStore.components = loadedComponents;
      const { storySort } = globalStore.config || {};
      let pages: Pages = Object.keys(globalStore.docs).map(
        key => globalStore.docs[key],
      );

      if (storySort) {
        pages = pages.sort((a: Document, b: Document) => {
          const sort = storySort(a.title, b.title);
          if (sort !== 0) {
            return sort;
          }
          return pages.indexOf(a) - pages.indexOf(b);
        });
      }
      //split documents by their common 'parent'
      const sortedDocs = pages
        .map(doc => {
          const levels = doc.title.split('/');
          const parent = levels.slice(0, -1).join('/');
          return { id: doc, parent };
        })
        .sort((a, b) => {
          if (a.parent === b.parent) {
            return (
              (globalStore.docs[a.id.title].order || 0) -
              (globalStore.docs[b.id.title].order || 0)
            );
          }
          return 0;
        });
      globalStore.docs = sortedDocs.reduce((acc, d) => {
        const doc = d.id;
        return { ...acc, [doc.title]: doc };
      }, {});
    }
  } catch (e) {
    console.error(e);
  }
  return globalStore;
};
