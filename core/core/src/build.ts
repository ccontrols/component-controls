import path from 'path';
import { Compiler, Configuration, RuleSetQuery } from 'webpack';
import { LogOptions } from '@component-controls/logger';

type WebpackConfigFn = (config: Configuration, options?: any) => Configuration;
type WebpackConfig = Configuration | WebpackConfigFn;

export interface RuleOptions {
  name: string;
  config: Configuration;
}
export type RuleType = string | RuleOptions;

export type RuleTypes = RuleType[];

export type PresetCallback = (options: BuildProps) => Configuration;
export type PresetType = Configuration | PresetCallback;

export type WebpackLoader =
  | 'css-loader'
  | 'postcss-loader'
  | 'sass-loader'
  | 'less-loader'
  | 'stylus-loader'
  | 'url-loader'
  | 'raw-loader'
  | 'file-loader';

/**
 * configuration properties for compile and run
 */
export interface BuildProps {
  /**
   * webpack configuration object
   */
  webpack?: WebpackConfig;
  finalWebpack?: WebpackConfig;

  /**
   * a list of webpack configuration presets from webpack-configs packages
   */
  presets?: RuleTypes;
  /**
   * path to the configuration file e.g : '.storybook'
   */
  configPath?: string;

  /** public output folder for the bundle */
  distFolder?: string;

  /** public file name the bundle, by default 'component-controls.js' */
  bundleName?: string;

  /** public output folder for the assets like images */
  staticFolder?: string;

  /** file name where css styles are exported to load for ssr */
  cssFileName?: string;
  /**
   * logger options
   */
  logOptions?: Partial<LogOptions>;

  /**
   * webpack mode
   */
  mode?: Configuration['mode'];
  /**
   * loaders custom options shortcut.
   * This can be used for quick options setup instead of using the webpack hook
   */
  loaders?: { [_ in WebpackLoader]?: RuleSetQuery };
}

export const customLoaderOptions = (
  config: BuildProps,
  loader: WebpackLoader,
  defaultOptions: RuleSetQuery,
): RuleSetQuery => {
  const customOptions = config.loaders?.[loader];
  return typeof defaultOptions === 'object' && typeof customOptions === 'object'
    ? { ...defaultOptions, ...customOptions }
    : defaultOptions;
};

const defaultPresets = ['react', 'react-docgen-typescript'];

export const defaultCompileProps: BuildProps = {
  presets: defaultPresets,
};

export type WatchOptions = Parameters<Compiler['watch']>[0];

/**
 * adds webpack WatchOptions to the Compiler options
 */
export type WatchProps = {
  watchOptions?: WatchOptions;
} & BuildProps;

export const getDistName = (options: BuildProps): string => {
  const dist = options.distFolder || path.join(process.cwd(), 'public');
  return dist;
};

export const defBundleName = 'component-controls.js';

export const getBundleName = (options: BuildProps): string =>
  path.join(getDistName(options), options.bundleName || defBundleName);

export const defCssFileName = 'component-controls.css';

export const getCSSBundleName = (options: BuildProps): string =>
  path.join(getDistName(options), options.cssFileName || defCssFileName);
