/** @jsx jsx */
import { FC } from 'react';
import { jsx, Select, Label, Box } from 'theme-ui';
import {
  Pages,
  DocType,
  getDocPath,
  defDocType,
} from '@component-controls/core';
import { useDocSort, DocSortOrder, useStore } from '@component-controls/store';
import { DocumentItem } from '@component-controls/blocks';

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
  const store = useStore();
  const [sortOrder, setSortOrder] = useDocSort(type);
  return (
    <Box variant="documentslist.container">
      <Box variant="documentslist.sortrow">
        <Label variant="documentslist.sortlabel" htmlFor="sortorder">
          Sort by:
        </Label>
        <Select
          variant="documentslist.sortselect"
          aria-label="select sort order"
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
        {pages.map(doc => (
          <Box as="li" key={doc.title} variant="documentslist.listitem">
            <DocumentItem
              showImage={true}
              item={{
                ...doc,
                link: getDocPath(doc.type || defDocType, doc, store, doc.title),
                authorLink: doc.author
                  ? getDocPath('author', undefined, store, doc.author)
                  : undefined,
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
