import merge from 'deepmerge';

const concatMerge = (dest: any[], src: any[]) => [...dest, ...src];

export const deepMerge = <T>(a: any, b: any): T =>
  merge<T>(a, b, { arrayMerge: concatMerge });

const mergeArrays = (dest: any[], src: any[]) => {
  const result =
    src.length > 0
      ? src.map((s, idx) =>
          idx < dest.length ? deepMergeArrays<any[]>(dest[idx], s) : s,
        )
      : src;
  return result;
};
export const deepMergeArrays = <T>(a: any, b: any): T =>
  merge<T>(a, b, { arrayMerge: mergeArrays });

export const deepMergeReplaceArrays = <T>(a: any, b: any): T =>
  merge<T>(a, b, {
    arrayMerge: (dest: any[], src: any[]) => src,
  });

export { deepMergeReplaceArrays as merge };

export const deepmerge = merge;
