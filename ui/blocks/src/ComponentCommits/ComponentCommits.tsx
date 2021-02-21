/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useMemo } from 'react';
import { jsx } from 'theme-ui';
import {
  BlockContainer,
  BlockContainerProps,
  Table,
} from '@component-controls/components';
import { dateToLocalString } from '@component-controls/core';
import { StoryInputProps, useStoryComponent } from '@component-controls/store';
import { useCustomProps } from '../context';

export type ComponentCommitsProps = BlockContainerProps & StoryInputProps;

/**
 * Displays commit history for a component
 */
export const ComponentCommits: FC<ComponentCommitsProps> = ({
  id,
  name,
  ...rest
}) => {
  const props = useCustomProps<ComponentCommitsProps>('commits', rest);
  const component = useStoryComponent({ id, name });

  const data = useMemo(
    () =>
      component?.fileInfo?.commits?.map(i => {
        return {
          date: i.committerDate
            ? dateToLocalString(new Date(i.committerDate))
            : 'N/A',
          username: i.authorName,
        };
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const columns = useMemo(
    () =>
      [
        {
          Header: 'Datee',
          accessor: 'date',
        },
        {
          Header: 'User Name',
          accessor: 'username',
        },
      ] as any[],
    [],
  );
  return (
    <BlockContainer {...props}>
      <Table data={data} columns={columns} />
    </BlockContainer>
  );
};
