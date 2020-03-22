import React, { FC } from 'react';
import {
  BlockContainer,
  BlockContainerProps,
} from '@component-controls/components';
import { StorySource, StorySourceProps } from '../plain/StorySource';

export type BlockStorySourceProps = StorySourceProps & BlockContainerProps;

export const BlockStorySource: FC<BlockStorySourceProps> = ({
  title,
  ...rest
}) => {
  return (
    <BlockContainer title={title}>
      <StorySource {...rest} />
    </BlockContainer>
  );
};
