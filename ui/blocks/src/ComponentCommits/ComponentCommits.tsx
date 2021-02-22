/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useMemo } from 'react';
import { jsx } from 'theme-ui';
import { Column } from 'react-table';
import {
  BlockContainer,
  BlockContainerProps,
  Table,
} from '@component-controls/components';
import { StoryInputProps, useStoryComponent } from '@component-controls/store';
import { Commit, dateToLocalString } from '@component-controls/core';
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

  console.log(component);

  const columns = useMemo(
    () =>
      [
        {
          Header: 'Date',
          accessor: 'authorData',
          Cell: ({
            row: {
              original: { authorData },
            },
          }) => (
            <span>
              {authorData ? dateToLocalString(new Date(authorData)) : 'N/A'}
            </span>
          ),
        },
        {
          Header: 'Author',
          accessor: 'authorName',
        },
        {
          Header: 'Commit Message',
          accessor: 'subject',
          Cell: ({
            row: {
              original: { subject },
            },
          }) => <p>{subject}</p>,
        },
      ] as Column<Commit>[],
    [],
  );

  if (!component?.fileInfo?.commits) {
    return null;
  }

  return (
    <BlockContainer {...props}>
      <Table<Commit> data={component.fileInfo.commits} columns={columns} />
    </BlockContainer>
  );
};
