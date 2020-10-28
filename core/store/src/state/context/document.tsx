import React, { FC, createContext, useContext, useState, useMemo } from 'react';
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
import { useStore, useActiveTab } from './store';

const DocumentContext = createContext<Document | undefined>(undefined);

export const DocumentContextProvider: FC<{ docId: string | undefined }> = ({
  docId,
  children,
}) => {
  const store = useStore();
  return (
    <DocumentContext.Provider value={docId ? store.docs[docId] : undefined}>
      {children}
    </DocumentContext.Provider>
  );
};

/**
 * Retrieves a Document object from a document id
 */
export const useDocument = (docId?: string): Document | undefined => {
  const store = useStore();
  return docId ? store.docs[docId] : undefined;
};

export const useGetDocument = (): ((docId: string) => Document | undefined) => {
  const store = useStore();
  return (docId: string) => store.docs[docId];
};

/**
 * Returns the currently selected document
 */
export const useCurrentDocument = (): Document | undefined =>
  useContext(DocumentContext);

/**
 * Returns the package information for the currently selected document
 */

export const useDocPackage = (): PackageInfo | undefined => {
  const store = useStore();
  const doc = useCurrentDocument();
  return doc && doc.package ? store.packages[doc.package] : undefined;
};

/**
 *  Returns a key-value object of all documents in the store
 */
export const useDocs = (): Documents => {
  const store = useStore();
  return store.docs;
};

/**
 *  Returns an array of all documents in the store
 */

export const usePages = (): Pages => {
  const store = useStore();
  return Object.keys(store.docs).map(key => store.docs[key]);
};

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

type SortType = Record<string, DocSortOrder>;
interface DocsSortContextProps {
  sort: SortType;
  setSort: (type: string, newOrder: DocSortOrder) => void;
}

const DocsSortContext = createContext<DocsSortContextProps>({
  sort: {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSort: () => {},
});

export const DocsSortContextProvider: FC = ({ children }) => {
  const [sort, setSort] = useState<Record<string, DocSortOrder>>({});
  return (
    <DocsSortContext.Provider
      value={{
        sort,
        setSort: (type: string, newOrder) =>
          setSort({ ...sort, [type]: newOrder }),
      }}
    >
      {children}
    </DocsSortContext.Provider>
  );
};

/**
 * Returns the doc sort order and a setter to update the sort order
 * for a specific doc type
 */
export const useDocSort = (
  type: DocType,
): [DocSortOrder, (newOrder: DocSortOrder) => void] => {
  const { sort, setSort } = useContext(DocsSortContext);
  return [sort[type] || 'date', newSort => setSort(type, newSort)];
};

/**
 * Returns an array of all documents of a specific doc type
 */
export const useDocByType = (type: DocType): Pages => {
  return useGetDocByType()(type);
};

export const useGetDocByType = (): ((type: DocType) => Pages) => {
  const docs = useDocs();
  return (type: DocType) =>
    Object.keys(docs).reduce((acc: Pages, key: string) => {
      const doc: Document | undefined = docs[key];
      if (doc) {
        const { type: docType = defDocType } = doc;
        if (docType === type) {
          return [...acc, { ...doc }];
        }
      }
      return acc;
    }, []);
};

/**
 * Returns a sorted list of documents of a specific doc type. Uses the sort order state.
 */
export const useSortedDocByType = (type: DocType): Pages => {
  const docs = useDocByType(type);
  const [sort] = useDocSort(type);
  return [...docs].sort(docSortFn(sort));
};

export type DocCountType = Record<DocType, { count: number; home?: Document }>;

/**
 * Returns a global object of key/value pairs with counts of documents per doc type
 */
export const useDocTypeCount = (): DocCountType => {
  const store = useStore();
  const homePath = useMemo(() => getHomePath(store), [store]);
  const getByDocType = useGetDocByType();
  const { pages = {} } = store?.config || {};
  return Object.keys(pages).reduce((acc: DocCountType, type: DocType) => {
    const docs = getByDocType(type);
    const home = docs.length
      ? docs.find(doc => doc.route === homePath) || docs[0]
      : undefined;
    return {
      ...acc,
      [type]: { count: docs.length, home },
    };
  }, {});
};

type DocumentPage = { link: string } & Document;

interface NavigationResult {
  nextPage?: DocumentPage;
  prevPage?: DocumentPage;
}

const useNavigationLinks = (doc?: Document): NavigationResult => {
  const docId = doc?.title;
  const type = doc?.type || defDocType;
  const docs = useDocByType(type);
  const store = useStore();
  const activeTab = useActiveTab();
  const result: NavigationResult = {};
  //next page
  const index = docs.findIndex(p => p.title === docId);
  if (index >= 0 && index < docs.length - 1) {
    const nextDoc = docs[index + 1];
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
  if (index > 0) {
    const prevDoc = docs[index - 1];
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
  return result;
};

/**
 * Returns the next/previous page objects for the current document
 */
export const useNavigationInfo = (): NavigationResult => {
  const doc = useCurrentDocument();
  return useNavigationLinks(doc);
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
  return getDocPath(type, doc, store, docId, activeTab);
};

export const useGetDocumentPath = (): UseGetDocumentPath => {
  const store = useStore();
  return (type = defDocType, docId, activeTab) => {
    const doc = store.docs[docId];
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
