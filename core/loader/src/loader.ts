import * as fs from 'fs';
import * as path from 'path';
import { getOptions } from 'loader-utils';
import { parseCSF, parseMDX } from '@component-controls/instrument';
import { LoaderOptions } from './types';
import { addStoriesKind } from './store';

module.exports.default = async function(source: string) {
  const options: LoaderOptions = getOptions(this) || {};
  const { type = 'csf' } = options;
  let stories;
  switch (type) {
    case 'csf':
      stories = await parseCSF(source);
      break;
    case 'mdx':
      stories = await parseMDX(source);
      break;
  }
  if (stories) {
    const time = new Date();
    const fileName = path.join(__dirname, 'story-store-data.js');
    fs.utimesSync(fileName, time, time);
    addStoriesKind(stories);
  }
  return source;
};
