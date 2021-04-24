/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useMemo } from 'react';
import { jsx, Box } from 'theme-ui';
import { mix } from 'polished';
import {
  Table,
  TableProps,
  Column,
  Tag,
  useTheme,
} from '@component-controls/components';
import {
  CoverageKind,
  CoverageMetrics,
  Component,
} from '@component-controls/core';

type TestRow = { filePath: string; kind: CoverageKind } & CoverageMetrics;

export type BaseTestsCoverageProps = {
  component?: Component;
  pagination?: TableProps<TestRow>['pagination'];
};

/**
 * Displays jest tests coverage for a component
 */
export const BaseTestsCoverage: FC<BaseTestsCoverageProps> = ({
  component,
  pagination = { totalCountVisible: false },
}) => {
  const theme = useTheme();
  const columns = useMemo(() => {
    return [
      {
        Header: 'Test file',
        accessor: 'filePath',
        Cell: ({ value }) => {
          return <div>{value}</div>;
        },
      },
      {
        Header: 'Kind',
        accessor: 'kind',
        Cell: ({ value }) => {
          return <Box sx={{ fontWeight: 'heading' }}>{value}</Box>;
        },
      },
      {
        Header: 'Total',
        accessor: 'total',
        Cell: ({ value }) => (
          <div
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            {value}
          </div>
        ),
      },
      {
        Header: 'Covered',
        accessor: 'covered',
        Cell: ({ value }) => (
          <div
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            {value}
          </div>
        ),
      },
      {
        Header: 'Skipped',
        accessor: 'skipped',
        Cell: ({ value }) => (
          <div
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            {value}
          </div>
        ),
      },
      {
        Header: '%',
        accessor: 'pct',
        Cell: ({ value }) =>
          theme?.colors ? (
            <div
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              <Tag
                color={mix(
                  `${(value / 100).toFixed(1)}`,
                  theme.colors.status_passed as string,
                  theme.colors.status_failed as string,
                )}
              >
                {`${value}%`}
              </Tag>
            </div>
          ) : null,
      },
    ] as Column<TestRow>[];
  }, []);
  const data = useMemo(() => {
    const coverage = component?.jest?.coverage;
    return coverage
      ? Object.keys(coverage).reduce((acc: TestRow[], key) => {
          return [
            ...acc,
            {
              filePath: key,
              kind: 'lines' as CoverageKind,
              ...coverage[key].lines,
            },
            {
              filePath: key,
              kind: 'functions' as CoverageKind,
              ...coverage[key].functions,
            },
            {
              filePath: key,
              kind: 'statements' as CoverageKind,
              ...coverage[key].statements,
            },
            {
              filePath: key,
              kind: 'branches' as CoverageKind,
              ...coverage[key].branches,
            },
          ];
        }, [])
      : undefined;
  }, [component?.jest?.coverage]);
  const expanded = useMemo(
    () =>
      component?.jest?.coverage
        ? Object.keys(component.jest.coverage).reduce(
            (acc: Record<string, boolean>, filePath) => {
              const key = `filePath:${filePath}`;
              if (!acc[key]) {
                return { ...acc, [key]: true };
              }
              return acc;
            },
            {},
          )
        : undefined,
    [component?.jest?.coverage],
  );
  if (!component?.jest) {
    return null;
  }
  return (
    <Table<TestRow>
      itemsLabel={null}
      sorting={true}
      data={data}
      columns={columns}
      expanded={expanded}
      groupBy={['filePath']}
      pagination={pagination}
    />
  );
};
