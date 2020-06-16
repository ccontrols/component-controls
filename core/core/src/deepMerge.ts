const merge = require('deepmerge');

const concatMerge = (dest: any[], src: any[]) => [...dest, ...src];

export const deepMerge = (a: any, b: any) =>
  merge(a, b, { arrayMerge: concatMerge });

export { merge };
