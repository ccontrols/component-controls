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
  StoriesDoc,
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

const createMenuItem = (
  storeProvider: StoryStore,
  doc: StoriesDoc,
  type: PageType,
  levels: string[],
  activeTab?: string,
  parent?: MenuItems,
  item?: MenuItem,
): MenuItem => {
  if (levels.length < 1) {
    return item || {};
  }
  const newItem: MenuItem = {
    id: levels[0],
    label: levels[0],
  };
  const sibling = parent && parent.find(i => i.id === newItem.id);
  if (parent && !sibling) {
    if (levels.length > 1) {
      newItem.items = [];
    } else {
      newItem.id = doc.title;
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
      const docs: Pages = storeProvider.getPageList(type);

      const menuItems = docs.reduce((acc: MenuItems, doc: StoriesDoc) => {
        const { title } = doc;
        const levels = title.split('/');
        createMenuItem(storeProvider, doc, type, levels, activeTab, acc);
        return acc;
      }, []);
      return menuItems;
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
