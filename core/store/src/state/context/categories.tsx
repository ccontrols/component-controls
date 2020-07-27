import { useState, useEffect } from 'react';
import { Pages } from '@component-controls/core';
import { DocCountType, useDocs, docSortFn, useDocSort } from './document';

export const useDocPropCount = (category: string): DocCountType => {
  const [state, setState] = useState<DocCountType>({});
  const docs = useDocs();
  useEffect(() => {
    setState(
      Object.keys(docs).reduce((acc: { [key: string]: number }, key) => {
        const doc = docs[key];
        const value = (doc as any)[category];
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
      }, {}),
    );
  }, [category, docs]);
  return state;
};

export const usePagesByCategory = (category: string, value?: any): Pages => {
  const [state, setState] = useState<Pages>([]);
  const docs = useDocs();
  const [sort] = useDocSort(category);
  useEffect(() => {
    setState(
      Object.keys(docs)
        .filter(key => {
          const doc = docs[key];
          //@ts-ignore
          const catValue = doc[category];
          if (value === undefined) {
            return catValue !== undefined;
          }
          const catValues = Array.isArray(catValue) ? catValue : [catValue];
          return catValues.some(v => v === value);
        })
        .map(key => docs[key])
        .sort(docSortFn(sort)),
    );
  }, [sort, docs, category, value]);
  return state;
};
