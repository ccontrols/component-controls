import * as React from 'react';

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
  render: ({ active, storyId }) => active ? <div><h1>Simple docs page</h1><p>{storyId}</p></div> : null,
}```
 */

export interface CustomPageRenderFnParams {
  /**
   * is gthe page active (visible) or not (hidden)
   */
  active: boolean;
  /**
   * initial sgtory id.
   */
  storyId: string;
}

export type CustomPageRenderFn = (
  params: CustomPageRenderFnParams,
) => React.ReactNode;

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
  // storyId as a string
  // Return an object that can be rendered from ReactDOM.render
  render: CustomPageRenderFn;
}
