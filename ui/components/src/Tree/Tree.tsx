/** @jsx jsx */
import { FC, useEffect, useState } from 'react';
import { jsx, Box, Flex, Text, Button, BoxProps, ButtonProps } from 'theme-ui';
import { ChevronDownIcon, ChevronRightIcon } from '@primer/octicons-react';
import {
  Keyboard,
  LEFT_ARROW,
  UP_ARROW,
  RIGHT_ARROW,
  DOWN_ARROW,
} from '../Keyboard';
import { Link, LinkClassType } from '../Link';
import {
  TreeItem,
  TreeState,
  TreeOwnProps,
  stateFromProps,
  getFlatChildrenIds,
  getChildrenById,
  hasActiveChidlren,
} from './tree-utils';

export type TreeProps = TreeOwnProps & BoxProps;

/**
 * Hierarchical collapsible tree structure
 */

export const Tree: FC<TreeProps> = ({
  items,
  expandAll,
  activeItem,
  search,
  onSelect,
  onExpandCollapse,
  arrowPosition = 'end',
  iconExpanded = <ChevronDownIcon />,
  iconCollapsed = <ChevronRightIcon />,
  indentPixels = 8,
  ...rest
}) => {
  const [state, setState] = useState<TreeState>(
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
  const onMenuChange = (item: TreeItem, expanded: boolean) => {
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
    if (typeof onExpandCollapse === 'function') {
      onExpandCollapse(newExpandedItems.length);
    }
  };

  const renderItem = (item: TreeItem, level = 0) => {
    const { expandedItems } = state;
    const { items: itemItems, id, label, widget, icon, ...rest } = item;
    const itemId = id || label;
    const isExpanded: boolean =
      expandedItems && itemId ? expandedItems.includes(item) : false;
    const LinkClass: LinkClassType | FC<ButtonProps> = itemItems
      ? Button
      : Link;
    const itemKey = `item_${itemId}_${level}`;

    const isActiveItem = activeItem && activeItem.id === id;
    const isActiveParent = hasActiveChidlren(item, activeItem);
    const expandIcon = itemItems && (
      <Box
        aria-label={isExpanded ? 'collapse items' : 'expand items'}
        variant="tree.expandicon"
      >
        {isExpanded ? iconExpanded : iconCollapsed}
      </Box>
    );
    const content = (
      <Flex
        sx={{
          background: isActiveItem ? 'active' : undefined,
          pl: `${level * indentPixels}px`,
        }}
      >
        <Flex variant="tree.itemcontainer">
          <Flex
            sx={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}
            className={isActiveItem && !itemItems ? 'selected' : undefined}
          >
            <LinkClass
              variant="tree.link"
              {...rest}
              onClick={(e: any) => {
                if (itemItems) {
                  e.stopPropagation();
                  onMenuChange(item, isExpanded);
                } else if (typeof onSelect === 'function') {
                  onSelect(item);
                }
              }}
            >
              <Box variant="tree.labelcontainer">
                {arrowPosition === 'start' ? expandIcon : null}
                {icon && <Box variant="tree.labelicon">{icon}</Box>}
                {typeof label === 'string' ? (
                  <Text
                    variant="tree.labeltext"
                    sx={{
                      color: isActiveParent ? 'primary' : 'text',
                    }}
                  >
                    {itemItems ? <strong>{label}</strong> : label}
                  </Text>
                ) : typeof label === 'function' ? (
                  label({ isExpanded, ...item })
                ) : (
                  label
                )}
              </Box>
            </LinkClass>
          </Flex>
          <Flex sx={{ flexDirection: 'row', alignItems: 'center', px: 2 }}>
            {widget && <Box variant="tree.widget">{widget}</Box>}
            {arrowPosition === 'end' ? expandIcon : null}
          </Flex>
        </Flex>
      </Flex>
    );
    return (
      <Box key={itemKey}>
        {itemItems ? (
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
        {itemItems &&
          isExpanded &&
          itemItems.map(child => renderItem(child, level + 1))}
      </Box>
    );
  };
  const { filteredItems } = state;

  return (
    <Box {...rest}>
      {filteredItems && filteredItems.map(item => renderItem(item, 1))}
    </Box>
  );
};
