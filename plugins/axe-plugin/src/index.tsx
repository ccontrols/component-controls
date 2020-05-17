/* eslint-disable react/display-name */
import React, { FC, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { run as runAxe, configure as configureAxe, reset } from 'axe-core';
import { resetTabCounter } from '@component-controls/components';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
  Story,
} from '@component-controls/blocks';
import { Spec } from 'axe-core';

import { BaseAllyBlock } from './components/BaseAllyBlock';
import { axeResults } from './components/SelectionContext';

interface AxeAllyBlockOwmProps {
  axeOptions?: Spec;
}

export type AxeAllyBlockProps = AxeAllyBlockOwmProps & StoryBlockContainerProps;

/**
 * Story block container that displays displays the [axe](https://github.com/dequelabs/axe-core) ally test results
 */
export const AxeAllyBlock: FC<AxeAllyBlockProps> = ({
  axeOptions,
  ...props
}) => {
  const setResults = useSetRecoilState(axeResults);
  const storyRef = useRef<HTMLDivElement>(null);
  const isRunning = useRef(false);
  const collectResults = () => {
    const canvas = storyRef.current?.firstChild;
    if (canvas && isRunning.current === false) {
      isRunning.current = true;
      reset();
      configureAxe(axeOptions || {});
      resetTabCounter();
      runAxe(canvas)
        .then(results => {
          setResults(results);
          console.log(results);
          isRunning.current = false;
        })
        .catch(e => {
          console.error('error running axe-core', e);
          isRunning.current = false;
        });
    }
  };
  const onRender = () => {
    collectResults();
  };

  return (
    <StoryBlockContainer {...props}>
      {({ story: { id: storyId } = {} }) => (
        <>
          <React.Suspense fallback={<div>testing...</div>}>
            <BaseAllyBlock options={axeOptions}>
              <React.Profiler id="axe-plugin-scan" onRender={onRender}>
                <Story key={storyId} id={storyId} ref={storyRef} />
              </React.Profiler>
            </BaseAllyBlock>
          </React.Suspense>
        </>
      )}
    </StoryBlockContainer>
  );
};
