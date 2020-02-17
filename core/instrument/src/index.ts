import * as parser from '@babel/parser';
const mdx = require('@mdx-js/mdx');
import traverse from '@babel/traverse';
import { extractCSFStories } from './babel/csf-stories';
import { extractMDXStories } from './babel/mdx-stories';
import { StoriesGroup } from './types';
export * from './types';

type TraverseFn = (stories: StoriesGroup) => any;

const parseSource = (source: string, traverseFn: TraverseFn): StoriesGroup => {
  const ast = parser.parse(source, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });
  const stories = {
    stories: {},
  };
  traverse(ast, traverseFn(stories));
  return stories;
};

export const parseCSF = async (source: string): Promise<StoriesGroup> => {
  return parseSource(source, extractCSFStories);
};

export const parseMDX = async (source: string): Promise<StoriesGroup> => {
  const code = await mdx(source);
  return parseSource(code, extractMDXStories);
};
