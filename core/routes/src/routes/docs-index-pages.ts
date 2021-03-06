import {
  Store,
  defDocType,
  DocType,
  getDocTypePath,
  getCategoryPath,
  removeTrailingSlash,
  ensureStartingSlash,
} from '@component-controls/core';
import { getUniquesByField } from './docs-pages';
export interface DocHomePagesPath {
  type?: DocType;
  path: string;
  docId?: string;
  storyId?: string;
  lastModified?: string;
  docIndex?: boolean;
}

export const getHomePages = (store?: Store): DocHomePagesPath[] => {
  const { pages = {}, categories = [] } = store?.config || {};
  if (pages && store) {
    const docs = Object.keys(store.docs);
    const paths: DocHomePagesPath[] = Object.keys(pages)
      .map((type: DocType) => {
        const page = pages[type];
        const path = getDocTypePath(store, page.basePath) as string;
        const typeDocs = docs.filter(
          key => type === (store.docs[key].type || defDocType),
        );
        if (!typeDocs.length) {
          return { type, path: '' };
        }
        const docId = page.indexHome
          ? undefined
          : docs.find(key => {
              const doc = store.docs[key];
              return (
                removeTrailingSlash(ensureStartingSlash(doc?.route || '')) ===
                path
              );
            }) ||
            docs.find(key => (store.docs[key].type || defDocType) === type);
        const doc = docId ? store.docs[docId] : undefined;
        const docStories: string[] = doc?.stories || [];
        const storyId: string | undefined = docStories.length
          ? docStories[0]
          : undefined;
        const result: DocHomePagesPath = {
          type,
          path,
          docIndex: true,
        };
        if (docId) {
          result.docId = docId;
        }
        if (storyId) {
          result.storyId = storyId;
        }
        const lastModified = doc?.dateModified
          ? new Date(doc?.dateModified).toISOString()
          : undefined;
        if (lastModified) {
          result.lastModified = lastModified;
        }
        return result;
      })
      .filter(({ path }) => path);
    const categoryPaths: DocHomePagesPath[] = categories
      .map(category => {
        const uniques = getUniquesByField(store, category);
        return {
          type: category,
          docIndex: true,
          path: Object.keys(uniques).length
            ? getCategoryPath(store, category)
            : '',
        };
      })
      .filter(({ path }) => path);
    return [...paths, ...categoryPaths];
  }
  return [];
};
