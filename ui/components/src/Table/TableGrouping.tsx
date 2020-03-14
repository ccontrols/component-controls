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
import { Flex, Text, useThemeUI } from 'theme-ui';
import { get } from '@theme-ui/css';
import Octicon, { ChevronRight, ChevronDown } from '@primer/octicons-react';

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
  }, [state]);
};
export const useExpanderColumn = (hooks: UseTableHooks<{}>) => {
  hooks.useControlledState.push(useControlledState);
  hooks.visibleColumns.push((columns, { instance }) => {
    if (!(instance.state as UseGroupByState<{}>).groupBy.length) {
      return columns;
    }

    return [
      {
        id: 'expander',
        Header: () => null,
        Cell: ({
          row,
        }: {
          row: UseExpandedRowProps<{}> &
            UseTableRowProps<{}> & {
              groupByVal: any;
            };
        }) => {
          const { theme } = useThemeUI();
          if (row.canExpand) {
            return (
              <td colSpan={row.cells.length}>
                <Flex
                  {...row.getToggleRowExpandedProps()}
                  css={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    ...get(theme, 'styles.tdgroup'),
                  }}
                >
                  <Octicon icon={row.isExpanded ? ChevronDown : ChevronRight} />{' '}
                  <Text
                    sx={{
                      mx: 2,
                    }}
                  >
                    {row.groupByVal} ({row.subRows.length})
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
