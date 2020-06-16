import React, { FC, useContext } from 'react';
import { Pages } from '@component-controls/core';
import { BlockContext } from '@component-controls/blocks';
import { DocumentsListItem } from './DocumentsListItem';

export interface DocumentsListProps {
  /**
   * list of document pages
   */
  pages: Pages;
}

/**
 * displays a list of the provided document pages
 */
export const DocumentsList: FC<DocumentsListProps> = ({ pages }) => {
  const { storeProvider } = useContext(BlockContext);
  return (
    <ul>
      {pages.map(page => (
        <li key={page?.title}>
          <DocumentsListItem
            config={storeProvider.config}
            link={storeProvider.getPagePath(page.type, page.title)}
            page={page}
          />
        </li>
      ))}
    </ul>
  );
};
