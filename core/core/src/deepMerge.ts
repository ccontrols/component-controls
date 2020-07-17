const merge = require('deepmerge');

const concatMerge = (dest: any[], src: any[]) => [...dest, ...src];

export const deepMerge = (a: any, b: any) =>
  merge(a, b, { arrayMerge: concatMerge });

const mergeArrays = (dest: any[], src: any[]) => {
  const result =
    src.length > 0
      ? src.map((s, idx) =>
          idx < dest.length ? deepMergeArrays(dest[idx], s) : s,
        )
      : src;
  return result;
};
export const deepMergeArrays = (a: any, b: any) =>
  merge(a, b, { arrayMerge: mergeArrays });

export const deepMergeReplaceArrays = (a: any, b: any) =>
  merge(a, b, {
    arrayMerge: (dest: any[], src: any[]) => src,
  });

export { deepMergeReplaceArrays as merge };
