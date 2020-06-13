/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useMemo } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { jsx, Flex, Box, Label, Checkbox } from 'theme-ui';
import { Column } from 'react-table';
import { NodeResult } from 'axe-core';
import { SyntaxHighlighter, Table, Tag } from '@component-controls/components';
import { isSelected, selectionList } from './RecoilContext';

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
  const checked = useRecoilValue(isSelected(target));
  const [selection, setSelection] = useRecoilState(selectionList);
  const toggleSelection = (selector: string[]) => {
    if (selector.some(s => selection.includes(s))) {
      setSelection(selection.filter((e: string) => !selector.includes(e)));
    } else {
      setSelection([...selection, ...selector]);
    }
  };
  return (
    <Label>
      <Checkbox onChange={() => toggleSelection(target)} checked={checked} />
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
                    variant="tag.rightmargin"
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
        backgroundColor: 'shadow',
      }}
    >
      <Table
        data={nodes}
        columns={columns}
        hiddenColumns={
          hideErrorColumns ? ['failureSummary', 'targets'] : ['targets']
        }
      />
    </Box>
  );
};
