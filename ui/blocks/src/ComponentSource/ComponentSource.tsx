import React, { FC } from 'react';
import { ActionItem } from '@component-controls/components';
import {
  Source as SourceBlock,
  SourceProps,
} from '@component-controls/block-components';
import { useControlsContext, StoryInputProps } from '../BlocksContext';
import { ThemeContext } from '../ThemeContext';
import { repositoryActions } from '../utils/repositoryActions';

export type ComponentSourceProps = StoryInputProps & SourceProps;

export const ComponentSource: FC<ComponentSourceProps> = ({
  id,
  name,
  actions,
  ...rest
}) => {
  const { component } = useControlsContext({
    id,
    name,
  });
  const source = component && component.import;
  if (!source) {
    return null;
  }
  const { dark } = React.useContext(ThemeContext);
  console.log(component);
  const allActions: ActionItem[] = [];
  if (actions) {
    allActions.push.apply(allActions, actions);
  }
  const repositoryItems = component && repositoryActions(component?.repository);
  if (repositoryItems) {
    allActions.push.apply(allActions, repositoryItems);
  }
  return (
    <SourceBlock dark={dark} {...rest} actions={allActions}>
      {source}
    </SourceBlock>
  );
};
