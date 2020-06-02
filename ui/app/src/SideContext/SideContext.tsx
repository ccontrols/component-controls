/** @jsx jsx */
import { FC, RefObject, useEffect, useState, useCallback } from 'react';
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
  const [items, setItems] = useState<Element[] | undefined>();
  const [activeItem, setActiveItem] = useState<Element | undefined>();

  const onScroll = useCallback(() => {
    const curScroll = window.scrollY;
    const pageScroll = pageRef?.current?.getBoundingClientRect().top || 0;
    //find first anchor element that is above the scroll position
    const curItem = items
      ? items.find(el => {
          const itemPos = el.getBoundingClientRect().top - pageScroll + 100;
          return itemPos > curScroll;
        })
      : undefined;

    if (curItem !== activeItem) {
      setActiveItem(curItem);
    }
  }, [activeItem, items, pageRef]);

  useEffect(() => {
    const links: Element[] = [];
    const pageEl = pageRef?.current;
    if (pageEl) {
      const anchors = pageEl.querySelectorAll('a[data-title]');
      if (anchors.length > 0) {
        anchors.forEach(el => {
          const href = el.getAttribute('href');
          if (href) {
            links.push(el);
          }
        });
      }
    }
    setItems(links.length ? links : undefined);
  }, [pageRef]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, false);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);
  return items && items.length > 1 ? (
    <SidebarContextProvider>
      <SidebarContext.Consumer>
        {({ SidebarClose, SidebarToggle, collapsed, responsive }) => (
          <div>
            <AppSidebar width={300} minWidth={250}>
              {responsive && (
                <Header shadow={false}>
                  <SidebarClose />
                </Header>
              )}
              <Box
                sx={{
                  px: 3,
                  borderLeft: (t: Theme) => `1px solid ${t.colors?.shadow}`,
                }}
              >
                <Flex as="nav" sx={{ flexDirection: 'column' }}>
                  {items?.map((el, index) => (
                    <NavLink
                      key={`context_link_${index}`}
                      href={el.getAttribute('href') || undefined}
                      className={el === activeItem ? 'active' : undefined}
                    >
                      {el.getAttribute('data-title')}
                    </NavLink>
                  ))}
                </Flex>
              </Box>
            </AppSidebar>
            {collapsed && (
              <SidebarToggle
                sx={{
                  position: 'fixed',
                  right: '1rem',
                  bottom: '2rem',
                  backgroundColor: 'gray',
                }}
              />
            )}
          </div>
        )}
      </SidebarContext.Consumer>
    </SidebarContextProvider>
  ) : null;
};
