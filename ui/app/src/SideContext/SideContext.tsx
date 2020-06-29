/** @jsx jsx */
import { FC, RefObject, useState, useCallback, useLayoutEffect } from 'react';
import { jsx, Box, NavLink } from 'theme-ui';
import {
  Sidebar as AppSidebar,
  SidebarContext,
  SidebarContextProvider,
  Header,
} from '@component-controls/components';

export interface SideContext {
  pageRef?: RefObject<HTMLDivElement>;
}
interface ScrollElement {
  href: string;
  title: string | null;
  id: string | null;
  level: number;
}

export const SideContext: FC<SideContext> = ({ pageRef }) => {
  const [items, setItems] = useState<ScrollElement[]>([]);
  const [activeItem, setActiveItem] = useState<number>(-1);
  const onScroll = useCallback(() => {
    if (pageRef?.current) {
      const curScroll =
        window.scrollY +
        (pageRef.current.getBoundingClientRect().top || 0) -
        80;

      //find first anchor element that is above the scroll position
      const curItem = items.findIndex(item => {
        const el = pageRef.current?.querySelector(`#${item.id}`);
        if (el) {
          const { top } = el.getBoundingClientRect();
          return top > curScroll;
        }
        return false;
      });
      setActiveItem(curItem);
    }
  }, [items, pageRef]);
  useLayoutEffect(() => {
    const links: ScrollElement[] = [];
    const pageEl = pageRef?.current;
    if (pageEl) {
      const anchors = pageEl.querySelectorAll('a[data-title]');
      if (anchors.length > 0) {
        anchors.forEach(el => {
          const href = el.getAttribute('href');
          const id = el.getAttribute('data-id');
          if (href && id) {
            links.push({
              href,
              id,
              title: el.getAttribute('data-title'),
              level: parseInt(el.getAttribute('data-level') || '1'),
            });
          }
        });
      }
    }
    setItems(links);
  }, [pageRef]);

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll, false);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);
  return items.length ? (
    <SidebarContextProvider>
      <SidebarContext.Consumer>
        {({ SidebarClose, SidebarToggle, collapsed, responsive }) => (
          <div>
            <AppSidebar id="contextbar">
              {responsive && (
                <Header sx={{ boxShadow: 'unset' }}>
                  <SidebarClose />
                </Header>
              )}
              <Box variant="sidecontext.container">
                <Box as="nav" variant="sidecontext.nav">
                  {items?.map((el, index) => (
                    <NavLink
                      variant="sidecontext.navlink"
                      key={`context_link_${index}`}
                      href={el.href}
                      // eslint-disable-next-line no-mixed-operators
                      sx={{ pl: `${4 + (el.level - 1) * 2}px` }}
                      className={index === activeItem ? 'active' : undefined}
                    >
                      {el.title}
                    </NavLink>
                  ))}
                </Box>
              </Box>
            </AppSidebar>
            {collapsed && <SidebarToggle variant="sidecontext.toggle" />}
          </div>
        )}
      </SidebarContext.Consumer>
    </SidebarContextProvider>
  ) : null;
};
