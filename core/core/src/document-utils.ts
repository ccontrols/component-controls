import {
  toId,
  storyNameFromExport as csfStoryNameFromExport,
} from '@storybook/csf';
import { PagesOnlyRoutes, DocType, PageConfiguration } from './configuration';
import { Document, Story, defDocType, Store } from './document';

export const storyNameFromExport = csfStoryNameFromExport;
export const strToId = (str: string) => str.replace(/\W/g, '-').toLowerCase();

export const ensureTrailingSlash = (route: string) =>
  route.endsWith('/') ? route : route + '/';

export const ensureStartingSlash = (route: string) =>
  route.startsWith('/') ? route : '/' + route;

export const removeTrailingSlash = (route: string) =>
  route.endsWith('/') ? route.substr(0, route.length - 1) : route;

export const getDocPath = (
  docType: DocType,
  doc?: Document,
  store?: Store,
  name: string = '',
  tab?: string,
): string => {
  const pagesConfig: PagesOnlyRoutes | undefined = store
    ? (store.config.pages as PagesOnlyRoutes)
    : undefined;
  const { basePath = '', sideNav = {} } = pagesConfig?.[docType] || {};
  const { storyPaths } = sideNav;
  const activeTab = doc?.MDXPage ? undefined : tab;
  if (storyPaths && doc && doc.stories && doc.stories.length > 0 && store) {
    return getStoryPath(doc.stories[0], doc, store, activeTab);
  }
  const route = doc
    ? doc.route ||
      `${ensureStartingSlash(
        ensureTrailingSlash(basePath),
      )}${ensureTrailingSlash(strToId(doc.title))}${
        activeTab ? ensureTrailingSlash(activeTab) : ''
      }`
    : `${ensureStartingSlash(
        ensureTrailingSlash(basePath),
      )}${ensureTrailingSlash(strToId(name))}${
        activeTab ? ensureTrailingSlash(activeTab) : ''
      }`;
  return removeTrailingSlash(route);
};

export const getStoryPath = (
  storyId?: string,
  doc?: Document,
  store?: Store,
  tab?: string,
): string => {
  const pagesConfig: PagesOnlyRoutes | undefined = store
    ? (store.config.pages as PagesOnlyRoutes)
    : undefined;

  const docType = doc?.type || defDocType;
  const activeTab = doc?.MDXPage ? undefined : tab;
  if (!storyId) {
    return getDocPath(docType, doc, store, undefined, activeTab);
  }
  const { basePath = '' } = pagesConfig?.[docType] || {};
  const docRoute = `${
    doc?.route
      ? ensureStartingSlash(ensureTrailingSlash(doc?.route))
      : ensureStartingSlash(ensureTrailingSlash(basePath))
  }`;
  const story = store?.stories[storyId];
  const { dynamicId, name } = story || {};
  const id = dynamicId || storyId;
  const route = `${docRoute}${id ? ensureTrailingSlash(id) : ''}${
    activeTab ? ensureTrailingSlash(activeTab) : ''
  }${dynamicId ? `?story=${name}` : ''}`;
  return encodeURI(removeTrailingSlash(route));
};

export const getDocTypePath = (type: PageConfiguration) =>
  type.basePath
    ? removeTrailingSlash(ensureStartingSlash(type.basePath))
    : undefined;

export const docStoryToId = (docId: string, storyId: string) =>
  toId(docId, storyNameFromExport(storyId));

/**
 * maps an exported story to an array of stories. Used for dynamically created stories.
 */
export const mapDynamicStories = (story: Story, doc: Document): Story[] => {
  if (story.dynamic && typeof story.renderFn === 'function') {
    const stories = story.renderFn(doc);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, name, ...storyProps } = story;
    return Array.isArray(stories)
      ? stories.map(s => ({
          ...storyProps,
          dynamicId: docStoryToId(doc.title, id || name),
          ...s,
        }))
      : [story];
  }
  return [story];
};
