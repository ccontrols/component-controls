/* eslint-disable react/display-name */
import React, { FC, useMemo, useEffect, useReducer } from 'react';
import { TriangleDownIcon, TriangleRightIcon } from '@primer/octicons-react';
import { Component, JSXTree, isLocalImport } from '@component-controls/core';
import { usePackage } from '@component-controls/store';
import {
  Tree,
  TreeItems,
  expandTreeItems,
  getTreeItemsStats,
  ActionContainer,
} from '@component-controls/components';
import { PackageLink } from '../PackageLink';
import { JSXTreeNode } from './JSXTreeNode';
import { ImportLabel } from './ImportLabel';

export interface ComponentJSXTreeProps {
  component?: Component;
}

enum ACTIONS {
  SET = 'SET_ROWS',
  SET_STATS = 'SET_STATS',
}

type ActionSetRows = {
  type: ACTIONS.SET;
  data: {
    rows: TreeItems | undefined;
  };
};

type ActionSetStats = {
  type: ACTIONS.SET_STATS;
  data: {
    canExpand: boolean;
    canCollapse: boolean;
    total: number;
  };
};
const reducer = (
  state: {
    rows: TreeItems | undefined;
    canExpand: boolean;
    canCollapse: boolean;
    total: number;
  },
  action: ActionSetRows | ActionSetStats,
) => {
  switch (action.type) {
    case ACTIONS.SET:
      return { ...state, rows: action.data.rows };
    case ACTIONS.SET_STATS:
      return {
        ...state,
        canExpand: action.data.canExpand,
        canCollapse: action.data.canCollapse,
        total: action.data.total,
      };
    default:
      throw new Error();
  }
};

/**
 * base component dependencies
 */

export const ComponentJSXTree: FC<ComponentJSXTreeProps> = ({ component }) => {
  const [{ rows, canExpand, canCollapse, total }, dispatch] = useReducer(
    reducer,
    {
      rows: undefined,
      canExpand: false,
      canCollapse: false,
      total: 0,
    },
  );
  const componentPackage = usePackage(component?.package);

  const updateStats = (items?: TreeItems) => {
    const { total, expanded } = getTreeItemsStats(items || []);
    dispatch({
      type: ACTIONS.SET_STATS,
      data: {
        total,
        canExpand: expanded < total,
        canCollapse: expanded > 0 && expanded <= total,
      },
    });
  };
  useEffect(() => {
    const { jsx } = component || {};
    const { dependencies, devDependencies } = componentPackage || {};
    const treeToItems = (
      tree: JSXTree,
      level: number = 0,
      parentIndex: number = 0,
    ): TreeItems | undefined => {
      return tree.length
        ? tree.map((item, index) => ({
            id: `${item.name}-${level}-${parentIndex}-${index}`,
            label: ({ isExpanded }) => (
              <JSXTreeNode node={item} isExpanded={isExpanded} />
            ),
            widget:
              item.from && !isLocalImport(item.from) ? (
                <PackageLink
                  name={item.from}
                  dependencies={dependencies}
                  devDependencies={devDependencies}
                />
              ) : (
                <ImportLabel node={item} />
              ),
            expanded: level <= 1,
            items: item.children
              ? treeToItems(item.children, level + 1, index)
              : undefined,
          }))
        : undefined;
    };
    const newRows = jsx ? treeToItems(jsx) : undefined;
    dispatch({ type: ACTIONS.SET, data: { rows: newRows } });
    updateStats(newRows);
  }, [component, componentPackage]);
  const actions = useMemo(() => {
    const actions = [];
    if (canCollapse) {
      actions.push({
        id: 'collapse_all',
        node: 'collapse all',
        'arial-label': 'collapse all jsx nodes',
        onClick: () => {
          if (rows) {
            const collapsed = expandTreeItems(rows, false);
            dispatch({ type: ACTIONS.SET, data: { rows: collapsed } });
            updateStats(collapsed);
          }
        },
      });
    }
    if (canExpand) {
      actions.push({
        id: 'expand_all',
        node: 'expand all',
        'arial-label': 'expand all jsx nodes',
        onClick: () => {
          if (rows) {
            const expanded = expandTreeItems(rows, true);
            dispatch({ type: ACTIONS.SET, data: { rows: expanded } });
            updateStats(expanded);
          }
        },
      });
    }
    return actions;
  }, [rows, canExpand, canCollapse]);
  const onExpandCollapse = (expandedCount: number) => {
    dispatch({
      type: ACTIONS.SET_STATS,
      data: {
        total,
        canExpand: expandedCount < total,
        canCollapse: expandedCount > 0,
      },
    });
  };
  return rows ? (
    <ActionContainer actions={actions}>
      <Tree
        sx={{ mt: 4, mb: 2 }}
        data-testid="component-jsx"
        arrowPosition="start"
        onExpandCollapse={onExpandCollapse}
        items={rows}
        iconExpanded={<TriangleDownIcon />}
        iconCollapsed={<TriangleRightIcon />}
        indentPixels={16}
      />
    </ActionContainer>
  ) : null;
};
