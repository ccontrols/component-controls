import fs from 'fs';
import path from 'path';
import { BuildProps, defBundleName, defCssFileName } from './build';
export * from './webpack-interfaces';
export const findUpFile = (
  filePath: string,
  fileName: string | string[],
  levels = 10,
): string | null => {
  const files = fs.readdirSync(filePath);
  if (levels === 0) {
    return null;
  }
  const arFiles: string[] = Array.isArray(fileName) ? fileName : [fileName];
  const pckg = files.find(file => arFiles.includes(file));
  if (pckg) {
    return path.resolve(filePath, pckg);
  }
  return findUpFile(path.resolve(filePath, '..'), fileName, levels - 1);
};

export const defaultDistFolder = 'public';

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
