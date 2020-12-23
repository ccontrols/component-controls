import { ReactNode } from 'react';
import { Store, DocInfo, defDocType, Document } from './document';
import { getDocPath } from './document-utils';

export interface SearchFields {
  objectID: string;
  title?: string;
  description?: string;
  source?: string;
  author?: string;
  stories?: string[];
  tags?: string[];
  components?: string[];
  type?: string;
}

export interface SearchOptions {
  /**
   * if the search plugin is using indexing, specify the indexing routine here
   */
  indexingModule?: string;
  /**
   * the search plugin search routine
   */
  searchingModule: string;
  /**
   * a selection of the fields to search by
   */
  fields?: (keyof SearchFields)[];
  /**
   * the list of documents to use when an empty search
   */
  emptySearchDocuments?: string[];
  /**
   * how many search results per page
   * Default 20
   */
  hitsPerPage?: number;
  /**
   * provider options
   */
  options?: any;
}

export const DefaultSearchFields: SearchOptions['fields'] = [
  'title',
  'description',
  'stories',
  'components',
];
export type SearchFn = (search: string) => void;

export type SearchItem = DocInfo;

export interface SearchResult {
  items: SearchItem[];
  searchFn: SearchFn;
  provider?: {
    logo: ReactNode;
    url: string;
    name: string;
  };
}

export const docToSearchObject = (
  doc: Document,
  fields: SearchOptions['fields'] = DefaultSearchFields,
): SearchFields => {
  const value: SearchFields = {
    objectID: doc.title,
  };
  if (fields.includes('title')) {
    value.title = doc.title.replace('/', ' ');
  }
  if (fields.includes('description') && typeof doc.description === 'string') {
    value.description = doc.description;
  }
  if (fields.includes('source')) {
    value.source = doc.source;
  }
  if (fields.includes('author')) {
    value.author = doc.author;
  }
  if (fields.includes('stories')) {
    value.stories = doc.stories?.map(story => story.split('-').join(' '));
  }
  if (fields.includes('tags')) {
    value.tags = doc.tags;
  }
  if (fields.includes('components') && doc.componentsLookup) {
    value.components = Object.keys(doc.componentsLookup);
  }
  if (fields.includes('type')) {
    value.type = doc.type;
  }
  return value;
};

export const highlightString = (
  text: string | undefined,
  search: string,
  fieldName: keyof SearchFields,
  fields: SearchOptions['fields'] = DefaultSearchFields,
): string | undefined =>
  text && fields.includes(fieldName)
    ? text.replace(new RegExp(search, 'i'), match => `<em>${match}</em>`)
    : text;

export const docToSearchItem = (
  store: Store,
  docId: string,
  search: string,
): DocInfo => {
  const doc = store.docs[docId];
  const fields = store.config.search?.fields;
  return {
    title: highlightString(doc.title, search, 'title', fields) as string,
    author: highlightString(doc.author, search, 'author', fields),
    authorLink: doc.author
      ? getDocPath('author', undefined, store, doc.author)
      : undefined,
    description:
      typeof doc.description === 'string'
        ? highlightString(doc.description, search, 'description', fields)
        : doc.description,
    type: doc.type,
    tags: doc.tags,
    rawTags: doc.tags
      ? doc.tags.map(
          tag => highlightString(tag, search, 'tags', fields) as string,
        )
      : undefined,
    date: doc.date,
    link: getDocPath(doc.type || defDocType, doc, store, doc.title),
  };
};

export const emptySearchDocuments = (store: Store): SearchItem[] => {
  const { emptySearchDocuments = [] } = store.config.search || {};
  return emptySearchDocuments
    .filter(docId => store.docs[docId])
    .map(docId => docToSearchItem(store, docId, ''));
};
