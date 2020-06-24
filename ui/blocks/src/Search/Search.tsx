/** @jsx jsx */
import { jsx, Theme } from 'theme-ui';
import { useState, useContext, useRef, useEffect } from 'react';
import lunr, { Index } from 'lunr';
import { SearchInput } from '@component-controls/components';
import {
  PageType,
  defPageType,
  Pages,
  Document,
} from '@component-controls/core';
import { BlockContext } from '../context';
import { DocumentItem } from '../DocumentItem';

export interface SearchItem {
  id: string;
  title: string;
  type: PageType;
  component?: string;
  description?: string;
  body?: string;
}
export const Search = () => {
  const [items, setItems] = useState<Pages>([]);
  const [search, setSearch] = useState<string>('');
  const { storeProvider } = useContext(BlockContext);
  const lunrRef = useRef<Index | undefined>(undefined);

  useEffect(() => {
    if (!lunrRef.current) {
      lunrRef.current = lunr(function() {
        this.field('title');
        this.field('description');
        this.field('body');
        this.field('author');
        this.field('stories');
        this.field('component');
        storeProvider.pages.forEach(page => {
          this.add({
            id: page.title,
            title: page.title.replace('/', ' '),
            type: page.type || defPageType,
            description: page.description,
            body: page.source,
            author: page.author,
            stories: page.stories
              ?.map(story => story.split('-').join(' '))
              .join(' '),
            component: Object.keys(page.components).join(' '),
          });
        });
      });
    }
    const searchResults = lunrRef.current.search(search);
    const newItems: Pages = searchResults
      .slice(0, 20)
      .filter(
        (item: { ref: string }) =>
          storeProvider.getStoryDoc(item.ref) as Document,
      )
      .map((item: { ref: string }) => {
        const page = storeProvider.getStoryDoc(item.ref) as Document;
        return { ...page, id: page.title };
      });
    setItems(newItems);
  }, [search, storeProvider]);
  const onSearch = (search: string) => {
    setSearch(search);
  };
  const onSelectItem = (item: Document) => {
    const newurl = `${window.location.origin}${storeProvider.getPagePath(
      item.type,
      item.title,
    )}`;
    const current = new URL(window.location.href);

    if (current.pathname !== new URL(newurl).pathname) {
      window.location.href = newurl;
    }
  };
  return (
    <SearchInput<Document>
      aria-label="full text search"
      onSearch={onSearch}
      items={items}
      onSelect={onSelectItem}
      placeholder="search..."
    >
      {props => (
        <DocumentItem
          sx={{ borderBottom: (t: Theme) => ` 1px solid  ${t.colors?.shadow}` }}
          config={storeProvider.config}
          link={storeProvider.getPagePath(props.item.type, props.item.title)}
          page={props.item}
        />
      )}
    </SearchInput>
  );
};
