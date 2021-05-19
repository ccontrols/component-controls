import path from 'path';
import fs from 'fs';
import * as ts from 'typescript';
import { createHash } from 'crypto';
import { error } from '@component-controls/logger';
import { deepMerge } from './deepMerge';

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
  const ext =
    filePath
      .split('.')
      .pop()
      ?.toLowerCase() || 'js';
  if (['ts', 'tsx'].indexOf(ext) !== -1) {
    const config: ReturnType<typeof ts.readConfigFile> = {
      config: {
        compilerOptions: {
          jsx: ts.JsxEmit.ReactJSX,
          module: ts.ModuleKind.CommonJS,
        },
      },
    };
    const configPath = ts.findConfigFile(
      path.dirname(filePath),
      ts.sys.fileExists,
    );
    if (configPath) {
      config.config = deepMerge(
        config.config,
        ts.readConfigFile(configPath, ts.sys.readFile).config,
      );
      if (config.config.extends) {
        const extendsPath = ts.findConfigFile(
          path.dirname(path.resolve(configPath, config.config.extends)),
          ts.sys.fileExists,
        );
        if (extendsPath) {
          config.config = deepMerge(
            ts.readConfigFile(extendsPath, ts.sys.readFile).config,
            config.config,
          );
        }
      }
    }
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
      config.config.compilerOptions.outDir = tmpFolder;
      // moduleResolution option not working
      delete config.config.compilerOptions['moduleResolution'];
      delete config.config.compilerOptions['noEmit'];
      const program = ts.createProgram(
        [filePath],
        config.config.compilerOptions,
      );
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
        const result = esmRequire(jsFilePath);
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
