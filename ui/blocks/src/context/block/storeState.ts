import {
  atom,
  useRecoilValue,
  useSetRecoilState,
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
} from '@component-controls/core';
import { StoryStore, Store } from '@component-controls/store';

export const storeAtom = atom<StoryStore>({
  key: 'store',
  default: new Store(),
});

export const useStore = () => useRecoilValue(storeAtom);

export const configSelector = selector<StoryStore['config']>({
  key: 'config',
  get: ({ get }) => {
    const store = get(storeAtom);
    return store.config;
  },
});

export const useConfig = () => useRecoilValue(configSelector);

export const docsAtom = selector<Documents>({
  key: 'docs',
  get: ({ get }) => {
    const store = get(storeAtom);
    return store.getStore()?.docs || {};
  },
});

export const useDocs = () => useRecoilValue(docsAtom);

type DocumentStoreType = Document & { package?: PackageInfo };

export const documentAtom = atom<DocumentStoreType | undefined>({
  key: 'document',
  default: undefined,
});

export const useDocument = (): DocumentStoreType | undefined =>
  useRecoilValue(documentAtom);

export const setDocument = (doc: DocumentStoreType) =>
  useSetRecoilState(documentAtom)(doc);

const docsByTypeSelector = selectorFamily<Pages, DocType>({
  key: 'docs_by_type',
  get: type => ({ get }) => {
    const docs = get(docsAtom);
    return Object.keys(docs).reduce((acc: Pages, key: string) => {
      const doc: Document | undefined = docs[key];
      if (doc) {
        const { type: docType = defDocType } = doc;
        if (docType === type) {
          return [...acc, doc];
        }
      }
      return acc;
    }, []);
  },
});

export const useDocByType = (type: DocType): Pages => {
  return useRecoilValue(docsByTypeSelector(type));
};

type DocCountType = Record<DocType, number>;

const docTypeCountSelector = selector<DocCountType>({
  key: 'docs_type_count',
  get: ({ get }) => {
    const store = get(storeAtom);
    const { pages = {} } = store?.config || {};
    return Object.keys(pages).reduce((acc: DocCountType, type: DocType) => {
      const docs = get(docsByTypeSelector(type));
      return { ...acc, [type]: docs.length };
    }, {});
  },
});

export const useDocTypeCount = (): DocCountType => {
  return useRecoilValue(docTypeCountSelector);
};

interface NavigationResult {
  nextPage?: Document;
  prevPage?: Document;
}

const navigationSelector = selector<NavigationResult>({
  key: 'navigation_selector',
  get: ({ get }) => {
    const doc = get(documentAtom);
    const result: NavigationResult = {};
    if (doc) {
      const docId = doc.title;
      const docs = get(docsByTypeSelector(doc.type || defDocType));
      //next page
      const nextIndex = docs.findIndex(p => p.title === docId);
      if (nextIndex >= 0 && nextIndex < docs.length - 1) {
        result.nextPage = docs[nextIndex + 1];
      }

      //prev page
      const prevIndex = docs.findIndex(p => p.title === docId);
      if (prevIndex > 0) {
        result.prevPage = docs[prevIndex - 1];
      }
    }
    return result;
  },
});

export const useNavigationInfo = (): NavigationResult => {
  return useRecoilValue(navigationSelector);
};

const docPropCountSelector = selectorFamily<DocCountType, string>({
  key: 'docs_prop_count',
  get: category => ({ get }) => {
    const docs = get(docsAtom);
    return Object.keys(docs).reduce((acc: { [key: string]: number }, key) => {
      const doc = docs[key];
      //@ts-ignore
      const value = doc[category];
      const values = Array.isArray(value) ? value : [value];
      values.forEach(v => {
        if (v !== undefined) {
          if (typeof acc[v] === 'undefined') {
            acc[v] = 0;
          }
          acc[v] = acc[v] + 1;
        }
      });
      return acc;
    }, {});
  },
});

export const useDocPropCount = (category: string): DocCountType => {
  return useRecoilValue(docPropCountSelector(category));
};

type StoreObserver = (storyId?: string, propName?: string) => void;

const observersAtom = atom<StoreObserver[]>({
  key: 'observers',
  default: [],
});

export const addObserver = (observer: StoreObserver) => {
  const observers = useRecoilValue(observersAtom);
  useSetRecoilState(observersAtom)([...observers, observer]);
};

export const removeObserver = (observer: StoreObserver) => {
  const observers = useRecoilValue(observersAtom);
  useSetRecoilState(observersAtom)(observers.filter(o => o !== observer));
};

export const notifyObservers = (storyId: string, propName: string) => {
  const observers = useRecoilValue(observersAtom);
  observers.forEach(observer => observer(storyId, propName));
};
