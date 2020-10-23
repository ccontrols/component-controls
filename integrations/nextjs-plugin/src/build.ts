import fs from 'fs';
import path from 'path';
import {
  compile,
  watch,
  CompilerCallbackFn,
} from '@component-controls/webpack-compile';
import { log } from '@component-controls/logger';
import { BuildProps, defaultCompileProps } from '@component-controls/core';
import { Store } from '@component-controls/core';
import { loadStore, getSiteMap } from '@component-controls/store';

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
      const onBundle: CompilerCallbackFn = ({ store: loadingStore }) => {
        if (loadingStore) {
          const store: Store = loadStore(loadingStore, true);
          if (process.env.NODE_ENV === 'production' && store.config.siteMap) {
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
