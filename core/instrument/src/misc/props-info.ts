import reactPlugin from '@structured-types/react-plugin';
import propTypesPlugin from '@structured-types/prop-types-plugin';
import { DocsOptions, parseFiles } from '@structured-types/api';
import { ComponentInfo } from '@component-controls/core';
import { CachedFileResource } from './chached-file';

export const getComponentProps = async (
  filePath: string,
  componentName?: string,
  config?: DocsOptions,
): Promise<ComponentInfo | undefined> => {
  const version = '1.17';
  const cached = new CachedFileResource<ComponentInfo>(
    'props-info',
    `x${filePath}-${componentName}-${version}`,
    filePath,
  );

  let result: ComponentInfo | undefined = cached.get();
  if (result) {
    // already in cache and file has not changed
    return result;
  }
  result = parseFiles([filePath], {
    collectSourceInfo: true,
    collectHelpers: false,
    plugins: [propTypesPlugin, reactPlugin],
    extract: componentName ? [componentName] : undefined,
    ...config,
  }) as unknown as ComponentInfo;
  // save to cache
  cached.set(result);
  return result;
};
