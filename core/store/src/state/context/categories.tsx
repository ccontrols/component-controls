import { useState, useEffect } from 'react';
import { Pages } from '@component-controls/core';
import { DocCountType, useDocs, docSortFn, useDocSort } from './document';

/**
 * Returns the number of documents by unique values in their `category` field
 */
export const useDocPropCount = (category: string): DocCountType => {
  const [state, setState] = useState<DocCountType>({});
  const docs = useDocs();
  useEffect(() => {
    setState(
      Object.keys(docs).reduce((acc: DocCountType, key) => {
        const doc = docs[key];
        const value = (doc as any)[category];
        const values = Array.isArray(value) ? value : [value];
        values.forEach(v => {
          if (v !== undefined) {
            if (typeof acc[v] === 'undefined') {
              acc[v] = { count: 0 };
            }
            acc[v].count = acc[v].count + 1;
          }
        });
        return acc;
      }, {}),
    );
  }, [category, docs]);
  return state;
};

/**
 * Returns an array of documents that have a specific value in their `category` field
 */
export const useDocsByCategory = (
  category: string,
  value?: string | number,
): Pages => {
  const [state, setState] = useState<Pages>([]);
  const docs = useDocs();
  const [sort] = useDocSort(category);
  useEffect(() => {
    setState(
      Object.keys(docs)
        .filter(key => {
          const doc = docs[key];
          const catValue = (doc as any)[category];
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
