/** @jsx jsx */
import { FC, ReactNode, useState, useMemo, useContext } from 'react';
import { jsx, Input, Box, Heading } from 'theme-ui';
import { NoteIcon, BookIcon } from '@primer/octicons-react';
import {
  useStore,
  useCurrentDocument,
  useDocByType,
  useActiveTab,
  useCurrentStory,
} from '@component-controls/store';
import {
  Sidebar as AppSidebar,
  ColorMode,
  SidebarContext,
  Tree,
  TreeItems,
  TreeItem,
  Header,
  ActionBar,
  ActionItems,
} from '@component-controls/components';
import {
  Document,
  DocType,
  Pages,
  defDocType,
  Store,
  getStoryPath,
  formatStoryPath,
  getDocPath,
  PageConfiguration,
  StaticMenuItems,
} from '@component-controls/core';

export interface SidebarProps {
  /**
   * title element
   */
  title?: ReactNode;

  /**
   * document type
   */
  type?: DocType;
}

const createMenuItem = (
  store: Store,
  doc: Document,
  type: DocType,
  levels: string[],
  page: PageConfiguration,
  activeTab?: string,
  parent?: TreeItems,
  item?: TreeItem,
): TreeItem => {
  if (levels.length < 1) {
    return item || {};
  }
  const { storyPaths, collapseSingle } = page?.sideNav || {};
  const storyPath = (storyId: string, activeTab?: string): string => {
    const story = store.stories[storyId];
    if (!story) {
      return '';
    }
    const doc = story.doc ? store.docs[story.doc] : undefined;
    return formatStoryPath(getStoryPath(story.id, doc, store, activeTab));
  };

  const documentPath = (
    type: DocType | undefined = defDocType,
    name: string,
    activeTab?: string,
  ): string => {
    const doc = store.docs[name];
    return getDocPath(type, doc, store, name, activeTab);
  };
  const newItem: TreeItem = {
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
        if (doc.stories.length > 1 || !collapseSingle) {
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
          newItem.id = doc.stories[0];
          newItem.icon = <NoteIcon verticalAlign="middle" />;
          //only one story -direct link to it
          newItem.href = storyPath(doc.stories[0], activeTab);
        }
      } else {
        newItem.icon = <BookIcon verticalAlign="middle" />;
        // no stories - link to document
        newItem.href = documentPath(type, doc.title, activeTab);
      }
    }
    const findIndex = parent.findIndex(item => item.label === newItem.label);
    if (findIndex > -1) {
      parent[findIndex] = newItem;
    } else {
      parent.push(newItem);
    }
  }
  return createMenuItem(
    store,
    doc,
    type,
    levels.slice(1),
    page,
    activeTab,
    sibling ? sibling.items : newItem.items,
    newItem,
  );
};

const staticMenusToMenuItems = (menu: StaticMenuItems): TreeItems =>
  menu
    .filter(item => item)
    .map(item => {
      return typeof item === 'string'
        ? { label: item }
        : {
            label: item.name,
            items: item.menu ? staticMenusToMenuItems(item.menu) : undefined,
          };
    });

const findMenuItem = (
  items: TreeItems,
  label: string,
): TreeItem | undefined => {
  for (const item of items) {
    if (item.label === label) {
      return item;
    }
    const child = item.items ? findMenuItem(item.items, label) : undefined;
    if (child) {
      return child;
    }
  }
  return undefined;
};
/**
 * application sidebar component
 */

export const Sidebar: FC<SidebarProps> = ({
  title: propsTitle,
  type = defDocType,
}) => {
  const { SidebarClose, responsive } = useContext(SidebarContext);
  const store = useStore();
  const activeTab = useActiveTab();
  const { title: docId } = useCurrentDocument() || {};
  const story = useCurrentStory();
  const activeId = story ? story.id : docId;
  const docs: Pages = useDocByType(type);
  const [search, setSearch] = useState<string | undefined>(undefined);
  const node = useMemo(() => {
    const { config } = store;
    const { pages, menu, sidebar = [] } = config;
    const page: PageConfiguration = pages?.[type] || {};
    const { label = propsTitle } = page;
    let menuItems = Array.isArray(menu) ? staticMenusToMenuItems(menu) : [];
    if (store) {
      menuItems = docs.reduce((acc: TreeItems, doc: Document) => {
        const { title, menu } = doc;
        if (menu) {
          const item = findMenuItem(acc, menu);
          if (item) {
            if (!item.items) {
              item.items = [];
            }
            createMenuItem(
              store,
              doc,
              type,
              [title],
              page,
              activeTab,
              item.items,
            );
            return acc;
          }
        }
        const levels = title.split('/');
        createMenuItem(store, doc, type, levels, page, activeTab, acc);
        return acc;
      }, menuItems);
    }
    const actions: ActionItems = [];
    if (label) {
      actions.push({
        node: (
          <Heading as="h3" variant="appsidebar.items">
            {label}
          </Heading>
        ),
        id: 'title',
      });
    }
    actions.push({
      node: (
        <Box variant="appsidebar.items">
          <Input
            sx={{
              // fix ie 11
              lineHeight: 'normal',
            }}
            placeholder="filter..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            onClick={e => e.stopPropagation()}
          />
        </Box>
      ),
      id: 'filter',
      hidden: true,
    });
    actions.push(...sidebar);
    return (
      <AppSidebar variant="appsidebar.sidebar" id="sidebar">
        {responsive && (
          <Header sx={{ boxShadow: 'unset' }}>
            <SidebarClose />
            <ColorMode />
          </Header>
        )}
        <Box variant="appsidebar.container">
          <ActionBar themeKey="appsidebar" actions={actions} />
          <Tree
            as="nav"
            activeItem={{ id: activeId }}
            search={search}
            items={menuItems}
          />
        </Box>
      </AppSidebar>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, activeTab, docs, propsTitle, responsive, search, store, type]);
  return node;
};
