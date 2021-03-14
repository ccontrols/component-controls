import fs from 'fs';
import path from 'path';
import { BuildProps, defBundleName, defCssFileName } from './build';
export * from './webpack-interfaces';
export const findUpFile = (
  filePath: string,
  fileName: string | string[],
  levels: number = 10,
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

export const defaultDistFolder = 'dist';

export const getDistName = (options: BuildProps): string => {
  const dist = path.join(
    process.cwd(),
    options.distFolder || defaultDistFolder,
  );
  return dist;
};

export const getBundleName = (options: BuildProps): string =>
  path.join(getDistName(options), options.bundleName || defBundleName);

export const getCSSBundleName = (options: BuildProps): string =>
  path.join(getDistName(options), options.cssFileName || defCssFileName);
