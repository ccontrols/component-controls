/** @jsx jsx */
import { useState, ReactNode, useEffect } from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';
import { SearchIcon } from '@primer/octicons-react';
import { jsx, Input, Box, InputProps } from 'theme-ui';
import { Popover, PopoverProps } from '../Popover';
import { Keyboard, DOWN_ARROW, UP_ARROW, RETURN, ESC, TAB } from '../Keyboard';

export interface SearchBoxCallbackProps<ItemType> {
  /**
   * curent to be rendered
   */
  item: ItemType;
  /**
   * item index
   */
  index: number;
  /**
   * whether the popover is open
   */
  isOpen: boolean;
  /**
   * the search string
   */
  search: string;
  /**
   * selected item index
   */
  selected?: number;
  /**
   * select item function to be called when an item is selected
   */
  selectItem: (item: ItemType, index: number, close: boolean) => void;
}

export interface SearchInputItemType {
  [key: string]: any;
}

export interface SearchInputOwnProps<ItemType> {
  /**
   * callback on change of search input. user can retrieve items in this callback
   *
   */
  onSearch: (search: string) => Promise<void> | void;

  /**
   * on select a search item.
   */
  onSelect?: (item: ItemType) => void;
  /**
   * children is a render prop to allow custom rendering of items, one at a time
   */
  children?: (props: SearchBoxCallbackProps<ItemType>) => ReactNode;
  /**
   * items array
   */
  items: ItemType[];
  /**
   * customize the popover
   */
  popoverProps?: PopoverProps;
}

export type SearchInputProps<ItemType> = SearchInputOwnProps<ItemType> &
  Omit<InputProps, 'ref' | 'onSelect'>;
/**
 * an input component combined with a popover, can be used for incremental search.
 */
export const SearchInput = <ItemType extends SearchInputItemType>({
  onSearch,
  items,
  children,
  onSelect,
  popoverProps,
  ...rest
}: SearchInputProps<ItemType>): JSX.Element => {
  const [selected, setSelected] = useState<number | undefined>(undefined);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string | undefined>(undefined);
  const updateIsOpen = (newIsOpen: boolean) => {
    // if first time open, send a onSearch message to collect items
    if (newIsOpen && search === undefined && items.length === 0) {
      onSearch('');
    } else {
      setIsOpen(newIsOpen && items.length > 0);
    }
  };
  useEffect(() => {
    setIsOpen(items.length > 0 && search !== '');
  }, [items, search]);

  const updateSearch = async (newSearch: string) => {
    await onSearch(newSearch);
    setSearch(newSearch);
  };

  const selectItem = (item: ItemType, index: number, close: boolean) => {
    setSelected(index);
    if (isOpen && close) {
      if (typeof onSelect === 'function') {
        onSelect(item);
      }
      updateIsOpen(false);
    } else {
      updateIsOpen(true);
    }
  };
  const onKeyPressed = (key: number) => {
    switch (key) {
      case DOWN_ARROW:
        const downIndex = Math.min((selected || -1) + 1, items.length - 1);
        if (downIndex >= 0) {
          selectItem(items[downIndex], downIndex, false);
          const itemEl =
            typeof document !== 'undefined' &&
            document.getElementById(`search_item_${downIndex}`);
          if (itemEl) {
            scrollIntoView(itemEl, { block: 'end', scrollMode: 'if-needed' });
          }
        }
        break;
      case UP_ARROW:
        const upIndex = Math.max((selected || items.length) - 1, 0);
        if (upIndex < items.length) {
          selectItem(items[upIndex], upIndex, false);
          const itemEl =
            typeof document !== 'undefined' &&
            document.getElementById(`search_item_${upIndex}`);
          if (itemEl) {
            scrollIntoView(itemEl, { block: 'start', scrollMode: 'if-needed' });
          }
        }

        break;
      case RETURN:
        if (typeof selected === 'number' && (selected || 0) < items.length) {
          selectItem(items[selected], selected, true);
        }
        break;
      case TAB:
      case ESC:
      default:
        updateIsOpen(false);
        break;
    }
  };

  return (
    <Keyboard
      keys={[DOWN_ARROW, UP_ARROW, RETURN, ESC, TAB]}
      onKeyDown={onKeyPressed}
    >
      <Popover
        trigger="none"
        placement="bottom"
        onVisibilityChange={(isVisible: boolean) => {
          updateIsOpen(isVisible);
        }}
        tooltip={() => (
          <Box variant="searchinput.popover">
            {
              <Box as="ul" variant="searchinput.list">
                {items.map((item, index) => {
                  const props = {
                    item,
                    index,
                    isOpen,
                    search: search || '',
                    selected,
                    selectItem,
                  };
                  return (
                    <Box
                      key={`search_item_${item.id || index}`}
                      id={`search_item_${index}`}
                      variant="searchinput.item"
                      as="li"
                      className={selected === index ? 'active' : undefined}
                      onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        selectItem(item, index, true);
                      }}
                      {...rest}
                    >
                      {children ? children(props) : item.label || item}
                    </Box>
                  );
                })}
              </Box>
            }
          </Box>
        )}
        {...popoverProps}
        tooltipShown={isOpen}
      >
        <div sx={{ position: 'relative' }}>
          <Input
            aria-label="type some text to start searching"
            value={search || ''}
            onBlur={() => {
              setTimeout(() => {
                updateIsOpen(false);
              }, 200);
            }}
            onClick={() => updateIsOpen(!isOpen)}
            onChange={e => updateSearch(e.target.value)}
            sx={{ pl: '32px' }}
            {...rest}
          />
          <Box
            as={SearchIcon}
            sx={{ position: 'absolute', left: '10px', top: '15px' }}
          />
        </div>
      </Popover>
    </Keyboard>
  );
};
