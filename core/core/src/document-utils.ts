import {
  toId,
  storyNameFromExport as csfStoryNameFromExport,
} from '@storybook/csf';
import { PagesOnlyRoutes, DocType, PageConfiguration } from './configuration';
import { Document, defDocType } from './document';

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
  pagesConfig?: PagesOnlyRoutes,
  name: string = '',
  activeTab?: string,
): string => {
  const { basePath = '', storyPaths } = pagesConfig?.[docType] || {};
  if (storyPaths && doc && doc.stories && doc.stories.length > 0) {
    return getStoryPath(doc.stories[0], doc, pagesConfig, activeTab);
  }
  const route = doc
    ? doc.route ||
      `${ensureStartingSlash(
        ensureTrailingSlash(basePath),
      )}${ensureTrailingSlash(strToId(doc.title))}${
        activeTab ? `${ensureTrailingSlash(activeTab)}` : ''
      }`
    : `${ensureStartingSlash(
        ensureTrailingSlash(basePath),
      )}${ensureTrailingSlash(strToId(name))}${
        activeTab ? `${ensureTrailingSlash(activeTab)}` : ''
      }`;
  return removeTrailingSlash(route);
};

export const getStoryPath = (
  storyId?: string,
  doc?: Document,
  pagesConfig?: PagesOnlyRoutes,
  activeTab?: string,
): string => {
  const docType = doc?.type || defDocType;
  if (!storyId) {
    return getDocPath(docType, doc, pagesConfig, undefined, activeTab);
  }

  const { basePath = '' } = pagesConfig?.[docType] || {};
  const docRoute = `${
    doc?.route
      ? ensureStartingSlash(ensureTrailingSlash(doc?.route))
      : `${ensureStartingSlash(ensureTrailingSlash(basePath))}`
  }`;
  const route = `${docRoute}${storyId ? ensureTrailingSlash(storyId) : ''}${
    activeTab ? `${ensureTrailingSlash(activeTab)}` : ''
  }`;
  return removeTrailingSlash(route);
};

export const getDocTypePath = (type: PageConfiguration) =>
  type.basePath
    ? removeTrailingSlash(ensureStartingSlash(type.basePath))
    : undefined;

export const docStoryToId = (docId: string, storyId: string) =>
  toId(docId, storyNameFromExport(storyId));
