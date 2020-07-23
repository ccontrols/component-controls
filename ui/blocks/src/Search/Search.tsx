/** @jsx jsx */
import { jsx, Theme } from 'theme-ui';
import { FC, useState, useRef, useCallback } from 'react';
import lunr, { Index } from 'lunr';
import { SearchInput, SearchInputProps } from '@component-controls/components';
import { DocType, defDocType, Pages, Document } from '@component-controls/core';
import { useGetDocumentPath, useGetDocument, usePages } from '../state';
import { DocumentItem } from '../DocumentItem';

export interface SearchItem {
  id: string;
  title: string;
  type: DocType;
  component?: string;
  description?: string;
  body?: string;
}
export const Search: FC<Omit<
  SearchInputProps<Document>,
  'items' | 'onSearch'
>> = props => {
  const [items, setItems] = useState<Pages>([]);
  const getDocumentPath = useGetDocumentPath();
  const getDocument = useGetDocument();
  const pages = usePages();
  const lunrRef = useRef<Index | undefined>(undefined);

  const onSearch = useCallback(
    (search: string) => {
      if (!lunrRef.current) {
        lunrRef.current = lunr(function() {
          this.field('title');
          this.field('description');
          this.field('body');
          this.field('author');
          this.field('stories');
          this.field('component');
          this.field('tags');
          pages.forEach(page => {
            this.add({
              id: page.title,
              title: page.title.replace('/', ' '),
              type: page.type || defDocType,
              description: page.description,
              body: page.source,
              author: page.author,
              stories: page.stories
                ?.map(story => story.split('-').join(' '))
                .join(' '),
              tags: page.tags ? page.tags.join(' ') : '',
              component: Object.keys(page.componentsLookup).join(' '),
            });
          });
        });
      }
      const searchResults = lunrRef.current.search(search);
      const newItems: Pages = searchResults
        .slice(0, 20)
        .filter((item: { ref: string }) => getDocument(item.ref) as Document)
        .map((item: { ref: string }) => {
          const page = getDocument(item.ref) as Document;
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
