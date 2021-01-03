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
  offset: number;
}

export const SideContext: FC<SideContext> = ({ pageRef }) => {
  const [items, setItems] = useState<ScrollElement[]>([]);
  const [activeItem, setActiveItem] = useState<number>(-1);
  const windRef = pageRef?.current;
  const onScroll = useCallback(() => {
    if (windRef) {
      const { top = 0 } = windRef.getBoundingClientRect() || {};
      const topScroll = window.scrollY + top - 80;
      //find first anchor element that is below the scroll position
      const curItem = items.findIndex((item, index) => {
        const el = windRef?.querySelector(`#${item.id}`);
        if (el) {
          const nextItem = index < items.length - 1 && items[index + 1];
          const nextEl = nextItem && windRef?.querySelector(`#${nextItem.id}`);
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
  }, [items, windRef]);
  useEffect(() => {
    if (windRef) {
      const links: ScrollElement[] = [];
      const anchors = windRef.querySelectorAll('a[data-title]');
      if (anchors.length > 0) {
        anchors.forEach(el => {
          if (!el.closest('.story-render-container')) {
            const href = el.getAttribute('href');
            const id = el.getAttribute('data-id');
            const level = parseInt(el.getAttribute('data-level') || '1');
            const title = el.getAttribute('data-title');
            const offset = (el as HTMLElement).offsetTop;
            if (href && id && title && level < 4) {
              links.push({
                href,
                id,
                title,
                level,
                offset,
              });
            }
          }
        });
      }
      if (!links.length) {
        setItems([]);
      } else {
        const minLevel = links.reduce(
          (m, l) => Math.min(m, l.level),
          links[0].level,
        );
        setItems(links.map(l => ({ ...l, level: l.level - (minLevel - 1) })));
      }
    } else {
      setItems([]);
    }
  }, [windRef]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window) {
      window.addEventListener('scroll', onScroll, {
        capture: false,
        passive: true,
      });
    }
    onScroll();
    return () => {
      if (typeof window !== 'undefined' && window) {
        window.removeEventListener('scroll', onScroll);
      }
    };
  }, [onScroll]);
  return items.length > 1 ? (
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
                      variant={`sidecontext.navlink.${el.level}`}
                      key={`context_link_${index}`}
                      href={el.href}
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
