/* eslint-disable react/display-name */
import React, { FC, useContext, useMemo } from 'react';
import { Spec } from 'axe-core';

import { PanelContainer, ActionItems } from '@component-controls/components';
import { ViolationsTable, PassesTable, IncompleteTable } from './ResultsTable';
import { HighlightSelector } from './HighlightSelector';
import { AxeContext } from '../state/context';
import { AllyDashboard } from './AllyDashboard';

/**
 * options
 */
export interface BaseAllyBlockProps {
  options?: Spec;
}

/**
 * Displays the [axe](https://github.com/dequelabs/axe-core) ally test results
 */
export const BaseAllyBlock: FC<BaseAllyBlockProps> = ({ children }) => {
  const {
    results: { violations, passes, incomplete },
  } = useContext(AxeContext);

  const actions: ActionItems = useMemo(() => {
    const actions: ActionItems = [
      {
        node: `dashboard`,
        id: 'dashboard',
        'aria-label': 'display the accessibility overview dashboard',
        panel: <AllyDashboard />,
      },
    ];
    if (violations.length) {
      actions.push({
        node: `errors (${violations.length})`,
        id: 'errors',
        group: 'results',
        'aria-label': 'display the accessibility violations',
        panel: <ViolationsTable />,
      });
    }
    if (passes.length) {
      actions.push({
        node: `passed (${passes.length})`,
        id: 'passed',
        group: 'results',
        'aria-label': 'display the accessibility successfully passed tests',
        panel: <PassesTable />,
      });
    }

    if (incomplete.length) {
      actions.push({
        node: `incomplete (${incomplete.length})`,
        id: 'incomplete',
        group: 'results',
        'aria-label': 'display the incomplete accessibility tests',
        panel: <IncompleteTable />,
      });
    }
    return actions;
  }, [incomplete.length, passes.length, violations.length]);
  console.log('REDRAW');
  return (
    <PanelContainer actions={actions} openTab="dashboard" visibleTabs={true}>
      <HighlightSelector>{children}</HighlightSelector>
    </PanelContainer>
  );
};
