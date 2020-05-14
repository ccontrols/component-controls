/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useMemo, useContext } from 'react';
import { jsx, Flex, Box, Label, Checkbox } from 'theme-ui';
import { Column } from 'react-table';
import { NodeResult } from 'axe-core';
import { SyntaxHighlighter, Table, Tag } from '@component-controls/components';

import { SelectionContext } from './SelectionContext';

export interface NodesTableProps {
  /**
   * list of nodes fromthe results
   */
  nodes?: NodeResult[];
  /**
   * if true, will hide error columns such as impact
   */
  hideErrorColumns?: boolean;
}

const SelectionCheckbox: FC<{ target: string[] }> = ({ target }) => {
  const { toggleSelection, isSelected } = useContext(SelectionContext);
  return (
    <Label>
      <Checkbox
        onChange={() => toggleSelection(target)}
        checked={isSelected(target)}
      />
    </Label>
  );
};
export const NodesTable: FC<NodesTableProps> = ({
  nodes,
  hideErrorColumns,
}) => {
  const columns: Column[] = useMemo(
    () => [
      {
        Header: '',
        accessor: 'selected',
        width: 80,
        Cell: ({
          row: {
            original: { target },
          },
        }: {
          row: { original: NodeResult };
        }) => <SelectionCheckbox target={target} />,
      },
      {
        Header: 'summary',
        accessor: 'failureSummary',
      },
      {
        Header: 'html',
        accessor: 'html',
        Cell: ({ value }: { value: string }) => {
          return (
            <Flex
              sx={{
                '& .token-line': {
                  whiteSpace: 'break-spaces',
                },
              }}
            >
              <SyntaxHighlighter language="markup">{value}</SyntaxHighlighter>
            </Flex>
          );
        },
      },
      {
        Header: 'target',
        accessor: 'target',
        Cell: ({ value }: { value: string[] }) => {
          return (
            <Flex
              css={{
                flexWrap: 'wrap',
              }}
            >
              {value &&
                value.map(target => (
                  <Tag
                    key={`${target}`}
                    color="lightgrey"
                    sxStyle={{
                      mr: 1,
                      mb: 1,
                    }}
                  >
                    {target}
                  </Tag>
                ))}
            </Flex>
          );
        },
      },
    ],
    [],
  );
  return (
    <Box
      sx={{
        backgroundColor: 'gray',
      }}
    >
      <Table
        data={nodes}
        columns={columns}
        hiddenColumns={
          hideErrorColumns ? ['failureSummary', 'target'] : ['target']
        }
      />
    </Box>
  );
};
