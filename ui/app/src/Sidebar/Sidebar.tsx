/** @jsx jsx */
import { FC, useState, useMemo, useContext } from 'react';
import { jsx, Input, Box, Heading } from 'theme-ui';
import { NoteIcon, BookIcon, FileIcon } from '@primer/octicons-react';
import {
  useStore,
  useCurrentDocument,
  useDocByType,
  useConfig,
} from '@component-controls/store';
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
  DocType,
  Pages,
  defDocType,
  RunConfiguration,
  StoriesStore,
  getStoryPath,
  getDocPath,
} from '@component-controls/core';

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
  store: StoriesStore,
  config: RunConfiguration,
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
  const storyPath = (storyId: string, activeTab?: string): string => {
    const story = store.stories[storyId];
    if (!story) {
      return '';
    }
    const doc = story.doc ? store.docs[story.doc] : undefined;
    return getStoryPath(story.id, doc, config.pages, activeTab);
  };

  const documentPath = (
    type: DocType | undefined = defDocType,
    name: string,
    activeTab?: string,
  ): string => {
    const doc = store.docs[name];
    return getDocPath(type, doc, config?.pages, name, activeTab);
  };
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
            const story = store.stories[storyId];
            return {
              id: story.id,
              label: story.name,
              icon: <NoteIcon verticalAlign="middle" />,
              href: storyPath(storyId, activeTab),
            };
          });
        } else {
          newItem.icon = <FileIcon verticalAlign="middle" />;
          //only one story -direct link to it
          newItem.href = storyPath(doc.stories[0], activeTab);
        }
      } else {
        newItem.icon = <BookIcon verticalAlign="middle" />;
        // no stories - link to document
        newItem.href = documentPath(type, doc.title, activeTab);
      }
    }
    parent.push(newItem);
  }
  return createMenuItem(
    store,
    config,
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
  const { SidebarClose, responsive } = useContext(SidebarContext);
  const store = useStore();
  const { title: docId } = useCurrentDocument() || {};

  const config = useConfig() || {};
  const { pages } = config;
  const { label = '', storyPaths = false } = pages?.[type] || {};
  const docs: Pages = useDocByType(type);
  const menuItems = useMemo(() => {
    if (store) {
      const menuItems = docs.reduce((acc: MenuItems, doc: Document) => {
        const { title } = doc;
        const levels = title.split('/');
        createMenuItem(
          store,
          config,
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
  }, [type, activeTab, store, config, storyPaths, docs]);
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
        <Navmenu activeItem={{ id: docId }} search={search} items={menuItems} />
      </Box>
    </AppSidebar>
  );
};
