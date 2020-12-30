/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx } from 'theme-ui';
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
  children,
  useStoryDescription,
  description: userDescription,
  'data-testid': dataTestid,
  ...rest
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
      description={description}
      plain={true}
      {...rest}
    >
      {children}
    </BlockContainer>
  );
};
