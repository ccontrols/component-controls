import React, { MouseEvent } from 'react';

/**
 * an item in the ActionBar component
 */
export interface ActionItem {
  /**
   * optional id, used if title is not set
   */
  id?: string;
  /**
   * title - if a string, will use the Button component, else can prvide custom React component
   */
  title: React.ReactNode;
  /**
   * onClick event when passing a string as the title
   */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void | boolean;
  /**
   * displays the Button as disabled
   */
  disabled?: boolean;
  /**
   * hide an action item
   */
  hidden?: boolean;

  /**
   * optional order, if not provided will use the natural order of items from right to left
   */
  order?: number;

  /**
   * optional group. ActionItems in the same group will not be separated by horizonal margin
   */
  group?: string | number;

  /**
   * optional label visible to screen readers for aria accessibility.
   */
  'aria-label'?: string;

  /**
   * panel for Tab-enabled UI, where an action item can open up a panel with tabs
   * in this case, the onClick function can return true/false whether to open up the panel
   */
  panel?: React.ReactNode;
}

export type ActionItems = ActionItem[];

/**
 *  returns a sorted and grouped list of the actions
 */
export const getSortedActions = (actions: ActionItems): ActionItems =>
  actions
    .filter(({ hidden }) => !hidden)
    .reduce((acc: ActionItem[], item: ActionItem) => {
      const accIndex = acc.findIndex(
        accItem => (accItem.id || accItem.title) === (item.id || item.title),
      );
      if (accIndex > -1) {
        acc[accIndex] = { ...acc[accIndex], ...item };
        return acc;
      } else {
        return [...acc, item];
      }
    }, [])
    .map(
      ({ order, ...item }, index) =>
        ({
          ...item,
          order: order === undefined ? index : order,
        } as ActionItem),
    )
    .sort((a: ActionItem, b: ActionItem) => {
      //@ts-ignore
      return a.order - b.order;
    });

/**
 *  returns a sorted and grouped list of all the actions that have a panel property
 */
export const getSortedPanels = (actions: ActionItems): ActionItems =>
  getSortedActions(actions)
    .filter(action => action.panel)
    .sort((a: ActionItem, b: ActionItem) => {
      //@ts-ignore
      return b.order - a.order;
    });
