import {
  Components,
  Packages,
  BuildConfiguration,
  RunConfiguration,
  deepMergeArrays,
  defaultBuildConfig,
} from '@component-controls/core';

import {
  LoadingDocStore,
  InstrumentOptions,
  getComponentProps,
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
}

export const store: LoadingStore = {
  stores: [],
  components: {},
  packages: {},
  config: {},
  buildConfig: {},
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
  const { propsLoaders = [] } = instrumentOptions;
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
  }
  return JSON.stringify(store);
};

export let config: ConfigurationResult | undefined;

export const initializeBuildOptions = (
  rootPath: string,
  configPath?: string,
): void => {
  config = loadConfiguration(rootPath, configPath);
  if (config && config.config) {
    config.config = deepMergeArrays(defaultBuildConfig, config.config);
  }
  store.buildConfig = config?.config || defaultBuildConfig;
};
