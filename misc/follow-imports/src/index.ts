import * as resolve from 'resolve';
import * as path from 'path';
import { ParserOptions } from '@babel/parser';
import { SourceLocation } from '@babel/types';
import { parseFile } from './ast_store';
import { extractImports } from './extract-imports';
import { extractExports } from './extract-exports';
import { sourceLocation } from './source-location';
import {
  defaultParserOptions,
  defaultResolveOptions,
  EXPORT_ALL,
  EXPORT_DEFAULT,
  ExportType,
  IMPORT_NAMESPACE,
  ImportTypes,
} from './consts';
import { getASTSource } from './source';
export {
  parseFile,
  extractImports,
  extractExports,
  sourceLocation,
  getASTSource,
};
export * from './consts';
export interface FollowImportType {
  exportedAs?: string;
  internalName?: string;
  from?: string;
  filePath?: string;
  importedName?: string;
  loc?: SourceLocation;
  source?: string;
  imported?: string;
  imports?: ImportTypes;
  node?: any;
  path?: any;
}

export const followImports = (
  importName: string,
  filePath: string,
  options?: {
    parser?: ParserOptions;
    resolver?: resolve.SyncOpts;
    /**
     * Callback function to resolve the source file name of a component.
     * Return false if this file should not be processed.
     */
    resolveFile?: (importName: string, filePath: string) => string | undefined;
  },
): FollowImportType | undefined => {
  const {
    parser: parserOptions = defaultParserOptions,
    resolver: resolveOptions = defaultResolveOptions,
    resolveFile,
  } = options || {};
  if (!importName) {
    return undefined;
  }
  const fileName = resolveFile ? resolveFile(importName, filePath) : filePath;
  if (!fileName) {
    return undefined;
  }
  const { source } = parseFile(fileName, parserOptions);
  const importNames = importName.split('.');
  const baseImportedName = importNames[0];
  const suffixImportedName =
    importNames.length > 1 ? importNames.pop() : undefined;
  const imports = extractImports(fileName, parserOptions);
  const exports = extractExports(fileName, parserOptions);
  const folderName = path.dirname(fileName);
  const findImport = imports[baseImportedName];

  if (findImport) {
    try {
      const resolvedFilePath = resolve.sync(findImport.from, {
        ...resolveOptions,
        basedir: folderName,
      });
      const importedName =
        findImport.importedName !== IMPORT_NAMESPACE
          ? `${findImport.importedName}${
              findImport.importedName === EXPORT_DEFAULT && suffixImportedName
                ? `.${suffixImportedName}`
                : ''
            }`
          : suffixImportedName || EXPORT_DEFAULT;
      let imported = followImports(importedName, resolvedFilePath, options);
      if (findImport.typesFile && !imported?.exportedAs) {
        imported = followImports(importedName, findImport.typesFile, options);
      }
      if (imported) {
        return {
          ...imported,
          importedName: findImport.importedName,
          from: findImport.from,
        };
      }
      return {
        exportedAs: findImport.importedName,
        importedName: findImport.importedName,
        internalName: findImport.importedName,
        from: findImport.from,
      };
    } catch (e) {
      //non-existing file
      return {
        exportedAs: findImport.importedName,
        importedName: findImport.importedName,
        internalName: findImport.importedName,
        from: findImport.from,
      };
    }
  }
  const findExport =
    baseImportedName === EXPORT_DEFAULT || baseImportedName === IMPORT_NAMESPACE
      ? exports.default[suffixImportedName || EXPORT_DEFAULT]
      : exports.named[baseImportedName];
  if (findExport !== undefined) {
    if (!findExport.from) {
      const result: FollowImportType = {
        filePath: fileName,
        exportedAs: findExport.name,
        internalName: findExport.internalName,
      };
      result.loc = findExport.loc;
      result.source = source ? getASTSource(source, findExport.loc) : undefined;
      result.node = findExport.node;
      result.path = findExport.path;
      result.imports = imports;
      return result;
    } else {
      const resolvedFilePath = resolve.sync(findExport.from, {
        ...resolveOptions,
        basedir: folderName,
      });
      const imported = followImports(
        findExport.internalName,
        resolvedFilePath,
        options,
      );
      return imported ? { ...imported, from: findExport.from } : undefined;
    }
  }
  const allExports: ExportType[] = Object.keys(exports.named).reduce(
    (acc: ExportType[], key: string) => [...acc, exports.named[key]],
    [],
  );
  let foundInExportAll: FollowImportType | undefined;
  allExports
    .filter(e => e.internalName === EXPORT_ALL && e.from)
    .some(e => {
      if (e.from) {
        const resolvedFilePath = resolve.sync(e.from, {
          ...resolveOptions,
          basedir: folderName,
        });
        foundInExportAll = followImports(
          baseImportedName,
          resolvedFilePath,
          options,
        );
      }
      return { ...foundInExportAll, from: e.from };
    });
  if (foundInExportAll) {
    return foundInExportAll;
  }

  return {
    filePath: fileName,
  };
};
