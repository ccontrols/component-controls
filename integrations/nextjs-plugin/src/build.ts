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
import {
  getBundleName,
  getCSSBundleName,
} from '@component-controls/core/node-utils';
import { Store } from '@component-controls/core';
import { mergeBuildConfiguration } from '@component-controls/config';
import { loadStore } from '@component-controls/store';
import { getSiteMap } from '@component-controls/routes';

module.exports = ({
  bundleName,
  configPath,
  presets,
  staticFolder,
  distFolder: userDistFolder,
  webpack,
  ...rest
}: BuildProps) => () => {
  const userProps: BuildProps = {
    bundleName,
    configPath,
    webpack,
  };
  const distFolder = userDistFolder || path.join(process.cwd(), 'public');
  const buildConfig: BuildProps = {
    ...defaultCompileProps,
    ...{
      distFolder: path.resolve(__dirname),
      staticFolder: staticFolder || path.join(distFolder, 'static'),
    },
    ...userProps,
  };
  if (presets) {
    buildConfig.presets = presets;
  }
  return {
    /**
     * we need some async function, to make sure the compilation process is completed
     */
    async headers() {
      const onBundle: CompilerCallbackFn = async ({ store: loadingStore }) => {
        if (loadingStore) {
          const store: Store = loadStore(loadingStore, true);
          if (process.env.NODE_ENV === 'production') {
            if (store.config.siteMap) {
              const sitemap = getSiteMap(store);
              const sitemapfolder = path.resolve(
                buildConfig.staticFolder as string,
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
          ? watch(buildConfig, onBundle)
          : compile(buildConfig, onBundle);
      await compiler;

      return [];
    },
    webpack: (config: RuleOptions['config']) => {
      const loader: any = config.module?.rules?.find(
        (r: any) => (r?.use as any)?.loader === 'next-babel-loader',
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
