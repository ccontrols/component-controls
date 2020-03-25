import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { createHash } from 'crypto';
import findCacheDir from 'find-cache-dir';
import {
  ComponentInfo,
  PropsInfoExtractorFunction,
} from '@component-controls/specification';
import { PropsLoaderConfig } from '../types';

export const propsInfo = async (
  options: PropsLoaderConfig[],
  filePath: string,
  componentName?: string,
  source?: string,
): Promise<ComponentInfo | undefined> => {
  const cacheFolder =
    findCacheDir({ name: 'component-controls-props-info' }) || os.tmpdir();

  //create cache folder if it doesnt exist
  if (!fs.existsSync(cacheFolder)) {
    fs.mkdirSync(cacheFolder, { recursive: true });
  }
  const cachedFileName = path.join(
    cacheFolder,
    createHash('md5')
      .update(`${filePath}-${componentName}`)
      .digest('hex'),
  );
  if (fs.existsSync(cachedFileName)) {
    const cacheStats = fs.statSync(cachedFileName);
    const fileStats = fs.statSync(filePath);
    if (cacheStats.mtime.getTime() >= fileStats.mtime.getTime()) {
      const fileData = fs.readFileSync(cachedFileName, 'utf8');
      const json = JSON.parse(fileData);
      return Object.keys(json).length ? json : undefined;
    }
  }
  let result: ComponentInfo | undefined = undefined;
  const loaders = options.filter(loader => {
    const include = Array.isArray(loader.test)
      ? loader.test
      : loader.test
      ? [loader.test]
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
  const propsLoaderName = loaders.length === 1 ? loaders[0] : undefined;
  if (propsLoaderName) {
    const { run } = require(propsLoaderName.name);
    if (run) {
      const propsLoader: PropsInfoExtractorFunction = run(
        propsLoaderName.options,
      );
      result = await propsLoader(filePath, componentName, source);
    }
  }
  fs.writeFileSync(cachedFileName, JSON.stringify(result || {}));
  return result;
};
