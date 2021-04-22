/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import {
  BlockContainer,
  BlockContainerProps,
} from '@component-controls/components';
import { StoryInputProps, useStoryComponent } from '@component-controls/store';
import { BaseTestsResults, BaseTestsResultsProps } from './BaseTestsResults';
import { useCustomProps } from '../context';

export type TestsResultsProps = BlockContainerProps &
  StoryInputProps &
  Pick<BaseTestsResultsProps, 'pagination'>;

/**
 * Displays test results details for a component
 */
export const TestsResults: FC<TestsResultsProps> = ({
  id,
  name,
  pagination = { totalCountTemplate: 'total ${totalData} tests' },
  ...rest
}) => {
  const props = useCustomProps<TestsResultsProps>('tests', rest);
  const component = useStoryComponent({ id, name });

  if (!component?.fileInfo?.commits) {
    return null;
  }

  return (
    <BlockContainer {...props}>
      <BaseTestsResults component={component} pagination={pagination} />
    </BlockContainer>
  );
};
