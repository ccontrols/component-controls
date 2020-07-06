/** @jsx jsx */
import { FC, useRef } from 'react';
import { jsx, Box } from 'theme-ui';
import { PageType, Document } from '@component-controls/core';
import { PageContainer } from '../PageContainer';
import { Sidebar } from '../Sidebar';
import { SideContext } from '../SideContext';
import { docToVariant } from './docToVariant';

export interface SidebarsMDXPageProps {
  /**
   * page type
   */
  type: PageType;

  /**
   * document object
   */
  doc: Document;
}

/**
 * document page - rendering with sidebars and tabs for multiple document views
 */
export const SidebarsMDXPage: FC<SidebarsMDXPageProps> = ({ type, doc }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  return (
    <Box variant={docToVariant(doc)}>
      {doc.navSidebar && <Sidebar type={type} />}
      <Box sx={{ flexGrow: 1 }} id="content">
        <PageContainer
          type={type}
          variant={`pagecontainer.${type}`}
          ref={pageRef}
        />
      </Box>
      {doc.contextSidebar && <SideContext pageRef={pageRef} />}
    </Box>
  );
};
