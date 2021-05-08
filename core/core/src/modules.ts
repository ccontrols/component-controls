import path from 'path';
import fs from 'fs';
import * as ts from 'typescript';
import { dirSync } from 'tmp';
import { deepMerge } from './deepMerge';

/**
 * returns the basename stripped of the extension
 * @param filePath full file path
 */
export const nakedFileName = (filePath: string): string => {
  const baseName = path.basename(filePath);
  return baseName.substr(0, baseName.lastIndexOf('.'));
};

const esmRequire = (filePath: string): any => {
  const result = require('esm')(module)(filePath);
  if (
    !result ||
    (typeof result === 'object' && Object.keys(result).length === 0)
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
          module: ts.ModuleKind.ES2015,
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
    }
    const tmpDir = dirSync();
    config.config.compilerOptions.outDir = tmpDir.name;
    try {
      const program = ts.createProgram(
        [filePath],
        config.config.compilerOptions,
      );
      const nakedFile = nakedFileName(filePath);
      // by default output file name same but with .js extension
      let jsFilePath = path.resolve(tmpDir.name, nakedFile + '.js');
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
        throw new Error(`error compiling file ${filePath}`);
      }
    } finally {
      fs.rmdirSync(tmpDir.name, { recursive: true });
      // tmpDir.removeCallback();
    }
  }

  return esmRequire(filePath);
};
