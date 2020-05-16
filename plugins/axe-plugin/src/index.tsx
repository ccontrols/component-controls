/* eslint-disable react/display-name */
import React, { FC } from 'react';

import {
  StoryBlockContainer,
  StoryBlockContainerProps,
} from '@component-controls/blocks';
import { Spec } from 'axe-core';

import { BaseAllyBlock } from './components/BaseAllyBlock';

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
  return (
    <StoryBlockContainer {...props}>
      {({ story }) => (
        <BaseAllyBlock storyId={story?.id} options={axeOptions} />
      )}
    </StoryBlockContainer>
  );
};
