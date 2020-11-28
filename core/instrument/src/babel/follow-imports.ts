import * as fs from 'fs';
import * as resolve from 'resolve';
import * as parser from '@babel/parser';
import * as path from 'path';
import { File } from '@babel/types';
import traverse from '@babel/traverse';
import {
  CodeLocation,
  Story,
  getASTSource,
  ImportTypes,
} from '@component-controls/core';
import { extractFunctionParameters } from './extract-function-parameters';
import { sourceLocation } from '../misc/source-location';
import { traverseImports } from './extract-imports';

import {
  traverseExports,
  ExportTypes,
  ExportType,
  EXPORT_ALL,
} from './extract-exports';
import { InstrumentOptions, MDXExportType } from '../types';

export interface FollowImportType {
  exportedAs?: string;
  from?: string;
  filePath?: string;
  originalFilePath?: string;
  importedName?: string;
  loc?: CodeLocation;
  source?: string;
  imported?: string;
  imports?: ImportTypes;
  node?: any;
  path?: any;
}

export const followImports = (
  importName: string,
  filePath: string,
  fileSource?: string,
  options?: InstrumentOptions,
  initialAST?: File,
): FollowImportType | undefined => {
  const { parser: parserOptions, resolver: resolveOptions, components } =
    options || {};
  if (!importName) {
    return undefined;
  }
  const fileName =
    components && components.resolveFile
      ? components.resolveFile(importName, filePath)
      : filePath;
  if (!fileName) {
    return undefined;
  }
  const source =
    fileName === filePath && fileSource
      ? fileSource
      : fs.readFileSync(fileName, 'utf8');
  const ast =
    fileName === filePath && initialAST
      ? initialAST
      : parser.parse(source, parserOptions);
  const baseImportedName = importName.split('.')[0];

  const imports: ImportTypes = {};
  traverse(ast, traverseImports(imports));
  const exports: ExportTypes = {
    named: {},
  };
  traverse(ast, traverseExports(exports));
  const folderName = path.dirname(fileName);
  const findExport =
    baseImportedName === 'default' || baseImportedName === 'namespace'
      ? exports.default
      : exports.named[baseImportedName];
  if (findExport !== undefined) {
    if (!findExport.from) {
      const result: FollowImportType = {
        filePath: fileName,
        originalFilePath: filePath,
        exportedAs: findExport.name,
      };
      result.loc = findExport.loc;
      result.source = source ? source : undefined;
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
        undefined,
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
          undefined,
          options,
        );
      }
      return { ...foundInExportAll, from: e.from };
    });
  if (foundInExportAll) {
    return foundInExportAll;
  }

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
        undefined,
        options,
      );
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
        from: findImport.from,
      };
    } catch (e) {
      //non-existing file
      return {
        exportedAs: findImport.importedName,
        importedName: findImport.importedName,
        from: findImport.from,
      };
    }
  }
  return {
    originalFilePath: filePath,
  };
};

export const followStoryImport = (
  storyName: string,
  importedName: string,
  filePath: string,
  source: string,
  options: InstrumentOptions,
  ast: File,
  exports?: MDXExportType,
): Story | undefined => {
  const follow = followImports(importedName, filePath, source, options, ast);
  if (follow) {
    const story: Story = { name: storyName, id: storyName };
    if (follow.loc) {
      const loc = sourceLocation(follow.loc);
      story.loc = loc;
      story.source = getASTSource(follow.source, loc);
      traverse(
        follow.node,
        extractFunctionParameters(story, exports),
        follow.path.scope,
      );
    }
    return story;
  }
  return undefined;
};
