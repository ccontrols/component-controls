/* eslint-disable react/display-name */
import React, { FC, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Spec, cleanup } from 'axe-core';

import { PanelContainer, ActionItems } from '@component-controls/components';
import { ViolationsTable, PassesTable, IncompleteTable } from './ResultsTable';
import { HighlightSelector } from './HighlightSelector';
import { axeResults } from './RecoilContext';
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
  const [{ violations, passes, incomplete }] = useRecoilState(axeResults);

  useEffect(() => {
    return () => {
      cleanup();
    };
  }, []);
  const actions: ActionItems = [
    {
      title: `dashboard`,
      id: 'dashboard',
      'aria-label': 'display the accessibility overview dashboard',
      panel: <AllyDashboard />,
    },
  ];
  if (violations?.length) {
    actions.push({
      title: `errors (${violations.length})`,
      id: 'errors',
      group: 'results',
      'aria-label': 'display the accessibility violations',
      panel: <ViolationsTable />,
    });
  }
  if (passes?.length) {
    actions.push({
      title: `passed (${passes?.length})`,
      id: 'passed',
      group: 'results',
      'aria-label': 'display the accessibility successfully passed tests',
      panel: <PassesTable />,
    });
  }

  if (incomplete?.length) {
    actions.push({
      title: `incomplete (${incomplete.length})`,
      id: 'incomplete',
      group: 'results',
      'aria-label': 'display the incomplete accessibility tests',
      panel: <IncompleteTable />,
    });
  }

  // console.log(results);

  return (
    <PanelContainer actions={actions} openTab="dashboard" visibleTabs={true}>
      <HighlightSelector>{children}</HighlightSelector>
    </PanelContainer>
  );
};
