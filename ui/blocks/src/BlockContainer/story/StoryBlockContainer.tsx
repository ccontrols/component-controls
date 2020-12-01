import React, { FC, useContext } from 'react';
import { Story } from '@component-controls/core';
import {
  BlockContainer,
  BlockContainerProps,
} from '@component-controls/components';

import { CURRENT_STORY, getStoryBlockTitle } from '../../utils';
import { PlaygroundContext } from '../../Playground/PlaygroundContext';

export type StoryBlockContainerProps = BlockContainerProps;

export type StoryBlockContainerAllProps = {
  story?: Story;
  useStoryDescription?: boolean;
} & StoryBlockContainerProps;

export const StoryBlockContainer: FC<StoryBlockContainerAllProps> = ({
  story,
  collapsible,
  title: userTitle,
  sx,
  children,
  useStoryDescription,
  description: userDescription,
  'data-testid': dataTestid,
}) => {
  const playground = useContext(PlaygroundContext);
  const title = getStoryBlockTitle({
    story,
    title: userTitle,
  });
  const description =
    (playground === undefined && userDescription) ||
    (useStoryDescription ? story?.description : undefined);
  return (
    <BlockContainer
      data-testid={dataTestid}
      title={title}
      collapsible={collapsible}
      id={userTitle === CURRENT_STORY && story ? story.id : undefined}
      sx={sx}
      description={description}
      plain={true}
    >
      {children}
    </BlockContainer>
  );
};
