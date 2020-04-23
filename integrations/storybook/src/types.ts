import { RuleTypes } from '@component-controls/webpack-configs';

export interface PresetOptions {
  /**
   * whether to display the controls table as an addon panel in storybook
   * @defaultValue true
   */
  controlsPanel?: boolean;

  /**
   * whether to display the props table as an addon panel in storybook
   */
  propsPanel?: boolean;

  /**
   * additional custom documentation pages
   */
  pages?: string[];
  /**
   * options that will be passed to the instrumenter.
   */
  webpack?: RuleTypes;
}

export const defaultRules = ['react-docgen-typescript'];
