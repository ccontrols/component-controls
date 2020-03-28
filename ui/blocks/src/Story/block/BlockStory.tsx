import React, { FC } from 'react';
import {
  BlockContainer,
  BlockContainerProps,
} from '@component-controls/components';
import { Story, StoryProps } from '../plain/Story';

export type BlockStoryProps = StoryProps & BlockContainerProps;

export const BlockStory: FC<BlockStoryProps> = ({ title, ...rest }) => {
  return (
    <BlockContainer title={title}>
      <Story {...rest} />
    </BlockContainer>
  );
};
