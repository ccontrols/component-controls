import React, { useCallback, useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import {
  SearchResult,
  SearchItem,
  Store,
  docToSearchObject,
  docToSearchItem,
  emptySearchDocuments,
} from '@component-controls/core';
import { FuseJSSearchOptions } from './types';

const FusejsLogo = () => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 90.000000 90.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,90.000000) scale(0.100000,-0.100000)"
      fill="#a684c6"
      stroke="none"
    >
      <path
        d="M385 796 c-17 -12 -18 -19 -7 -109 20 -164 25 -158 -75 -77 -50 39
-97 70 -110 70 -26 0 -73 -72 -73 -112 0 -23 10 -30 103 -68 56 -24 106 -46
110 -50 4 -4 -32 -22 -80 -40 -146 -54 -155 -66 -108 -147 19 -31 32 -43 49
-43 13 0 61 29 109 65 99 75 94 80 75 -72 -11 -90 -10 -97 7 -109 24 -18 106
-18 130 0 17 12 18 19 7 109 -19 152 -24 147 75 72 47 -36 96 -65 109 -65 16
0 30 13 48 44 47 81 39 92 -107 147 -48 18 -84 36 -80 39 5 4 54 26 111 50 92
38 102 45 102 68 0 41 -47 112 -74 112 -13 0 -59 -29 -109 -70 -100 -81 -95
-86 -75 77 11 90 10 97 -7 109 -10 8 -40 14 -65 14 -25 0 -55 -6 -65 -14z"
      />
    </g>
  </svg>
);

export const useSearch = (store: Store): SearchResult => {
  const [items, setItems] = useState<SearchItem[]>([]);
  const { options, hitsPerPage = 20, fields } = store.config.search || {};
  const fusejs = options as FuseJSSearchOptions;
  const searchIndex = useMemo(() => {
    const docs = store.docs;
    return new Fuse(
      Object.keys(docs).map(key => {
        const doc = docs[key];
        return docToSearchObject(doc, fields);
      }),
      {
        includeScore: true,
        useExtendedSearch: true,
        keys: [
          { name: 'title', weight: 0.2 },
          { name: 'description', weight: 0.2 },
          { name: 'source', weight: 0.1 },
          { name: 'author', weight: 0.04 },
          { name: 'stories', weight: 0.04 },
          { name: 'tags', weight: 0.3 },
          { name: 'components', weight: 0.1 },
        ],
        ...fusejs,
      },
    );
  }, [fusejs, store.docs, fields]);
  const onSearch = useCallback(
    (search: string) => {
      if (search) {
        const searchResults = searchIndex.search(search);
        const newItems = searchResults
          .sort((a, b) => (a.score || 0) - (b.score || 0))
          .slice(0, hitsPerPage)
          .filter(result => store.docs[result.item.objectID])
          .map(result => docToSearchItem(store, result.item.objectID, search));
        setItems(newItems as SearchItem[]);
      } else {
        setItems(emptySearchDocuments(store));
      }
    },
    [store, searchIndex, hitsPerPage],
  );
  return {
    items,
    searchFn: onSearch,
    provider: {
      url: 'https://fusejs.io',
      name: 'Fuse.js',
      logo: (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <FusejsLogo />
          <span style={{ fontWeight: 'bold' }}>Fuse.js</span>
        </div>
      ),
    },
  };
};
