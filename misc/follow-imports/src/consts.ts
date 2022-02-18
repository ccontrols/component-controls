import { ParserOptions } from '@babel/parser';
import { SyncOpts as ResolveOptions } from 'resolve';

export interface SourcePosition {
  col: number;
  line: number;
}
export interface SourceLocation {
  start: SourcePosition;
  end: SourcePosition;
}

export const defaultParserOptions: ParserOptions = {
  sourceType: 'module',
  plugins: [
    'jsx',
    'typescript',
    'classProperties',
    'dynamicImport',
    'objectRestSpread',
  ],
};

export const defaultResolveOptions: ResolveOptions = {
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.mjs', '.es', '.es6'],
};

export interface ExportType {
  name: string;
  internalName: string;
  loc?: SourceLocation;
  /**
   * in case of export { Button } from './button-named-export';
   * specifies the import from statememnt
   */
  from?: string;
  node?: any;
  path?: any;
}
export const EXPORT_ALL = '*';
export const EXPORT_DEFAULT = 'default';

export const IMPORT_NAMESPACE = 'namespace';

export interface NamedExportTypes {
  [key: string]: ExportType;
}
export interface ExportTypes {
  default: NamedExportTypes;
  named: NamedExportTypes;
}

export interface ImportType {
  /**
   * component name
   */
  name: string;
  /**
   * importedName - the original named import that was aliased
   */
  importedName: typeof EXPORT_DEFAULT | typeof IMPORT_NAMESPACE | string;
  /**
   * imported from
   */
  from: string;

  /**
   * imported from alias file name ie '/component-controls/core/store/dist/index.d.ts'
   */
  typesFile?: string;

  /**
   * key into components table
   */
  componentKey?: string;
}

export interface ImportTypes {
  [key: string]: ImportType;
}
