import * as parser from '@babel/parser';
import traverse from '@babel/traverse';

export const parseSource = (source: string) => {
  const ast = parser.parse(source, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });
  traverse(ast, {
    enter(path) {
      console.log(path);
    },
  });
};
