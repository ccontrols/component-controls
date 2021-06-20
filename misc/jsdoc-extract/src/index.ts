import { getTypescriptConfig } from '@component-controls/typescript-config';
import path from 'path';
import fs from 'fs';
import { createHash } from 'crypto';
import * as ts from 'typescript';
import { anaylizeFiles } from './ts-walk';
import { tsDefaults, DocsOptions, PropTypes } from './utils';

export const parseFiles = (
  filePaths: string[],
  options: DocsOptions = {},
  names?: string[],
): PropTypes => {
  if (!filePaths.length) {
    throw new Error('You need to supply at least one file');
  }
  options.tsOptions =
    getTypescriptConfig(filePaths[0], options.tsOptions) || tsDefaults;
  const results = anaylizeFiles(filePaths, options, names);
  return results;
};

export const parseCode = (
  code: string,
  options?: DocsOptions,
  names?: string[],
): PropTypes => {
  const tmpFolder = path.resolve(__dirname, '..', 'tmp');
  if (!fs.existsSync(tmpFolder)) {
    fs.mkdirSync(tmpFolder);
  }
  let result: PropTypes = {};
  try {
    const name = createHash('md5')
      .update(Math.random().toString())
      .digest('hex');

    const fileName = path.resolve(tmpFolder, name + '.ts');
    ts.sys.writeFile(fileName, code);

    try {
      result = parseFiles([fileName], options, names);
    } finally {
      if (ts.sys.deleteFile) {
        ts.sys.deleteFile(fileName);
      }
    }
  } finally {
    fs.rmdirSync(tmpFolder, { recursive: true });
  }
  return result;
};
