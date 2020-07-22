/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC } from 'react';
import {
  Pagination as PaginationControl,
  PaginationPage,
} from '@component-controls/components';
import { useNavigationInfo, useStore } from '../context';

/**
 * displays automatic pagination to the next/previous document of this same type.
 */
export const Pagination: FC = () => {
  const { nextPage, prevPage } = useNavigationInfo();
  const store = useStore();
  const prevLink: PaginationPage | undefined = prevPage
    ? {
        title: prevPage.title,
        link: store.getPagePath(prevPage.type, prevPage?.title) || '',
      }
    : undefined;
  const nextLink: PaginationPage | undefined = nextPage
    ? {
        title: nextPage.title,
        link: store.getPagePath(nextPage.type, nextPage?.title) || '',
      }
    : undefined;

  return <PaginationControl prev={prevLink} next={nextLink} />;
};
