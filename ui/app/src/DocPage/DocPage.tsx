/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx } from 'theme-ui';
import { BlockContext } from '@component-controls/blocks';
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
  const { storeProvider, docId } = useContext(BlockContext);
  if (category) {
    return <CategoryPage type={type} category={category} />;
  }

  const doc = docId ? storeProvider.getStoryDoc(docId) : undefined;

  const hasNoSideBars = doc && !doc.navSidebar && !doc.contextSidebar;
  const isFullPage = doc && doc.fullPage;
  if (hasNoSideBars || isFullPage) {
    return (
      <PageContainer
        type={type}
        variant={`pagecontainer.${isFullPage ? 'full' : type}`}
        id="content"
      />
    );
  }
  return <SidebarsPage type={type} {...props} />;
};
