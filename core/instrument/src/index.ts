import * as parser from '@babel/parser';
const mdx = require('@mdx-js/mdx');
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import prettier, { Options, ResolveConfigOptions } from 'prettier';
import parserBabel from 'prettier/parser-babylon';
import { StoriesGroup, Story } from '@component-controls/specification';
import { extractCSFStories } from './babel/csf-stories';
import { extractMDXStories } from './babel/mdx-stories';
import { removeMDXAttributes } from './babel/remove-mdx-attributes';

type TraverseFn = (stories: StoriesGroup) => any;

export type PrettierOptions = Options & {
  resolveConfigOptions?: ResolveConfigOptions;
};
const parseSource = async (
  code: string,
  traverseFn: TraverseFn,
  originalSource: string,
  filePath?: string,
  prettierOptions?: PrettierOptions,
): Promise<StoriesGroup> => {
  let source: string;
  if (prettierOptions !== false) {
    const { resolveConfigOptions, ...otherOptions } = prettierOptions || {};
    let allPrettierOptions = otherOptions;
    if (filePath) {
      const userOptions = await prettier.resolveConfig(
        filePath,
        resolveConfigOptions,
      );
      allPrettierOptions = { ...userOptions, ...allPrettierOptions };
    }

    source = prettier.format(code, {
      parser: 'typescript',
      plugins: [parserBabel],
      ...allPrettierOptions,
    });
  } else {
    source = code;
  }

  const ast = parser.parse(source, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });
  const stories = {
    stories: {},
    source: originalSource,
  };
  traverse(ast, traverseFn(stories));
  Object.keys(stories.stories).forEach((key: string) => {
    //@ts-ignore
    const story: Story = stories.stories[key];
    const { start, end } = story.loc || {};
    if (start && end) {
      const lines = source.split('\n');

      if (start.line === end.line) {
        story.source = lines[start.line - 1].substring(
          start.column,
          end.column,
        );
      } else {
        const startLine = lines[start.line - 1];
        const endLine = lines[end.line - 1];
        if (startLine !== undefined && endLine !== undefined) {
          story.source = [
            startLine.substring(start.column),
            ...lines.slice(start.line, end.line - 1),
            endLine.substring(0, end.column),
          ].join('\n');
        }
      }
    }
  });
  return stories;
};

export const parseCSF = async (
  source: string,
  filePath?: string,
  prettierOptions?: PrettierOptions,
): Promise<StoriesGroup> => {
  return await parseSource(
    source,
    extractCSFStories,
    source,
    filePath,
    prettierOptions,
  );
};

export const parseMDX = async (
  source: string,
  filePath?: string,
  prettierOptions?: PrettierOptions,
): Promise<StoriesGroup> => {
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
  return await parseSource(
    newCode.code,
    extractMDXStories,
    source,
    filePath,
    prettierOptions,
  );
};
