import { RuleTypes } from '@component-controls/webpack-configs';

export interface LoaderOptions {
  /**
   * path to config file
   */
  config?: string;
  /**
   * options that will be passed to the instrumenter.
   */
  webpack?: RuleTypes;
}
