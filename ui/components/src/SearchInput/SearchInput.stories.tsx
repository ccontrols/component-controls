import React, { useState, useEffect } from 'react';
import { Theme, Box } from 'theme-ui';
import { GlobeIcon } from '@primer/octicons-react';
import { Document, Example, faker } from '@component-controls/core';
import { SearchInput } from './SearchInput';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
  category: 'Input',
} as Document;

interface FakeItem {
  id: number;
  label: string;
}
type FakeItems = FakeItem[];
let i = 10;
const useMockData = (): [FakeItems, (searchTerm: string) => void] => {
  const [search, setSearch] = useState<string>('');
  faker.seed(123);
  const [allItems] = useState(
    // eslint-disable-next-line prefer-spread
    Array.apply(null, Array(30)).map(() => ({
      id: i++,
      label: faker.name.findName(),
    })),
  );
  const [items, setItems] = useState<FakeItems>([]);
  useEffect(() => {
    const searchTerm = search.toLowerCase();
    setItems(
      allItems.filter(item => item.label.toLowerCase().includes(searchTerm)),
    );
  }, [allItems, search]);
  return [items, setSearch];
};

export const overview: Example = () => {
  const [items, setSearch] = useMockData();
  return (
    <SearchInput<FakeItem>
      onSearch={search => setSearch(search)}
      items={items}
      onSelect={item => alert(JSON.stringify(item, null, 2))}
    >
      {props => (
        <Box
          sx={{
            py: 1,
            borderBottom: (t: Theme) => ` 1px solid  ${t.colors?.shadow}`,
          }}
        >
          {props.item.label}
        </Box>
      )}
    </SearchInput>
  );
};

export const defaultRender: Example = () => {
  const [items, setSearch] = useMockData();
  return (
    <SearchInput
      onSearch={search => setSearch(search)}
      items={items}
      onSelect={item => alert(JSON.stringify(item, null, 2))}
    />
  );
};

export const placeholder: Example = () => {
  const [items, setSearch] = useMockData();
  return (
    <SearchInput
      onSearch={search => setSearch(search)}
      items={items}
      onSelect={item => alert(JSON.stringify(item, null, 2))}
      placeholder="start typing..."
      aria-label="search items"
    />
  );
};

export const customize: Example = () => {
  const [items, setSearch] = useMockData();
  return (
    <SearchInput
      onSearch={search => setSearch(search)}
      items={items}
      render={def => (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {def}
          <Box sx={{ p: 1 }}>
            Powered by: <GlobeIcon />
          </Box>
        </Box>
      )}
      onSelect={item => alert(JSON.stringify(item, null, 2))}
      aria-label="search items"
    />
  );
};
