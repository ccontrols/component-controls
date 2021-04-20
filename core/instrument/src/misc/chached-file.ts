import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { createHash } from 'crypto';
import findCacheDir from 'find-cache-dir';

export class CachedFileResource<T> {
  private folderKey: string;
  private fileKey: string;
  private filePath: string | string[];

  /**
   *
   * @param folderKey folder(category) name
   * @param fileKey unique (hash) key for the file
   * @param filePath full file path and name for the cached file
   */
  constructor(folderKey: string, fileKey: string, filePath: string | string[]) {
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
  /**
   *
   * @returns if the data is in the cache or undefined
   */
  get = (): T | undefined => {
    const cachedFileName = this.getCachedFile();
    if (fs.existsSync(cachedFileName)) {
      const cacheModified = fs.statSync(cachedFileName).mtime.getTime();
      const fileModified = Array.isArray(this.filePath)
        ? this.filePath.reduce((m, f) => {
            return Math.max(m, fs.statSync(f).mtime.getTime());
          }, 0)
        : fs.statSync(this.filePath).mtime.getTime();
      if (cacheModified >= fileModified) {
        const fileData = fs.readFileSync(cachedFileName, 'utf8');
        const json = JSON.parse(fileData);
        return Object.keys(json).length ? json : undefined;
      }
    }
    return undefined;
  };

  /**
   *
   * @param data the data to be saved into the cache
   */
  set = (data: T | undefined): void => {
    const cachedFileName = this.getCachedFile();
    fs.writeFileSync(cachedFileName, JSON.stringify(data || {}));
  };
}
