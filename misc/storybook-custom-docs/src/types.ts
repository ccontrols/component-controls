import { ReactNode } from 'react';

/**
 * 
 * Custom page default export
 * example:
 * 
 * ```
 * import React from 'react';

export default {
  key: 'custom',
  title: 'Simple Page',
  render: ({ active }) => active ? <div><h1>Simple docs page</h1></div> : null,
}```
 */

export interface CustomPageRenderFnParams {
  /**
   * is the page active (visible) or not (hidden)
   */
  active: boolean;
}

export type CustomPageRenderFn = (
  params: CustomPageRenderFnParams,
) => ReactNode;

export interface CustomPageDef {
  /**
   * key used for router navigation
   */

  key: string;

  /**
   * title of the page's tab
   */

  title: string;
  /**
   * react render function.
   *
   */
  //
  // active boolean - if the tab custom page is active
  // Return an object that can be rendered from ReactDOM.render
  render: CustomPageRenderFn;
}

export const UPDATE_STORY_CONTEXT = `update_story_context`;
