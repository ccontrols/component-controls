/** @jsx jsx */
import { FC, useState, useMemo, useContext } from 'react';
import { jsx, Input, Box, Heading } from 'theme-ui';

import { BlockContext, useStoryContext } from '@component-controls/blocks';
import {
  Sidebar as AppSidebar,
  ColorMode,
  SidebarContext,
  Navmenu,
  MenuItems,
  MenuItem,
  Header,
} from '@component-controls/components';
import {
  Document,
  PageType,
  Pages,
  defPageType,
} from '@component-controls/core';
import { StoryStore } from '@component-controls/store';

export interface SidebarProps {
  /**
   * title element
   */
  title?: React.ReactNode;

  /**
   * page type
   */
  type?: PageType;

  /**
   * currently active tab. Use to creae the sidemenu links
   */
  activeTab?: string;
}

type OrderedMenuItem = MenuItem & {
  order?: number;
};

type OrderedMenuItems = OrderedMenuItem[];

const createMenuItem = (
  storeProvider: StoryStore,
  doc: Document,
  type: PageType,
  levels: string[],
  activeTab?: string,
  parent?: OrderedMenuItems,
  item?: OrderedMenuItem,
): MenuItem => {
  if (levels.length < 1) {
    return item || {};
  }
  const newItem: OrderedMenuItem = {
    id: levels[0],
    label: levels[0],
  };
  const sibling = parent && parent.find(i => i.id === newItem.id);
  if (parent && !sibling) {
    if (levels.length > 1) {
      newItem.items = [];
    } else {
      newItem.id = doc.title;
      newItem.order = doc.order;
      newItem.href = storeProvider.getPagePath(type, doc.title, activeTab);
    }
    parent.push(newItem);
  }
  return createMenuItem(
    storeProvider,
    doc,
    type,
    levels.slice(1),
    activeTab,
    sibling ? sibling.items : newItem.items,
    newItem,
  );
};

/**
 * application sidebar component
 */

export const Sidebar: FC<SidebarProps> = ({
  title: propsTitle,
  type = defPageType,
  activeTab,
}) => {
  const { doc } = useStoryContext({ id: '.' });
  const { SidebarClose, responsive } = useContext(SidebarContext);
  const { storeProvider } = useContext(BlockContext);
  const config = storeProvider.config;
  const { pages } = config || {};
  const { label = '' } = pages?.[type] || {};
  const menuItems = useMemo(() => {
    if (storeProvider) {
      const sortByOrder = (items: OrderedMenuItems) => {
        return items.sort((a, b) => {
          if (a.items || b.items) {
            if (a.items) {
              a.items = sortByOrder(a.items);
            }
            if (b.items) {
              b.items = sortByOrder(b.items);
            }
            return 0;
          }
          return (a.order || 0) - (b.order || 0);
        });
      };
      const docs: Pages = storeProvider.getPageList(type);
      const menuItems = docs.reduce((acc: MenuItems, doc: Document) => {
        const { title } = doc;
        const levels = title.split('/');
        createMenuItem(storeProvider, doc, type, levels, activeTab, acc);
        return acc;
      }, []);
      const sortedItems = sortByOrder(menuItems);
      return sortedItems;
    }
    return [];
  }, [type, activeTab, storeProvider]);
  const [search, setSearch] = useState<string | undefined>(undefined);
  return (
    <AppSidebar variant="appsidebar.sidebar" id="sidebar">
      {responsive && (
        <Header sx={{ boxShadow: 'unset' }}>
          <SidebarClose />
          <ColorMode />
        </Header>
      )}
      <Box variant="appsidebar.container">
        <Heading as="h3" variant="appsidebar.heading">
          {propsTitle || label}
        </Heading>
        <Box variant="appsidebar.filtercontainer">
          <Input
            placeholder="filter..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            onClick={e => e.stopPropagation()}
          />
        </Box>
        <Navmenu
          activeItem={{ id: doc?.title }}
          search={search}
          items={menuItems}
        />
      </Box>
    </AppSidebar>
  );
};
