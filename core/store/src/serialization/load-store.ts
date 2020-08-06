/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
  Store,
  defaultStore,
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
  Pages,
  PageLayoutProps,
} from '@component-controls/core';
import { LoadingStore } from '@component-controls/loader';
import { transformControls } from './transform-controls';

export const loadStore = (store: LoadingStore): Store => {
  const globalStore: Store = { ...defaultStore };
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
        buildConfig,
        deepMergeArrays(defaultRunConfig, config),
      );
      stores.forEach(s => {
        const storeDoc = s.doc;
        const storeStories = s.stories;
        if (storeDoc && storeStories && s.stories) {
          const page = globalStore.config.pages?.[
            storeDoc.type || defDocType
          ] as PageConfiguration;
          const pageLayout: PageLayoutProps = {
            contextSidebar: page.contextSidebar,
            fullPage: page.fullPage,
            navSidebar: page.navSidebar,
          };
          const doc: Document = deepMerge<Document>(pageLayout, storeDoc);
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
