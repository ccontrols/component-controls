import fs from 'fs';
import path from 'path';

export const traverseFolder = (
  filePath: string,
  levels: number = 10,
  fileName: string = 'package.json',
): string | null => {
  const files = fs.readdirSync(filePath);
  if (levels === 0) {
    return null;
  }
  const pckg = files.find(file => file === fileName);
  if (pckg) {
    return path.resolve(filePath, pckg);
  }
  return traverseFolder(path.resolve(filePath, '..'), levels - 1, fileName);
};

export const getRepoPath = (
  initialPath = './',
): { repo?: string; filePath?: string } => {
  const packageFileName = traverseFolder(initialPath);
  if (packageFileName) {
    const packageJSON = JSON.parse(fs.readFileSync(packageFileName, 'utf8'));
    const { repository } = packageJSON;
    const url = typeof repository === 'string' ? repository : repository.url;
    const { directory } = repository;
    if (url) {
      const baseName = url
        .split('.')
        .slice(0, -1)
        .join('.');
      return {
        repo: `${baseName}${directory ? `/tree/master/${directory}` : ''}`,
        filePath: packageFileName,
      };
    }
  }
  return {};
};
