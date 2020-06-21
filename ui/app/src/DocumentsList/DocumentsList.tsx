/** @jsx jsx */
import { FC, useContext, useState, useMemo } from 'react';
import { jsx, Select, Label, Box } from 'theme-ui';
import { Pages } from '@component-controls/core';
import { BlockContext, DocumentItem } from '@component-controls/blocks';

export interface DocumentsListProps {
  /**
   * list of document pages
   */
  pages: Pages;
}

type SortOrder = 'date' | 'dateModified' | 'title';
/**
 * displays a list of the provided document pages
 */
export const DocumentsList: FC<DocumentsListProps> = ({ pages }) => {
  const { storeProvider } = useContext(BlockContext);
  const [sortOrder, setSortOrder] = useState<SortOrder>('date');
  const sortedPages = useMemo(() => {
    return pages.sort((p1, p2) => {
      const v1: any | undefined = p1[sortOrder];
      const v2: any | undefined = p2[sortOrder];
      if (v1 && v2) {
        return sortOrder.startsWith('date')
          ? -v1.localeCompare(v2)
          : v1.localeCompare(v2);
      }
      if (!v1 && !v2) {
        return 0;
      }
      return v1 ? -1 : 1;
    });
  }, [pages, sortOrder]);
  return (
    <Box variant="documentslist.container">
      <Box variant="documentslist.sortrow">
        <Label variant="documentslist.sortlabel" htmlFor="sortorder">
          Sort by:
        </Label>
        <Select
          variant="documentslist.sortselect"
          name="sortorder"
          onChange={e => setSortOrder(e.target.value as SortOrder)}
          value={sortOrder}
        >
          <option value="date">By date created</option>
          <option value="dateModified">By last updated</option>
          <option value="title">By title</option>
        </Select>
      </Box>
      <Box as="ul" variant="documentslist.list">
        {sortedPages.map(page => (
          <Box as="li" key={page?.title} variant="documentslist.listitem">
            <DocumentItem
              config={storeProvider.config}
              link={storeProvider.getPagePath(page.type, page.title)}
              page={page}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
