import {
  atom,
  atomFamily,
  useRecoilValue,
  useRecoilState,
  selectorFamily,
  selector,
} from 'recoil';
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
import {
  storeState,
  useStore,
  useConfig,
  configState,
  activeTabState,
  useActiveTab,
} from './store';

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

export const useDocPackage = (): PackageInfo | undefined =>
  useRecoilValue(docPackageState);

export const docsState = selector<Documents>({
  key: 'docs',
  get: ({ get }) => {
    const store = get(storeState);
    return store?.docs || {};
  },
});

export const useDocs = () => useRecoilValue(docsState);

export const pagesState = selector<Pages>({
  key: 'pages',
  get: ({ get }) => {
    const store = get(storeState);
    return Object.keys(store.docs).map(key => store.docs[key]);
  },
});

export const usePages = () => useRecoilValue(pagesState);

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

export const docSortByTypeState = atomFamily<DocSortOrder, DocType>({
  key: 'docs_sort)by_type',
  default: 'date',
});

export const useDocSort = (type: DocType) =>
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

export const useSortedDocByType = (type: DocType): Pages => {
  return useRecoilValue(docsSortedState(type));
};

export type DocCountType = Record<DocType, number>;

const docTypeCountState = selector<DocCountType>({
  key: 'docs_type_count',
  get: ({ get }) => {
    const store = get(storeState);
    const { pages = {} } = store?.config || {};
    return Object.keys(pages).reduce((acc: DocCountType, type: DocType) => {
      const docs = get(docsByTypeState(type));
      return { ...acc, [type]: docs.length };
    }, {});
  },
});

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
    const config = get(configState);
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
  },
});

export const useNavigationInfo = (): NavigationResult => {
  return useRecoilValue(navigationState);
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
  const getDoc = useGetDocument();
  const config = useConfig();
  return (type = defDocType, name, activeTab) => {
    const doc = getDoc(name);
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
