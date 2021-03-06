/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import {
  BlockContainer,
  BlockContainerProps,
} from '@component-controls/components';
import { StoryInputProps, useStoryComponent } from '@component-controls/store';
import {
  BaseComponentCommits,
  BaseComponentCommitsProps,
} from './BaseComponentCommits';
import { useCustomProps } from '../context';

export type ComponentCommitsProps = BlockContainerProps &
  StoryInputProps &
  Pick<BaseComponentCommitsProps, 'pagination'>;

/**
 * Displays commit history for a component
 */
export const ComponentCommits: FC<ComponentCommitsProps> = ({
  id,
  name,
  pagination,
  ...rest
}) => {
  const props = useCustomProps<ComponentCommitsProps>('commits', rest);
  const component = useStoryComponent({ id, name });

  if (!component?.fileInfo?.commits) {
    return null;
  }

  return (
    <BlockContainer {...props}>
      <BaseComponentCommits component={component} pagination={pagination} />
    </BlockContainer>
  );
};
