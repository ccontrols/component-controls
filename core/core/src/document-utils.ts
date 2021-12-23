import {
  toId,
  storyNameFromExport as csfStoryNameFromExport,
} from '@storybook/csf';
import { PagesOnlyRoutes, DocType, BuildConfiguration } from './configuration';
import { Document, Story, defDocType, Store } from './document';

export const storyNameFromExport = csfStoryNameFromExport;
export const strToId = (str: string): string =>
  str.replace(/\W/g, '-').toLowerCase();

export const ensureTrailingSlash = (route: string): string =>
  route.endsWith('/') ? route : route + '/';

export const ensureStartingSlash = (route: string): string =>
  route.startsWith('/') ? route : '/' + route;

export const removeTrailingSlash = (route: string, index = 1): string => {
  let result = route;
  while (result.length > index && result.endsWith('/')) {
    result = result.substr(0, result.length - 1);
  }
  return result;
};

export const removeStartingSlash = (route: string, index = 1): string => {
  let result = route;
  while (result.length > index && result.startsWith('/')) {
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
    const { path } = getStoryPath(doc.stories[0], doc, store, activeTab);
    return path;
  }
  const route = doc
    ? doc.route ||
      `${ensureTrailingSlash(basePath)}${strToId(doc.title)}${
        activeTab ? ensureStartingSlash(activeTab) : ''
      }`
    : `${ensureTrailingSlash(basePath)}${strToId(name)}${
        activeTab ? ensureStartingSlash(activeTab) : ''
      }`;
  return encodeURI(`${siteRoot}${removeStartingSlash(route, 0)}`);
};

export const getStoryPath = (
  storyId?: string,
  doc?: Document,
  store?: Store,
  tab?: string,
): { path: string; query?: string } => {
  const pagesConfig: PagesOnlyRoutes | undefined = store
    ? (store.config.pages as PagesOnlyRoutes)
    : undefined;
  const { siteRoot = '/' } = (store?.config as BuildConfiguration) || {};
  const docType = doc?.type || defDocType;
  const activeTab = doc?.MDXPage ? undefined : tab;
  if (!storyId) {
    return { path: getDocPath(docType, doc, store, undefined, activeTab) };
  }
  const { basePath = '' } = pagesConfig?.[docType] || {};
  const docRoute = removeTrailingSlash(doc?.route || basePath);
  const story = store?.stories[storyId];
  const { dynamicId, name } = story || {};
  const id = dynamicId || storyId;
  const route = `${docRoute}${id ? ensureStartingSlash(id) : ''}${
    activeTab ? ensureStartingSlash(activeTab) : ''
  }`;
  return {
    path: encodeURI(`${siteRoot}${route}`),
    query: dynamicId ? `story=${name}` : undefined,
  };
};

export const formatStoryPath = (
  storyPath: ReturnType<typeof getStoryPath>,
): string => `${storyPath.path}${storyPath.query ? `?${storyPath.query}` : ''}`;

export const getDocTypePath = (
  store: Store,
  basePath: string | undefined,
): string | undefined => {
  const { siteRoot = '/' } = (store?.config as BuildConfiguration) || {};
  return basePath ? `${siteRoot}${removeTrailingSlash(basePath)}` : undefined;
};

export const getCategoryPath = (store: Store, category: string): string => {
  const { siteRoot = '/' } = (store?.config as BuildConfiguration) || {};
  return `${siteRoot}${removeTrailingSlash(category.toLowerCase())}`;
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
  if (story.dynamic && typeof story.storyFn === 'function') {
    const stories = story.storyFn(doc);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, name, ...storyProps } = story;
    return Array.isArray(stories)
      ? stories.map(s => ({
          ...storyProps,
          dynamicId: building ? undefined : docStoryToId(doc.title, id || name),
          storyFn: s.renderFn,
          ...s,
        }))
      : [story];
  }
  return [story];
};
