const merge = require('deepmerge');
import { Configuration as WebpackConfiguration } from 'webpack';
import { react } from './react';
import { instrument } from './instrument';
import { reactDocgen } from './react-docgen';
import { reactDocgenTypescript } from './react-docgen-typescript';
import {
  BuildProps,
  PresetType,
  RuleOptions,
  RuleTypes,
  RuleType,
} from '@component-controls/core';

export { WebpackConfiguration };
export const presetsFactory: {
  [key: string]: PresetType;
} = {
  'react-docgen-typescript': reactDocgenTypescript,
  'react-docgen': reactDocgen,
  instrument,
  react,
};

const getConfiguredPreset = (name: string, options: BuildProps) => {
  const preset = presetsFactory[name];
  if (typeof preset === 'function') {
    return preset(options);
  }
  return preset;
};

const arrayMerge = (dest: any[], src: any[]) => {
  const srcCache = src ? [...src] : [];
  const destItems = dest
    ? dest.reduce((acc, item) => {
        // merge presets by loader or test
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

const deepMergeWithPresets = (dest: any, source: any) => {
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
 * expands the presets into webpack config
 * @param presets custom config
 */
export const getWebpackConfig = (
  presets: RuleTypes,
  options: BuildProps,
): WebpackConfiguration => {
  const result: WebpackConfiguration = presets.reduce(
    (acc: WebpackConfiguration, config: RuleType) => {
      if (typeof config === 'string') {
        const p = getConfiguredPreset(config, options);
        return deepMergeWithPresets(acc, p);
      }
      if (config && (config as RuleOptions).name) {
        const name = (config as RuleOptions).name;
        const p = getConfiguredPreset(name, options);
        if (p) {
          const r: WebpackConfiguration = p;
          const o: WebpackConfiguration = (config as RuleOptions).config;
          const merged: WebpackConfiguration[] = deepMergeWithPresets(r, o);
          return deepMergeWithPresets(acc, merged);
        }
      }
      return deepMergeWithPresets(acc, config);
    },
    {},
  );
  return result;
};

/**
 * deep merge two webpack configurations
 */
export const deepMergeWebpackConfig = (
  dest?: WebpackConfiguration,
  source?: WebpackConfiguration,
): WebpackConfiguration => {
  return dest && source
    ? merge(dest, source, {
        arrayMerge: arrayMerge,
      })
    : source || dest || {};
};

/**
 * merge webpack config with custom set of presets
 * @param webpack passed configuration to merge with
 * @param presets custom config
 */

export const mergeWebpackConfig = (
  webpack: WebpackConfiguration | undefined,
  presets: RuleTypes | undefined,
  options: BuildProps,
): WebpackConfiguration => {
  if (!presets) {
    return webpack || {};
  }
  const newConfig = getWebpackConfig(presets, options);
  return deepMerge(webpack || {}, newConfig);
};
