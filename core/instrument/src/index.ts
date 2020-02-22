import * as parser from '@babel/parser';
const mdx = require('@mdx-js/mdx');
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import { StoriesGroup, Story } from '@component-controls/specification';
import { extractCSFStories } from './babel/csf-stories';
import { extractMDXStories } from './babel/mdx-stories';
import { removeMDXAttributes } from './babel/remove-mdx-attributes';

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
  Object.keys(stories.stories).forEach((key: string) => {
    //@ts-ignore
    const story: Story = stories.stories[key];
    const { start, end } = story.location || {};
    if (start && end) {
      const lines = source.split('\n');

      if (start.line === end.line) {
        story.source = lines[start.line - 1].substring(
          start.column,
          end.column + 1,
        );
      } else {
        const startLine = lines[start.line - 1];
        const endLine = lines[end.line - 1];
        if (startLine !== undefined && endLine !== undefined) {
          story.source = [
            startLine.substring(start.column),
            ...lines.slice(start.line, end.line - 1),
            endLine.substring(0, end.column + 1),
          ].join('\n');
        }
      }
    }
  });
  return stories;
};

export const parseCSF = async (source: string): Promise<StoriesGroup> => {
  return parseSource(source, extractCSFStories);
};

export const parseMDX = async (source: string): Promise<StoriesGroup> => {
  const code = await mdx(source);

  const ast = parser.parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });
  traverse(ast, removeMDXAttributes());
  const newCode = generate(ast, {
    retainFunctionParens: true,
    retainLines: true,
  });
  return parseSource(newCode.code, extractMDXStories);
};
