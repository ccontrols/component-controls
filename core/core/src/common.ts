import { ComponentType } from 'react';
import { StoryRenderFn } from './utility';
import { ComponentControls } from './controls';

export interface SmartControls {
  /**
   * whether to generate "smart" controls for a story
   */
  smart?: boolean;
  /**
   * include props only
   */
  include?: string[];

  /**
   * exclude props only
   */
  exclude?: string[];
}

/**
 * story properties that can be inherited from the document, or each story can have its properties
 */

export interface StoryProps<Props = unknown> {
  /**
   * id for component associated with the story
   */
  component?: string | Record<string, unknown> | ComponentType<Props>;

  /**
   * multiple components option
   */
  subcomponents?: Record<
    string,
    string | Record<string, unknown> | ComponentType<Props>
  >;

  /**
   * object of key/value pairs specifying the controls for the story
   */
  controls?: ComponentControls;

  /**
   * "smart" controls options
   */
  smartControls?: SmartControls;
  /**
   * array of wrapper functions (decorators) to be called when rendering each individual story.
   */
  decorators?: StoryRenderFn[];

  /**
   * plugins configuration settings
   */
  plugins?: any;

  /**
   * category string - can be used for cleanly separating stories/components
   */
  category?: string;
}
