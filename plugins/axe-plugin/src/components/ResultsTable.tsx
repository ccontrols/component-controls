/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useMemo, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { jsx, Flex, Box, Text } from 'theme-ui';
import { Column } from 'react-table';
import Octicon, {
  ChevronRight,
  ChevronDown,
  TriangleRight,
  TriangleDown,
  Alert,
  Stop,
  Icon,
  Info,
  IssueOpened,
} from '@primer/octicons-react';
import { Result, ImpactValue } from 'axe-core';
import { Table, ExternalLink, Tag } from '@component-controls/components';
import { axeViolations, axePasses, axeIncomplete } from './RecoilContext';
import { NodesTable } from './NodesTable';

const impactColors: {
  [key in ImpactValue]: {
    color: string;
    icon: Icon;
  };
} = {
  minor: {
    color: '#2196f3',
    icon: Info,
  },
  moderate: {
    color: '#f57c00',
    icon: IssueOpened,
  },
  serious: {
    color: '#e57373',
    icon: Alert,
  },
  critical: {
    color: '#dc004e',
    icon: Stop,
  },
};
export interface ResultsTableProps {
  /**
   * array of scan results
   */
  results?: Result[];
  /**
   * if true, will hide error columns such as impact
   */
  hideErrorColumns?: boolean;
}

const ResultsTable: FC<ResultsTableProps> = ({ results, hideErrorColumns }) => {
  const columns: Column[] = useMemo(
    () => [
      {
        // Build our expander column
        id: 'expander', // Make sure it has an ID
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }: any) => (
          <span {...getToggleAllRowsExpandedProps()}>
            <Octicon icon={isAllRowsExpanded ? TriangleDown : TriangleRight} />
          </span>
        ),
        width: 50,
        Cell: ({ row }: any) => (
          <Flex
            {...row.getToggleRowExpandedProps()}
            sx={{
              pl: 2,
            }}
          >
            <Octicon icon={row.isExpanded ? ChevronDown : ChevronRight} />{' '}
          </Flex>
        ),
      },
      {
        Header: 'id',
        accessor: 'id',
        Cell: ({
          row: {
            original: { helpUrl, id },
          },
        }: any) => {
          const el = <Box css={{ whiteSpace: 'nowrap' }}>{id}</Box>;
          if (!helpUrl) {
            return el;
          }
          return <ExternalLink href={helpUrl}>{el}</ExternalLink>;
        },
      },
      {
        Header: 'impact',
        accessor: 'impact',
        Cell: ({ value }: { value: ImpactValue }) => {
          const impact = impactColors[value];
          return (
            <Flex
              sx={{
                alignItems: 'center',
                flexDirection: 'row',
                color: impact ? impact.color : undefined,
              }}
            >
              {impact && <Octicon icon={impact.icon} />}
              <Text
                sx={{
                  pl: impact ? 2 : 0,
                }}
              >
                {value}
              </Text>
            </Flex>
          );
        },
      },
      {
        Header: 'description',
        accessor: 'description',
      },
      {
        Header: 'tags',
        accessor: 'tags',
        Cell: ({ value }: { value: string[] }) => (
          <Flex
            css={{
              flexWrap: 'wrap',
            }}
          >
            {value &&
              value.map(tag => (
                <Tag
                  key={`${tag}`}
                  color="lightgrey"
                  sxStyle={{
                    mr: 1,
                    mb: 1,
                  }}
                >
                  {tag}
                </Tag>
              ))}
          </Flex>
        ),
      },
    ],
    [],
  );
  const renderRowSubComponent = useCallback(
    ({ row }) => (
      <NodesTable
        nodes={row.original.nodes}
        hideErrorColumns={hideErrorColumns}
      />
    ),
    [hideErrorColumns],
  );
  return (
    <Table
      data={
        results
          ? results.map(row => ({
              ...row,
            }))
          : []
      }
      columns={columns}
      hiddenColumns={hideErrorColumns ? ['impact'] : undefined}
      renderRowSubComponent={renderRowSubComponent}
    />
  );
};

export const ViolationsTable: FC = () => {
  const violations = useRecoilValue(axeViolations);
  return <ResultsTable results={violations} />;
};

export const PassesTable: FC = () => {
  const passes = useRecoilValue(axePasses);
  return <ResultsTable results={passes} hideErrorColumns={true} />;
};

export const IncompleteTable: FC = () => {
  const incomplete = useRecoilValue(axeIncomplete);
  return <ResultsTable results={incomplete} />;
};
