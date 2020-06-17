import * as parser from '@babel/parser';
import * as fs from 'fs';
import mdx from '@mdx-js/mdx';
import matter from 'gray-matter';
import { File } from '@babel/types';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import deepMerge from 'deepmerge';
import { Story, StoriesDoc, getASTSource } from '@component-controls/core';

import { extractCSFStories } from './babel/csf-stories';
import { extractMDXStories } from './babel/mdx-stories';
import { removeMDXAttributes } from './babel/remove-mdx-attributes';
import { extractStoreComponent } from './babel/extract-component';
import { packageInfo } from './misc/package-info';
import { extractStoryExports } from './misc/mdx-exports';
import { prettify } from './misc/prettify';
import {
  LoadingDocStore,
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
  ParseStorieReturnType,
} from './types';

export * from './types';

type TraverseFn = (
  ast: File,
  options: Required<InstrumentOptions>,
  more: { source: string; filePath: string },
) => ParseStorieReturnType;

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
  traverseFn: TraverseFn,
  originalSource: string,
  filePath: string,
  options: Required<InstrumentOptions>,
): Promise<ParseStorieReturnType> => {
  const source = await prettify(code, filePath, options.prettier);
  const ast = parser.parse(source, options.parser);

  const store = traverseFn(ast, options, { source, filePath });
  if (store.doc) {
    const doc = store.doc;
    if (options.stories.storeSourceFile) {
      doc.source = originalSource;
    }
  }
  await extractStoreComponent(store, filePath, source, options, ast);
  const doc: StoriesDoc | undefined = store.doc;
  if (doc && store.stories) {
    let includedStories = Object.keys(store.stories);
    const { includeStories, excludeStories } = doc;
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
    const storyPackage = await packageInfo(filePath, options.stories.package);
    if (storyPackage) {
      store.packages[storyPackage.fileHash] = storyPackage;
      doc.package = storyPackage.fileHash;
    }
    const stats = fs.statSync(filePath);
    doc.dateModified = doc.dateModified || stats.mtime;
    doc.date = doc.date || stats.birthtime;
  }
  for (const key of Object.keys(store.stories)) {
    const story: Story = store.stories[key];
    if (!story.source) {
      story.source = getASTSource(source, story.loc);
    }
  }
  return store;
};

export { LoadingDocStore };
export type ParseStoriesReturnType = { transformed: string } & LoadingDocStore;
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
): Promise<ParseStoriesReturnType> => {
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
  const {
    test,
    renderer,
    transformMDX,
    ...otherMDXOptions
  } = mergedOptions.mdx;
  if (test && filePath.match(test)) {
    const { data, content } = matter(source);
    const mdxParsed = await mdx(content, {
      filepath: filePath,
      ...otherMDXOptions,
    });
    const ast = parser.parse(mdxParsed, mergedOptions.parser) as any;
    traverse(ast, removeMDXAttributes());
    ({ code } = generate(ast, {
      retainFunctionParens: true,
      retainLines: true,
    }));
    const store = await parseSource(
      code,
      extractMDXStories(data),
      content,
      filePath,
      mergedOptions,
    );
    const { stories, doc, components, exports, packages } = store;
    const exportsSource = extractStoryExports(exports);
    let transformed = `
    
    ${content}
`;
    if (transformMDX) {
      transformed = `${renderer}\n${code}\n${exportsSource}`;
    }
    return {
      transformed,
      stories,
      doc,
      components,
      packages,
    };
  } else {
    const store = await parseSource(
      source,
      extractCSFStories,
      source,
      filePath,
      mergedOptions,
    );
    return {
      transformed: source,
      ...store,
    };
  }
};
