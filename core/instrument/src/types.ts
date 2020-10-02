import { ParserOptions } from '@babel/parser';
import { Document, Store } from '@component-controls/core';
import images from 'remark-images';
import emoji from 'remark-emoji';
import { SyncOpts as ResolveOptions } from 'resolve';
import {
  Options,
  ResolveConfigOptions as ResolvePrettierConfigOptions,
} from 'prettier';

/**
 * when loading - single doc file store
 */
export type LoadingDocStore = {
  /**
   * the document itself
   */
  doc: Document | undefined;
} & Required<Pick<Store, 'components' | 'packages' | 'stories'>>;

type PrettierOptions = Options & {
  resolveConfigOptions?: ResolvePrettierConfigOptions;
};
export { ParserOptions, ResolveOptions, PrettierOptions };

export const defaultResolveOptions: ResolveOptions = {
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.mjs', '.es', '.es6'],
};

export const defaultParserOptions: ParserOptions = {
  sourceType: 'module',
  plugins: ['jsx', 'typescript', 'classProperties'],
};

/**
 * default renderer imports.
 * from https://github.com/mdx-js/mdx/blob/6251c5bb35aec5b6de85262a6a46fa1db496dd23/packages/loader/index.js#L4
 */
export const DEFAULT_MDX_RENDERER = `
import React from 'react';
import { mdx } from '@mdx-js/react';
`;

export const defaultMDXOptions: MDXOptions = {
  test: /\.(mdx|md)$/i,
  renderer: DEFAULT_MDX_RENDERER,
  remarkPlugins: [images, emoji],
};

/**
 * settings to load component props tables
 * each component file extension must resolve to only 1 props info loader
 */
export interface PropsLoaderConfig {
  /**
   * module name - must be usable by require(....)
   * if a local file name, use require.esolve('../..')
   */
  name: string;

  /**
   * a regex or a list of regex masks
   * ex: test: /\.(js|jsx)$/
   */
  test: RegExp | RegExp[];
  /**
   * a regex or a list of regex masks for files to be excluded
   */
  exclude?: RegExp | RegExp[];
  /**
   * options specific to the props info loader module
   */
  options?: any;
}

export const defaultPackageOptions: PackageInfoOptions = {
  maxLevels: 10,
  packageJsonName: 'package.json',
  browseLink: true,
  docsLink: true,
  issuesLink: true,
};

export const defaultComponentOptions: ComponentOptions = {
  sourceFiles: true,
  package: defaultPackageOptions,
};

export type ComponentFileFn = (
  name: string,
  fileName?: string,
) => string | false;
/**
 * custom option to extract component and doc files
 */
export type ComponentFileOption = boolean | ComponentFileFn;

export const defaultStoriesOptions: StoriesOptions = {
  sourceFiles: false,
  package: defaultPackageOptions,
};

/**
 * options for finding and extracting package.json informtation
 * applies both for components and stories
 */
export interface PackageInfoOptions {
  /**
   * max levels of folders to look up to find the package.json file
   */
  maxLevels?: number;
  /**
   * package.json alternative name
   */
  packageJsonName?: string;

  /**
   * Whether to save the link for browsing the file in the repository field
   */
  browseLink?: ComponentFileOption;

  /**
   * Whether to save the link for project readme file in the repository field
   */
  docsLink?: ComponentFileOption;

  /**
   * Whether to save the link for filing issues with the project in the repository field
   */

  issuesLink?: ComponentFileOption;
}

export interface ComponentOptions {
  /**
   * Callback function to resolve the source file name of a component.
   * Return false if this file should not be processed.
   */
  resolveFile?: (componentName: string, filePath: string) => string | undefined;

  /**
   * Callback function to resolve the props info file name of a component.
   * Sometimes the props are in a different file than the source file
   * for example external libraries that had a separate index.d.ts file
   */
  resolvePropsFile?: (
    componentName: string,
    filePath: string,
  ) => string | undefined;

  /**
   * If set to false, will not save the component's source file
   */
  sourceFiles?: ComponentFileOption;

  /**
   * options for extracting repository information from the component's package,json file
   */
  package?: PackageInfoOptions | false;
}

export interface StoriesOptions {
  /**
   * If set to false, will not save the stories's source file, only the source of each individual story
   */
  sourceFiles?: ComponentFileOption;

  /**
   * options for extracting repository information from the component's package,json file
   */
  package?: PackageInfoOptions | false;
}

/**
 * mdx-js options
 */
export interface MDXOptions {
  /**
   * regular expression for files to pass through the MDX parser
   * by default /\.mdx$/
   */
  test?: RegExp;
  /**
   * enable footnotes
   */

  footnotes?: boolean;
  /**
   * specify remark plugins
   */
  remarkPlugins?: any[];
  /**
   * specify rehype plugins
   */
  hastPlugins?: any[];
  /**
   * specify markdown compilers
   */
  compilers?: any[];

  /**
   * regex for blocks, defaults to ['[a-z\\.]+(\\.){0,1}[a-z\\.]']
   */
  blocks?: string[];

  /**
   * if true, will return the transformed MDX -< JSX, ready to be loaded by babel
   */
  transformMDX?: boolean;

  /**
   * generate storybook required fake exports for MDX compatibility
   */
  storybookExports?: boolean;
  /**
   * ability to configure the mdx files imports. Works with transformMDX: true
   * by default this is the string
   * ```
   * import React from 'react'
   * import { mdx } from '@mdx-js/react'
   * ```
   */
  renderer?: string;
}

/**
 * Options passed for instrumenting
 */
export interface InstrumentOptions {
  /**
   * Options to control babel parser.
   */
  parser?: ParserOptions;
  /**
   * prettier options are used to prettify the code at the end of the process
   * this is useful for "story" code, where the story is extracted from the full file
   * fassing a value of false as prettier option will disabled prettifying
   */
  prettier?: PrettierOptions | false;

  /**
   * Options to control the `resolve` import resolving utilities.
   */
  resolver?: ResolveOptions;

  /**
   * Options for extracting components information.
   */
  components?: ComponentOptions;

  /**
   * Options for extracting stories information.
   */
  stories?: StoriesOptions;

  /**
   * props tables loaders
   * must have a default export that returns a PropsInfoExtractorFunction
   */
  propsLoaders?: PropsLoaderConfig[];

  /**
   * mdx-js parsing options
   */
  mdx?: MDXOptions;
}

export interface MDXExportType {
  render?: string;
  story?: {
    [key: string]: string;
  };
}
export interface MDXExportTypes {
  [key: string]: MDXExportType;
}
export type ParseStorieReturnType = {
  exports?: MDXExportTypes;
} & LoadingDocStore;
