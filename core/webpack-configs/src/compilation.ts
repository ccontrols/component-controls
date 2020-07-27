import path from 'path';
import * as webpack from 'webpack';
import { RuleTypes } from './types';

/**
 * configuration properties for compile and run
 */
export interface CompileProps {
  /**
   * webpack configuration object
   */
  webPack?: webpack.Configuration;
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
}

/**
 * return type from compile and watch functions
 */
export interface CompileResults {
  /**
   * bundle full path and name
   */
  bundleName: string;
  /**
   * the webpack stats object
   */
  stats: webpack.Stats;
}

/**
 * adds webpack WatchOptions to the Compiler options
 */
export type WatchProps = {
  watchOptions?: webpack.ICompiler.WatchOptions;
} & CompileProps;

export const defBundleName = 'component-controls.js';

export const getBundleName = (options: CompileProps) =>
  path.join(
    options.distFolder || `${path.join(process.cwd(), 'public')}`,
    options.bundleName || defBundleName,
  );
