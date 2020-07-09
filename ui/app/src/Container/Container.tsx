/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx, Box } from 'theme-ui';
import {
  BlockContext,
  Pagination,
  Container as BlocksContainer,
  DocumentShortItem,
} from '@component-controls/blocks';

/**
 *  application inner container for pages. Adds pagination to the blocks/Container component.
 */
export const Container: FC = ({ children }) => {
  const { storeProvider, docId } = useContext(BlockContext);
  const doc = docId ? storeProvider.getStoryDoc(docId) : undefined;
  const config = storeProvider.config;

  return (
    <Box variant="container.container">
      <Box variant="container.inforow">
        <DocumentShortItem reverse={true} doc={doc} config={config} />
      </Box>
      <BlocksContainer>
        {children}
        <Box variant="container.pagination">
          <Pagination />
        </Box>
      </BlocksContainer>
    </Box>
  );
};
