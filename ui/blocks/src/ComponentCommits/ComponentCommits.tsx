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
import {
  StoryInputProps,
  useConfig,
  useStoryComponent,
} from '@component-controls/store';
import { Commit, Component, dateToLocalString } from '@component-controls/core';
import { GithubAvatar } from '@component-controls/components';
import { useCustomProps } from '../context';

export type ComponentCommitsProps = BlockContainerProps &
  StoryInputProps & { storeComponent?: Component };

/**
 * Displays commit history for a component
 */
export const ComponentCommits: FC<ComponentCommitsProps> = ({
  id,
  name,
  storeComponent,
  ...rest
}) => {
  const props = useCustomProps<ComponentCommitsProps>('commits', rest);
  const component = storeComponent
    ? storeComponent
    : useStoryComponent({ id, name });

  const config = useConfig();
  const { tokens } = config;

  console.log(component);

  const columns = useMemo(
    () =>
      [
        {
          Header: 'Date',
          accessor: 'authorDate',
          Cell: ({
            row: {
              original: { authorDate },
            },
          }) => (
            <span>
              {authorDate ? dateToLocalString(new Date(authorDate)) : 'N/A'}
            </span>
          ),
        },
        {
          Header: 'Author',
          accessor: 'authorName',
          Cell: ({
            row: {
              original: { authorName },
            },
          }) => {
            return authorName ? (
              <div style={{ display: 'flex' }}>
                <p style={{ paddingRight: '10px' }}>{authorName}</p>
                <GithubAvatar
                  username={authorName}
                  size={22}
                  githubAccessToken={tokens?.githubAccessToken}
                />
              </div>
            ) : null;
          },
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

  const paginationProps = {
    pageIndex: 0,
    pageSize: 10,
    pageTemplate: 'Page ${pageIndex} of ${pageLength}',
    pageVisible: true,
    pageSizeTemplate: '${pageSize} rows',
    pageSizeVisible: true,
    goToPageVisible: true,
    goToPageTemplate: 'Go to page:',
  };

  return (
    <BlockContainer {...props}>
      <Table<Commit>
        sorting={true}
        data={component.fileInfo.commits}
        columns={columns}
        sortBy={[
          {
            id: 'authorDate',
            desc: true,
          },
        ]}
        pagination={paginationProps}
      />
    </BlockContainer>
  );
};
