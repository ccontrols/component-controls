/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import merge from 'deepmerge';

const concatMerge = (dest: any[], src: any[]) => [...dest, ...src];

export const deepMerge = <T>(a: any, b: any): T =>
  merge<T>(a, b, { arrayMerge: concatMerge });

const mergeArrays = (dest: any[], src: any[]) => {
  const result =
    src.length > 0
      ? src.map((s, idx) =>
          typeof s === 'object' &&
          typeof dest[idx] === 'object' &&
          idx < dest.length
            ? mergeConfig<any[]>(dest[idx], s)
            : s,
        )
      : src;
  return result;
};
export const mergeConfig = <T>(a: any, b: any): T =>
  merge<T>(a, b, {
    arrayMerge: mergeArrays,
    customMerge: (key: string) => (src: any, dest: any) => {
      return key === 'tabs' ? dest || src : mergeConfig<T>(src, dest);
    },
  });

export const deepMergeReplaceArrays = <T>(a: any, b: any): T =>
  merge<T>(a, b, {
    arrayMerge: (dest: any[], src: any[]) => src,
  });

export { deepMergeReplaceArrays as merge };

export const deepmerge = merge;
