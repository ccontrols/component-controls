import * as parser from '@babel/parser';
import mdx from '@mdx-js/mdx';
import { File } from '@babel/types';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import prettier from 'prettier';
import deepMerge from 'deepmerge';
import parserBabel from 'prettier/parser-babylon';
import {
  StoriesStore,
  Story,
  StoriesKind,
} from '@component-controls/specification';
import { getASTSource } from '@component-controls/core';

import { extractCSFStories } from './babel/csf-stories';
import { extractMDXStories } from './babel/mdx-stories';
import { removeMDXAttributes } from './babel/remove-mdx-attributes';
import { extractStoreComponent } from './babel/extract-component';
import { packageInfo } from './misc/packageInfo';
import {
  InstrumentOptions,
  ParserOptions,
  defaultParserOptions,
  ResolveOptions,
  defaultResolveOptions,
  ComponentOptions,
  defaultComponentOptions,
  StoriesOptions,
  defaultStoriesOptions,
  MDXOptions,
  defaultMDXOptions,
} from './types';

export * from './types';

type ParseType = 'mdx' | 'csf';
type TraverseFn = (ast: File) => StoriesStore;

const TraverseFunctions: {
  [key in ParseType]: TraverseFn;
} = { csf: extractCSFStories, mdx: extractMDXStories };
/**
 * Instrument a source file, with options
 * @param code The source code
 * @param traverseFn A traverse function. can be different for MDX and CSF story files
 * @param originalSource If the source was modified (ie mdx compiler)
 * @param filePath file name with fiull path
 * @param options Instrument options
 */
const parseSource = async (
  code: string,
  parseType: ParseType,
  originalSource: string,
  filePath: string,
  options: Required<InstrumentOptions>,
): Promise<StoriesStore> => {
  const prettify = async (c: string): Promise<string> => {
    if (options.prettier !== false) {
      const { resolveConfigOptions, ...otherOptions } = options.prettier || {};
      let allPrettierOptions:
        | prettier.Options
        | undefined = otherOptions as any;
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
  const ast = parser.parse(source, options.parser);

  const store = TraverseFunctions[parseType](ast);
  if (Object.keys(store.kinds).length > 0) {
    const kind = store.kinds[Object.keys(store.kinds)[0]];
    if (options.stories.storeSourceFile) {
      kind.source = originalSource;
    }
  }
  await extractStoreComponent(store, filePath, source, options, ast);
  const kindsNames = Object.keys(store.kinds);
  for (let i = 0; i < kindsNames.length; i += 1) {
    const kind: StoriesKind = store.kinds[kindsNames[i]];
    if (store.stories) {
      let includedStories = Object.keys(store.stories);
      const { includeStories, excludeStories } = kind;
      if (includeStories) {
        if (Array.isArray(includeStories)) {
          includedStories = includedStories.filter(
            name => includeStories.indexOf(name) > -1,
          );
        } else {
          const match = new RegExp(includeStories);
          includedStories = includedStories.filter(name => {
            return name.match(match);
          });
        }
      }
      if (excludeStories) {
        if (Array.isArray(excludeStories)) {
          includedStories = includedStories.filter(
            name => excludeStories.indexOf(name) === -1,
          );
        } else {
          const match = new RegExp(excludeStories);
          includedStories = includedStories.filter(name => !name.match(match));
        }
      }
      if (includeStories || excludeStories) {
        for (var key in store.stories) {
          if (includedStories.indexOf(key) === -1) {
            delete store.stories[key];
          }
        }
      }
    }
    const repository = await packageInfo(filePath, options.stories.package);
    if (repository) {
      kind.repository = repository;
    }
  }
  Object.keys(store.stories).forEach((key: string) => {
    const story: Story = store.stories[key];
    story.source = getASTSource(source, story.loc);
  });
  return store;
};

/**
 * Parse and instrument a javascript, typescript or MDX file of stories
 * @param source Source of the file to be instrumented
 * @param filePath Resolved file path name.
 * @param options Instrumenting options
 */

export const parseStories = async (
  source: string,
  filePath: string,
  options?: InstrumentOptions,
): Promise<StoriesStore> => {
  const {
    parser: parserOptions = {},
    prettier: prettierOptions = {},
    resolver: resolveOptions = {},
    components: componentOptions = {},
    stories: storiesOptions = {},
    mdx: mdxOptions = {},
    propsLoaders,
  } = options || {};

  const mergedOptions: Required<InstrumentOptions> = {
    parser: deepMerge<ParserOptions>(defaultParserOptions, parserOptions),
    resolver: deepMerge<ResolveOptions>(defaultResolveOptions, resolveOptions),
    prettier: prettierOptions,
    components: deepMerge<ComponentOptions>(
      defaultComponentOptions,
      componentOptions,
    ),
    stories: deepMerge<StoriesOptions>(defaultStoriesOptions, storiesOptions),
    mdx: deepMerge<MDXOptions>(defaultMDXOptions, mdxOptions),
    propsLoaders: propsLoaders || [],
  };
  let code: string;
  let type: ParseType;
  const { test, ...otherMDXOptions } = mergedOptions.mdx;
  if (test && filePath.match(test)) {
    const mdxParsed = await mdx(source, otherMDXOptions);
    const ast = parser.parse(mdxParsed, mergedOptions.parser) as any;
    traverse(ast, removeMDXAttributes());
    ({ code } = generate(ast, {
      retainFunctionParens: true,
      retainLines: true,
    }));
    type = 'mdx';
  } else {
    code = source;
    type = 'csf';
  }

  return await parseSource(code, type, source, filePath, mergedOptions);
};
