/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box } from 'theme-ui';
import { PageType } from '@component-controls/specification';
import { PageContainer } from '@component-controls/blocks';

import { Sidebar } from '../Sidebar';

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
  return (
    <Box variant="appsidebarpage.mdxcontainer">
      <Sidebar type={type} />
      <Box sx={{ flexGrow: 1 }} id="content">
        <PageContainer variant={`pagecontainer.${type}`} />
      </Box>
    </Box>
  );
};
