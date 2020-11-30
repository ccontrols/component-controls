/* eslint-disable react/display-name */
import React, { FC, useCallback, useMemo, useEffect, useState } from 'react';
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

/**
 * base component dependencies
 */

export const ComponentJSXTree: FC<ComponentJSXTreeProps> = ({ component }) => {
  const [rows, setRows] = useState<TreeItems | undefined>([]);
  const [expandCollapse, setExpandCollapse] = useState<{
    canExpand: boolean;
    canCollapse: boolean;
  }>({ canExpand: false, canCollapse: false });
  const componentPackage = usePackage(component?.package);
  const { dependencies = {}, devDependencies = {} } = componentPackage || {};
  const updateStats = (items?: TreeItems) => {
    const { total, expanded } = getTreeItemsStats(items || []);
    setExpandCollapse({
      canExpand: expanded < total,
      canCollapse: expanded > 0,
    });
  };
  useEffect(() => {
    const { jsx } = component || {};
    const treeToItems = (
      tree: JSXTree,
      level: number,
    ): TreeItems | undefined => {
      return tree.length
        ? tree.map((item, index) => ({
            id: `${item.name}-${level}-${index}`,
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
              ? treeToItems(item.children, level + 1)
              : undefined,
          }))
        : undefined;
    };
    const newRows = jsx ? treeToItems(jsx, 0) : undefined;
    setRows(newRows);
    updateStats(newRows);
  }, [component, dependencies, devDependencies]);

  const actions = useMemo(() => {
    const actions = [];
    if (expandCollapse.canCollapse) {
      actions.push({
        id: 'collapse_all',
        node: 'collapse all',
        'arial-label': 'collapse all jsx nodes',
        onClick: () => {
          if (rows) {
            const collapsed = expandTreeItems(rows, false);
            setRows(collapsed);
            updateStats(collapsed);
          }
        },
      });
    }
    if (expandCollapse.canExpand) {
      actions.push({
        id: 'expand_all',
        node: 'expand all',
        'arial-label': 'expand all jsx nodes',
        onClick: () => {
          if (rows) {
            const expanded = expandTreeItems(rows, true);
            setRows(expanded);
            updateStats(expanded);
          }
        },
      });
    }
    return actions;
  }, [rows, expandCollapse]);
  const onExpandCollapse = useCallback(
    (items: TreeItems) => updateStats(items),
    [],
  );
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
