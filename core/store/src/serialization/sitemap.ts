import { Store, removeTrailingSlash } from '@component-controls/core';
import {
  getIndexPage,
  getHomePages,
  DocHomePagesPath,
  getDocPages,
  DocPagesPath,
} from '../create-pages';

export const getSiteMap = (store: Store): string => {
  const config = store.config.siteMap;
  const { siteUrl = '' } = store.config;
  const sitePath = removeTrailingSlash(siteUrl);
  const siteMapPages = typeof config === 'object' ? config.pages : undefined;
  const pages: {
    path?: string;
    priority: number;
    lastModified?: string;
  }[] = [];
  //home page
  const { path, lastModified } = getIndexPage(store) || {};
  pages.push({
    path,
    priority: siteMapPages?.home.priority || 1,
    lastModified,
  });
  const homePages = getHomePages(store);
  homePages.forEach(({ path, lastModified }: DocHomePagesPath) => {
    pages.push({
      path,
      priority: siteMapPages?.index.priority || 1,
      lastModified,
    });
  });

  const docPages = getDocPages(store);
  docPages.forEach(({ path, lastModified }: DocPagesPath) => {
    pages.push({
      path,
      priority: siteMapPages?.doc.priority || 1,
      lastModified,
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages
  .map(
    ({ path, priority, lastModified }) =>
      `<url><loc>${sitePath}${path}</loc>${
        lastModified ? `<lastmod>${lastModified}</lastmod>` : ''
      }<changefreq>daily</changefreq><priority>${priority}</priority></url>`,
  )
  .join('\n')}
</urlset>  
`;
  return sitemap;
};
