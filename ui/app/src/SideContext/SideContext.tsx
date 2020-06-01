/** @jsx jsx */
import { FC, ReactNode, RefObject, useEffect, useState } from 'react';
import { jsx, Box, NavLink, Flex, Theme } from 'theme-ui';

import {
  Sidebar as AppSidebar,
  SidebarContext,
  SidebarContextProvider,
  Header,
} from '@component-controls/app-components';

export interface SideContext {
  pageRef?: RefObject<HTMLDivElement>;
}

export const SideContext: FC<SideContext> = ({ pageRef }) => {
  const [items, setItems] = useState<ReactNode[] | undefined>();
  useEffect(() => {
    const links: ReactNode[] = [];
    const pageEl = pageRef?.current;
    if (pageEl) {
      const anchors = pageEl.querySelectorAll('a[data-title]');
      if (anchors.length > 0) {
        anchors.forEach((anchor, index) => {
          const href = anchor.getAttribute('href');
          if (href) {
            links.push(
              <NavLink key={`context_link_${index}`} href={href}>
                {anchor.getAttribute('data-title')}
              </NavLink>,
            );
          }
        });
      }
    }
    setItems(links.length ? links : undefined);
  }, [pageRef]);
  return (
    <SidebarContextProvider>
      <SidebarContext.Consumer>
        {({ SidebarClose, responsive }) => (
          <AppSidebar width={380}>
            {responsive && (
              <Header shadow={false}>
                <SidebarClose />
              </Header>
            )}
            <Box
              sx={{
                px: 2,
                borderLeft: (t: Theme) => `1px solid ${t.colors?.shadow}`,
              }}
            >
              <Flex sx={{ flexDirection: 'column' }}>{items}</Flex>
            </Box>
          </AppSidebar>
        )}
      </SidebarContext.Consumer>
    </SidebarContextProvider>
  );
};
