import * as fs from 'fs';
import * as path from 'path';
import { getOptions } from 'loader-utils';
import { loader } from 'webpack';
import {
  InstrumentOptions,
  parseStories,
} from '@component-controls/instrument';
import { StoriesStore } from '@component-controls/specification';
import { addStoriesKind } from './store';

module.exports.default = async function(source: string) {
  const options: InstrumentOptions = getOptions(this) || {};
  const context = this as loader.LoaderContext;
  const filePath = context.resourcePath;

  const store: StoriesStore = await parseStories(source, filePath, options);
  if (store) {
    const time = new Date();
    const fileName = path.join(__dirname, 'story-store-data.js');
    fs.utimesSync(fileName, time, time);
    addStoriesKind(store, context);
  }
  return source;
};
