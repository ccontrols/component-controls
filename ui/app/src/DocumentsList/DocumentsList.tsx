/** @jsx jsx */
import { FC } from 'react';
import { jsx, Select, Label, Box } from 'theme-ui';
import { Pages, DocType } from '@component-controls/core';
import {
  DocumentItem,
  useGetDocumentPath,
  useDocSort,
  DocSortOrder,
} from '@component-controls/blocks';

export interface DocumentsListProps {
  /**
   * list of document pages
   */
  pages: Pages;
  /**
   * document type
   */
  type: DocType;
}

/**
 * displays a list of the provided document pages
 */
export const DocumentsList: FC<DocumentsListProps> = ({ pages, type }) => {
  const getDocumentPath = useGetDocumentPath();
  const [sortOrder, setSortOrder] = useDocSort(type);

  return (
    <Box variant="documentslist.container">
      <Box variant="documentslist.sortrow">
        <Label variant="documentslist.sortlabel" htmlFor="sortorder">
          Sort by:
        </Label>
        <Select
          variant="documentslist.sortselect"
          name="sortorder"
          onChange={e => setSortOrder(e.target.value as DocSortOrder)}
          value={sortOrder}
        >
          <option value="date">By date created</option>
          <option value="dateModified">By last updated</option>
          <option value="title">By title</option>
        </Select>
      </Box>
      <Box as="ul" variant="documentslist.list">
        {pages.map(page => (
          <Box as="li" key={page?.title} variant="documentslist.listitem">
            <DocumentItem
              link={getDocumentPath(page.type, page.title)}
              doc={page}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
