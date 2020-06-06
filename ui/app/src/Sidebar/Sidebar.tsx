/** @jsx jsx */
import { FC, useState, useMemo, useContext } from 'react';
import { jsx, Input, Box, Heading, Flex, Theme } from 'theme-ui';

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
import { StoryDocs } from '@component-controls/specification';

export interface SidebarProps {
  /**
   * title element
   */
  title?: React.ReactNode;
}

const createMenuItem = (
  basePath: string,
  levels: string[],
  allLevels: string[],
  route?: string,
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
      newItem.id = allLevels.join('/');
      newItem.href =
        route || `/${basePath}${allLevels.join('/').toLowerCase()}/`;
    }
    parent.push(newItem);
  }
  return createMenuItem(
    basePath,
    levels.slice(1),
    levels,
    route,
    sibling ? sibling.items : newItem.items,
    newItem,
  );
};
export const SidebarBase: FC<SidebarProps> = ({ title: propsTitle }) => {
  const { doc } = useStoryContext({ id: '.' });
  if (doc && doc.fullPage) {
    return null;
  }
  const { SidebarClose, responsive } = useContext(SidebarContext);
  const { storeProvider } = useContext(BlockContext);
  const config = storeProvider.config;
  const { siteTitle, basePath = '' } = config?.options || {};
  const menuItems = useMemo(() => {
    if (storeProvider) {
      const docs: StoryDocs = storeProvider.getDocs() || {};
      const docTitles: string[] = Object.keys(docs);
      const menuItems = docTitles.reduce((acc: MenuItems, title: string) => {
        const levels = title.split('/');
        const doc = docs[title];
        if (doc.menu !== false) {
          createMenuItem(basePath, levels, levels, doc?.route, acc);
        }
        return acc;
      }, []);
      return menuItems;
    }
    return [];
  }, [storeProvider, basePath]);

  const [search, setSearch] = useState<string | undefined>(undefined);
  return (
    <AppSidebar
      sx={{
        borderRight: (t: Theme) => `1px solid ${t.colors?.shadow}`,
      }}
      width={300}
      id="sidebar"
    >
      {responsive && (
        <Header shadow={false}>
          <SidebarClose />
          <ColorMode />
        </Header>
      )}
      <Flex sx={{ px: 2, flexDirection: 'column' }}>
        <Heading as="h3">{propsTitle || siteTitle}</Heading>
        <Box sx={{ py: 2, px: 3 }}>
          <Input
            placeholder="filter stories..."
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
      </Flex>
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
