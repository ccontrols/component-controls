/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx } from 'theme-ui';
import { BlockContext } from '@component-controls/blocks';
import { PageContainer } from '../PageContainer';
import { SidebarsPage, DocPageProps } from '../SidebarsPage';
import { PageType } from '@component-controls/core';

/**
 * documentation page for current document.
 * will check if the page has a layout with sidebars or if the page is standalone.
 */
export const DocPage: FC<DocPageProps> = ({ type = 'story', ...props }) => {
  const { storeProvider, docId } = useContext(BlockContext);
  const doc = docId ? storeProvider.getStoryDoc(docId) : undefined;
  const { pages } = storeProvider.config || {};
  const page = pages ? pages[type as PageType] : undefined;

  const hasNoSideBars =
    (doc && doc.sidebars === false) || (page && page.sidebars === false);
  const isFullPage =
    (doc && doc.fullPage === true) || (page && !!page.fullPage);
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