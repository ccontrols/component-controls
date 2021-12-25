import { Compiler, Configuration, RuleSetUseItem } from 'webpack';
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
  | 'mini-css-extract-plugin'
  | 'babel-loader'
  | 'css-minimizer-webpack-plugin'
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
  loaders?: { [_ in WebpackLoader]?: RuleSetUseItem | null | false };
}

export const customLoaderOptions = (
  config: BuildProps,
  loader: WebpackLoader,
  defaultOptions?: string | { [index: string]: any },
): RuleSetUseItem | false => {
  const customOptions = config.loaders?.[loader];
  return typeof defaultOptions === 'object' && typeof customOptions === 'object'
    ? { ...defaultOptions, ...customOptions }
    : customOptions === null || customOptions === false
    ? false
    : defaultOptions || {};
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

export const defBundleName = 'component-controls.js';

export const defCssFileName = 'component-controls.css';
