import * as parser from '@babel/parser';
const mdx = require('@mdx-js/mdx');
import { toId, storyNameFromExport } from '@storybook/csf';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import prettier, { Options, ResolveConfigOptions } from 'prettier';
import parserBabel from 'prettier/parser-babylon';
import { StoriesStore, Story } from '@component-controls/specification';
import { extractCSFStories } from './babel/csf-stories';
import { extractMDXStories } from './babel/mdx-stories';
import { removeMDXAttributes } from './babel/remove-mdx-attributes';
import { extractComponent } from './babel/extract-component';
import { packageInfo } from './project/packageInfo';

type TraverseFn = (stories: StoriesStore) => any;

export type PrettierOptions = Options & {
  resolveConfigOptions?: ResolveConfigOptions;
};
const parseSource = async (
  code: string,
  traverseFn: TraverseFn,
  originalSource: string,
  filePath?: string,
  prettierOptions?: PrettierOptions,
): Promise<StoriesStore> => {
  const prettify = async (c: string): Promise<string> => {
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

      return prettier.format(c, {
        parser: 'typescript',
        plugins: [parserBabel],
        ...allPrettierOptions,
      });
    } else {
      return c;
    }
  };
  const source = await prettify(code);
  const ast = parser.parse(source, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });
  const store: StoriesStore = {
    stories: {},
    kinds: {},
    components: {},
  };
  traverse(ast, traverseFn(store));
  if (Object.keys(store.kinds).length > 0) {
    const kind = store.kinds[Object.keys(store.kinds)[0]];
    kind.source = originalSource;
    store.stories = Object.keys(store.stories).reduce(
      (acc: { [key: string]: Story }, name) => {
        const story: Story = store.stories[name];
        if (kind.title && story.name) {
          const id = toId(kind.title, storyNameFromExport(story.name));
          if (!kind.stories) {
            kind.stories = [];
          }
          kind.stories.push(id);
          return { ...acc, [id]: { ...story, id, kind: kind.title } };
        }
        return acc;
      },
      {},
    );
  }
  await extractComponent(ast, store, prettify);
  await packageInfo(store, filePath);
  /*
  if (filePath && stories.component && stories.component.from) {
    console.log(
      stories.component.from,
      ': ',
      path.resolve(filePath, stories.component.from),
    );
  }
  */
  Object.keys(store.stories).forEach((key: string) => {
    const story: Story = store.stories[key];
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
  return store;
};

export const parseCSF = async (
  source: string,
  filePath?: string,
  prettierOptions?: PrettierOptions,
): Promise<StoriesStore> => {
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
): Promise<StoriesStore> => {
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
