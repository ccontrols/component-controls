import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { createHash } from 'crypto';
import findCacheDir from 'find-cache-dir';

export class CachedFileResource<T> {
  private folderKey: string;
  private fileKey: string;
  private filePath: string;

  constructor(folderKey: string, fileKey: string, filePath: string) {
    this.folderKey = folderKey;
    this.fileKey = fileKey;
    this.filePath = filePath;
  }

  private getCacheFolder = () => {
    const folderName =
      findCacheDir({ name: `component-controls-${this.folderKey}` }) ||
      os.tmpdir();
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName, { recursive: true });
    }
    return folderName;
  };

  private getCachedFile = () => {
    const cachedFolder = this.getCacheFolder();
    return path.join(
      cachedFolder,
      createHash('md5')
        .update(this.fileKey)
        .digest('hex'),
    );
  };
  get = (): T | undefined => {
    const cachedFileName = this.getCachedFile();
    if (fs.existsSync(cachedFileName)) {
      const cacheStats = fs.statSync(cachedFileName);
      const fileStats = fs.statSync(this.filePath);
      if (cacheStats.mtime.getTime() >= fileStats.mtime.getTime()) {
        const fileData = fs.readFileSync(cachedFileName, 'utf8');
        const json = JSON.parse(fileData);
        return Object.keys(json).length ? json : undefined;
      }
    }
    return undefined;
  };

  set = (data: T | undefined): void => {
    const cachedFileName = this.getCachedFile();
    fs.writeFileSync(cachedFileName, JSON.stringify(data || {}));
  };
}
