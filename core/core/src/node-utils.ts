import path from 'path';
export { getASTSource } from './source';
import { BuildProps, defBundleName, defCssFileName } from './build';
export * from './webpack-interfaces';
export * from './modules';
export * from './find-up';

export const defaultDistFolder = 'public';

export const defaultConfigFolder = '.config';

export const getDistFolder = (options: BuildProps): string => {
  const distFolder = options.distFolder || defaultDistFolder;
  return path.isAbsolute(distFolder)
    ? distFolder
    : path.join(process.cwd(), distFolder);
};

export const getBundleName = (options: BuildProps): string =>
  path.join(getDistFolder(options), options.bundleName || defBundleName);

export const getCSSBundleName = (options: BuildProps): string =>
  options.cssFileName || defCssFileName;

export const getCSSFilePath = (options: BuildProps): string =>
  path.join(getDistFolder(options), options.cssFileName || defCssFileName);

export const resolveSnapshotFile = (testFilePath: string): string =>
  path.resolve(
    path.dirname(testFilePath),
    '__snapshots__',
    `${path.basename(testFilePath)}.snap`,
  );

export const relativeImport = (from: string, to: string): string => {
  const relative = path.relative(from, to);
  return relative.startsWith('.') ? relative : `./${relative}`;
};
