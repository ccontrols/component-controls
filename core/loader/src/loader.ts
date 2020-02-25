import * as fs from 'fs';
import * as path from 'path';
import { getOptions } from 'loader-utils';
import { loader } from 'webpack';
import { parseCSF, parseMDX } from '@component-controls/instrument';
import { LoaderOptions } from './types';
import { addStoriesKind } from './store';

module.exports.default = async function(source: string) {
  const options: LoaderOptions = getOptions(this) || {};
  const { type = 'csf', prettier } = options;
  const context = this as loader.LoaderContext;
  const filePath = context.resourcePath;
  let stories;
  switch (type) {
    case 'csf':
      stories = await parseCSF(source, filePath, prettier);
      break;
    case 'mdx':
      stories = await parseMDX(source, filePath, prettier);
      break;
  }
  if (stories) {
    const time = new Date();
    const fileName = path.join(__dirname, 'story-store-data.js');
    fs.utimesSync(fileName, time, time);
    addStoriesKind(stories, context);
  }
  return source;
};
