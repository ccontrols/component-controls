/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useMemo } from 'react';
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
 * Displays tests results details for a component, within a block
 */
export const TestsResults: FC<TestsResultsProps> = ({
  id,
  name,
  pagination = { totalCountTemplate: 'total ${totalData} tests' },
  ...rest
}) => {
  const props = useCustomProps<TestsResultsProps>('tests_results', rest);
  const component = useStoryComponent({ id, name });
  const totalTests = useMemo(
    () =>
      component?.jest
        ? component.jest.results.reduce(
            (acc, { testResults }) => acc + testResults.length,
            0,
          )
        : 0,
    [component?.jest],
  );
  if (!totalTests) {
    return null;
  }

  return (
    <BlockContainer {...props}>
      <BaseTestsResults component={component} pagination={pagination} />
    </BlockContainer>
  );
};
