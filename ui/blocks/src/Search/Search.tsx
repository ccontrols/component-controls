/** @jsx jsx */
import { jsx, Theme, Box, Text } from 'theme-ui';
import { FC } from 'react';
import {
  SearchInput,
  SearchInputProps,
  Link,
} from '@component-controls/components';
import { DocInfo } from '@component-controls/core';
import { useSearch } from '@component-controls/store';
import { DocumentItem } from '../DocumentItem';

export const Search: FC<Omit<
  SearchInputProps<DocInfo>,
  'items' | 'onSearch'
>> = props => {
  const searchHook = useSearch();
  const onSelectItem = (item: DocInfo) => {
    window.location.href = item.link;
  };
  if (!searchHook) {
    return null;
  }
  const { items, searchFn, provider } = searchHook;
  return (
    <SearchInput<DocInfo>
      aria-label="full text search"
      onSearch={searchFn}
      items={items}
      onSelect={onSelectItem}
      placeholder="search..."
      render={
        provider
          ? rendered => (
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {rendered}
                <Box
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text sx={{ mr: 1 }}>Search by</Text>
                  <Link
                    sx={{ display: 'flex' }}
                    href={provider.url}
                    target="_blank"
                    aria-label={provider.name}
                    rel="noopener noreferrer"
                  >
                    {provider.logo}
                  </Link>
                </Box>
              </Box>
            )
          : undefined
      }
      {...props}
    >
      {props => (
        <DocumentItem
          sx={{ borderBottom: (t: Theme) => ` 1px solid  ${t.colors?.shadow}` }}
          item={props.item}
        />
      )}
    </SearchInput>
  );
};
