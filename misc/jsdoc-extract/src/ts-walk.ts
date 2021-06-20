import * as ts from 'typescript';
import { tsDefaults, PropTypes, DocsOptions } from './utils';
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
  const props: PropTypes = {};
  // Visit every sourceFile in the program
  for (const sourceFile of program.getSourceFiles()) {
    const module = checker.getSymbolAtLocation(sourceFile);
    if (module) {
      if (!sourceFile.isDeclarationFile) {
        const exports = checker.getExportsOfModule(module);
        exports.forEach(e => {
          const symbolName = e.name;
          if (!names || names.includes(symbolName)) {
            const { name, prop } = parser.parseSymbol(e);
            if (name) {
              props[name] = prop;
            }
          }
        });
      }
    }
  }

  return props;
};
