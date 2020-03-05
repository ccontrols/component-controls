import * as fs from 'fs';
import * as resolve from 'resolve';
import * as parser from '@babel/parser';
import * as path from 'path';
import { File } from '@babel/types';
import traverse from '@babel/traverse';
import { CodeLocation } from '@component-controls/specification';
import { ImportTypes, traverseImports } from './extract-imports';
import {
  traverseExports,
  ExportTypes,
  ExportType,
  EXPORT_ALL,
} from './extract-exports';

export interface FollowImportType {
  exportedAs: string;
  from: string;
  filePath?: string;
  loc?: CodeLocation;
  source?: string;
}

export const followImports = (
  importName: string,
  filePath: string,
  parserOptions?: parser.ParserOptions,
  resolveOptions?: resolve.SyncOpts,
  initialAST?: File,
): FollowImportType | undefined => {
  const source = fs.readFileSync(filePath, 'utf8');
  const ast = initialAST || parser.parse(source, parserOptions);

  const baseImportedName = importName.split('.')[0];

  const exports: ExportTypes = {
    named: {},
  };
  traverse(ast, traverseExports(exports));
  const folderName = path.dirname(filePath);
  const findExport =
    baseImportedName === 'default' || baseImportedName === 'namespace'
      ? exports.default
      : exports.named[baseImportedName];
  if (findExport !== undefined) {
    if (!findExport.from) {
      return {
        filePath,
        exportedAs: findExport.name,
        loc: findExport.loc,
        from: '',
        source,
      };
    } else {
      const resolvedFilePath = resolve.sync(findExport.from, {
        ...resolveOptions,
        basedir: folderName,
      });
      const imported = followImports(
        findExport.internalName,
        resolvedFilePath,
        parserOptions,
        resolveOptions,
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
          parserOptions,
          resolveOptions,
        );
      }
      return { ...foundInExportAll, from: e.from };
    });
  if (foundInExportAll) {
    return foundInExportAll;
  }
  const imports: ImportTypes = {};
  traverse(ast, traverseImports(imports));
  const findImport = imports[baseImportedName];
  if (findImport) {
    try {
      const resolvedFilePath = resolve.sync(findImport.from, {
        ...resolveOptions,
        basedir: folderName,
      });
      const imported = followImports(
        findImport.importedName,
        resolvedFilePath,
        parserOptions,
        resolveOptions,
      );
      return imported ? { ...imported, from: findImport.from } : undefined;
    } catch (e) {
      //non-exxsiting file
      return { exportedAs: findImport.importedName, from: findImport.from };
    }
  }
  return undefined;
};
