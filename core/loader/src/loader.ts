import * as fs from 'fs';
import * as path from 'path';
import { getOptions } from 'loader-utils';
import { loader } from 'webpack';
import { parseCSF, parseMDX } from '@component-controls/instrument';
import { StoriesStore } from '@component-controls/specification';
import { LoaderOptions } from './types';
import { addStoriesKind } from './store';

module.exports.default = async function(source: string) {
  const options: LoaderOptions = getOptions(this) || {};
  const { type = 'csf', propsLoaders = [], ...otherOptions } = options;
  const context = this as loader.LoaderContext;
  const filePath = context.resourcePath;
  const loaders = propsLoaders.filter(loader => {
    const include = Array.isArray(loader.include)
      ? loader.include
      : loader.include
      ? [loader.include]
      : undefined;
    const exclude = Array.isArray(loader.exclude)
      ? loader.exclude
      : loader.exclude
      ? [loader.exclude]
      : undefined;
    return (
      include &&
      include.some(mask => filePath.match(mask)) &&
      (!exclude || !exclude.some(mask => filePath.match(mask)))
    );
  });

  if (loaders.length > 1) {
    console.error(`Multiple propsloaders found for file ${filePath}`);
  }
  const propsLoader = loaders.length === 1 ? loaders[0] : undefined;
  const instrumentOptions = propsLoader
    ? {
        ...otherOptions,
        extractPropsFn: require(propsLoader.name)(propsLoader.options),
      }
    : otherOptions;
  let store: StoriesStore;
  switch (type) {
    case 'csf':
      store = await parseCSF(source, filePath, instrumentOptions);
      break;
    case 'mdx':
      store = await parseMDX(source, filePath, instrumentOptions);
      break;
  }
  if (store) {
    const time = new Date();
    const fileName = path.join(__dirname, 'story-store-data.js');
    fs.utimesSync(fileName, time, time);
    addStoriesKind(store, context);
  }
  return source;
};
