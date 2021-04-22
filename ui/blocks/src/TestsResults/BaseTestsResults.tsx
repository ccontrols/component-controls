/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useMemo, useCallback } from 'react';
import { jsx } from 'theme-ui';
import { Column, UseExpandedRowProps, Row } from 'react-table';
import AnsiUp from 'ansi_up';
import { TriangleRightIcon, TriangleDownIcon } from '@primer/octicons-react';
import { Table, TableProps, Tag } from '@component-controls/components';
import { JestResult, Component } from '@component-controls/core';

type TestRow = { id: number } & Pick<
  JestResult,
  'leaks' | 'perfStats' | 'testFilePath'
> &
  JestResult['testResults'][number];
export type BaseTestsResultsProps = {
  component?: Component;
  pagination?: TableProps<TestRow>['pagination'];
};

/**
 * Displays commit history for a component
 */
export const BaseTestsResults: FC<BaseTestsResultsProps> = ({
  component,
  pagination = true,
}) => {
  const ansi_up = useMemo(() => new AnsiUp(), []);
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
              sx={{ p: 2, whiteSpace: 'pre-wrap' }}
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
  const columns = useMemo(() => {
    return [
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({
          row: {
            isExpanded,
            getToggleRowExpandedProps,
            original: { status, failureDetails },
          },
        }: {
          row: UseExpandedRowProps<TestRow> & Row<TestRow>;
        }) => {
          const renderdStatus = <div>{status}</div>;
          return (
            <Tag color={`status_${status}`}>
              {failureDetails.length > 0 ? (
                <div
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  {...getToggleRowExpandedProps()}
                >
                  {renderdStatus}
                  <div>
                    {isExpanded ? (
                      <TriangleDownIcon size={24} />
                    ) : (
                      <TriangleRightIcon size={24} />
                    )}
                  </div>
                </div>
              ) : (
                renderdStatus
              )}
            </Tag>
          );
        },
      },
      {
        Header: 'Test file',
        accessor: 'testFilePath',
        Cell: ({
          row: {
            original: { testFilePath },
          },
        }) => {
          return <div>{testFilePath}</div>;
        },
      },
      {
        Header: 'Full name',
        accessor: 'fullName',
        Cell: ({
          row: {
            original: { fullName },
          },
        }) => <div>{fullName}</div>,
      },
      {
        Header: 'Title',
        accessor: 'title',
        Cell: ({
          row: {
            original: { title },
          },
        }) => <div sx={{ fontWeight: 'bolder' }}>{title}</div>,
      },
      {
        Header: 'Time(ms)',
        accessor: 'duration',
        Cell: ({
          row: {
            original: { duration },
          },
        }) => <div sx={{ textAlign: 'end' }}>{duration}</div>,
      },
    ] as Column<TestRow>[];
  }, []);
  const data = useMemo(
    () =>
      component?.jest?.results.reduce(
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
      ),
    [component?.jest?.results],
  );
  const expanded = useMemo(
    () =>
      component?.jest?.results.reduce(
        (acc: Record<string, boolean>, { testFilePath }) => {
          const key = `testFilePath:${testFilePath}`;
          if (!acc[key]) {
            return { ...acc, [key]: true };
          }
          return acc;
        },
        {},
      ),
    [component?.jest?.results],
  );
  if (!component?.jest) {
    return null;
  }
  return (
    <Table<TestRow>
      itemsLabel="tests"
      sorting={true}
      data={data}
      columns={columns}
      expanded={expanded}
      groupBy={['testFilePath']}
      renderRowSubComponent={renderRowSubComponent}
      pagination={pagination}
    />
  );
};
