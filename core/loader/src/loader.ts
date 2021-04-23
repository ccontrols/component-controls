import * as fs from 'fs';
import * as path from 'path';
import {
  WebpackLoaderContext,
  LoaderOptions,
} from '@component-controls/core/node-utils';
import { getOptions } from 'loader-utils';
import { log } from '@component-controls/logger';
import { deepmerge } from '@component-controls/core';
import {
  InstrumentOptions,
  parseStories,
} from '@component-controls/instrument';

import { addStoriesDoc, removeStoriesDoc, store as globalStore } from './store';

async function loader(this: WebpackLoaderContext): Promise<string> {
  const filePath = this.resource;
  const loaderOptions: InstrumentOptions = getOptions(this) || {};
  const configOptions = globalStore?.buildConfig?.instrument || {};
  const ignore = globalStore?.buildConfig?.ignore || [];
  const basePath = path.basename(filePath).toLowerCase();
  const source = fs.readFileSync(filePath, 'utf8');
  if (!ignore.includes(basePath)) {
    const options = deepmerge(configOptions, loaderOptions);

    const { transformed, ...store } = await parseStories(
      filePath,
      source,
      options,
    );
    if (store?.doc) {
      log('loaded: ', filePath);
      if (store.stories && store.components && store.packages) {
        const fileDependencies: string[] = [];
        const folderDependencies: string[] = [];
        Object.values(store.components).forEach(component => {
          if (component.request) {
            fileDependencies.push(component.request as string);
            if (component.jest) {
              const componentFolder = path.dirname(component.request);
              component.jest.results.forEach(r => {
                const testFilePath = path.resolve(
                  componentFolder,
                  r.testFilePath,
                );
                fileDependencies.push(testFilePath);
                folderDependencies.push(
                  path.join(path.dirname(testFilePath), '__snapshots__'),
                );
              });
              Object.keys(component.jest.coverage).forEach(f => {
                fileDependencies.push(path.resolve(componentFolder, f));
              });
            }
          }
        });
        new Set(fileDependencies).forEach(d => this.addDependency(d));
        new Set(folderDependencies).forEach(d => this.addContextDependency(d));
        addStoriesDoc(filePath, this._compilation.records.hash, {
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
      log('removed: ', filePath);
      removeStoriesDoc(filePath);
    }
    return transformed;
  }
  return source;
}

export default loader;

/**
 * expose public types via declaration merging
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace loader {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Options extends LoaderOptions {}
}
