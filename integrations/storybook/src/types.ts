import { RuleTypes } from '@component-controls/webpack-rules';

export interface PresetOptions {
  /**
   * whether to display the addon panel in storybook
   */
  addonPanel?: boolean;
  /**
   * whether to add a Page documentation page with a classic componnet-controls page
   */
  docsPage?: boolean;
  /**
   * additional custom documentation pages
   */
  pages?: string[];
  /**
   * options that will be passed to the instrumenter.
   */
  webpackRules?: RuleTypes;
}

export const defaultRules = ['react-docgen-typescript'];
