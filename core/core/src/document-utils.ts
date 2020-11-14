import {
  toId,
  storyNameFromExport as csfStoryNameFromExport,
} from '@storybook/csf';
import {
  PagesOnlyRoutes,
  DocType,
  PageConfiguration,
  BuildConfiguration,
} from './configuration';
import { Document, Story, defDocType, Store } from './document';

export const storyNameFromExport = csfStoryNameFromExport;
export const strToId = (str: string): string =>
  str.replace(/\W/g, '-').toLowerCase();

export const ensureTrailingSlash = (route: string): string =>
  route.endsWith('/') ? route : route + '/';

export const ensureStartingSlash = (route: string): string =>
  route.startsWith('/') ? route : '/' + route;

export const removeTrailingSlash = (route: string): string => {
  let result = route;
  while (result.length > 1 && result.endsWith('/')) {
    result = result.substr(0, result.length - 1);
  }
  return result;
};

export const removeStartingSlash = (route: string): string => {
  let result = route;
  while (result.length > 1 && result.startsWith('/')) {
    result = result.substr(1);
  }
  return result;
};

export const getDocPath = (
  docType: DocType,
  doc?: Document,
  store?: Store,
  name = '',
  tab?: string,
): string => {
  const pagesConfig: PagesOnlyRoutes | undefined = store
    ? (store.config.pages as PagesOnlyRoutes)
    : undefined;
  const { siteRoot = '/' } = (store?.config as BuildConfiguration) || {};

  const { basePath = '', sideNav = {} } = pagesConfig?.[docType] || {};
  const { storyPaths } = sideNav;
  const activeTab = doc?.MDXPage ? undefined : tab;
  if (storyPaths && doc && doc.stories && doc.stories.length > 0 && store) {
    return getStoryPath(doc.stories[0], doc, store, activeTab);
  }
  const route = doc
    ? doc.route ||
      `${ensureTrailingSlash(basePath)}${strToId(doc.title)}${
        activeTab ? ensureStartingSlash(activeTab) : ''
      }`
    : `${ensureTrailingSlash(basePath)}${strToId(name)}${
        activeTab ? ensureStartingSlash(activeTab) : ''
      }`;
  return encodeURI(`${siteRoot}${removeStartingSlash(route)}`);
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
  const { siteRoot = '/' } = (store?.config as BuildConfiguration) || {};
  const docType = doc?.type || defDocType;
  const activeTab = doc?.MDXPage ? undefined : tab;
  if (!storyId) {
    return getDocPath(docType, doc, store, undefined, activeTab);
  }
  const { basePath = '' } = pagesConfig?.[docType] || {};
  const docRoute = removeTrailingSlash(doc?.route || basePath);
  const story = store?.stories[storyId];
  const { dynamicId, name } = story || {};
  const id = dynamicId || storyId;
  const route = `${docRoute}${id ? ensureStartingSlash(id) : ''}${
    activeTab ? ensureStartingSlash(activeTab) : ''
  }${dynamicId ? `?story=${name}` : ''}`;
  return encodeURI(`${siteRoot}${route}`);
};

export const getDocTypePath = (
  store: Store,
  type: PageConfiguration,
): string | undefined => {
  const { siteRoot = '/' } = (store?.config as BuildConfiguration) || {};
  return type.basePath
    ? `${siteRoot}${removeTrailingSlash(type.basePath)}`
    : undefined;
};

export const getHomePath = (store: Store): string => {
  const { siteRoot = '/' } = (store?.config as BuildConfiguration) || {};
  return siteRoot.length > 1 ? removeTrailingSlash(siteRoot) : siteRoot;
};

export const getRoutePath = (
  store: Store,
  route?: string,
): string | undefined => {
  const { siteRoot = '/' } = (store?.config as BuildConfiguration) || {};
  if (route) {
    if (route.startsWith('#')) {
      return route;
    }
    return removeTrailingSlash(
      `${ensureTrailingSlash(siteRoot)}${removeStartingSlash(route)}`,
    );
  }
  return undefined;
};

export const docStoryToId = (docId: string, storyId: string): string =>
  toId(docId, storyNameFromExport(storyId));

/**
 * maps an exported story to an array of stories. Used for dynamically created stories.
 */
export const mapDynamicStories = (
  story: Story,
  doc: Document,
  building?: boolean,
): Story[] => {
  if (story.dynamic && typeof story.renderFn === 'function') {
    const stories = story.renderFn(doc);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, name, ...storyProps } = story;
    return Array.isArray(stories)
      ? stories.map(s => ({
          ...storyProps,
          dynamicId: building ? undefined : docStoryToId(doc.title, id || name),
          ...s,
        }))
      : [story];
  }
  return [story];
};
