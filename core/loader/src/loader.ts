import * as fs from 'fs';
import * as path from 'path';
import { getOptions } from 'loader-utils';
import { loader } from 'webpack';
import { log } from '@component-controls/logger';
import { deepmerge } from '@component-controls/core';
import {
  InstrumentOptions,
  parseStories,
} from '@component-controls/instrument';

import { addStoriesDoc, removeStoriesDoc, store as globalStore } from './store';

module.exports = async function() {
  const context = (this as unknown) as loader.LoaderContext;
  const filePath = context.resource;
  const loaderOptions: InstrumentOptions = getOptions(context) || {};
  const configOptions = globalStore?.buildConfig?.instrument || {};

  const ignore = globalStore?.buildConfig?.ignore || [];
  const basePath = path.basename(filePath).toLowerCase();
  const source = fs.readFileSync(filePath, 'utf8');
  if (!ignore.includes(basePath)) {
    const options = deepmerge(configOptions, loaderOptions);

    const { transformed, ...store } = await parseStories(
      source,
      filePath,
      options,
    );
    if (store?.doc) {
      log('loaded: ', filePath);
      if (store.stories && store.components && store.packages) {
        addStoriesDoc(options, filePath, context._compilation.records.hash, {
          stories: store.stories,
          components: store.components,
          packages: store.packages,
          doc: {
            ...store.doc,
            fileName: filePath,
          },
        });
      }
    } else {
      removeStoriesDoc(filePath);
    }
    return transformed;
  }
  return source;
};
