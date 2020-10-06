/** @jsx jsx */
import { jsx, Theme } from 'theme-ui';
import { FC, useState, useRef, useCallback } from 'react';
import Fuse from 'fuse.js';
import { SearchInput, SearchInputProps } from '@component-controls/components';
import { defDocType, Pages, Document } from '@component-controls/core';
import {
  useGetDocumentPath,
  useGetDocument,
  usePages,
} from '@component-controls/store';
import { DocumentItem } from '../DocumentItem';

interface SearchObject {
  id: string;
  title: string;
  type: string;
  description?: string;
  body?: string;
  author?: string;
  stories?: string[];
  tags?: string[];
  component: string[];
}

export const Search: FC<Omit<
  SearchInputProps<Document>,
  'items' | 'onSearch'
>> = props => {
  const [items, setItems] = useState<Pages>([]);
  const getDocumentPath = useGetDocumentPath();
  const getDocument = useGetDocument();
  const pages = usePages();
  const lunrRef = useRef<Fuse<SearchObject> | undefined>(undefined);

  const onSearch = useCallback(
    (search: string) => {
      if (!lunrRef.current) {
        lunrRef.current = new Fuse(
          pages.map(page => {
            const item: SearchObject = {
              id: page.title,
              title: page.title.replace('/', ' '),
              type: page.type || defDocType,
              description: page.description,
              body: page.source,
              author: page.author,
              stories: page.stories?.map(story => story.split('-').join(' ')),
              tags: page.tags,
              component: Object.keys(page.componentsLookup),
            };
            return item;
          }),
          {
            includeScore: true,
            useExtendedSearch: true,
            keys: [
              { name: 'title', weight: 0.9 },
              { name: 'description', weight: 0.9 },
              { name: 'body', weight: 0.7 },
              { name: 'author', weight: 0.3 },
              { name: 'stories', weight: 0.2 },
              { name: 'tags', weight: 1 },
              { name: 'component', weight: 0.7 },
            ],
          },
        );
      }
      const searchResults = lunrRef.current.search(search);
      const newItems: Pages = searchResults
        .sort((a, b) => (a.score || 0) - (b.score || 0))
        .slice(0, 20)
        .filter(result => getDocument(result.item.id) as Document)
        .map(result => {
          const page = getDocument(result.item.id) as Document;
          return { ...page, id: page.title };
        });
      setItems(newItems);
    },
    [getDocument, pages],
  );
  const onSelectItem = (item: Document) => {
    const newurl = `${window.location.origin}${getDocumentPath(
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
      {...props}
    >
      {props => (
        <DocumentItem
          sx={{ borderBottom: (t: Theme) => ` 1px solid  ${t.colors?.shadow}` }}
          link={getDocumentPath(props.item.type, props.item.title)}
          doc={props.item}
        />
      )}
    </SearchInput>
  );
};
