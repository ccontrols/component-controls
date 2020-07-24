import React, { FC } from 'react';
import { useCurrentDocument } from '@component-controls/store';
import { SidebarsMDXPage } from './SidebarsMDXPage';
import { DocPageProps, SidebarsStoryPage } from './SidebarsStoryPage';

export const SidebarsPage: FC<Omit<DocPageProps, 'doc'>> = ({ type }) => {
  const doc = useCurrentDocument();
  if (doc && doc.MDXPage && !doc.stories?.length) {
    return <SidebarsMDXPage type={type} doc={doc} />;
  }
  return doc ? <SidebarsStoryPage type={type} doc={doc} /> : null;
};
