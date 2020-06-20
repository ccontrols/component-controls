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
import Octicon, {
  ChevronRightIcon,
  ChevronDownIcon,
} from '@primer/octicons-react';

type GroupByState = TableState & Partial<UseGroupByState<{}>>;
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
  }, [state, state?.groupBy?.length]);
};
export const useExpanderColumn = (itemsLabel: string) => (
  hooks: UseTableHooks<{}>,
) => {
  hooks.useControlledState.push(useControlledState);
  hooks.visibleColumns.push((columns, { instance }) => {
    if (!(instance.state as UseGroupByState<{}>).groupBy.length) {
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
          row: UseExpandedRowProps<{}> &
            UseTableRowProps<{}> & {
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
                  <Octicon
                    icon={row.isExpanded ? ChevronDownIcon : ChevronRightIcon}
                  />{' '}
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
