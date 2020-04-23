const merge = require('deepmerge');
import { Configuration } from 'webpack';
import { instrument } from './instrument';
import { reactDocgen } from './react-docgen';
import { reactDocgenTypescript } from './react-docgen-typescript';
import { RuleOptions, RuleTypes, RuleType } from './types';
export * from './types';

export const rulesFactory: {
  [key: string]: Configuration;
} = {
  'react-docgen-typescript': reactDocgenTypescript,
  'react-docgen': reactDocgen,
  instrument,
};

const arrayMerge = (dest: any[], src: any[]) => {
  const srcCache = src ? [...src] : [];
  const destItems = dest
    ? dest.reduce((acc, item) => {
        // merge rules by loader or test
        const srcItemIdx = srcCache.findIndex(
          d => d.test === item.test || d.loader === item.loader,
        );
        if (srcItemIdx >= 0) {
          const srcItem = srcCache[srcItemIdx];
          srcCache.splice(srcItemIdx, 1);
          return [...acc, deepMerge(srcItem, item)];
        }
        return [...acc, item];
      }, [])
    : src || [];
  return [...destItems, ...srcCache];
};

const deepMergeWithRules = (dest: any, source: any) => {
  return dest && source
    ? merge(dest, source, {
        arrayMerge: arrayMerge,
      })
    : source || dest || {};
};

const deepMerge = (dest: any, source: any) => {
  return dest && source
    ? merge(dest, source, {
        arrayMerge: (d: any[], s: any[]) => (d && s ? [...d, ...s] : d || s),
      })
    : source || dest || {};
};
/**
 * expands the rules into webpack rules
 * @param custom custom config
 */
export const getWebpackConfig = (custom: RuleTypes): Configuration => {
  const result: Configuration = custom.reduce(
    (acc: Configuration, config: RuleType) => {
      if (typeof config === 'string') {
        const f = rulesFactory[config];
        return deepMergeWithRules(acc, f);
      }
      if (config && (config as RuleOptions).name) {
        const name = (config as RuleOptions).name;
        if (rulesFactory[name]) {
          const r: Configuration = rulesFactory[name];
          const o: Configuration = (config as RuleOptions).config;
          const merged: Configuration[] = deepMergeWithRules(r, o);
          return deepMergeWithRules(acc, merged);
        }
      }
      return deepMergeWithRules(acc, config);
    },
    {},
  );
  return result;
};

/**
 * merge webpack config with custom set of rules
 * @param webPack passed configuration to merge with
 * @param custom custom config
 */

export const mergeWebpackConfig = (
  webPack: Configuration,
  custom: RuleTypes,
): Configuration => {
  const newConfig = getWebpackConfig(custom);
  return deepMerge(webPack, newConfig);
};
