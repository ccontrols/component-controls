/* eslint-disable react/jsx-key */
import React, { FC } from 'react';
import { get } from '@theme-ui/css';
import { Box, useThemeUI } from 'theme-ui';
import { useTable, Column } from 'react-table';

export interface TableProps {
  columns: Column[];
  data: any[];
  showHeader?: boolean;
}
export const Table: FC<TableProps> = ({ columns, data, showHeader = true }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });
  const { theme } = useThemeUI();
  return (
    <Box as="table" {...getTableProps()} css={get(theme, 'styles.table')}>
      {showHeader && (
        <Box as="thead" css={get(theme, 'styles.thead')}>
          {headerGroups.map((headerGroup: any) => (
            <Box
              as="tr"
              {...headerGroup.getHeaderGroupProps()}
              css={get(theme, 'styles.tr')}
            >
              {headerGroup.headers.map((column: any) => (
                <Box
                  as="th"
                  {...column.getHeaderProps()}
                  css={get(theme, 'styles.th')}
                >
                  {column.render('Header')}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      )}
      <Box as="tbody" {...getTableBodyProps()} css={get(theme, 'styles.tbody')}>
        {rows.map((row: any) => {
          prepareRow(row);
          return (
            <Box as="tr" {...row.getRowProps()} css={get(theme, 'styles.tr')}>
              {row.cells.map((cell: any) => {
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
