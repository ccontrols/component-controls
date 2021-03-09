/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Themed } from 'theme-ui';
import { DocType, getCategoryPath } from '@component-controls/core';
import { Link } from '@component-controls/components';
import {
  useDocument,
  useDocsByCategory,
  useStore,
} from '@component-controls/store';
import { PageContainer } from '../PageContainer';
import { DocumentsList } from '../DocumentsList';

export interface CategoryPageProps {
  type: DocType;
  category: any;
}
export const CategoryPage: FC<CategoryPageProps> = ({ type, category }) => {
  const store = useStore();
  const { config } = store;
  const pageConfig = config.pages?.[type] || {};
  const pages = useDocsByCategory(type, category);
  const customPage = useDocument(category);
  const Page =
    customPage && customPage.type === type ? customPage.MDXPage : undefined;
  return (
    <PageContainer
      type={type}
      variant="categorypage.pagecontainer"
      id="content"
    >
      <Box variant="categorypage.titlecontainer">
        <Themed.h1>{category}</Themed.h1>
        <Link
          href={`${getCategoryPath(store, type)}`}
        >{`All ${pageConfig.label}`}</Link>
      </Box>
      {Page && (
        <Box variant="categorypage.mdxcontainer">
          <Page />
        </Box>
      )}
      <Box variant="categorypage.listcontainer">
        <DocumentsList pages={pages} type={type} />
      </Box>
    </PageContainer>
  );
};
