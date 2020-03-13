/* eslint-disable react/jsx-key */
/** @jsx jsx */
import { FC } from 'react';
import { Box, BoxProps, Flex, useThemeUI, jsx } from 'theme-ui';
import { get } from '@theme-ui/css';
import memoize from 'fast-memoize';
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  Column,
  Row,
  PluginHook,
  TableOptions,
  UseFiltersOptions,
} from 'react-table';
import Octicon, { ChevronUp, ChevronDown } from '@primer/octicons-react';
import { DefaultColumnFilter, GlobalFilter, filterTypes } from './TableFilter';

const defaultColumn = memoize(() => ({
  Filter: () => DefaultColumnFilter,
  subRows: undefined,
}));

interface TableOwnProps {
  columns: Column[];
  data?: any[];
  header?: boolean;
  sorting?: boolean;
  filtering?: boolean;
  itemsLabel?: string;
}

export type TableProps = TableOwnProps & BoxProps;
export const Table: FC<TableProps> = ({
  columns,
  data = [],
  header = true,
  sorting = false,
  filtering = false,
  itemsLabel = 'properties',
  ...rest
}) => {
  const plugins: PluginHook<any>[] = [useFilters, useGlobalFilter, useSortBy];
  const options: TableOptions<{}> & UseFiltersOptions<{}> = {
    columns,
    data,
    defaultColumn: defaultColumn() as Column,
  };

  if (filtering) {
    options.filterTypes = filterTypes();
  }
  if (sorting) {
    plugins.push();
  }
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
  const { theme } = useThemeUI();
  return (
    <Box
      as="table"
      {...getTableProps()}
      css={get(theme, 'styles.table')}
      {...rest}
    >
      {header && (
        <Box as="thead" css={get(theme, 'styles.thead')}>
          {headerGroups.map((headerGroup: any) => (
            <Box as="tr" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <Box
                  as="th"
                  {...column.getHeaderProps(
                    sorting ? column.getSortByToggleProps() : undefined,
                  )}
                  css={get(theme, 'styles.th')}
                >
                  <Flex
                    sx={{
                      flexDirection: 'row',
                      alignItems: 'center ',
                    }}
                  >
                    <Box sx={{ mr: 1 }}>{column.render('Header')}</Box>
                    {sorting && column.isSorted && (
                      <Octicon
                        icon={column.isSortedDesc ? ChevronDown : ChevronUp}
                      />
                    )}
                  </Flex>
                  {filtering && (
                    <div>
                      {column.canFilter ? column.render('Filter') : null}
                    </div>
                  )}
                </Box>
              ))}
            </Box>
          ))}
          {filtering && (
            <Box as="tr">
              <th
                colSpan={visibleColumns.length}
                style={{
                  ...get(theme, 'styles.th'),
                  textAlign: 'left',
                }}
              >
                <GlobalFilter
                  itemsLabel={itemsLabel}
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={state.globalFilter}
                  setGlobalFilter={setGlobalFilter}
                />
              </th>
            </Box>
          )}
        </Box>
      )}
      <Box as="tbody" {...getTableBodyProps()} css={get(theme, 'styles.tbody')}>
        {rows.map((row: Row) => {
          prepareRow(row);
          return (
            <Box as="tr" {...row.getRowProps()} css={get(theme, 'styles.tr')}>
              {row.cells.map(cell => {
                return (
                  <Box
                    as="td"
                    {...cell.getCellProps()}
                    css={get(theme, 'styles.td')}
                  >
                    {cell.render('Cell')}
                  </Box>
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
