import React, { FC } from 'react';
import {
  BlockContainer,
  BlockContainerProps,
} from '@component-controls/components';

import {
  useStoryContext,
  StoryInputProps,
  StoryContextProps,
} from '../../context';
import { CURRENT_STORY, getStoryBlockTitle } from '../../utils';

export type StoryBlockContainerProps = {
  [key: string]: any;
} & StoryInputProps &
  Omit<BlockContainerProps, 'id'>;

export type StoryBlockContainerAllProps = {
  children?: (
    context: StoryContextProps,
    props: any,
  ) => React.ReactElement | null;
} & StoryBlockContainerProps;

export const StoryBlockContainer: FC<StoryBlockContainerAllProps> = ({
  id,
  name,
  collapsible,
  title: userTitle,
  sxStyle,
  children,
  ...rest
}) => {
  const context = useStoryContext({
    id,
    name,
  });
  const { story } = context;
  const title = getStoryBlockTitle({
    story,
    title: userTitle,
  });
  const block = children && children(context, rest);
  return block ? (
    <BlockContainer
      title={title}
      collapsible={collapsible}
      id={userTitle == CURRENT_STORY && story ? story.id : undefined}
      sxStyle={sxStyle}
    >
      {block}
    </BlockContainer>
  ) : null;
};
