import * as ts from 'typescript';
import { tsDefaults, PropTypes, PropType, DocsOptions } from './utils';
import { SymbolParser } from './parse-symbol';

export const anaylizeFiles = (
  fileNames: string[],
  options: DocsOptions = {},
  names?: string[],
): PropTypes => {
  const { tsOptions, ...parseOptions } = options;
  const program = ts.createProgram(fileNames, tsOptions || tsDefaults);

  // Get the checker, we will use it to find more about classes
  const checker = program.getTypeChecker();
  const parser = new SymbolParser(checker, parseOptions);
  const parsed: Record<string, PropType> = {};
  // Visit every sourceFile in the program
  for (const sourceFile of program.getSourceFiles()) {
    const module = checker.getSymbolAtLocation(sourceFile);
    if (module) {
      if (!sourceFile.isDeclarationFile) {
        const exports = checker.getExportsOfModule(module);
        exports.forEach(e => {
          const symbolName = e.getName();
          if (!names || names.includes(symbolName)) {
            const prop = parser.parseSymbol(e);
            parsed[symbolName] = prop;
          }
        });
      }
    }
  }
  if (Object.keys(parser.parents).length) {
    return { ...parsed, _parents: parser.parents };
  }
  return parsed;
};
