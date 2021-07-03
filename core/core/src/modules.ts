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
      config.emitDeclarationOnly = false;
      config.noEmit = false;
      // moduleResolution option not working
      delete config['moduleResolution'];
      // force emit

      // console.log(JSON.stringify(config, null, 2));
      const servicesHost: ts.LanguageServiceHost = {
        getScriptFileNames: () => [filePath],
        getScriptVersion: () => '0',
        getScriptSnapshot: fileName => {
          if (!fs.existsSync(fileName)) {
            return undefined;
          }

          return ts.ScriptSnapshot.fromString(
            fs.readFileSync(fileName).toString(),
          );
        },
        getCurrentDirectory: () => process.cwd(),
        getCompilationSettings: () => config,
        getDefaultLibFileName: options => ts.getDefaultLibFilePath(options),
        fileExists: ts.sys.fileExists,
        readFile: ts.sys.readFile,
        readDirectory: ts.sys.readDirectory,
        directoryExists: ts.sys.directoryExists,
        getDirectories: ts.sys.getDirectories,
      };

      // Create the language service files
      const services = ts.createLanguageService(
        servicesHost,
        ts.createDocumentRegistry(),
      );
      const output = services.getEmitOutput(filePath);
      if (output.emitSkipped) {
        throw new Error(`typescript.emit skipped (${filePath})`);
      }
      const jsFile = output.outputFiles.find(
        file => path.extname(file.name) === '.js',
      );
      if (!jsFile) {
        throw new Error(`Typescript emit error (${filePath})`);
      }
      const nakedFile = nakedFileName(filePath);
      const jsFilePath = path.resolve(tmpFolder, nakedFile + '.js');

      ts.sys.writeFile(jsFilePath, jsFile.text);
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
