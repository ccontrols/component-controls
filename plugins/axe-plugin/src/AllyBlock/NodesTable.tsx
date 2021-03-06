/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useMemo, useContext } from 'react';
import { jsx, Flex, Box, Label, Checkbox } from 'theme-ui';
import { NodeResult } from 'axe-core';
import {
  SyntaxHighlighter,
  Table,
  Column,
  Tag,
} from '@component-controls/components';
import { SelectionContext, tagSelectedList, trimNode } from '../state/context';

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
  const { isSelected, selection, setSelection } = useContext(SelectionContext);

  const checked = isSelected(target);
  const toggleSelection = (selector: string[]) => {
    const included = tagSelectedList(selection, selector, true);
    if (included.length) {
      setSelection(tagSelectedList(selection, selector, false));
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
  const columns: Column<NodeResult>[] = useMemo(
    () => [
      {
        Header: '',
        accessor: 'impact',
        id: 'node_target',
        width: 20,
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
        Cell: ({ value }) => {
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
        Cell: ({ value }) => {
          return (
            <Flex
              css={{
                flexWrap: 'wrap',
              }}
            >
              {value &&
                value.map(target => {
                  const selector = trimNode(target);
                  return (
                    <Tag
                      key={`${target}`}
                      color="lightgrey"
                      variant="tag.rightmargin"
                      title={selector}
                      sx={{
                        display: 'block',
                        overflow: 'hidden',
                        maxWidth: '400px',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {selector}
                    </Tag>
                  );
                })}
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
      <Table<NodeResult>
        data={nodes}
        columns={columns}
        hiddenColumns={hideErrorColumns ? ['failureSummary', 'html'] : ['html']}
      />
    </Box>
  );
};
