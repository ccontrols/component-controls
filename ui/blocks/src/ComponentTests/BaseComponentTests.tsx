/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useMemo, useCallback } from 'react';
import { jsx } from 'theme-ui';
import { Column } from 'react-table';
import AnsiUp from 'ansi_up';

import { Table, TableProps } from '@component-controls/components';
import { JestResult, Component } from '@component-controls/core';

type TestRow = { id: number } & Pick<
  JestResult,
  'leaks' | 'perfStats' | 'testFilePath'
> &
  JestResult['testResults'][number];
export type BaseComponentTestsProps = {
  component?: Component;
  pagination?: TableProps<TestRow>['pagination'];
};

/**
 * Displays commit history for a component
 */
export const BaseComponentTests: FC<BaseComponentTestsProps> = ({
  component,
  pagination = true,
}) => {
  const ansi_up = useMemo(() => new AnsiUp(), []);

  console.log(component?.jest);
  const renderRowSubComponent = useCallback(
    ({ row }) => {
      const errors = row.original.failureDetails.map(
        (
          failure: {
            message: string;
          },
          index: number,
        ) => (
          <code key={`error_msg_${index}`}>
            <div
              style={{ padding: '10px' }}
              dangerouslySetInnerHTML={{
                __html: ansi_up
                  .ansi_to_html(failure.message)
                  .replace(/\n/gi, '<div />'),
              }}
            />
          </code>
        ),
      );

      return (
        <div>
          <div>{errors}</div>
        </div>
      );
    },
    [ansi_up],
  );
  const columns = useMemo(
    () =>
      [
        {
          Header: () => null,
          id: 'expander',
          Cell: ({ row }: { row: any }) => {
            if (row.original.failureDetails.length) {
              return (
                <span {...row.getToggleRowExpandedProps()}>
                  {row.isExpanded ? '👇' : '👉'}
                </span>
              );
            }
            return null;
          },
        },
        {
          Header: '#',
          accessor: 'id',
          Cell: ({
            row: {
              original: { id },
            },
          }) => <span>{id}</span>,
        },
        {
          Header: 'Test file',
          accessor: 'testFilePath',
          Cell: ({
            row: {
              original: { testFilePath },
            },
          }) => {
            return (
              <div>
                <div>{testFilePath}</div>
              </div>
            );
          },
        },
        {
          Header: 'Full name',
          accessor: 'fullName',
          Cell: ({
            row: {
              original: { fullName },
            },
          }) => <span sx={{ mr: 1 }}>{fullName}</span>,
        },
        {
          Header: 'Title',
          accessor: 'title',
          Cell: ({
            row: {
              original: { title },
            },
          }) => <span>{title}</span>,
        },
        {
          Header: 'Status',
          accessor: 'status',
          Cell: ({
            row: {
              original: { status },
            },
          }) => {
            return <span>{status}</span>;
          },
        },
      ] as Column<TestRow>[],
    [],
  );

  if (!component?.jest) {
    return null;
  }

  const data: TestRow[] | undefined = component?.jest?.results.reduce(
    (acc: TestRow[], { testResults, ...rest }) => {
      return [
        ...acc,
        ...testResults.map((r, rowNum) => ({
          id: acc.length + rowNum,
          ...rest,
          ...r,
        })),
      ];
    },
    [],
  );

  return (
    <Table<TestRow>
      sorting={true}
      data={data}
      columns={columns}
      sortBy={[
        {
          id: 'id',
          desc: false,
        },
      ]}
      renderRowSubComponent={renderRowSubComponent}
      pagination={pagination}
    />
  );
};
