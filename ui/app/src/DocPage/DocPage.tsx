/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { useCurrentDocument, useTheme } from '@component-controls/store';
import { PageContainer } from '../PageContainer';
import { SidebarsPage, DocPageProps } from '../SidebarsPage';
import { CategoryPage } from '../CategoryPage';

/**
 * documentation page for current document.
 * will check if the page has a layout with sidebars or if the page is standalone.
 */
export const DocPage: FC<Omit<DocPageProps, 'doc'> & { category?: string }> = ({
  type = 'story',
  category,
  ...props
}) => {
  const doc = useCurrentDocument();
  const theme = useTheme();
  if (category) {
    return <CategoryPage type={type} category={category} />;
  }
  const hasNoSideBars = !doc?.navSidebar && !doc?.contextSidebar;
  const isFullPage = doc?.fullPage;
  if (hasNoSideBars || isFullPage) {
    const variant = isFullPage
      ? 'full'
      : theme?.pagecontainer?.[type] || 'default';
    return (
      <PageContainer
        type={type}
        variant={`pagecontainer.${variant}`}
        id="content"
      />
    );
  }
  return <SidebarsPage type={type} {...props} />;
};
