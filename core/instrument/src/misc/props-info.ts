import {
  ComponentInfo,
  PropsInfoExtractorFunction,
} from '@component-controls/core';
import { PropsLoaderConfig } from '../types';
import { CachedFileResource } from './chached-file';

export const getComponentProps = async (
  options: PropsLoaderConfig[],
  filePath: string,
  componentName?: string,
  source?: string,
): Promise<ComponentInfo | undefined> => {
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
  const version = '1.05';
  const cached = new CachedFileResource<ComponentInfo>(
    'props-info',
    `x${filePath}-${componentName}-${
      propsLoaderName ? propsLoaderName.name : ''
    }-${version}`,
    filePath,
  );

  let result: ComponentInfo | undefined = cached.get();
  if (result) {
    // already in cache and file has not changed
    return result;
  }

  if (propsLoaderName) {
    const { run } = require(propsLoaderName.name);
    if (run) {
      const propsLoader: PropsInfoExtractorFunction = run(
        propsLoaderName.options,
      );
      result = await propsLoader(filePath, componentName, source);
    }
  }
  // save to cache
  cached.set(result);
  return result;
};
