/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC } from 'react';
import {
  Pagination as PaginationControl,
  PaginationPage,
} from '@component-controls/components';
import { useNavigationInfo } from '@component-controls/store';

/**
 * displays automatic pagination to the next/previous document of this same type.
 */
export const Pagination: FC = () => {
  const { nextPage, prevPage } = useNavigationInfo();
  const prevLink: PaginationPage | undefined = prevPage
    ? {
        title: prevPage.title,
        link: prevPage.link || '',
      }
    : undefined;
  const nextLink: PaginationPage | undefined = nextPage
    ? {
        title: nextPage.title,
        link: nextPage.link,
      }
    : undefined;

  return <PaginationControl prev={prevLink} next={nextLink} />;
};
