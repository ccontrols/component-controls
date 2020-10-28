/* eslint-disable react/jsx-key */
/** @jsx jsx */
import { FC, Fragment, ReactNode, useEffect } from 'react';
import { Box, BoxProps, Flex, jsx } from 'theme-ui';
import memoize from 'fast-memoize';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useGroupBy,
  useExpanded,
  useRowSelect,
  Column,
  Cell,
  Row,
  TableOptions,
  UseFiltersOptions,
  UseExpandedOptions,
  UsePaginationOptions,
  UseRowSelectOptions,
  UseSortByOptions,
  UseRowStateOptions,
  UseGroupByOptions,
  UseGroupByCellProps,
  UseGroupByRowProps,
  UseExpandedState,
  UseRowSelectState,
  UseGroupByState,
  TableState,
} from 'react-table';
import { TriangleUpIcon, TriangleDownIcon } from '@primer/octicons-react';
import { GlobalFilter } from './TableFilter';
import { useExpanderColumn } from './TableGrouping';
import { useRowSelectionColumn } from './TableRowSelection';
import { useTableLayout } from './useTableLayout';
const defaultColumn = memoize(() => ({
  subRows: undefined,
  accessor: '',
}));

export type SelectedRowIds = Record<number, boolean>;
interface TableOwnProps {
  /**
   * the columns object as an array.
   */
  columns: Column<Record<string, unknown>>[];
  /**
   * array of data rows.
   */
  data?: any[];
  /**
   * show or hide the header element.
   */
  header?: boolean;
  /**
   * enable.disable sorting.
   */
  sorting?: boolean;
  /**
   * enable/disable filtering.
   */
  filtering?: boolean;
  /**
   * string label for 'items' - used in the filter placeholder and grouping header.
   */
  itemsLabel?: string;
  /**
   * field to be grouped by.
   */
  groupBy?: string[];
  /**
   * list of columns to hide.
   */
  hiddenColumns?: string[];

  /**
   * if true, will enable row selection
   */
  rowSelect?: boolean;

  /**
   * initially selected rows
   */
  initialSelected?: SelectedRowIds;

  /**
   * callback when selected rows change
   */
  onSelectRowsChange?: (selected: SelectedRowIds) => void;

  /**
   * object listing the initially expanded rows.
   */
  expanded?: {
    [key: string]: boolean;
  };

  /**
   * reset state update while update table data
   */
  skipPageReset?: boolean;
  /**
   * callback to render a SubComponent row
   */
  renderRowSubComponent?: (props: { row: Row }) => ReactNode;
}

export type TableProps = TableOwnProps & BoxProps;

/**
 * Table component. Uses [react-table](https://github.com/tannerlinsley/react-table) to display the data.
 * Can be grouped, filtered, sorted. Themed with theme-ui for consistency.
 */
export const Table: FC<TableProps> = ({
  columns,
  data = [],
  header = true,
  sorting = false,
  filtering = false,
  itemsLabel = 'properties',
  groupBy,
  expanded,
  hiddenColumns,
  skipPageReset,
  renderRowSubComponent,
  initialSelected = {},
  onSelectRowsChange,
  rowSelect,
  ...rest
}) => {
  const plugins = [
    useTableLayout,
    useGlobalFilter,
    useGroupBy,
    useSortBy,
    useExpanded,
    useRowSelect,
    useExpanderColumn(itemsLabel),
  ];
  if (rowSelect) {
    plugins.push(useRowSelectionColumn);
  }
  const initialState: Partial<TableState<Record<string, unknown>>> &
    Partial<UseExpandedState<Record<string, unknown>>> &
    Partial<UseGroupByState<Record<string, unknown>>> &
    Partial<UseRowSelectState<Record<string, unknown>>> = {};
  if (Array.isArray(groupBy)) {
    initialState.groupBy = groupBy;
    initialState.hiddenColumns = hiddenColumns || groupBy;
  } else if (hiddenColumns !== undefined) {
    initialState.hiddenColumns = hiddenColumns;
  }
  if (typeof expanded === 'object') {
    initialState.expanded = expanded;
  }
  initialState.selectedRowIds = initialSelected;
  const options: TableOptions<Record<string, unknown>> &
    UseFiltersOptions<Record<string, unknown>> &
    UseExpandedOptions<Record<string, unknown>> &
    UsePaginationOptions<Record<string, unknown>> &
    UseGroupByOptions<Record<string, unknown>> &
    UseRowSelectOptions<Record<string, unknown>> &
    UseSortByOptions<Record<string, unknown>> &
    UseRowStateOptions<Record<string, unknown>> = {
    columns,
    data,
    defaultColumn: defaultColumn() as Column<Record<string, unknown>>,
    initialState,
    autoResetPage: !skipPageReset,
    autoResetExpanded: !skipPageReset,
    autoResetGroupBy: !skipPageReset,
    autoResetSelectedRows: !skipPageReset,
    autoResetSortBy: !skipPageReset,
    autoResetFilters: !skipPageReset,
    autoResetRowState: !skipPageReset,
  };

  const tableOptions = useTable(options, ...plugins) as any;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = tableOptions;
  const { selectedRowIds } = state;
  useEffect(() => {
    if (onSelectRowsChange) {
      onSelectRowsChange(selectedRowIds as SelectedRowIds);
    }
  }, [selectedRowIds, onSelectRowsChange]);
  return (
    <Box as="table" variant="styles.table" {...getTableProps()} {...rest}>
      {header && (
        <Box as="thead" variant="styles.thead">
          {headerGroups.map((headerGroup: any) => (
            <Box as="tr" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <Box
                  as="th"
                  variant="styles.th"
                  {...column.getHeaderProps(
                    sorting ? column.getSortByToggleProps() : undefined,
                  )}
                >
                  <Flex
                    sx={{
                      flexDirection: 'row',
                      alignItems: 'center ',
                    }}
                  >
                    <Box sx={{ mr: 1 }}>{column.render('Header')}</Box>
                    {sorting &&
                      column.isSorted &&
                      (column.isSortedDesc ? (
                        <TriangleDownIcon />
                      ) : (
                        <TriangleUpIcon />
                      ))}
                  </Flex>
                </Box>
              ))}
            </Box>
          ))}
          {filtering && (
            <Box as="tr" variant="styles.thead.tr">
              <Box
                as="th"
                variant="styles.th"
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                colSpan={visibleColumns.length}
                sx={{
                  textAlign: 'left',
                }}
              >
                <GlobalFilter
                  itemsLabel={itemsLabel}
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={state.globalFilter}
                  setGlobalFilter={setGlobalFilter}
                />
              </Box>
            </Box>
          )}
        </Box>
      )}
      <Box as="tbody" variant="styles.tbody" {...getTableBodyProps()}>
        {rows.map(
          (
            row: Row &
              UseGroupByRowProps<Record<string, unknown>> & {
                isExpanded?: boolean;
              },
          ) => {
            prepareRow(row);
            const { key, ...rowProps } = row.getRowProps();
            return (
              <Fragment key={key}>
                <Box variant="styles.tr" as="tr" {...rowProps}>
                  {row.isGrouped
                    ? row.cells[0].render('Aggregated')
                    : row.cells.map(
                        (
                          cell: Cell &
                            Partial<
                              UseGroupByCellProps<Record<string, unknown>>
                            >,
                        ) => {
                          return (
                            <Box
                              as="td"
                              variant="styles.td"
                              {...cell.getCellProps()}
                            >
                              {cell.render('Cell')}
                            </Box>
                          );
                        },
                      )}
                </Box>
                {row.isExpanded && (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {renderRowSubComponent
                        ? renderRowSubComponent({ row })
                        : null}
                    </td>
                  </tr>
                )}
              </Fragment>
            );
          },
        )}
      </Box>
    </Box>
  );
};
