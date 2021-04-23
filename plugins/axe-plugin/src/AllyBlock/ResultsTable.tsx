/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useMemo, useCallback, useContext } from 'react';
import { jsx, Flex, Box, Text } from 'theme-ui';
import {
  AlertIcon,
  StopIcon,
  Icon,
  InfoIcon,
  IssueOpenedIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@primer/octicons-react';
import { Result, ImpactValue } from 'axe-core';
import {
  Table,
  Column,
  UseExpandedRowProps,
  Row,
  ExternalLink,
  Tag,
} from '@component-controls/components';
import { AxeContext } from '../state/context';
import { NodesTable } from './NodesTable';

const impactColors: {
  [key in 'minor' | 'moderate' | 'serious' | 'critical']: {
    color: string;
    icon: Icon;
  };
} = {
  minor: {
    color: 'status_disabled',
    icon: InfoIcon,
  },
  moderate: {
    color: 'status_todo',
    icon: IssueOpenedIcon,
  },
  serious: {
    color: 'status_skipped',
    icon: AlertIcon,
  },
  critical: {
    color: 'status_failed',
    icon: StopIcon,
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

  /**
   * default expanded rows, by id
   */
  expanded?: Record<string, boolean>;
}

const ResultsTable: FC<ResultsTableProps> = ({
  results,
  hideErrorColumns,
  expanded,
}) => {
  const renderRowSubComponent = useCallback(
    ({ row }) => (
      <NodesTable
        nodes={row.original.nodes}
        hideErrorColumns={hideErrorColumns}
      />
    ),
    [hideErrorColumns],
  );
  const table = useMemo(() => {
    const columns: Column<Result>[] = [
      {
        id: 'selector',
        accessor: 'id',
        Cell: ({ row }: { row: UseExpandedRowProps<Result> & Row<Result> }) => (
          <Flex
            {...row.getToggleRowExpandedProps()}
            sx={{
              pl: 2,
            }}
          >
            {row.isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
          </Flex>
        ),
      },
      {
        Header: 'id',
        accessor: 'nodes',
        Cell: ({
          row: {
            original: { helpUrl, id },
          },
        }) => {
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
          const impact = value ? impactColors[value] : undefined;
          return (
            impact && (
              <Tag color={impact.color}>
                <impact.icon />
                <Text
                  sx={{
                    pl: impact ? 2 : 0,
                  }}
                >
                  {value}
                </Text>
              </Tag>
            )
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
                <Tag key={`${tag}`} color="gray" variant="tag.rightmargin">
                  {tag}
                </Tag>
              ))}
          </Flex>
        ),
      },
    ];
    return (
      <Table<Result>
        itemsLabel="a11y tests"
        data={results || []}
        expanded={expanded}
        columns={columns}
        hiddenColumns={hideErrorColumns ? ['impact'] : undefined}
        renderRowSubComponent={renderRowSubComponent}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results?.length, hideErrorColumns, renderRowSubComponent]);

  return table;
};

export const ViolationsTable: FC = () => {
  const {
    results: { violations },
  } = useContext(AxeContext);
  const expanded = violations.reduce(
    (acc, _, index) => ({ ...acc, [`${index}`]: true }),
    {},
  );
  // by default expand all to display all errors
  return <ResultsTable results={violations} expanded={expanded} />;
};

export const PassesTable: FC = () => {
  const {
    results: { passes },
  } = useContext(AxeContext);
  return <ResultsTable results={passes} hideErrorColumns={true} />;
};

export const IncompleteTable: FC = () => {
  const {
    results: { incomplete },
  } = useContext(AxeContext);

  return <ResultsTable results={incomplete} />;
};
