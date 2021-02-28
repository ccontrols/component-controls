import fs from 'fs';
import path from 'path';
import {
  compile,
  watch,
  CompilerCallbackFn,
  searchIndexing,
} from '@component-controls/webpack-compile';
import { log } from '@component-controls/logger';
import {
  BuildProps,
  RuleOptions,
  defaultCompileProps,
} from '@component-controls/core';
import { getCSSBundleName } from '@component-controls/core/node-utils';
import { Store } from '@component-controls/core';
import { loadStore } from '@component-controls/store';
import { getSiteMap } from '@component-controls/routes';

module.exports = ({
  bundleName,
  configPath,
  presets,
  staticFolder,
  webpack,
  ...rest
}: BuildProps) => () => {
  return {
    /**
     * we need some async function, to make sure the compilation process is completed
     */
    async headers() {
      const userProps: BuildProps = {
        bundleName,
        configPath,
        webpack,
      };
      const config: BuildProps = {
        ...defaultCompileProps,
        ...{
          distFolder: path.resolve(__dirname),
          staticFolder:
            staticFolder || path.join(process.cwd(), 'public', 'static'),
          ...userProps,
        },
      };
      if (presets) {
        config.presets = presets;
      }
      const onBundle: CompilerCallbackFn = async ({ store: loadingStore }) => {
        if (loadingStore) {
          const store: Store = loadStore(loadingStore, true);
          if (process.env.NODE_ENV === 'production') {
            if (store.config.siteMap) {
              const sitemap = getSiteMap(store);
              const sitemapfolder = path.resolve(
                config.staticFolder as string,
                '..',
              );
              if (!fs.existsSync(sitemapfolder)) {
                fs.mkdirSync(sitemapfolder, { recursive: true });
              }
              const sitemapname = path.join(sitemapfolder, 'sitemap.xml');
              log('creating sitemap', sitemapname);
              fs.writeFileSync(sitemapname, sitemap, 'utf8');
            }
            await searchIndexing(store);
          }
          process.env.NEXT_CC_CSS_FILENAME = getCSSBundleName(store.config);
        }
      };
      const compiler =
        process.env.NODE_ENV === 'development'
          ? watch(config, onBundle)
          : compile(config, onBundle);
      await compiler;

      return [];
    },
    webpack: (config: RuleOptions['config']) => {
      const loader = config.module?.rules?.find(
        r => (r?.use as any)?.loader === 'next-babel-loader',
      );
      if (loader?.options) {
        (loader.options as any).babelPresetPlugins.push(
          '@emotion/babel-plugin',
        );
      }
      return config;
    },

    ...rest,
  };
};
