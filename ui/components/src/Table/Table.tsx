/* eslint-disable react/jsx-key */
/** @jsx jsx */
import { Fragment, ReactNode, ReactElement, useEffect } from 'react';
import { Box, BoxProps, Flex, jsx } from 'theme-ui';
import memoize from 'fast-memoize';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useGroupBy,
  useExpanded,
  usePagination,
  useRowSelect,
  Column,
  Cell,
  Row,
  PluginHook,
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
  UseSortByState,
  UsePaginationState,
  SortingRule,
  UseGroupByState,
  TableState,
} from 'react-table';
import { TriangleUpIcon, TriangleDownIcon } from '@primer/octicons-react';
import { GlobalFilter } from './TableFilter';
import { useExpanderColumn } from './TableGrouping';
import { useRowSelectionColumn } from './TableRowSelection';
import { useTableLayout } from './useTableLayout';
import { TablePagination, TablePaginationProps } from './TablePagination';
const defaultColumn = memoize(() => ({
  subRows: undefined,
  accessor: '',
}));

export { Column, Cell, Row };
export type SelectedRowIds = Record<number, boolean>;
interface TableOwnProps<D extends { [key: string]: any }> {
  /**
   * the columns object as an array.
   */
  columns: Column<D>[];
  /**
   * array of data rows.
   */
  data?: D[];
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

  /**
   * initial sorting
   */
  sortBy?: Array<SortingRule<any>>;

  /**
   * enable pagination
   */
  pagination?: TablePaginationProps | boolean;
}

export type TableProps<D extends { [key: string]: any }> = TableOwnProps<D> &
  BoxProps;

/**
 * Table component using [react-table](https://github.com/tannerlinsley/react-table) to display the data.
 * Can be grouped, filtered, sorted. Themed with theme-ui for consistency.
 */
export function Table<D extends { [key: string]: any }>({
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
  sortBy,
  pagination,
  ...rest
}: TableProps<D>): ReactElement<any, any> | null {
  const plugins: PluginHook<D>[] = [
    useTableLayout,
    useGlobalFilter,
    useGroupBy,
    useSortBy,
    useExpanded,

    useExpanderColumn(itemsLabel),
  ];
  const initialState: Partial<TableState<D>> &
    Partial<UseExpandedState<Record<number, boolean>>> &
    Partial<UsePaginationState<D>> &
    Partial<UseGroupByState<D>> &
    Partial<UseSortByState<D>> &
    Partial<UseRowSelectState<Record<number, boolean>>> = {};
  if (Array.isArray(groupBy)) {
    initialState.groupBy = groupBy;
    initialState.hiddenColumns = hiddenColumns || groupBy;
  } else if (hiddenColumns !== undefined) {
    initialState.hiddenColumns = hiddenColumns;
  }
  if (Array.isArray(sortBy)) {
    initialState.sortBy = sortBy;
  }
  if (typeof expanded === 'object') {
    initialState.expanded = expanded;
  }
  if (pagination) {
    plugins.push(usePagination);
    if (typeof pagination === 'object') {
      if (typeof pagination.pageIndex === 'number') {
        initialState.pageIndex = pagination.pageIndex;
      }
      if (typeof pagination.pageSize === 'number') {
        initialState.pageSize = pagination.pageSize;
      }
    }
  }
  if (rowSelect) {
    plugins.push(useRowSelect);
    plugins.push(useRowSelectionColumn);
  }
  initialState.selectedRowIds = initialSelected;
  const options: TableOptions<D> &
    UseFiltersOptions<D> &
    UseExpandedOptions<D> &
    UsePaginationOptions<D> &
    UseGroupByOptions<D> &
    UseRowSelectOptions<D> &
    UseSortByOptions<D> &
    UseRowStateOptions<D> = {
    columns,
    data,
    defaultColumn: defaultColumn() as Column<D>,
    initialState,
    autoResetPage: !skipPageReset,
    autoResetExpanded: !skipPageReset,
    autoResetGroupBy: !skipPageReset,
    autoResetSelectedRows: !skipPageReset,
    autoResetSortBy: !skipPageReset,
    autoResetFilters: !skipPageReset,
    autoResetRowState: !skipPageReset,
  };

  const tableOptions = useTable<D>(options, ...plugins) as any;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
    rows,
    page, // Instead of using 'rows', when using pagination
    state: { pageIndex: statePageIndex, pageSize: statePageSize },
  } = tableOptions;
  const { selectedRowIds } = state;
  useEffect(() => {
    if (onSelectRowsChange) {
      onSelectRowsChange(selectedRowIds as SelectedRowIds);
    }
  }, [selectedRowIds, onSelectRowsChange]);
  return (
    <Fragment>
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
          {(page || rows).map(
            (
              row: Row &
                UseGroupByRowProps<D> & {
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
                          (cell: Cell & Partial<UseGroupByCellProps<D>>) => {
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
      {pagination && (
        <TablePagination
          {...pagination}
          pageIndex={statePageIndex}
          pageSize={statePageSize}
          {...tableOptions}
        />
      )}
    </Fragment>
  );
}
