import reactPlugin from '@structured-types/react-plugin';
import propTypesPlugin from '@structured-types/prop-types-plugin';
import { DocsOptions, parseFiles } from '@structured-types/api';
import { ComponentInfo } from '@component-controls/core';
import { ImportType } from '@component-controls/follow-imports';
import { CachedFileResource } from './chached-file';
import { getModuleImports, getComponentImports } from './extract-imports';
export const getComponentProps = (
  filePath: string,
  componentName: string,
  config?: DocsOptions,
): ComponentInfo => {
  const version = '1.17';
  const cached = new CachedFileResource<ComponentInfo>(
    'props-info',
    `x${filePath}-${componentName}-${version}`,
    filePath,
  );

  let result: ComponentInfo | undefined = cached.get();
  if (result && false) {
    // already in cache and file has not changed
    return result as ComponentInfo;
  }
  const imports: ImportType[] = [];
  const props = parseFiles([filePath], {
    collectSourceInfo: true,
    collectHelpers: true,
    plugins: [propTypesPlugin, reactPlugin],
    extract: [componentName],
    moduleCallback: getModuleImports(imports),
    ...config,
  });
  result = props[componentName] || { name: componentName };
  const { externalDependencies, localDependencies } =
    getComponentImports(imports);
  result.externalDependencies = externalDependencies;
  result.localDependencies = localDependencies;
  // save to cache
  cached.set(result);
  return result;
};
