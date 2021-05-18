/* eslint-disable react/display-name */
import React, { FC, useContext, useState, useEffect, useCallback } from 'react';
import { Spec } from 'axe-core';

import { ActionContainer } from '@component-controls/components';
import { ViolationsTable, PassesTable, IncompleteTable } from './ResultsTable';
import { HighlightSelector } from './HighlightSelector';
import { AxeContext } from '../state/context';

/**
 * options
 */
export interface BaseAllyBlockProps {
  options?: Spec;
}

type ItemsState = 'violations' | 'passes' | 'incomplete';

const PanelState: Record<ItemsState, FC> = {
  violations: ViolationsTable,
  passes: PassesTable,
  incomplete: IncompleteTable,
};
/**
 * Displays the [axe](https://github.com/dequelabs/axe-core) ally test results
 */
export const BaseAllyBlock: FC<BaseAllyBlockProps> = ({ children }) => {
  const {
    results: { violations, passes, incomplete },
  } = useContext(AxeContext);
  const defaultState = useCallback(
    () =>
      violations.length
        ? 'violations'
        : incomplete.length
        ? 'incomplete'
        : 'passes',
    [incomplete.length, violations.length],
  );
  const [state, setState] = useState<ItemsState>(defaultState());
  useEffect(() => {
    setState(defaultState());
  }, [defaultState]);
  const numPanels =
    (violations.length ? 1 : 0) +
    (incomplete.length ? 1 : 0) +
    (passes.length ? 1 : 0);
  const nextState = (): ItemsState => {
    switch (state) {
      case 'violations':
        if (passes.length) {
          return 'passes';
        }
        return 'incomplete';
      case 'passes':
        if (incomplete.length) {
          return 'incomplete';
        }
        return 'violations';
      case 'incomplete':
        if (violations.length) {
          return 'violations';
        }
        return 'passes';
    }
  };

  const Panel = PanelState[state];
  return (
    <ActionContainer
      actions={
        numPanels > 1
          ? [
              {
                node: `view ${nextState()}`,
                id: 'panel',
                'aria-label': `display the accessibility ${nextState()}`,
                onClick: () => setState(nextState()),
              },
            ]
          : undefined
      }
    >
      <HighlightSelector>{children}</HighlightSelector>
      {numPanels > 0 && <Panel />}
    </ActionContainer>
  );
};
