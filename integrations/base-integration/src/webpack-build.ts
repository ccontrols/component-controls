import path from 'path';
import fs from 'fs';
import {
  BuildProps,
  Store,
  mergeConfig,
  defaultCompileProps,
  RuleOptions,
} from '@component-controls/core';
import { getSiteMap } from '@component-controls/routes';
import {
  getBundleName,
  defaultDistFolder,
  defaultConfigFolder,
} from '@component-controls/core/node-utils';
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

  const distFolder = options.distFolder || defaultDistFolder;
  const staticFolder = options.staticFolder || path.join(distFolder, 'static');
  return mergeConfig<BuildProps>(
    mergeConfig(defaultCompileProps, {
      configPath: defaultConfigFolder,
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
}): Promise<LoadingStore | undefined> => {
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
  const { store } = await run(buildOptions, onBundle);
  return store;
};

export const webpackConfig = ({
  config = {},
  options,
}: {
  config?: RuleOptions['config'];
  options?: BuildProps;
}): RuleOptions['config'] => {
  const buildOptions = createOptions(options);
  const bundleFilePath = path.resolve(
    process.cwd(),
    getBundleName(buildOptions),
  );
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

export const asyncWebpackConfig = async (props: {
  config: RuleOptions['config'];
  options?: BuildProps;
  callback?: (props: {
    config: RuleOptions['config'];
    options?: BuildProps;
  }) => Promise<RuleOptions['config']>;
}): Promise<RuleOptions['config']> => {
  const { config, options, callback } = props;
  const mode = config.mode;
  if (typeof process.env.NODE_ENV === 'undefined') {
    process.env.NODE_ENV = mode;
    process.env.BABEL_ENV = mode;
  }
  const { buildConfig } =
    (await buildBundle({
      options,
    })) || {};
  const result = webpackConfig(props);
  return typeof callback === 'function'
    ? await callback({
        config: result,
        options: buildConfig || options,
      })
    : result;
};
