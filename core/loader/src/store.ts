import {
  Store,
  SearchResult,
  Components,
  Packages,
  BuildConfiguration,
  RunConfiguration,
  mergeConfig,
  defaultBuildConfig,
} from '@component-controls/core';

import {
  LoadingDocStore,
  InstrumentOptions,
  getComponentProps,
  getFileIinfo,
} from '@component-controls/instrument';

import {
  loadConfiguration,
  ConfigurationResult,
} from '@component-controls/config';

export interface LoadingStore {
  /**
   * build-time error
   */
  error?: string;

  /**
   * global configuration from project config file
   */
  config?: RunConfiguration;

  /**
   * global configuration from project config file
   */
  buildConfig?: BuildConfiguration;

  /**
   * global store of packages
   */
  packages: Packages;
  /**
   * global store of components
   */
  components: Components;
  /**
   * stores, loaded from each .stories.* file
   */
  stores: (Partial<Pick<LoadingDocStore, 'stories' | 'doc'>> & {
    filePath: string;
    hash?: string;
  })[];
  search: Store['search'];
}

export const store: LoadingStore = {
  stores: [],
  components: {},
  packages: {},
  config: {},
  buildConfig: {},
  search: () => {
    return {} as SearchResult;
  },
};

let instrumentOptions: InstrumentOptions = {};

export const reserveStories = (filePaths: string[]): void => {
  if (store.stores.length === 0) {
    filePaths.forEach(filePath => store.stores.push({ filePath }));
  }
};
export const removeStoriesDoc = (filePath: string): void => {
  store.stores = store.stores.filter(s => s.filePath !== filePath);
};
export const addStoriesDoc = (
  options: InstrumentOptions,
  filePath: string,
  hash: string,
  added: LoadingDocStore,
): void => {
  instrumentOptions = options;
  const { components, packages, stories, doc } = added;
  if (!doc) {
    throw new Error(`Invalid store with no document ${filePath}`);
  }

  Object.keys(components).forEach(key => {
    store.components[key] = components[key];
  });
  Object.keys(packages).forEach(key => {
    store.packages[key] = packages[key];
  });
  const { title } = doc;
  if (
    store.stores.find(s => s.filePath !== filePath && s.doc?.title === title)
  ) {
    throw new Error(`Duplicate document title "${title}"`);
  }
  const storeStore = store.stores.find(s => s.filePath === filePath);
  if (storeStore) {
    storeStore.stories = stories;
    storeStore.doc = doc;
    storeStore.hash = hash;
  } else {
    store.stores.push({ filePath, hash, stories, doc });
  }
};

export const getSerializedStore = async (): Promise<string> => {
  const { propsLoaders = [], components } = instrumentOptions;
  const { fileInfo = true } = components || {};
  for (const name in store.components) {
    const component = store.components[name];
    const propsFile = component.propsInfoFile || component.request;
    if (propsFile) {
      const propsInfo = await getComponentProps(
        propsLoaders,
        propsFile,
        component.name,
        component.source,
      );
      if (propsInfo) {
        component.info = propsInfo;
      }
    }
    if (fileInfo && component.request) {
      component.fileInfo = await getFileIinfo(
        component.request,
        component.source,
      );
    }
  }
  return JSON.stringify(store);
};

export let config: ConfigurationResult | undefined;

export const initializeBuildOptions = (
  rootPath: string,
  configPath?: string,
  defaultConfigPath?: string,
  userBuildConfig?: BuildConfiguration,
): void => {
  config = loadConfiguration(
    rootPath,
    configPath,
    undefined,
    defaultConfigPath,
  );
  const buildConfig: BuildConfiguration = userBuildConfig
    ? mergeConfig(defaultBuildConfig, userBuildConfig)
    : defaultBuildConfig;
  if (config && config.config) {
    config.config = mergeConfig(buildConfig, config.config);
  }
  store.buildConfig = config?.config || buildConfig;
};
