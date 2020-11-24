import { ParserOptions, withCompilerOptions } from 'react-docgen-typescript';
import path from 'path';
import { findUpFile } from '@component-controls/core/node-utils';
import {
  ScriptTarget,
  ModuleKind,
  JsxEmit,
  readConfigFile,
  sys,
  parseJsonConfigFileContent,
} from 'typescript';
import { computeComponentName } from './defaults';
import { RectDocgenTypescriptOptions } from './types';

export const extractDocgenTypescriptInfo = (
  fileName: string,
  componentName?: string,
  reactDocGenTypescriptOptions?: RectDocgenTypescriptOptions,
): any => {
  const {
    transformProps = (tables: any[]) => {
      const byName =
        componentName &&
        tables.find(table => table.displayName === componentName);
      return byName ? byName : tables[0];
    },
    propFilter = {
      skipPropsWithoutDoc: false,
    },
    componentNameResolver = computeComponentName,
    shouldExtractLiteralValuesFromEnum = true,
    shouldRemoveUndefinedFromOptional = true,
    savePropValueAsString,
  } = reactDocGenTypescriptOptions || {};
  const parserOptions: ParserOptions = {
    propFilter,
    componentNameResolver,
    shouldExtractLiteralValuesFromEnum,
    shouldRemoveUndefinedFromOptional,
    savePropValueAsString,
  };

  let compilerConfig = {
    jsx: JsxEmit.React,
    module: ModuleKind.CommonJS,
    target: ScriptTarget.Latest,
  };
  const tsConfigFile = findUpFile(path.dirname(fileName), 'tsconfig.json');
  if (tsConfigFile) {
    try {
      const configContent = readConfigFile(tsConfigFile, sys.readFile);
      const config = parseJsonConfigFileContent(
        configContent.config,
        sys,
        path.dirname(tsConfigFile),
        {},
        tsConfigFile,
      );
      compilerConfig = {
        ...compilerConfig,
        ...config.options,
      };
    } catch (e) {}
  }
  const parser = withCompilerOptions(compilerConfig, parserOptions);
  try {
    const docgenInfo = parser.parse(fileName);
    if (Array.isArray(docgenInfo) && docgenInfo.length > 0) {
      return transformProps(docgenInfo);
    }
  } catch (e) {
    console.error(
      `\nreact-docgen-typescript unable to parse ${componentName}: ${fileName}`,
    );
    return undefined;
  }
};
