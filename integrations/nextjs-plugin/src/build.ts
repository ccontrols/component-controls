import fs from 'fs';
import path from 'path';
import {
  compile,
  watch,
  CompilerCallbackFn,
} from '@component-controls/webpack-compile';
import {
  CompileProps,
  defaultCompileProps,
} from '@component-controls/webpack-configs';
import { Store } from '@component-controls/core';
import { loadStore, getSiteMap } from '@component-controls/store';

module.exports = ({
  bundleName,
  configPath,
  presets,
  staticFolder,
  webPack,
  ...rest
}: CompileProps) => () => {
  return {
    /**
     * we need some async function, to make sure the compilation process is completed
     */
    async headers() {
      const userProps: CompileProps = {
        bundleName,
        configPath,
        webPack,
      };
      const config: CompileProps = {
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
      const onBundle: CompilerCallbackFn = ({ store: loadingStore }) => {
        if (loadingStore) {
          const store: Store = loadStore(loadingStore, true);
          if (process.env.NODE_ENV === 'production' && store.config.siteMap) {
            const sitemap = getSiteMap(store);
            const sitemapname = path.join(
              path.resolve(config.staticFolder as string, '..'),
              'sitemap.xml',
            );
            fs.writeFileSync(sitemapname, sitemap, 'utf8');
          }
        }
      };
      const compiler =
        process.env.NODE_ENV === 'development'
          ? watch(config, onBundle)
          : compile(config, onBundle);
      await compiler;

      return [];
    },
    ...rest,
  };
};
