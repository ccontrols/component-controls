/* eslint-disable react/display-name */
import React, { FC, useRef, useContext } from 'react';
import { run as runAxe, configure as configureAxe, reset } from 'axe-core';
import { resetTabCounter } from '@component-controls/components';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
  Story,
} from '@component-controls/blocks';
import { Spec } from 'axe-core';

import { BaseAllyBlock } from './components/BaseAllyBlock';
import {
  AxeContextProvider,
  AxeSetContext,
  SelectionContextProvider,
} from './state/context';

interface AxeAllyBlockOwmProps {
  axeOptions?: Spec;
}

export type AxeAllyBlockProps = AxeAllyBlockOwmProps & StoryBlockContainerProps;

const RenderStory: FC<AxeAllyBlockOwmProps & { storyId?: string }> = ({
  axeOptions,
  storyId,
}) => {
  const storyRef = useRef<HTMLDivElement>(null);
  const { setResults } = useContext(AxeSetContext);
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
          const { passes, violations, incomplete } = results;
          setResults({ passes, violations, incomplete });
          setTimeout(() => (isRunning.current = false), 1000);
        })
        .catch(e => {
          console.error('error running axe-core', e);
          isRunning.current = false;
        });
    }
  };
  const onRender = () => {
    try {
      collectResults();
    } catch (e) {}
  };
  return (
    <Story key={storyId} id={storyId} ref={storyRef} onRender={onRender} />
  );
};

/**
 * Story block container that displays displays the [axe](https://github.com/dequelabs/axe-core) ally test results
 */
export const AxeAllyBlock: FC<AxeAllyBlockProps> = ({
  axeOptions,
  ...props
}) => {
  return (
    <StoryBlockContainer {...props}>
      {({ story: { id: storyId } = {} }) => (
        <AxeContextProvider>
          <SelectionContextProvider>
            <BaseAllyBlock options={axeOptions}>
              <RenderStory storyId={storyId} axeOptions={axeOptions} />
            </BaseAllyBlock>
          </SelectionContextProvider>
        </AxeContextProvider>
      )}
    </StoryBlockContainer>
  );
};
