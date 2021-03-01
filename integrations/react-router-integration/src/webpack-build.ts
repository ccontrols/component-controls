import path from 'path';
import fs from 'fs';
import {
  BuildProps,
  Store,
  defaultCompileProps,
} from '@component-controls/core';
import { getSiteMap } from '@component-controls/routes';
import { LoadingStore, loadStore } from '@component-controls/store';
import { log } from '@component-controls/logger';
import {
  CompilerCallbackFn,
  searchIndexing,
} from '@component-controls/webpack-compile';
import { getBundleName } from '@component-controls/core/node-utils';
import { compile, watch } from '@component-controls/webpack-compile';

export const postBuild = async (
  staticFolder: string,
  loadingStore?: LoadingStore,
): Promise<void> => {
  if (loadingStore) {
    const store: Store = loadStore(loadingStore, true);
    if (process.env.NODE_ENV === 'production') {
      if (store.config.siteMap) {
        const sitemap = getSiteMap(store);
        const sitemapfolder = path.resolve(staticFolder, '..');
        if (!fs.existsSync(sitemapfolder)) {
          fs.mkdirSync(sitemapfolder, { recursive: true });
        }
        const sitemapname = path.join(sitemapfolder, 'sitemap.xml');
        log('creating sitemap', sitemapname);
        fs.writeFileSync(sitemapname, sitemap, 'utf8');
      }
      await searchIndexing(store);
    }
  }
};

export const withComponentControls = ({
  config,
  development,
  options,
}: {
  config: any;
  development?: boolean;
  options?: BuildProps;
}) =>
  async function(): Promise<any> {
    const distFolder = path.join(process.cwd(), 'dist');
    const buildOptions: BuildProps = {
      ...defaultCompileProps,
      configPath: '.config',
      distFolder,
      staticFolder: path.join(options?.distFolder || distFolder, 'static'),
      ...options,
    };
    const onBundle: CompilerCallbackFn = async ({ store }) => {
      await postBuild(buildOptions.staticFolder as string, store);
    };

    const run = development ? watch : compile;
    await run(buildOptions, onBundle);
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...(config.module?.rules || []),
          {
            test: require.resolve('@component-controls/store/controls-store'),
            use: {
              loader: require.resolve('@component-controls/store/loader.js'),
              options: {
                bundleFileName: getBundleName(buildOptions),
              },
            },
          },
        ],
      },
    };
  };
