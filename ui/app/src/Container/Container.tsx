/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx, Box } from 'theme-ui';
import { getDocPath } from '@component-controls/core';
import { Link, Value } from '@component-controls/components';
import {
  BlockContext,
  Pagination,
  Container as BlocksContainer,
  TagsList,
} from '@component-controls/blocks';

/**
 *  application inner container for pages. Adds pagination to the blocks/Container component.
 */
export const Container: FC = ({ children }) => {
  const { storeProvider, docId } = useContext(BlockContext);
  const doc = docId ? storeProvider.getStoryDoc(docId) : undefined;
  const { author, tags } = doc || {};
  const config = storeProvider.config;
  return (
    <Box variant="container.container">
      <BlocksContainer
        author={
          author ? (
            <Box variant="container.author">
              <Value
                label="by"
                value={
                  <Link
                    href={getDocPath(
                      'author',
                      undefined,
                      config?.pages,
                      author,
                    )}
                  >
                    {author}
                  </Link>
                }
              />
            </Box>
          ) : null
        }
        secondRow={
          tags &&
          tags.length && (
            <Box variant="container.tags">
              <TagsList tags={tags} />
            </Box>
          )
        }
      >
        {children}
        <Box variant="container.pagination">
          <Pagination />
        </Box>
      </BlocksContainer>
    </Box>
  );
};
