import path from 'path';
import fs from 'fs';
import { Store } from '@component-controls/core';
import { getSiteMap } from '@component-controls/routes';
import { LoadingStore, loadStore } from '@component-controls/store';
import { log } from '@component-controls/logger';
import { searchIndexing } from '@component-controls/webpack-compile';

export const postBuild = async (
  staticFolder: string,
  loadingStore?: LoadingStore,
): Promise<void> => {
  if (loadingStore) {
    const store: Store = loadStore(loadingStore, true);
    if (process.env.NODE_ENV === 'production') {
      if (store.config.siteMap) {
        const sitemap = getSiteMap(store);
        const sitemapfolder = path.resolve(staticFolder, '..');
        if (!fs.existsSync(sitemapfolder)) {
          fs.mkdirSync(sitemapfolder, { recursive: true });
        }
        const sitemapname = path.join(sitemapfolder, 'sitemap.xml');
        log('creating sitemap', sitemapname);
        fs.writeFileSync(sitemapname, sitemap, 'utf8');
      }
      await searchIndexing(store);
    }
  }
};
