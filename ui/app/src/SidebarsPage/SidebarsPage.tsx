import React, { FC, useContext } from 'react';
import { BlockContext } from '@component-controls/blocks';
import { SidebarsMDXPage } from './SidebarsMDXPage';
import { DocPageProps, SidebarsStoryPage } from './SidebarsStoryPage';

export const SidebarsPage: FC<DocPageProps> = ({ pagesFn, type }) => {
  const { storeProvider, docId } = useContext(BlockContext);
  const doc = docId ? storeProvider.getStoryDoc(docId) : undefined;
  if (doc && doc.MDXPage && !doc.stories?.length) {
    return <SidebarsMDXPage type={type} />;
  }
  return <SidebarsStoryPage type={type} pagesFn={pagesFn} />;
};
