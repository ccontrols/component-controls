import fs from 'fs';
import path from 'path';

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
