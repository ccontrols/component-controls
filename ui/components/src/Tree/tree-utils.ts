import { ReactNode } from 'react';

type NavLabelFn = (props: TreeItem & { isExpanded: boolean }) => ReactNode;

export type TreeItems = TreeItem[];

export type TreeItem = {
  /** Unique id */
  id?: string;
  /** Label of the item */
  label?: ReactNode | NavLabelFn;
  /** Initial expanded state */
  expanded?: boolean;
  /** Icon in front of the label */
  icon?: ReactNode;
  /** Widget or icon to place at the end of the item */
  widget?: ReactNode;
  /** Array of child/sub-menu items */
  items?: TreeItems;
  /** href parameter for anchor type child elements */
  href?: string;
  /** event handler onClick */
  onClick?: (id: string) => void;
};

const isActive = (
  item: TreeItem,
  active?: Pick<TreeItem, 'id' | 'label'>,
): boolean =>
  active ? item.id === active.id || item.label === active.label : false;

export const hasActiveChidlren = (
  item: TreeItem,
  active?: Pick<TreeItem, 'id' | 'label'>,
): boolean => {
  if (isActive(item, active)) {
    return true;
  }
  return item.items
    ? item.items.some(t => hasActiveChidlren(t, active))
    : false;
};

export const expandTreeItems = (
  items: TreeItems,
  expanded: boolean,
): TreeItems =>
  items.reduce((acc: TreeItems, item: TreeItem) => {
    return [
      ...acc,
      {
        ...item,
        expanded,
        items: item.items ? expandTreeItems(item.items, expanded) : [],
      },
    ];
  }, []);

export const getTreeItemsStats = (
  items: TreeItems,
): { total: number; expanded: number } =>
  items.reduce(
    (totals, item: TreeItem) => {
      const { expanded, items } = item;
      const itemTotals = {
        total: 1,
        expanded: expanded ? 1 : 0,
      };
      if (items) {
        const { total, expanded } = getTreeItemsStats(items);
        itemTotals.total = itemTotals.total + total;
        itemTotals.expanded = itemTotals.expanded + expanded;
      }
      return {
        total: totals.total + itemTotals.total,
        expanded: totals.expanded + itemTotals.expanded,
      };
    },
    { total: 0, expanded: 0 },
  );

const getExpandedItems = (items: TreeItems, active?: TreeItem): TreeItems =>
  items.reduce((expandedItems: TreeItems, item: TreeItem) => {
    const { items, expanded } = item;
    if (expanded || hasActiveChidlren(item, active)) {
      expandedItems.push(item);
    }
    if (items) {
      return expandedItems.concat(getExpandedItems(items, active));
    }
    return expandedItems;
  }, []);

const getCollapsibleItems = (items: TreeItems): TreeItems =>
  items.reduce((collapsibleItems: TreeItems, item: TreeItem) => {
    const { items } = item;
    let childrenCollapsibleItems: TreeItems = [];
    if (items) {
      collapsibleItems.push(item);

      childrenCollapsibleItems = getCollapsibleItems(items);
    }
    return collapsibleItems.concat(childrenCollapsibleItems);
  }, []);

export const getFlatChildrenIds = (children?: TreeItems): TreeItems =>
  children
    ? children.reduce((flatChildren: TreeItems, item) => {
        flatChildren.push(item);
        if (item.items) {
          // eslint-disable-next-line no-param-reassign
          flatChildren = flatChildren.concat(getFlatChildrenIds(item.items));
        }
        return flatChildren;
      }, [])
    : [];

export const getChildrenById = (
  children?: TreeItems,
  id?: string,
): TreeItems | undefined => {
  if (!children || id) {
    return undefined;
  }

  let items: TreeItems | undefined;
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

const filterItems = (items: TreeItems, search?: string): TreeItems => {
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

export type TreeOwnProps = {
  /** Array of child items */
  items: TreeItems;

  /** POsition of the expand/collapse arrow */
  arrowPosition?: 'start' | 'end';

  /** Initially active item */
  activeItem?: Pick<TreeItem, 'id' | 'label'>;

  /** If specified, will expand all items with chidren */
  expandAll?: boolean;

  /** Function that will be called when the user selects a item */
  onSelect?: (item?: TreeItem) => void;

  /**
   * Function that will be called on expand/collapse
   */
  onExpandCollapse?: (expandedCount: number) => void;

  /** If specified, will filter the items by the search terms */
  search?: string;

  /**
   * custom chevron icon
   */

  chevronIcon?: ReactNode;

  /**
   * indentation in pixels for each elevel, By default 6 pixels
   */
  indentPixels?: number;
};

export interface TreeState {
  expandedItems?: TreeItems;
  originalExpandAll?: boolean;
  search?: string;
  items?: TreeItems;
  filteredItems?: TreeItems;
  collapsibleItems?: TreeItems;
  allExpanded?: boolean;
  expandAll?: boolean;
}
export const stateFromProps = ({
  items,
  expandAll,
  activeItem,
  search,
}: Pick<
  TreeOwnProps,
  'items' | 'expandAll' | 'activeItem' | 'search'
>): TreeState => {
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
