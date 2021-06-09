import * as ts from 'typescript';
import { PropTypes } from './utils';
import { SymbolParser } from './parse-symbol';

export const anaylizeFiles = (
  fileNames: string[],
  options: ts.CompilerOptions,
): PropTypes => {
  const program = ts.createProgram(fileNames, options);

  // Get the checker, we will use it to find more about classes
  const checker = program.getTypeChecker();
  const parser = new SymbolParser(checker);
  const modules: ts.Symbol[] = [];
  const props: PropTypes = {};
  // Visit every sourceFile in the program
  for (const sourceFile of program.getSourceFiles()) {
    const module = checker.getSymbolAtLocation(sourceFile);
    if (module) {
      modules.push(module);
      if (!sourceFile.isDeclarationFile) {
        const exports = checker.getExportsOfModule(module);
        exports.forEach(e => {
          const { name, prop } = parser.parseSymbol(e);
          if (name) {
            props[name] = prop;
          }
        });
      }
    }
  }

  return props;
};
