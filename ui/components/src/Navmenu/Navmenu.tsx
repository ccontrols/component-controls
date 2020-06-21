/** @jsx jsx */
import React, { FC, useEffect, useState } from 'react';
import { jsx, Box, Flex, Text, Button, ButtonProps } from 'theme-ui';
import { ChevronDownIcon, ChevronRightIcon } from '@primer/octicons-react';
import {
  Keyboard,
  LEFT_ARROW,
  UP_ARROW,
  RIGHT_ARROW,
  DOWN_ARROW,
} from '../Keyboard';
import { Link, LinkClassType } from '../Link';

export interface MenuItem {
  /** Unique id */
  id?: string;
  /** Label of the item */
  label?: React.ReactNode;
  /** Initial expanded state */
  expanded?: boolean;
  /** Icon in front of the label */
  icon?: React.ReactNode;
  /** Widget or icon to place at the end of the item */
  widget?: React.ReactNode;
  /** Array of child/sub-menu items */
  items?: MenuItems;
  /** href parameter for anchor type child elements */
  href?: string;
  /** event handler onClick */
  onClick?: (id: string) => void;
}

export type MenuItems = MenuItem[];

export interface NavMenuProps {
  /** Array of menu items */
  items: MenuItems;
  /** Initially active menu item */
  activeItem?: Pick<MenuItem, 'id' | 'label'>;

  /** If specified, will expand all items with chidren */
  expandAll?: boolean;

  /** Function that will be called when the user selects a menu item */
  onSelect?: (item?: MenuItem) => void;

  /** If specified, will filter the items by the search terms */
  search?: string;
}
const isActive = (
  item: MenuItem,
  active?: Pick<MenuItem, 'id' | 'label'>,
): boolean =>
  active ? item.id === active.id || item.label === active.label : false;

const hasActiveChidlren = (
  item: MenuItem,
  active?: Pick<MenuItem, 'id' | 'label'>,
): boolean => {
  if (isActive(item, active)) {
    return true;
  }
  return item.items
    ? item.items.some(t => hasActiveChidlren(t, active))
    : false;
};

const getExpandedItems = (children: MenuItems, active?: MenuItem): MenuItems =>
  children.reduce((expandedItems: MenuItems, item: MenuItem) => {
    const { items, expanded } = item;
    if (expanded || hasActiveChidlren(item, active)) {
      expandedItems.push(item);
    }
    if (items) {
      return expandedItems.concat(getExpandedItems(items, active));
    }
    return expandedItems;
  }, []);

const getCollapsibleItems = (children: MenuItems): MenuItems =>
  children.reduce((collapsibleItems: MenuItems, item: MenuItem) => {
    const { items } = item;
    let childrenCollapsibleItems: MenuItems = [];
    if (items) {
      collapsibleItems.push(item);

      childrenCollapsibleItems = getCollapsibleItems(items);
    }
    return collapsibleItems.concat(childrenCollapsibleItems);
  }, []);

const getFlatChildrenIds = (children?: MenuItems): MenuItems =>
  children
    ? children.reduce((flatChildren: MenuItems, item) => {
        flatChildren.push(item);
        if (item.items) {
          // eslint-disable-next-line no-param-reassign
          flatChildren = flatChildren.concat(getFlatChildrenIds(item.items));
        }
        return flatChildren;
      }, [])
    : [];

const getChildrenById = (
  children?: MenuItems,
  id?: string,
): MenuItems | undefined => {
  if (!children || id) {
    return undefined;
  }

  let items: MenuItems | undefined;
  children.some(item => {
    if (item.id === id || item.label === id) {
      ({ items } = item);
      return true;
    }
    if (item.items) {
      items = getChildrenById(item.items, id);

      if (items) {
        return true;
      }
    }
    return false;
  });
  return items;
};

const filterItems = (items: MenuItems, search?: string): MenuItems => {
  if (search && search.length) {
    const searchLC = search.toLowerCase();
    return items
      .map(item => Object.assign({}, item))
      .filter(item => {
        const { items: children, label } = item;
        if (
          typeof label === 'string' &&
          label.toLowerCase().indexOf(searchLC) >= 0
        ) {
          return true;
        }
        if (children) {
          const childItems = filterItems(children, search);
          // eslint-disable-next-line no-param-reassign
          item.items = childItems;
          if (childItems.length) {
            return true;
          }
        }
        return false;
      });
  }
  return items;
};

const stateFromProps = ({
  items,
  expandAll,
  activeItem,
  search,
}: Pick<NavMenuProps, 'items' | 'expandAll' | 'activeItem' | 'search'>) => {
  const filteredItems = filterItems(items, search);
  const collapsibleItems = getCollapsibleItems(filteredItems);
  let expandedItems;
  if (expandAll || (search && search.length)) {
    expandedItems = collapsibleItems;
  } else {
    expandedItems = getExpandedItems(filteredItems, activeItem);
  }

  const allExpanded =
    typeof expandAll !== 'undefined'
      ? expandAll
      : collapsibleItems.length === expandedItems.length;
  return {
    expandedItems,
    items,
    filteredItems,
    search,
    collapsibleItems,
    allExpanded,
    expandAll,
    originalExpandAll: expandAll,
  };
};
interface NavMenuState {
  expandedItems?: MenuItems;
  originalExpandAll?: boolean;
  search?: string;
  items?: MenuItems;
  filteredItems?: MenuItems;
  collapsibleItems?: MenuItems;
  allExpanded?: boolean;
  expandAll?: boolean;
}
/**
 * Hierarchical collapsible menu
 */

export const Navmenu: FC<NavMenuProps> = ({
  items,
  expandAll,
  activeItem,
  search,
  onSelect,
}) => {
  const [state, setState] = useState<NavMenuState>(
    stateFromProps({
      items,
      expandAll,
      activeItem,
      search,
    }),
  );

  useEffect(() => {
    setState(
      stateFromProps({
        items,
        expandAll,
        activeItem,
        search,
      }),
    );
  }, [items, expandAll, activeItem, search]);

  const onMenuChange = (item: MenuItem, expanded: boolean) => {
    const { expandedItems, filteredItems } = state;

    let newExpandedItems = [...(expandedItems || [])];
    if (expanded) {
      const id: string =
        item.id || (typeof item.label === 'string' ? item.label : '');
      const toBeCollapsed = [
        id,
        ...getFlatChildrenIds(getChildrenById(filteredItems, id)),
      ];
      newExpandedItems = newExpandedItems.filter(
        item =>
          toBeCollapsed.indexOf(
            item.id || (typeof item.label === 'string' ? item.label : ''),
          ) < 0,
      );
    } else {
      newExpandedItems.push(item);
    }

    setState({
      ...state,
      expandedItems: newExpandedItems,
    });
  };

  const renderItem = (item: MenuItem, level: number = 1) => {
    const { expandedItems } = state;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { items, id, label, widget, icon, onClick, ...rest } = item;
    const itemId = id || label;
    const isExpanded: boolean =
      expandedItems && itemId ? expandedItems.includes(item) : false;
    const LinkClass: LinkClassType | FC<ButtonProps> = items ? Button : Link;
    const itemKey = `item_${itemId}_${level}`;

    const isActiveItem = activeItem && activeItem.id === id;
    const isActiveParent = hasActiveChidlren(item, activeItem);
    const content = (
      <Flex
        sx={{
          background: isActiveItem ? 'active' : undefined,
          pl: level,
        }}
      >
        <LinkClass
          sx={{
            width: '100%',
            px: 3,
            py: 1,
            boxShadow: 'none',
            background: 'none',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
          onClick={(e: any) => {
            if (items) {
              e.stopPropagation();
              onMenuChange(item, isExpanded);
            } else if (typeof onSelect === 'function') {
              onSelect(item);
            }
          }}
          className={isActiveParent ? 'active' : undefined}
          {...rest}
        >
          <Flex variant="navmenu.itemcontainer">
            <Box variant="navmenu.iteminner">
              <Box variant="navmenu.labelcontainer">
                {icon && <Box variant="navmenu.labelicon">{icon}</Box>}
                {typeof label === 'string' ? (
                  <Text
                    variant="navmenu.labeltext"
                    sx={{
                      color: isActiveParent ? 'primary' : 'text',
                    }}
                  >
                    {items ? <strong>{label}</strong> : label}
                  </Text>
                ) : (
                  label
                )}
              </Box>

              {widget && <Box variant="navmenu.widget">{widget}</Box>}
              {items && (
                <Box
                  aria-label={isExpanded ? 'collapse items' : 'expand items'}
                  variant="navmenu.expandicon"
                >
                  {isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
                </Box>
              )}
            </Box>
          </Flex>
        </LinkClass>
      </Flex>
    );
    return (
      <Box key={itemKey}>
        {items ? (
          <Keyboard
            keys={[LEFT_ARROW, UP_ARROW, RIGHT_ARROW, DOWN_ARROW]}
            onKeyDown={key =>
              onMenuChange(item, [DOWN_ARROW, RIGHT_ARROW].includes(key))
            }
          >
            {content}
          </Keyboard>
        ) : (
          content
        )}
        {items &&
          isExpanded &&
          items.map(child => renderItem(child, level + 1))}
      </Box>
    );
  };
  const { filteredItems } = state;
  return (
    <Box as="nav">
      {filteredItems && filteredItems.map(item => renderItem(item, 1))}
    </Box>
  );
};
