/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box } from 'theme-ui';
import { DocType } from '@component-controls/core';
import { Title, Link } from '@component-controls/components';
import {
  useDocument,
  usePagesByCategory,
  useConfig,
} from '@component-controls/blocks';
import { PageContainer } from '../PageContainer';
import { DocumentsList } from '../DocumentsList';

export interface CategoryPageProps {
  type: DocType;
  category: any;
}
export const CategoryPage: FC<CategoryPageProps> = ({ type, category }) => {
  const config = useConfig();
  const pageConfig = config?.pages?.[type] || {};
  const pages = usePagesByCategory(type, category);
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
        <Title>{category}</Title>
        <Link
          href={`/${pageConfig.basePath}`}
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
