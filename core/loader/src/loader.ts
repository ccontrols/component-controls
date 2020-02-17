import { getOptions } from 'loader-utils';
import { parseCSF, parseMDX } from '@component-controls/instrument';
import { LoaderOptions } from './types';
import storyFiles from './store';

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
    storyFiles.push(stories);
  }
  return source;
};
