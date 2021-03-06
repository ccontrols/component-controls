import {
  Store,
  PageConfiguration,
  defDocType,
  DocType,
  getHomePath,
  getDocTypePath,
  getRoutePath,
  Pages,
  getDocPath,
  getStoryPath,
} from '@component-controls/core';

const getPageList = (store: Store, type: DocType = defDocType): Pages => {
  if (store) {
    return Object.keys(store.docs).reduce((acc: Pages, key: string) => {
      const doc = store.docs[key];
      if (doc) {
        const { type: docType = defDocType } = doc;
        if (docType === type) {
          return [...acc, doc];
        }
      }
      return acc;
    }, []);
  }
  return [];
};

const getUniquesByField = (
  store: Store,
  field: string,
): { [key: string]: number } => {
  return Object.keys(store.docs).reduce(
    (acc: { [key: string]: number }, key) => {
      const doc = store.docs[key];
      const value = (doc as any)[field];
      const values = Array.isArray(value) ? value : [value];
      values.forEach(v => {
        if (v !== undefined) {
          if (typeof acc[v] === 'undefined') {
            acc[v] = 0;
          }
          acc[v] = acc[v] = 1;
        }
      });
      return acc;
    },
    {},
  );
};

export interface DocPagesPath {
  type: DocType;
  path: string;
  query?: string;
  lastModified?: string;
  docId?: string;
  storyId?: string;
  category?: string;
  activeTab?: string;
}

export const getPageTabs = (
  page: PageConfiguration,
): (string | undefined)[] => {
  if (page && page.tabs) {
    return Object.keys(page.tabs);
  }
  return [undefined];
};

export const getDocPages = (store?: Store): DocPagesPath[] => {
  const { pages = {}, categories = [] } = store?.config || {};
  const docPaths: DocPagesPath[] = [];
  if (store) {
    const homePath = getHomePath(store);
    Object.keys(pages).forEach(type => {
      if (!categories.includes(type as DocType)) {
        const page = pages[type as DocType];
        const docType = type as DocType;
        const docHomePath = getDocTypePath(store, page.basePath) as string;
        const docs: Pages = getPageList(store, docType);
        const tabs = getPageTabs(page);
        tabs.forEach((tab, tabIndex) => {
          const route = tabIndex > 0 ? tab : undefined;
          docs.forEach(doc => {
            const pagePath = getRoutePath(store, doc.route);
            if (pagePath !== homePath && pagePath !== docHomePath) {
              const stories =
                page.sideNav?.storyPaths && doc.stories?.length
                  ? doc.stories
                  : [undefined];
              stories.forEach((storyId?: string) => {
                const { path, query } = getStoryPath(
                  storyId,
                  doc,
                  store,
                  route,
                );
                if (!docPaths.find(p => p.path === path)) {
                  docPaths.push({
                    lastModified: doc.dateModified
                      ? new Date(doc.dateModified).toISOString()
                      : undefined,
                    path,
                    query,
                    type: docType,
                    activeTab: route,
                    docId: doc.title,
                    storyId,
                  });
                }
              });
            }
          });
        });
      } else {
        const cats = getUniquesByField(store, type);
        const catKeys = Object.keys(cats);
        catKeys.forEach(tag => {
          const path = getDocPath(
            type as DocType,
            { title: tag, componentsLookup: {} },
            store,
          );
          docPaths.push({
            path,
            type,
            category: tag,
          });
        });
      }
    });
  }
  return docPaths;
};
