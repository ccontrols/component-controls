import { ElementType } from 'react';
import { deepMerge } from './deepMerge';
import { StoryRenderFn } from './utility';
import { ComponentControls, ComponentControl } from './controls';
import { PropType } from './components';

export type IncludeFn = (
  control: { name: string; prop?: PropType } & ComponentControl,
) => boolean;
export interface SmartControls {
  /**
   * whether to generate "smart" controls for a story
   */
  smart?: boolean;
  /**
   * include props only
   */
  include?: string[] | IncludeFn;

  /**
   * exclude props only
   */
  exclude?: string[] | IncludeFn;
}

/**
 * story properties that can be inherited from the document, or each story can have its properties
 */

export interface StoryProps<Props = any> {
  /**
   * id for component associated with the story
   */
  component?: string | Record<string, unknown> | ElementType<Props>;

  /**
   * multiple components option
   */
  subcomponents?: Record<
    string,
    string | Record<string, unknown> | ElementType<Props>
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

export const extractStoryProps = <Props = any>(
  src: StoryProps<Props>,
): StoryProps<Props> => {
  return {
    component: src.component,
    subcomponents: src.subcomponents,
    controls: src.controls,
    smartControls: src.smartControls,
    category: src.category,
    decorators: Array.isArray(src.decorators)
      ? src.decorators.filter(d => typeof d === 'function')
      : undefined,
    plugins: src.plugins,
  };
};

/**
 * merge commont story props - from config, document and story
 * @param dest the props to be overwritten
 * @param src the props to keep, unless they are undefined
 * @returns the merged props
 */
export const mergeStoryProps = <Props = any>(
  dest: StoryProps<Props> | undefined = {},
  src: StoryProps<Props> | undefined = {},
): StoryProps => {
  const destProps = extractStoryProps(dest);
  return deepMerge(destProps, src);
};

/**
 * unwrap a promise
 */
export type Await<T> = T extends PromiseLike<infer U> ? U : T;
