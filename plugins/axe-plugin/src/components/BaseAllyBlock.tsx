/* eslint-disable react/display-name */
import React, { FC, useState, useRef, useEffect, useMemo } from 'react';
import {
  run as runAxe,
  cleanup as cleanupAxe,
  configure as configureAxe,
  reset,
  AxeResults,
  Spec,
} from 'axe-core';

import { Story } from '@component-controls/blocks';

import {
  PanelContainer,
  ActionItems,
  resetTabCounter,
} from '@component-controls/components';
import { ResultsTable } from './ResultsTable';
import { HighlightSelector } from './HighlightSelector';
import { SelectionContextProvider } from './SelectionContext';
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
  const [results, setResults] = useState<
    Pick<AxeResults, 'violations' | 'passes' | 'incomplete'>
  >({
    violations: [],
    passes: [],
    incomplete: [],
  });
  useEffect(() => {
    resetTabCounter();
    reset();
    configureAxe(options);
    isMounted.current = true;
    const el = storyRef.current?.firstChild;
    runAxe(el ?? undefined)
      .then(r => isMounted.current && setResults(r))
      .catch(e => console.error(e));
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
        panel: <AllyDashboard results={results} />,
      },
    ];
    if (results?.violations?.length) {
      actions.push({
        title: `errors (${results.violations.length})`,
        id: 'errors',
        group: 'results',
        'aria-label': 'display the accessibility violations',
        panel: <ResultsTable results={results.violations} />,
      });
    }
    if (results?.passes?.length) {
      actions.push({
        title: `passed (${results?.passes?.length})`,
        id: 'passed',
        group: 'results',
        'aria-label': 'display the accessibility successfully passed tests',
        panel: (
          <ResultsTable results={results.passes} hideErrorColumns={true} />
        ),
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
      panel: <ResultsTable results={results.incomplete} />,
    });
  }
  // console.log(results);

  return (
    <SelectionContextProvider results={results}>
      <PanelContainer actions={actions} openTab="dashboard" visibleTabs={true}>
        <HighlightSelector>
          <Story key={storyId} id={storyId} ref={storyRef} />
        </HighlightSelector>
      </PanelContainer>
    </SelectionContextProvider>
  );
};
