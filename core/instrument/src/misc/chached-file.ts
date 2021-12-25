import fs from 'fs';
import path from 'path';
import os from 'os';
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
      createHash('md5').update(this.fileKey).digest('hex'),
    );
  };

  getKey = (): string => {
    const version = '2';
    const files = Array.isArray(this.filePath)
      ? this.filePath
      : [this.filePath];
    return files
      .reduce((acc, f) => {
        const mTime = fs.statSync(f).mtime.getTime().toString();
        return acc.update(f).update(mTime);
      }, createHash('md5').update(version))
      .digest('hex');
  };
  /**
   *
   * @returns if the data is in the cache or undefined
   */
  get = (): T | undefined => {
    const cachedFileName = this.getCachedFile();
    if (fs.existsSync(cachedFileName)) {
      const fileData = fs.readFileSync(cachedFileName, 'utf8');
      const json = JSON.parse(fileData);
      if (json.hasOwnProperty('key') && json.hasOwnProperty('data')) {
        if (json.key === this.getKey()) {
          return json['data'];
        }
        return undefined;
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
    const json = {
      key: this.getKey(),
      data,
    };
    fs.writeFileSync(cachedFileName, JSON.stringify(json));
  };
}
