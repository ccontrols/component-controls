import path from 'path';
import fs from 'fs';
import {
  BuildProps,
  Store,
  mergeConfig,
  defaultCompileProps,
} from '@component-controls/core';
import { getSiteMap } from '@component-controls/routes';
import { getBundleName } from '@component-controls/core/node-utils';
import { LoadingStore, loadStore } from '@component-controls/store';
import { log } from '@component-controls/logger';
import {
  CompilerCallbackFn,
  searchIndexing,
  compile,
  watch,
} from '@component-controls/webpack-compile';

export type OnEndBuild = (props: { store: Store }) => void;
export const postBuild = async (
  staticFolder: string,
  loadingStore?: LoadingStore,
  mode?: string,
  onEndBuild?: OnEndBuild,
): Promise<void> => {
  if (loadingStore) {
    const store: Store = loadStore(loadingStore, true);
    if (mode || process.env.NODE_ENV === 'production') {
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
    if (onEndBuild) {
      onEndBuild({ store });
    }
  }
};

const createOptions = (buildOptions?: BuildProps): BuildProps => {
  const keys = buildOptions ? Object.keys(buildOptions) : [];
  const options = keys.reduce((acc: BuildProps, key) => {
    if ((buildOptions as Record<string, unknown>)[key] !== undefined) {
      return { ...acc, [key]: (buildOptions as Record<string, unknown>)[key] };
    }
    return acc;
  }, {});

  const distFolder = options.distFolder || path.join(process.cwd(), 'dist');
  const staticFolder = path.join(options.distFolder || distFolder, 'static');
  return mergeConfig<BuildProps>(
    mergeConfig(defaultCompileProps, {
      configPath: '.config',
      distFolder,
      staticFolder,
    }),
    options,
  );
};

export const buildBundle = async ({
  options,
  onEndBuild,
}: {
  options?: BuildProps;
  onEndBuild?: OnEndBuild;
}): Promise<any> => {
  const mode = options?.mode || process.env.NODE_ENV;
  const buildOptions = createOptions(options);
  const onBundle: CompilerCallbackFn = async ({ store }) => {
    await postBuild(
      buildOptions.staticFolder as string,
      store,
      mode,
      onEndBuild,
    );
  };

  const run = mode === 'production' ? compile : watch;
  await run(buildOptions, onBundle);
};

export const webpackConfig = ({
  config = {},
  options,
}: {
  config?: any;
  options: BuildProps;
}): any => {
  const buildOptions = createOptions(options);
  const bundleFilePath = getBundleName(buildOptions);
  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        'component-controls-bundle': bundleFilePath,
      },
    },
  };
};

export const asyncWebpackConfig = async ({
  config,
  options,
}: {
  config: any;
  options?: BuildProps;
}): Promise<any> => {
  const mode = config.mode;
  if (typeof process.env.NODE_ENV === 'undefined') {
    process.env.NODE_ENV = mode;
    process.env.BABEL_ENV = mode;
  }
  await buildBundle({
    options,
  });
  return webpackConfig(config);
};
