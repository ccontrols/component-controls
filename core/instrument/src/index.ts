import fs from 'fs';
import mdx from '@mdx-js/mdx';
import matter from 'gray-matter';
import { File } from '@babel/types';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import {
  Story,
  Document,
  getASTSource,
  deepmerge,
} from '@component-controls/core';

import { extractCSFStories } from './babel/esm-stories';
import { extractMDXStories } from './babel/mdx-stories';
import { transformMDXAttributes } from './babel/transform-ast-tree';
import { extractStoreComponent } from './babel/extract-component';
import { packageInfo } from './misc/package-info';
import { extractStoryExports } from './misc/mdx-exports';
import { prettify } from './misc/prettify';
import { parseFile } from './misc/ast_store';
import { readSourceFile } from './misc/source-options';
import { getFileDates } from './misc/file-info';
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
export { getComponentProps } from './misc/props-info';
export { getFileIinfo } from './misc/file-info';
export { prettify };

type TraverseFn = (
  ast: File,
  options: Required<InstrumentOptions>,
  more: { source: string; filePath: string },
) => ParseStorieReturnType | undefined;

/**
 * Instrument a source file, with options
 * @param code The source code
 * @param traverseFn A traverse function. can be different for MDX and ESM story files
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
): Promise<ParseStorieReturnType | undefined> => {
  const source = prettify(code, options.prettier, filePath);
  const { ast } = parseFile(filePath, options.parser, source);

  const store = traverseFn(ast, options, { source, filePath });
  if (!store) {
    return undefined;
  }
  if (store.doc) {
    const doc = store.doc;
    if (doc.draft === true) {
      if (process.env.NODE_ENV !== 'development') {
        return undefined;
      }
    }
    const saveSource = readSourceFile(
      options.stories.sourceFiles,
      originalSource,
      doc.title,
      filePath,
    );
    if (saveSource) {
      doc.source = saveSource;
    }
  }
  await extractStoreComponent(store, filePath, source, options);
  const doc: Document | undefined = store.doc;
  if (doc && store.stories) {
    const storyPackage = await packageInfo(
      doc.title,
      filePath,
      options.stories.package,
    );
    if (storyPackage) {
      store.packages[storyPackage.fileHash] = storyPackage;
      doc.package = storyPackage.fileHash;
    }
    const dates = await getFileDates(filePath);
    doc.dateModified = doc.dateModified || dates.dateModified;
    doc.date = doc.date || dates.dateCreated;
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
export type ParseStoriesReturnType = { transformed: string } & Partial<
  LoadingDocStore
>;
/**
 * Parse and instrument a javascript, typescript or MDX file of stories
 * @param source Source of the file to be instrumented
 * @param filePath Resolved file path name.
 * @param options Instrumenting options
 */

export const parseStories = async (
  filePath: string,
  fileSource?: string,
  options?: InstrumentOptions,
): Promise<ParseStoriesReturnType> => {
  const source = fileSource || fs.readFileSync(filePath, 'utf8');
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
    parser: deepmerge<ParserOptions>(defaultParserOptions, parserOptions),
    resolver: deepmerge<ResolveOptions>(defaultResolveOptions, resolveOptions),
    prettier: prettierOptions,
    components: deepmerge<ComponentOptions>(
      defaultComponentOptions,
      componentOptions,
    ),
    stories: deepmerge<StoriesOptions>(defaultStoriesOptions, storiesOptions),
    mdx: deepmerge<MDXOptions>(defaultMDXOptions, mdxOptions),
    propsLoaders: propsLoaders || [],
  };
  let code: string;
  const {
    test,
    renderer,
    transformMDX,
    storybookExports = false,
    ...otherMDXOptions
  } = mergedOptions.mdx;
  if (test && filePath.match(test)) {
    const { data, content } = matter(source);
    code = await mdx(content, {
      filepath: filePath,
      ...otherMDXOptions,
    });
    const { ast } = parseFile(filePath, mergedOptions.parser, code, false);

    if (transformMDX) {
      //second pass transform - inject any necessary attributes
      traverse(ast, transformMDXAttributes(code));
      ({ code } = generate(ast, {
        retainFunctionParens: true,
        retainLines: false,
      }));
    }
    const store = await parseSource(
      code,
      extractMDXStories(data),
      content,
      filePath,
      mergedOptions,
    );
    if (!store) {
      return {
        transformed: code,
      };
    }
    let transformed;
    if (transformMDX) {
      const { exports } = store || {};
      const exportsSource = extractStoryExports(storybookExports, exports);
      transformed = `${renderer}\n${code}\n${exportsSource}`;
    } else {
      transformed = source;
    }
    return {
      transformed,
      ...store,
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
