/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Text } from 'theme-ui';
import Octicon, { ArrowLeftIcon, ArrowRightIcon } from '@primer/octicons-react';

import { Link } from '../Link';

export interface PaginationPage {
  title: string;
  link: string;
}
export interface PaginationProps {
  /**
   * link and title to previous page
   */
  prev?: PaginationPage;

  /**
   * link and title to next page
   */
  next?: PaginationPage;
}
/**
 * A pagination component, navigate previous and next page
 */
export const Pagination: FC<PaginationProps> = ({ prev, next }) => (
  <Box variant="pagination.container">
    <Box variant="pagination.pagecontainer">
      {prev && (
        <Link variant="pagination.link" href={prev.link}>
          <Box variant="pagination.prev">
            <Text variant="pagination.label">Previous</Text>
            <Box variant="pagination.linktitle">
              <Octicon icon={ArrowLeftIcon} />
              <Text variant="pagination.pagetitle">{prev.title}</Text>
            </Box>
          </Box>
        </Link>
      )}
    </Box>
    <Box variant="pagination.pagecontainer">
      {next && (
        <Link variant="pagination.link" href={next.link}>
          <Box variant="pagination.next">
            <Text variant="pagination.label">Next</Text>
            <Box variant="pagination.linktitle">
              <Text variant="pagination.pagetitle">{next.title}</Text>
              <Octicon icon={ArrowRightIcon} />
            </Box>
          </Box>
        </Link>
      )}
    </Box>
  </Box>
);
