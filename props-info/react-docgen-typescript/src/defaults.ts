import * as ts from 'typescript';
import * as path from 'path';

export const getDefaultExportForFile = (source: ts.SourceFile): string => {
  const name = path.basename(source.fileName, path.extname(source.fileName));
  const filename =
    name === 'index' ? path.basename(path.dirname(source.fileName)) : name;

  // JS identifiers must starts with a letter, and contain letters and/or numbers
  // So, you could not take filename as is
  const identifier = filename
    .replace(/^[^A-Z]*/gi, '')
    .replace(/[^A-Z0-9]*/gi, '');

  return identifier.length ? identifier : 'DefaultName';
};

const exoticNames = [
  'default',
  '__function',
  'Stateless',
  'StyledComponentClass',
  'StyledComponent',
  'FunctionComponent',
  'StatelessComponent',
  'ForwardRefExoticComponent',
  'RefForwardingComponent',
];

export const computeComponentName = (
  exp: ts.Symbol,
  source: ts.SourceFile,
): string | undefined | null | false => {
  const exportName = exp.getName();
  if (exoticNames.indexOf(exportName) >= 0) {
    return getDefaultExportForFile(source);
  }
  return undefined;
};
