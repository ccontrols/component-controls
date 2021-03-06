/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Select, Button, Input } from 'theme-ui';
import { UsePaginationInstanceProps } from 'react-table';

const runtimeTemplate = (str: string, obj: Record<string, any>) =>
  str.replace(/\${(.*?)}/g, (x, g) => obj[g]);

export interface TablePaginationProps {
  /**
   * 'Page ${pageIndex} of ${pageLength}' template
   */
  pageTemplate?: string;

  /**
   * ability to hide the page xx of yy block
   */
  pageVisible?: boolean;
  /**
   * string template for the page size selection
   * '${pageSize} rows',
   */
  pageSizeTemplate?: string;

  /**
   * ability to hide the page size selector
   */
  pageSizeVisible?: boolean;
  /**
   * string for the go to page label
   * 'Go to page:'
   */
  goToPageTemplate?: string;
  /**
   * ability to hide the go to page block
   */
  goToPageVisible?: boolean;
  /**
   * initial page index when pagination is enabled
   */
  pageIndex?: number;

  /**
   * initial page size when pagination is enabled
   */
  pageSize?: number;
}
export const TablePagination: FC<UsePaginationInstanceProps<{
  [key: string]: any;
}> &
  TablePaginationProps> = props => {
  const {
    gotoPage,
    canPreviousPage,
    previousPage,
    nextPage,
    canNextPage,
    pageCount,
    setPageSize,
    pageIndex = 0,
    pageSize = 10,
    pageOptions,
    pageTemplate = 'Page ${pageIndex} of ${pageLength}',
    pageVisible = false,
    pageSizeTemplate = '${pageSize} rows',
    pageSizeVisible = false,
    goToPageVisible = false,
    goToPageTemplate = 'Go to page:',
  } = props;
  const pageResolvedTemplate = runtimeTemplate(pageTemplate, {
    pageIndex: pageIndex + 1,
    pageLength: pageOptions.length,
  });

  return (
    <Box variant="table.pagination.container">
      {(canPreviousPage || canNextPage) && (
        <Box variant="table.pagination.navigation">
          <Box variant="table.pagination.navigation.button">
            <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {'<<'}
            </Button>
          </Box>
          <Box variant="table.pagination.navigation.button">
            <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {'<'}
            </Button>
          </Box>
          <Box variant="table.pagination.navigation.button">
            <Button onClick={() => nextPage()} disabled={!canNextPage}>
              {'>'}
            </Button>
          </Box>
          <Box variant="table.pagination.navigation.button">
            <Button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {'>>'}
            </Button>
          </Box>
        </Box>
      )}
      {pageVisible && (
        <Box variant="table.pagination.page">{pageResolvedTemplate}</Box>
      )}
      {goToPageVisible && (
        <Box variant="table.pagination.interactive">
          {goToPageTemplate}
          <Input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
          />
        </Box>
      )}
      {pageSizeVisible && (
        <Box variant="table.pagination.pagesize">
          <Select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                {runtimeTemplate(pageSizeTemplate, {
                  pageSize,
                })}
              </option>
            ))}
          </Select>
        </Box>
      )}
    </Box>
  );
};
