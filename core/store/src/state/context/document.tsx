import React, { FC, createContext, useContext, useState } from 'react';
import {
  Document,
  Documents,
  Pages,
  PackageInfo,
  DocType,
  defDocType,
  getDocPath,
  getComponentName,
} from '@component-controls/core';
import { useStore, useConfig, useActiveTab } from './store';

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

export const useCurrentDocument = (): Document | undefined =>
  useContext(DocumentContext);

export const useDocPackage = (): PackageInfo | undefined => {
  const store = useStore();
  const doc = useCurrentDocument();
  return doc && doc.package ? store.packages[doc.package] : undefined;
};

export const useDocs = (): Documents => {
  const store = useStore();
  return store.docs;
};

export const usePages = (): Pages => {
  const store = useStore();
  return Object.keys(store.docs).map(key => store.docs[key]);
};

export type DocSortOrder = 'date' | 'dateModified' | 'title';

export const docSortFn = (sort: DocSortOrder) => (
  p1: Document,
  p2: Document,
) => {
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
export const useDocSort = (
  type: DocType,
): [DocSortOrder, (newOrder: DocSortOrder) => void] => {
  const { sort, setSort } = useContext(DocsSortContext);
  return [sort[type] || 'date', newSort => setSort(type, newSort)];
};

export const useDocByType = (type: DocType): Pages => {
  const docs = useDocs();
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
};

export const useGetDocByType = () => (type: DocType): Pages =>
  useDocByType(type);

export const useSortedDocByType = (type: DocType): Pages => {
  const docs = useDocByType(type);
  const [sort] = useDocSort(type);
  return [...docs].sort(docSortFn(sort));
};

export type DocCountType = Record<DocType, number>;

export const useDocTypeCount = (): DocCountType => {
  const store = useStore();
  const getByDocType = useGetDocByType();
  const { pages = {} } = store?.config || {};
  return Object.keys(pages).reduce((acc: DocCountType, type: DocType) => {
    const docs = getByDocType(type);
    return { ...acc, [type]: docs.length };
  }, {});
};

type DocumentPage = { link: string } & Document;

interface NavigationResult {
  nextPage?: DocumentPage;
  prevPage?: DocumentPage;
}

export const useNavigationInfo = (): NavigationResult => {
  const doc = useCurrentDocument();
  const config = useConfig();
  const activeTab = useActiveTab();
  const getByDocType = useGetDocByType();
  const result: NavigationResult = {};
  if (doc) {
    const docId = doc.title;
    const type = doc.type || defDocType;
    const docs = getByDocType(type);
    //next page
    const nextIndex = docs.findIndex(p => p.title === docId);
    if (nextIndex >= 0 && nextIndex < docs.length - 1) {
      const nextDoc = docs[nextIndex + 1];
      result.nextPage = {
        ...nextDoc,
        link: getDocPath(
          nextDoc.type || defDocType,
          nextDoc,
          config?.pages,
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
          config?.pages,
          prevDoc.title,
          activeTab,
        ),
      };
    }
  }
  return result;
};

export const useDocument = (docId: string) => {
  const store = useStore();
  return store.docs[docId];
};

export const useGetDocument = () => (docId: string) => {
  const store = useStore();
  return store.docs[docId];
};

export const useCurrentDocumentPath = (
  type: DocType | undefined = defDocType,
  name: string,
): string => {
  const doc = useDocument(name);
  const activeTab = useActiveTab();
  const config = useConfig();
  return getDocPath(type, doc, config?.pages, name, activeTab);
};

type UseGetDocumentPath = (
  type: DocType | undefined,
  name: string,
  activeTab?: string,
) => string;

export const useDocumentPath: UseGetDocumentPath = (
  type = defDocType,
  name,
  activeTab,
) => {
  const doc = useDocument(name);
  const currentActiveTab = useActiveTab();
  const config = useConfig();
  return getDocPath(
    type,
    doc,
    config?.pages,
    name,
    activeTab || currentActiveTab,
  );
};

export const useGetDocumentPath = (): UseGetDocumentPath => {
  const store = useStore();
  const config = useConfig();
  return (type = defDocType, name, activeTab) => {
    const doc = store.docs[name];
    return getDocPath(type, doc, config?.pages, name, activeTab);
  };
};

export const useDocDescription = (
  doc?: Document | Document,
): string | undefined => {
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
