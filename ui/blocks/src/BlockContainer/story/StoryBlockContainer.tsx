import React, { FC, useContext } from 'react';
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
import { PlaygroundContext } from '../../Playground/PlaygroundContext';

export type StoryBlockContainerProps = StoryInputProps & BlockContainerProps;

export type StoryBlockContainerAllProps = {
  children?: (
    context: StoryContextProps,
    props: any,
  ) => React.ReactElement | null;
  useStoryDescription?: boolean;
} & StoryBlockContainerProps;

export const StoryBlockContainer: FC<StoryBlockContainerAllProps> = ({
  id,
  name,
  collapsible,
  title: userTitle,
  sxStyle,
  children,
  useStoryDescription,
  description: userDescription,
  'data-testid': dataTestid,
  ...rest
}) => {
  const context = useStoryContext({
    id,
    name,
  });
  const playground = useContext(PlaygroundContext);
  const { story } = context;
  const title = getStoryBlockTitle({
    story,
    title: userTitle,
  });
  const block = children && children(context, rest);
  const description =
    (playground === undefined && userDescription) ||
    (useStoryDescription ? story?.description : undefined);
  return block ? (
    <BlockContainer
      data-testid={dataTestid}
      title={title}
      collapsible={collapsible}
      id={userTitle === CURRENT_STORY && story ? story.id : undefined}
      sxStyle={sxStyle}
      description={description}
    >
      {block}
    </BlockContainer>
  ) : null;
};
