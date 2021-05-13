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
  if (parts.length > 2) {
    parts.splice(1, 1, 'data');
  } else {
    parts.splice(1, 0, 'data');
  }
  if (parts.length <= 2) {
    parts.push('js');
  } else if (parts[parts.length - 1].length > 2) {
    parts[parts.length - 1] = parts[parts.length - 1].slice(0, -1);
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
      dataFilePath,
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
    doc.testData =
      doc.testData || relativeImport(path.dirname(filePath), dataFilePath);
  }
};
