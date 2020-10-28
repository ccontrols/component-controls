import { useMemo } from 'react';
import {
  atom,
  atomFamily,
  useRecoilValue,
  useRecoilState,
  selectorFamily,
  selector,
  SetterOrUpdater,
} from 'recoil';
import {
  Document,
  Documents,
  Pages,
  PackageInfo,
  DocType,
  defDocType,
  getDocPath,
  getHomePath,
  getComponentName,
} from '@component-controls/core';
import { storeState, useStore, activeTabState } from './store';

export const documentIdState = atom<string | undefined>({
  key: 'document_id',
  default: undefined,
});

export const currentDocumentState = selector<Document | undefined>({
  key: 'current_document',
  get: ({ get }) => {
    const id = get(documentIdState);
    if (!id) {
      return undefined;
    }
    const store = get(storeState);
    return store.docs[id];
  },
});

/**
 * Retrieves a Document object from a document id
 */
export const useDocument = (docId: string): Document | undefined => {
  const store = useStore();
  return store.docs[docId];
};

export const useGetDocument = (): ((docId: string) => Document | undefined) => {
  const store = useStore();
  return (docId: string) => store.docs[docId];
};

/**
 * Returns the currently selected document
 */

export const useCurrentDocument = (): Document | undefined =>
  useRecoilValue(currentDocumentState);

const docPackageState = selector<PackageInfo | undefined>({
  key: 'current_doc_package',
  get: ({ get }) => {
    const doc = get(currentDocumentState);
    const store = get(storeState);
    return doc && doc.package ? store.packages[doc.package] : undefined;
  },
});

/**
 * Returns the package information for the currently selected document
 */
export const useDocPackage = (): PackageInfo | undefined =>
  useRecoilValue(docPackageState);

export const docsState = selector<Documents>({
  key: 'docs',
  get: ({ get }) => {
    const store = get(storeState);
    return store?.docs || {};
  },
});

/**
 *  Returns a key-value object of all documents in the store
 */
export const useDocs = (): Record<string, Document> =>
  useRecoilValue(docsState);

export const pagesState = selector<Pages>({
  key: 'pages',
  get: ({ get }) => {
    const store = get(storeState);
    return Object.keys(store.docs).map(key => store.docs[key]);
  },
});

/**
 *  Returns an array of all documents in the store
 */

export const usePages = (): Pages => useRecoilValue(pagesState);

export type DocSortOrder = 'date' | 'dateModified' | 'title';

export const docSortFn = (sort: DocSortOrder) => (
  p1: Document,
  p2: Document,
): number => {
  const v1: any | undefined = p1[sort];
  const v2: any | undefined = p2[sort];
  if (v1 && v2) {
    return sort.startsWith('date')
      ? -v1.localeCompare(v2)
      : v1.localeCompare(v2);
  }
  if (!v1 && !v2) {
    return 0;
  }
  return v1 ? -1 : 1;
};

export const docSortByTypeState = atomFamily<DocSortOrder, DocType>({
  key: 'docs_sort)by_type',
  default: 'date',
});

/**
 * Returns the doc sort order and a setter to update the sort order
 * for a specific doc type
 */
export const useDocSort = (
  type: DocType,
): [DocSortOrder, SetterOrUpdater<DocSortOrder>] =>
  useRecoilState(docSortByTypeState(type));

const docsByTypeState = selectorFamily<Pages, DocType>({
  key: 'docs_by_type',
  get: type => ({ get }) => {
    const store = get(storeState);
    const docs = store.docs;
    return Object.keys(docs).reduce((acc: Pages, key: string) => {
      const doc: Document | undefined = docs[key];
      if (doc) {
        const { type: docType = defDocType } = doc;
        if (docType === type) {
          return [...acc, { ...doc }];
        }
      }
      return acc;
    }, []);
  },
});

/**
 * Returns an array of all documents of a specific doc type
 */
export const useDocByType = (type: DocType): Pages => {
  return useRecoilValue(docsByTypeState(type));
};

const docsSortedState = selectorFamily<Pages, DocType>({
  key: 'docs_sorted_by_type',
  get: type => ({ get }) => {
    const docs = get(docsByTypeState(type));
    const sort = get(docSortByTypeState(type));
    return [...docs].sort(docSortFn(sort));
  },
});

/**
 * Returns a sorted list of documents of a specific doc type. Uses the sort order state.
 */
export const useSortedDocByType = (type: DocType): Pages => {
  return useRecoilValue(docsSortedState(type));
};

export type DocCountType = Record<DocType, { count: number; home?: Document }>;

const docTypeCountState = selector<DocCountType>({
  key: 'docs_type_count',
  get: ({ get }) => {
    const store = get(storeState);
    const { pages = {} } = store?.config || {};
    const homePath = useMemo(() => getHomePath(store), [store]);
    return Object.keys(pages).reduce((acc: DocCountType, type: DocType) => {
      const docs = get(docsByTypeState(type));
      const home = docs.length
        ? docs.find(doc => doc.route === homePath) || docs[0]
        : undefined;
      return {
        ...acc,
        [type]: { count: docs.length, home },
      };
    }, {});
  },
});

/**
 * Returns a global object of key/value pairs with counts of documents per doc type
 */
export const useDocTypeCount = (): DocCountType => {
  return useRecoilValue(docTypeCountState);
};

type DocumentPage = { link: string } & Document;

interface NavigationResult {
  nextPage?: DocumentPage;
  prevPage?: DocumentPage;
}

const navigationState = selector<NavigationResult>({
  key: 'navigation_selector',
  get: ({ get }) => {
    const doc = get(currentDocumentState);
    const store = get(storeState);
    const activeTab = get(activeTabState);

    const result: NavigationResult = {};
    if (doc) {
      const docId = doc.title;
      const type = doc.type || defDocType;
      const docs = get(docsByTypeState(type));
      //next page
      const nextIndex = docs.findIndex(p => p.title === docId);
      if (nextIndex >= 0 && nextIndex < docs.length - 1) {
        const nextDoc = docs[nextIndex + 1];
        result.nextPage = {
          ...nextDoc,
          link: getDocPath(
            nextDoc.type || defDocType,
            nextDoc,
            store,
            nextDoc.title,
            activeTab,
          ),
        };
      }

      //prev page
      const prevIndex = docs.findIndex(p => p.title === docId);
      if (prevIndex > 0) {
        const prevDoc = docs[prevIndex - 1];
        result.prevPage = {
          ...prevDoc,
          link: getDocPath(
            prevDoc.type || defDocType,
            prevDoc,
            store,
            prevDoc.title,
            activeTab,
          ),
        };
      }
    }
    return result;
  },
});

/**
 * Returns the next/previous page objects for the current document
 */
export const useNavigationInfo = (): NavigationResult => {
  return useRecoilValue(navigationState);
};

type UseGetDocumentPath = (
  type: DocType | undefined,
  docId: string,
  activeTab?: string,
) => string;

/**
 * Returns a link to a document from a DocType, document id and active tab
 */

export const useDocumentPath: UseGetDocumentPath = (
  type = defDocType,
  docId,
  activeTab,
) => {
  const doc = useDocument(docId);
  const store = useStore();
  return getDocPath(type, doc, store, name, activeTab);
};

export const useGetDocumentPath = (): UseGetDocumentPath => {
  const getDoc = useGetDocument();
  const store = useStore();
  return (type = defDocType, docId, activeTab) => {
    const doc = getDoc(docId);
    return getDocPath(type, doc, store, docId, activeTab);
  };
};

/**
 * Returns the descript for a document page. It uses the doc.description property if available, or if there is a component assigned to the document will return the component's name.
 */
export const useDocDescription = (doc?: Document): string | undefined => {
  const store = useStore();
  if (!doc) {
    return undefined;
  }
  if (doc.description) {
    return doc.description;
  }
  const componentName = getComponentName(doc.component);
  if (componentName) {
    const componnetHash = doc.componentsLookup[componentName];
    const component = store.components[componnetHash];
    if (component?.info?.description) {
      return component.info.description;
    }
  }
  return undefined;
};
