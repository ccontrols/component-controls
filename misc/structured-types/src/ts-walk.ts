import * as ts from 'typescript';
import { PropTypes, PropDiagnostic } from './types';
import { tsDefaults, DocsOptions } from './ts-utils';
import { SymbolParser } from './SymbolParser';

export const anaylizeFiles = (
  fileNames: string[],
  options: DocsOptions = {},
  host?: ts.CompilerHost,
): PropTypes => {
  const { tsOptions = tsDefaults, ...parseOptions } = options;
  const { extractNames, collectDiagnostics } = parseOptions || {};
  const program = ts.createProgram(fileNames, tsOptions, host);
  // Get the checker, we will use it to find more about classes
  const checker = program.getTypeChecker();

  const parser = new SymbolParser(checker, parseOptions);
  const parsed: PropTypes = {};
  for (const fileName of fileNames) {
    const sourceFile = program.getSourceFile(fileName);
    if (sourceFile) {
      const module = checker.getSymbolAtLocation(sourceFile);
      if (module) {
        const exports = checker.getExportsOfModule(module);
        exports.forEach(e => {
          const symbolName = e.getName();
          if (!extractNames || extractNames.includes(symbolName)) {
            const prop = parser.parseSymbol(e);
            if (prop) {
              parsed[symbolName] = prop;
            }
          }
        });
      }
    }
  }
  if (Object.keys(parser.parents).length) {
    parsed.__parents = parser.parents;
  }
  if (collectDiagnostics) {
    const allDiagnostics = ts
      .getPreEmitDiagnostics(program)
      .filter(({ file }) => file && fileNames.includes(file.fileName));
    if (allDiagnostics.length) {
      parsed.__diagnostics = allDiagnostics.map(
        ({ category, messageText, file, start }) => {
          const message =
            typeof messageText === 'string'
              ? messageText
              : messageText.messageText;

          const result: PropDiagnostic = {
            category,
            message,
          };
          if (file) {
            result.fileName = file.fileName
              .split('\\')
              .pop()
              ?.split('/')
              .pop();
            if (typeof start !== 'undefined') {
              const location = file.getLineAndCharacterOfPosition(start);
              result.row = location.line + 1;
              result.column = location.character + 1;
            }
          }
          return result;
        },
      );
    }
  }

  return parsed;
};
