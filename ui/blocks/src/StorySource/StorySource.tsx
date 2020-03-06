import React, { FC } from 'react';
import {
  StorySource as BaseStorySource,
  StorySourceProps as BaseStorySourceProps,
} from '@component-controls/block-components';
import { useControlsContext, StoryInputProps } from '../BlocksContext';
import { ThemeContext } from '../ThemeContext';
import { repositoryActions } from '../utils/repositoryActions';

export type StorySourceProps = StoryInputProps & BaseStorySourceProps;

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
    <BaseStorySource
      dark={dark}
      controls={controls}
      args={story?.arguments}
      fileSource={kind ? kind.source : undefined}
      actions={allActions}
      {...rest}
    >
      {source}
    </BaseStorySource>
  );
};
