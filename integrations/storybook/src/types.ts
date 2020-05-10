import { RuleTypes } from '@component-controls/webpack-configs';

export interface PresetOptions {
  /**
   * whether to display the props table as an addon panel in storybook
   */
  propsPanel?: boolean;

  /**
   * whether to display the StorySource block as an addon panel in storybook
   */
  storySourcePanel?: boolean;
  /**
   * whether to display the StoryConfig block as an addon panel in storybook
   */
  storyConfigPanel?: boolean;

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
