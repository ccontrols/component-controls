import React, { FC } from 'react';
import { ThemeContext } from '@component-controls/components';
import { useStoryContext, StoryInputProps } from '../context';
import { PureStorySource, PureStorySourceProps } from './PureStorySource';

import { repositoryActions } from '../utils/repositoryActions';

export type StorySourceProps = StoryInputProps & PureStorySourceProps;

export const StorySource: FC<StorySourceProps> = ({
  id,
  name,
  actions = [],
  ...rest
}) => {
  const { story, kind } = useStoryContext({
    id,
    name,
  });
  const { source, controls } = story || {};
  const { dark } = React.useContext(ThemeContext);

  const allActions = [...actions];
  const repositoryItems = kind && repositoryActions(kind?.repository);
  if (repositoryItems) {
    allActions.push.apply(allActions, repositoryItems);
  }
  return (
    <PureStorySource
      dark={dark}
      controls={controls}
      args={story?.arguments}
      fileSource={kind ? kind.source : undefined}
      actions={allActions}
      {...rest}
    >
      {source}
    </PureStorySource>
  );
};
