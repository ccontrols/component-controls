/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { FC } from 'react';
import {
  Pagination,
  Container as BlocksContainer,
} from '@component-controls/blocks';

/**
 *  application inner container for pages. Adds pagination to the blocks/Container component.
 */
export const Container: FC = ({ children }) => {
  return (
    <Box variant="container.container">
      <BlocksContainer>
        {children}
        <Box variant="container.pagination">
          <Pagination />
        </Box>
      </BlocksContainer>
    </Box>
  );
};
