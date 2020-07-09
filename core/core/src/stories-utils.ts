import { toId, storyNameFromExport } from '@storybook/csf';
import { PagesOnlyRoutes, DocType } from './configuration';
import { Document, defDocType } from './stories';

export const strToId = (str: string) => str.replace(/\W/g, '-').toLowerCase();

export const ensureTrailingSlash = (route: string) =>
  route.endsWith('/') ? route : route + '/';

export const ensureStartingSlash = (route: string) =>
  route.startsWith('/') ? route : '/' + route;

export const getDocPath = (
  docType: DocType,
  doc?: Document,
  pagesConfig?: PagesOnlyRoutes,
  name: string = '',
  activeTab?: string,
): string => {
  const { basePath = '' } = pagesConfig?.[docType] || {};
  const route = doc
    ? doc.route ||
      `${ensureStartingSlash(ensureTrailingSlash(basePath))}${
        activeTab ? `${ensureTrailingSlash(activeTab)}` : ''
      }${ensureTrailingSlash(strToId(doc.title))}`
    : `${ensureStartingSlash(ensureTrailingSlash(basePath))}${
        activeTab ? `${ensureTrailingSlash(activeTab)}` : ''
      }${ensureTrailingSlash(strToId(name))}`;
  return route;
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
  const route = `${
    doc?.route
      ? ensureStartingSlash(ensureTrailingSlash(doc?.route))
      : `${ensureStartingSlash(ensureTrailingSlash(basePath))}`
  }${activeTab ? `${ensureTrailingSlash(activeTab)}` : ''}`;
  return `${route}${storyId || ''}`;
};

export const docStoryToId = (docId: string, storyId: string) =>
  toId(docId, storyNameFromExport(storyId));

export { storyNameFromExport };
