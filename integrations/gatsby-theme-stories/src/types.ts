import { Configuration } from 'webpack';
import { RuleTypes } from '@component-controls/webpack-configs';

export interface LoaderOptions {
  /**
   * path to config file
   */
  configPath?: string;
  /**
   * webpack
   */
  webpack?: Configuration;
  /**
   * presets options that will be passed to the instrumenter.
   */
  presets?: RuleTypes;
}
