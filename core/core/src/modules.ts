import path from 'path';
import fs from 'fs';
import * as ts from 'typescript';
import { createHash } from 'crypto';
import { error } from '@component-controls/logger';
import { getTypescriptConfig } from '@component-controls/typescript-config';

/**
 * returns the basename stripped of the extension
 * @param filePath full file path
 */
export const nakedFileName = (filePath: string): string => {
  const baseName = path.basename(filePath);
  return baseName.substr(0, baseName.lastIndexOf('.'));
};

export const esmRequire = (filePath: string): any => {
  delete require.cache[filePath];
  const result = require('esm')(module)(filePath);
  if (
    !result ||
    (typeof result === 'object' && Object.keys(result).length === 0) ||
    (result.default &&
      typeof result.default === 'object' &&
      Object.keys(result.default).length === 0)
  ) {
    return require(filePath);
  }
  return result;
};
export const dynamicRequire = (filePath: string): any => {
  const config = getTypescriptConfig(filePath, {
    jsx: ts.JsxEmit.ReactJSX,
  });
  if (config) {
    const tmpFolder = path.resolve(
      path.dirname(filePath),
      createHash('md5')
        .update(filePath)
        .digest('hex'),
    );
    if (!fs.existsSync(tmpFolder)) {
      fs.mkdirSync(tmpFolder);
    }
    try {
      config.outDir = tmpFolder;
      config.module = ts.ModuleKind.CommonJS;
      // moduleResolution option not working
      delete config['moduleResolution'];
      delete config['noEmit'];
      const program = ts.createProgram([filePath], config);
      const nakedFile = nakedFileName(filePath);
      // by default output file name same but with .js extension
      let jsFilePath = path.resolve(tmpFolder, nakedFile + '.js');
      program.emit(undefined, (fileName: string, data: string) => {
        if (nakedFileName(fileName) === nakedFile) {
          jsFilePath = fileName;
        }
        ts.sys.writeFile(fileName, data);
      });
      try {
        delete require.cache[jsFilePath];
        //we are forcing module: commonjs
        const result = require(jsFilePath);
        return result;
      } catch (e) {
        error(filePath, e);
        return esmRequire(filePath);
      }
    } finally {
      fs.rmdirSync(tmpFolder, { recursive: true });
      // tmpDir.removeCallback();
    }
  }

  return esmRequire(filePath);
};
