/** @jsx jsx */
import { FC, useState, useMemo, useContext } from 'react';
import { jsx, Input, Box, Theme } from 'theme-ui';

import { BlockContext } from '@component-controls/blocks';
import {
  Sidebar as AppSidebar,
  ColorMode,
  SidebarContext,
  Navmenu,
  NavMenuProps,
  MenuItems,
  MenuItem,
  Header,
} from '@component-controls/app-components';

export interface SidebarProps {
  /**
   * title element
   */
  title?: React.ReactNode;
  /**
   * current path
   */
  kindPath?: string;
  /**
   * platform specific link class
   */
  buttonClass?: NavMenuProps['buttonClass'];
}

const createMenuItem = (
  levels: string[],
  allLevels: string[],
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
      //@ts-ignore
      newItem.to = `/docs/${allLevels.join('/')}`;
    }
    parent.push(newItem);
  }
  return createMenuItem(
    levels.slice(1),
    levels,
    sibling ? sibling.items : newItem.items,
    newItem,
  );
};
export const Sidebar: FC<SidebarProps> = ({ kindPath, buttonClass, title }) => {
  const { SidebarClose, responsive } = useContext(SidebarContext);
  const { storeProvider } = useContext(BlockContext);
  const menuItems = useMemo(() => {
    if (storeProvider) {
      const kinds: string[] = Object.keys(storeProvider.getKinds() || []);
      const menuItems = kinds.reduce((acc: MenuItems, kind: string) => {
        const levels = kind.split('/');
        createMenuItem(levels, levels, acc);
        return acc;
      }, []);
      return menuItems;
    }
    return [];
  }, [storeProvider]);

  const [search, setSearch] = useState<string | undefined>(undefined);
  return (
    <AppSidebar
      sx={{
        borderRight: (t: Theme) => `1px solid ${t.colors?.shadow}`,
      }}
      width={380}
    >
      {responsive && (
        <Header shadow={false}>
          <SidebarClose />
          <ColorMode />
        </Header>
      )}
      <Box sx={{ px: 2 }}>
        {title}
        <Box sx={{ py: 2, px: 3 }}>
          <Input
            placeholder="filter stories..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </Box>
        <Navmenu
          buttonClass={buttonClass}
          activeItem={{ id: kindPath }}
          search={search}
          items={menuItems}
        />
      </Box>
    </AppSidebar>
  );
};
