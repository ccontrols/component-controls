import path from 'path';
import fs from 'fs';
import {
  dynamicRequire,
  relativeImport,
} from '@component-controls/core/node-utils';
import { DocumentData, Document } from '@component-controls/core';
import { CachedFileResource } from './chached-file';

export const getDataFile = (filePath: string): string => {
  const parts = filePath.split('.');
  parts.splice(
    parts.length - parts.length <= 2 ? 1 : 2,
    parts.length <= 2 ? 0 : 1,
    'data',
  );
  const extention = parts[parts.length - 1];
  if (extention.length === 3) {
    parts[parts.length - 1] = extention.slice(0, -1);
  }
  return parts.join('.');
};

export const assignDocumentData = (doc: Document, filePath: string): void => {
  const dataFilePath = doc.testData
    ? path.resolve(path.dirname(filePath), doc.testData)
    : getDataFile(filePath);

  if (fs.existsSync(dataFilePath)) {
    const cached = new CachedFileResource<DocumentData>(
      'data-driven',
      `v1`,
      filePath,
    );
    let result: DocumentData | undefined = cached.get();
    if (result) {
      doc.data = result;
      doc.testData =
        doc.testData || relativeImport(path.dirname(filePath), dataFilePath);
      return;
    }
    //load existing data file
    const loaded = dynamicRequire(dataFilePath);
    result = loaded.default || loaded;
    cached.set(result);
    doc.data = result;
    doc.testData = doc.testData || path.relative(filePath, dataFilePath);
  }
};
