/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import {
  BlockContainer,
  BlockContainerProps,
} from '@component-controls/components';
import { StoryInputProps, useStoryComponent } from '@component-controls/store';
import { BaseTestsCoverage, BaseTestsCoverageProps } from './BaseTestsCoverage';
import { useCustomProps } from '../context';

export type TestsCoverageProps = BlockContainerProps &
  StoryInputProps &
  Pick<BaseTestsCoverageProps, 'pagination'>;

/**
 * Displays jest tests coverage for a component, within a block
 */
export const TestsCoverage: FC<TestsCoverageProps> = ({
  id,
  name,
  pagination,
  ...rest
}) => {
  const props = useCustomProps<TestsCoverageProps>('tests_coverage', rest);
  const component = useStoryComponent({ id, name });
  console.log(component);
  if (!component?.jest) {
    return null;
  }

  return (
    <BlockContainer {...props}>
      <BaseTestsCoverage component={component} pagination={pagination} />
    </BlockContainer>
  );
};
