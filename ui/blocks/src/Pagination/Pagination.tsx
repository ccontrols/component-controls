/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC } from 'react';
import {
  Pagination as PaginationControl,
  PaginationPage,
} from '@component-controls/components';
import { useStoryContext } from '../context';

/**
 * displays automatic pagination to the next/previous document of this same type.
 */
export const Pagination: FC = () => {
  const { doc, storeProvider } = useStoryContext({ id: '.' });
  if (doc) {
    const prevDoc = storeProvider.getPrevPage(doc.type, doc.title);
    const nextDoc = storeProvider.getNextPage(doc.type, doc.title);
    const prevLink: PaginationPage | undefined = prevDoc
      ? {
          title: prevDoc.title,
          link: storeProvider.getPagePath(prevDoc.type, prevDoc?.title),
        }
      : undefined;
    const nextLink: PaginationPage | undefined = nextDoc
      ? {
          title: nextDoc.title,
          link: storeProvider.getPagePath(nextDoc.type, nextDoc?.title),
        }
      : undefined;

    return <PaginationControl prev={prevLink} next={nextLink} />;
  }
  return null;
};
