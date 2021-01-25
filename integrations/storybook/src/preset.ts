import fs from 'fs';
import path from 'path';

import { RuleSetRule } from 'webpack';
import { mergeWebpackConfig } from '@component-controls/webpack-configs';
const LoaderPlugin = require('@component-controls/loader/plugin');
import { PresetOptions, defaultRules } from './types';

// https://github.com/storybookjs/storybook/issues/13277#issuecomment-765525245
const getPackageDir = (filepath: string) => {
  let currDir = path.dirname(require.resolve(filepath));
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir;
    }
    const { dir, root } = path.parse(currDir);
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`,
      );
    }
    currDir = dir;
  }
};

module.exports = {
  config: (entry: any[] = []) => {
    const result = [...entry];
    result.push(require.resolve('./config'));
    return result;
  },
  babel: async (entry: any, options: any) => {
    if (options._version >= '6.0.0') {
      return {
        ...entry,
        plugins: [...entry.plugins, '@emotion'],
      };
    }
    return entry;
    // any extra options you want to set
  },
  addons: (entry: any = {}) => {
    const { pages: customPages } = entry;
    const pages = customPages || [require.resolve('./full-page')];
    if (pages.length) {
      return [
        {
          name: '@component-controls/storybook-custom-docs',
          options: {
            pages,
          },
        },
      ];
    }
    return [];
  },
  managerEntries: (entry: any[] = [], options: PresetOptions = {}) => {
    const result = [...entry];
    const {
      propsPanel = false,
      storySourcePanel = false,
      storyConfigPanel = false,
    } = options;
    if (propsPanel) {
      result.push(require.resolve('./register-props-panel'));
    }
    if (storySourcePanel) {
      result.push(require.resolve('./register-storysource-panel'));
    }
    if (storyConfigPanel) {
      result.push(require.resolve('./register-storyconfig-panel'));
    }

    return result;
  },
  managerWebpack: (config: any) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': getPackageDir('@emotion/react'),
          '@emotion/styled': getPackageDir('@emotion/styled'),
          'emotion-theming': getPackageDir('@emotion/react'),
        },
      },
    };
  },
  webpackFinal: (config: any = {}, options: PresetOptions = {}) => {
    const mergedConfig = mergeWebpackConfig(
      config,
      options?.webpack || defaultRules,
      {},
    );
    const newConfig = {
      ...mergedConfig,
      plugins: [
        ...(mergedConfig.plugins as any),
        new LoaderPlugin({ defaultConfigPath: '.storybook' }),
      ],
    };
    if (newConfig.module) {
      newConfig.module = {
        ...newConfig.module,
        rules: newConfig.module.rules.map(r => {
          return Array.isArray(r.use)
            ? {
                ...r,
                use: r.use.map(use =>
                  (use as RuleSetRule).options && (use as RuleSetRule).options
                    ? {
                        ...(use as RuleSetRule),
                        options: {
                          ...(use as any).options,
                          presets: Array.isArray((use as any).options?.presets)
                            ? (use as any).options.presets.map(
                                (preset: any) => {
                                  return Array.isArray(preset)
                                    ? preset.map(p => {
                                        return p.runtime
                                          ? { ...p, runtime: 'classic' }
                                          : p;
                                      })
                                    : preset;
                                },
                              )
                            : undefined,
                        },
                      }
                    : use,
                ),
              }
            : r;
        }) as RuleSetRule[],
      };

      newConfig.resolve = {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': getPackageDir('@emotion/react'),
          '@emotion/styled': getPackageDir('@emotion/styled'),
          'emotion-theming': getPackageDir('@emotion/react'),
        },
      };
    }
    return newConfig;
  },
};
