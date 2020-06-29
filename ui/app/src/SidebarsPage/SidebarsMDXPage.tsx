/** @jsx jsx */
import { FC, useRef } from 'react';
import { jsx, Box } from 'theme-ui';
import { PageType } from '@component-controls/core';
import { PageContainer } from '../PageContainer';
import { Sidebar } from '../Sidebar';
import { SideContext } from '../SideContext';

export interface SidebarsMDXPageProps {
  /**
   * page type
   */
  type: PageType;
}

/**
 * document page - rendering with sidebars and tabs for multiple document views
 */
export const SidebarsMDXPage: FC<SidebarsMDXPageProps> = ({ type }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  return (
    <Box variant="appsidebarpage.mdxcontainer">
      <Sidebar type={type} />
      <Box sx={{ flexGrow: 1 }} id="content">
        <PageContainer
          type={type}
          variant={`pagecontainer.${type}`}
          ref={pageRef}
        />
      </Box>
      <SideContext pageRef={pageRef} />
    </Box>
  );
};
