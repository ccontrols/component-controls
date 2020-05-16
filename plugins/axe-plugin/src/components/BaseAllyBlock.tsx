/* eslint-disable react/display-name */
import React, { FC, useRef, useEffect, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import {
  run as runAxe,
  cleanup as cleanupAxe,
  configure as configureAxe,
  reset,
  Spec,
} from 'axe-core';

import { Story } from '@component-controls/blocks';

import {
  PanelContainer,
  ActionItems,
  resetTabCounter,
} from '@component-controls/components';
import { ViolationsTable, PassesTable, IncompleteTable } from './ResultsTable';
import { HighlightSelector } from './HighlightSelector';
import { axeResults } from './SelectionContext';
import { AllyDashboard } from './AllyDashboard';

/**
 * options
 */
export interface BaseAllyBlockProps {
  storyId?: string;
  options?: Spec;
}

/**
 * Displays the [axe](https://github.com/dequelabs/axe-core) ally test results
 */
export const BaseAllyBlock: FC<BaseAllyBlockProps> = ({
  storyId,
  options = {},
}) => {
  const storyRef = useRef<HTMLDivElement>(null);
  const isMounted = useRef(false);
  const isRunning = useRef(false);
  const [results, setResults] = useRecoilState(axeResults);
  useEffect(() => {
    resetTabCounter();
    reset();
    configureAxe(options);
    isMounted.current = true;
    if (isRunning.current === false) {
      isRunning.current = true;
      const el = storyRef.current?.firstChild;
      runAxe(el ?? undefined)
        .then(r => {
          isRunning.current = false;
          if (isMounted.current) {
            setResults(r);
          }
        })
        .catch(e => {
          isRunning.current = false;
          console.error(e);
        });
    }
    return () => {
      isMounted.current = false;
      cleanupAxe();
    };
  }, [storyId, storyRef.current]);
  const actions: ActionItems = useMemo(() => {
    const actions: ActionItems = [
      {
        title: `dashboard`,
        id: 'dashboard',
        'aria-label': 'display the accessibility overview dashboard',
        panel: <AllyDashboard />,
      },
    ];
    if (results?.violations?.length) {
      actions.push({
        title: `errors (${results.violations.length})`,
        id: 'errors',
        group: 'results',
        'aria-label': 'display the accessibility violations',
        panel: <ViolationsTable />,
      });
    }
    if (results?.passes?.length) {
      actions.push({
        title: `passed (${results?.passes?.length})`,
        id: 'passed',
        group: 'results',
        'aria-label': 'display the accessibility successfully passed tests',
        panel: <PassesTable />,
      });
    }
    return actions;
  }, [results]);
  if (results?.incomplete?.length) {
    actions.push({
      title: `incomplete (${results.incomplete.length})`,
      id: 'incomplete',
      group: 'results',
      'aria-label': 'display the incomplete accessibility tests',
      panel: <IncompleteTable />,
    });
  }
  // console.log(results);

  return (
    <PanelContainer actions={actions} openTab="dashboard" visibleTabs={true}>
      <HighlightSelector>
        <Story key={storyId} id={storyId} ref={storyRef} />
      </HighlightSelector>
    </PanelContainer>
  );
};
