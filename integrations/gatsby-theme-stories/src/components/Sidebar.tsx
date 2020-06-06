/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { Sidebar as AppSidebar } from '@component-controls/app';

export interface SidebarProps {
  docPath?: string;
}

export const Sidebar: FC<SidebarProps> = ({ docPath }) => {
  return <AppSidebar docPath={docPath} />;
};
