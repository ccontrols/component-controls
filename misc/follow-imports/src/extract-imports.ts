import * as parser from '@babel/parser';
import * as ts from 'typescript';
import * as fs from 'fs';
import {
  ImportDeclaration,
  Identifier,
  VariableDeclarator,
} from '@babel/types';
import traverse, { TraverseOptions, NodePath } from '@babel/traverse';
import { getTypescriptConfig } from '@structured-types/typescript-config';
import { parseFile, CacheProps } from './ast_store';
import {
  ImportTypes,
  EXPORT_DEFAULT,
  IMPORT_NAMESPACE,
  defaultParserOptions,
} from './consts';

export const extractImports = (
  fileName: string,
  options: parser.ParserOptions = defaultParserOptions,
): ImportTypes => {
  const cache = parseFile(fileName, options);
  if (!cache.imports) {
    cache.imports = {};
    const tsConfig = getTypescriptConfig(fileName);
    if (tsConfig) {
      const program = ts.createProgram([fileName], tsConfig);
      const file: ts.SourceFile | undefined = program.getSourceFile(fileName);
      if ((file as any)?.resolvedModules) {
        const aliases: typeof cache['importAliases'] = {};
        (file as any).resolvedModules.forEach(
          (value: { resolvedFileName: string }, key: string) => {
            if (value && fs.existsSync(value.resolvedFileName)) {
              aliases[key] = value.resolvedFileName;
            }
          },
        );
        cache.importAliases = aliases;
      }
    }
    traverse(cache.ast, traverseImports(cache));
  }
  return cache.imports;
};
export const traverseImports = (cache: CacheProps): TraverseOptions => {
  const results = cache.imports as ImportTypes;
  return {
    ImportDeclaration: (path: NodePath<ImportDeclaration>) => {
      const node = path.node;
      node.specifiers.forEach((specifier: any) => {
        let importedName;
        switch (specifier.type) {
          case 'ImportDefaultSpecifier':
            importedName = EXPORT_DEFAULT;
            break;

          case 'ImportNamespaceSpecifier':
            importedName = IMPORT_NAMESPACE;
            break;

          default:
            importedName = specifier.imported
              ? specifier.imported.name
              : specifier.local.name;
        }
        results[specifier.local.name] = {
          name: specifier.local.name,
          importedName,
          from: node.source.value,
          typesFile: cache.importAliases?.[node.source.value],
        };
      });
    },
    VariableDeclarator: (path: NodePath<VariableDeclarator>) => {
      const node = path.node;
      if (
        node.init &&
        node.init.type === 'CallExpression' &&
        (node.init.callee as Identifier).name === 'require'
      ) {
        node.init.arguments.forEach(arg => {
          if (arg.type === 'StringLiteral') {
            if (node.id.type === 'ObjectPattern') {
              node.id.properties.forEach(prop => {
                if (prop.type === 'ObjectProperty') {
                  const name = (prop.key as Identifier).name;
                  results[name] = {
                    name,
                    importedName: (prop.value as Identifier).name,
                    from: arg.value,
                    typesFile: cache.importAliases?.[arg.value],
                  };
                }
              });
            } else {
              const name = (node.id as Identifier).name;
              results[name] = {
                name,
                importedName: EXPORT_DEFAULT,
                from: arg.value,
                typesFile: cache.importAliases?.[arg.value],
              };
            }
          }
        });
      }
    },
  };
};
