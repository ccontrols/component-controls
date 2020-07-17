/** @jsx jsx */
import { FC, RefObject, useState, useCallback, useEffect } from 'react';
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
      const { top = 0 } = pageRef.current.getBoundingClientRect() || {};
      const topScroll = window.scrollY + top - 80;
      //find first anchor element that is below the scroll position
      const curItem = items.findIndex((item, index) => {
        const el = pageRef.current?.querySelector(`#${item.id}`);
        const nextItem = index < items.length - 1 && items[index + 1];
        const nextEl =
          nextItem && pageRef.current?.querySelector(`#${nextItem.id}`);
        if (el) {
          const { top: elTop } = el.getBoundingClientRect();
          const { top: nextTop = 0 } = nextEl
            ? nextEl.getBoundingClientRect()
            : {};
          return elTop > topScroll || nextTop > window.innerHeight;
        }
        return false;
      });
      setActiveItem(curItem);
    }
  }, [items, pageRef]);
  useEffect(() => {
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

  useEffect(() => {
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
                      sx={{ pl: `${4 + (el.level - 1) * 6}px` }}
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
