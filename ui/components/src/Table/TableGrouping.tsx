/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
import React from 'react';
import {
  TableState,
  UseGroupByState,
  UseTableHooks,
  UseExpandedRowProps,
  UseTableRowProps,
} from 'react-table';
import { Flex, Text } from 'theme-ui';
import { ChevronRightIcon, ChevronDownIcon } from '@primer/octicons-react';

type GroupByState = TableState &
  Partial<UseGroupByState<Record<string, unknown>>>;
const useControlledState = (state: GroupByState) => {
  return React.useMemo(() => {
    if (state?.groupBy?.length) {
      return {
        ...state,
        hiddenColumns: [
          ...(state.hiddenColumns as any[]),
          ...state.groupBy,
        ].filter((d, i, all) => all.indexOf(d) === i),
      };
    }
    return state;
  }, [state]);
};
export const useExpanderColumn = (itemsLabel: string) => (
  hooks: UseTableHooks<Record<string, unknown>>,
): void => {
  hooks.useControlledState.push(useControlledState);
  hooks.visibleColumns.push((columns, { instance }) => {
    if (
      !(instance.state as UseGroupByState<Record<string, unknown>>).groupBy
        .length
    ) {
      return columns;
    }

    return [
      {
        id: 'expander',
        width: 20,
        Header: () => null,
        Cell: ({
          row,
        }: {
          row: UseExpandedRowProps<Record<string, unknown>> &
            UseTableRowProps<Record<string, unknown>> & {
              groupByVal: any;
            };
        }) => {
          if (row.canExpand) {
            return (
              <td colSpan={row.cells.length}>
                <Flex
                  variant="styles.tdgroup"
                  {...row.getToggleRowExpandedProps()}
                >
                  {row.isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}{' '}
                  <Text
                    sx={{
                      mx: 2,
                    }}
                  >
                    {row.groupByVal ?? ''} (
                    {`${row.subRows.length} ${itemsLabel}`})
                  </Text>
                </Flex>
              </td>
            );
          }

          return null;
        },
      },
      ...columns,
    ];
  });
};
