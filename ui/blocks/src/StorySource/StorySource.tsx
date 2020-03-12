import React, { FC } from 'react';
import { ThemeContext } from '@component-controls/components';
import { useControlsContext, StoryInputProps } from '../BlocksContext';
import { PureStorySource, PureStorySourceProps } from './PureStorySource';

import { repositoryActions } from '../utils/repositoryActions';

export type StorySourceProps = StoryInputProps & PureStorySourceProps;

export const StorySource: FC<StorySourceProps> = ({
  id,
  name,
  actions = [],
  ...rest
}) => {
  const { source, controls, story, kind } = useControlsContext({
    id,
    name,
  });
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
