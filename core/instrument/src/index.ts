import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import { extractCSFStories } from './babel-traverse/get-csf-stories';
export * from './types';

export const parseSource = (source: string) => {
  const ast = parser.parse(source, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });
  const stories = {};
  traverse(ast, extractCSFStories(stories));
  return stories;
};
