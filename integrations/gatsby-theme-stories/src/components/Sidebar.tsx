/** @jsx jsx */
import { FC, useState, useMemo, useContext } from 'react';
import { jsx, Input, LinkProps, Box, Theme } from 'theme-ui';

import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby';
import { StoriesKind } from '@component-controls/specification';
import {
  Sidebar as AppSidebar,
  ColorMode,
  SidebarContext,
  Navmenu,
  MenuItems,
  MenuItem,
  Header,
} from '@component-controls/app-components';

import { useSiteMetadata } from '../hooks/use-site-metadata';

const Link: FC<LinkProps> = props => (
  //@ts-ignore
  <GatsbyLink
    {...props}
    activeClassName="active"
    sx={{
      color: 'inherit',
      '&.active': {
        borderLeft: (t: Theme) => `4px solid ${t?.colors?.accent}`,
        color: 'white',
      },
      ':hover': {
        backgroundColor: 'shadow',
      },
    }}
  />
);
export interface SidebarProps {
  kindPath?: string;
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
export const Sidebar: FC<SidebarProps> = ({ kindPath }) => {
  const { siteTitle } = useSiteMetadata();
  const { SidebarClose, responsive } = useContext(SidebarContext);
  const data = useStaticQuery(graphql`
    query {
      allStoryKind {
        edges {
          node {
            title
          }
        }
      }
    }
  `);
  const kinds = data.allStoryKind.edges;

  const menuItems = useMemo(() => {
    const menuItems = kinds.reduce(
      (acc: MenuItems, { node: kind }: { node: StoriesKind }) => {
        const levels = kind.title.split('/');
        createMenuItem(levels, levels, acc);
        return acc;
      },
      [],
    );
    return menuItems;
  }, [kinds]);

  const [search, setSearch] = useState<string | undefined>(undefined);
  return (
    <AppSidebar
      sx={{ borderRight: (t: Theme) => `1px solid ${t.colors?.shadow}` }}
      width={380}
    >
      {responsive && (
        <Header shadow={false}>
          <SidebarClose />
          <ColorMode />
        </Header>
      )}
      <Box sx={{ px: 2 }}>
        {siteTitle}
        <Box sx={{ py: 2, px: 3 }}>
          <Input
            placeholder="filter stories..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </Box>
        <Navmenu
          buttonClass={Link}
          activeItem={{ id: kindPath }}
          search={search}
          items={menuItems}
        />
      </Box>
    </AppSidebar>
  );
};
