/** @jsx jsx */
import { FC, useState, useMemo, useContext } from 'react';
import { jsx, Input, Box, Heading } from 'theme-ui';
import { NoteIcon, BookIcon, FileIcon } from '@primer/octicons-react';

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
  Story,
  DocType,
  Pages,
  defDocType,
} from '@component-controls/core';
import { StoryStore } from '@component-controls/store';

export interface SidebarProps {
  /**
   * title element
   */
  title?: React.ReactNode;

  /**
   * document type
   */
  type?: DocType;

  /**
   * currently active tab. Use to creae the sidemenu links
   */
  activeTab?: string;
}
const createMenuItem = (
  storeProvider: StoryStore,
  doc: Document,
  type: DocType,
  levels: string[],
  storyPaths: boolean,
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

      if (storyPaths && doc.stories && doc.stories.length) {
        if (doc.stories.length >= 1) {
          // multiple stories - each with a link
          newItem.items = doc.stories.map(storyId => {
            const story = storeProvider.getStory(storyId) as Story;
            return {
              id: story.id,
              label: story.name,
              icon: <NoteIcon verticalAlign="middle" />,
              href: storeProvider.getStoryPath(storyId, activeTab),
            };
          });
        } else {
          newItem.icon = <FileIcon verticalAlign="middle" />;
          //only one story -direct link to it
          newItem.href = storeProvider.getStoryPath(doc.stories[0], activeTab);
        }
      } else {
        newItem.icon = <BookIcon verticalAlign="middle" />;
        // no stories - link to document
        newItem.href = storeProvider.getPagePath(type, doc.title, activeTab);
      }
    }
    parent.push(newItem);
  }
  return createMenuItem(
    storeProvider,
    doc,
    type,
    levels.slice(1),
    storyPaths,
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
  type = defDocType,
  activeTab,
}) => {
  const { doc } = useStoryContext({ id: '.' });
  const { SidebarClose, responsive } = useContext(SidebarContext);
  const { storeProvider } = useContext(BlockContext);
  const config = storeProvider.config;
  const { pages } = config || {};
  const { label = '', storyPaths = false } = pages?.[type] || {};
  const menuItems = useMemo(() => {
    if (storeProvider) {
      const docs: Pages = storeProvider.getPageList(type);
      const menuItems = docs.reduce((acc: MenuItems, doc: Document) => {
        const { title } = doc;
        const levels = title.split('/');
        createMenuItem(
          storeProvider,
          doc,
          type,
          levels,
          storyPaths,
          activeTab,
          acc,
        );
        return acc;
      }, []);
      return menuItems;
    }
    return [];
  }, [type, activeTab, storeProvider, storyPaths]);
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
