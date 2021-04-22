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
  BaseComponentTests,
  BaseComponentTestsProps,
} from './BaseComponentTests';
import { useCustomProps } from '../context';

export type ComponentTestsProps = BlockContainerProps &
  StoryInputProps &
  Pick<BaseComponentTestsProps, 'pagination'>;

/**
 * Displays commit history for a component
 */
export const ComponentTests: FC<ComponentTestsProps> = ({
  id,
  name,
  pagination = { totalCountTemplate: '${totalData} tests' },
  ...rest
}) => {
  const props = useCustomProps<ComponentTestsProps>('tests', rest);
  const component = useStoryComponent({ id, name });

  if (!component?.fileInfo?.commits) {
    return null;
  }

  return (
    <BlockContainer {...props}>
      <BaseComponentTests component={component} pagination={pagination} />
    </BlockContainer>
  );
};
