import { toId, storyNameFromExport } from '@storybook/csf';
import { PagesOnlyRoutes, DocumentType } from './configuration';
import { Document, defDocType } from './stories';

export const strToId = (str: string) => str.replace(/\W/g, '-').toLowerCase();

export const getDocPath = (
  docType: DocumentType,
  doc?: Document,
  pagesConfig?: PagesOnlyRoutes,
  name: string = '',
  activeTab?: string,
): string => {
  const { basePath = '' } = pagesConfig?.[docType] || {};
  const route = doc
    ? doc.route ||
      `/${basePath}${activeTab ? `${activeTab}/` : ''}${strToId(doc.title)}/`
    : `/${basePath}${activeTab ? `${activeTab}/` : ''}${strToId(name)}/`;
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
  const route = `/${basePath}${activeTab ? `${activeTab}/` : ''}`;
  return `${route}${storyId || ''}`;
};

export const docStoryToId = (docId: string, storyId: string) =>
  toId(docId, storyNameFromExport(storyId));

export { storyNameFromExport };
