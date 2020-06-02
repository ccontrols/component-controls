import * as fs from 'fs';
import * as path from 'path';
import * as chalk from 'chalk';
import { getOptions } from 'loader-utils';
import { loader } from 'webpack';
import {
  InstrumentOptions,
  parseStories,
} from '@component-controls/instrument';

import { reserveStoriesDoc, addStoriesDoc } from './store';

module.exports.pitch = async function() {
  const options: InstrumentOptions = getOptions(this) || {};
  const context = this as loader.LoaderContext;
  const filePath = this.resource;
  reserveStoriesDoc(filePath);
  const source = fs.readFileSync(filePath, 'utf8');
  const { transformed, ...store } = await parseStories(
    source,
    filePath,
    options,
  );
  if (store) {
    const relPath = path.relative(context.rootContext, filePath);
    const moduleId = relPath.startsWith('.') ? relPath : `./${relPath}`;
    console.log(chalk.bgRgb(244, 147, 66)('@loaded: '), filePath);
    addStoriesDoc(filePath, {
      stories: store.stories,
      components: store.components,
      packages: store.packages,
      docs: Object.keys(store.docs).reduce(
        (acc, key) => ({
          ...acc,
          [key]: {
            ...store.docs[key],
            fileName: filePath,
            moduleId: moduleId,
          },
        }),
        {},
      ),
    });
  }
  return transformed;
};
