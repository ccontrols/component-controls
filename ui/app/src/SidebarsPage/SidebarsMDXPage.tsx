/** @jsx jsx */
import { FC, useRef } from 'react';
import { jsx, Box } from 'theme-ui';
import { DocType, Document } from '@component-controls/core';
import { PageContainer } from '../PageContainer';
import { Sidebar } from '../Sidebar';
import { SideContext } from '../SideContext';
import { docToVariant } from './docToVariant';

export interface SidebarsMDXPageProps {
  /**
   * document type
   */
  type: DocType;

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
  const layout = doc.layout;
  return (
    <Box variant={docToVariant(doc)}>
      {layout?.navSidebar && <Sidebar type={type} />}
      <Box sx={{ flexGrow: 1 }} id="content">
        <PageContainer
          type={type}
          variant={`pagecontainer.${type}`}
          ref={pageRef}
        />
      </Box>
      {layout?.contextSidebar && <SideContext pageRef={pageRef} />}
    </Box>
  );
};
