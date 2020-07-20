import * as webpack from 'webpack';
import { RuleTypes } from '@component-controls/webpack-configs';

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

  /** public file name the bundle, by default 'compoonent-controls.js' */
  bundleName: string;

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
