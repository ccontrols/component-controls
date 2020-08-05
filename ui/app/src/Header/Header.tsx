/** @jsx jsx */
import { FC, useContext, useMemo } from 'react';
import { jsx, Box } from 'theme-ui';
import { DocType, getDocTypePath } from '@component-controls/core';
import { ActionBar, ActionItems } from '@component-controls/components';

import {
  ColorMode,
  SidebarContext,
  Header as AppHeader,
} from '@component-controls/components';
import {
  useConfig,
  useDocTypeCount,
  useCurrentDocument,
} from '@component-controls/store';
import { Search } from '@component-controls/blocks';

export interface HeaderProps {
  toolbar?: {
    left?: ActionItems;
    right?: ActionItems;
  };
}
/**
 * application header component
 */
export const Header: FC<HeaderProps> = ({ toolbar = {} }) => {
  const { SidebarToggle, collapsed, responsive } = useContext(SidebarContext);
  const docCounts = useDocTypeCount();
  const config = useConfig();
  const doc = useCurrentDocument();
  const { pages } = config || {};
  const leftActions: ActionItems = useMemo(() => {
    const actions: ActionItems = [
      { node: 'Home', href: '/', 'aria-label': 'go to home page', id: 'home' },
    ];
    const finalActions = pages
      ? [
          ...actions,
          ...Object.keys(pages)
            .map(type => {
              const docType = type as DocType;
              return { page: pages[docType], docType };
            })
            .filter(({ page, docType }) => {
              return page.topMenu && docCounts[docType];
            })
            .map(({ page }) => ({
              id: page.label?.toLowerCase(),
              'aria-label': `go to page ${page.label}`,
              href: getDocTypePath(page),
              node: page.label,
            })),
        ]
      : actions;
    return toolbar.left ? [...finalActions, ...toolbar.left] : finalActions;
  }, [pages, toolbar.left, docCounts]);

  const rightActions: ActionItems = useMemo(() => {
    const actions: ActionItems = [
      { node: <Search />, id: 'search' },
      { node: <ColorMode />, id: 'colormode' },
    ];
    return toolbar.right ? [...toolbar.right, ...actions] : actions;
  }, [toolbar.right]);
  return (
    <AppHeader>
      <Box variant="appheader.container">
        {doc?.navSidebar && collapsed && <SidebarToggle />}
        <ActionBar themeKey="toolbar" actions={leftActions} />
      </Box>
      <Box variant="appheader.container">
        {!responsive && <ActionBar themeKey="toolbar" actions={rightActions} />}
      </Box>
    </AppHeader>
  );
};
