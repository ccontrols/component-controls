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
} from '@component-controls/app-components';
import {
  StoriesDoc,
  PageType,
  Pages,
  defPageType,
} from '@component-controls/specification';
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
}

const createMenuItem = (
  storeProvider: StoryStore,
  doc: StoriesDoc,
  type: PageType,
  levels: string[],
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
      newItem.href = storeProvider.getPagePath(type, doc.title);
    }
    parent.push(newItem);
  }
  return createMenuItem(
    storeProvider,
    doc,
    type,
    levels.slice(1),
    sibling ? sibling.items : newItem.items,
    newItem,
  );
};
export const SidebarBase: FC<SidebarProps> = ({
  title: propsTitle,
  type = defPageType,
}) => {
  const { doc } = useStoryContext({ id: '.' });
  if (doc && doc.fullPage) {
    return null;
  }
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
        if (doc.menu !== false) {
          createMenuItem(storeProvider, doc, type, levels, acc);
        }
        return acc;
      }, []);
      return menuItems;
    }
    return [];
  }, [type, storeProvider]);

  const [search, setSearch] = useState<string | undefined>(undefined);
  return (
    <AppSidebar variant="appsidebar.sidebar" width={300} id="sidebar">
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

export const Sidebar: FC<SidebarProps> = props => {
  const { doc } = useStoryContext({ id: '.' });
  if (doc && doc.fullPage) {
    return null;
  }
  return <SidebarBase {...props} />;
};
