import fs from 'fs';
import sysPath from 'path';
import {
  compile,
  watch,
  CompilerCallbackFn,
} from '@component-controls/webpack-compile';
import {
  CompileProps,
  defaultCompileProps,
  getBundleName,
} from '@component-controls/webpack-configs';

import {
  CreatePagesArgs,
  CreateWebpackConfigArgs,
  PluginCallback,
  Page,
} from 'gatsby';
import { Store } from '@component-controls/core';
import {
  getIndexPage,
  getHomePages,
  DocHomePagesPath,
  getDocPages,
  DocPagesPath,
  loadStore,
  getSiteMap,
} from '@component-controls/store';

const { StorePlugin } = require('@component-controls/store/plugin');

export const createPagesStatefully = async (
  { actions, store: gatsbyStore }: CreatePagesArgs,
  options: CompileProps,
  doneCb: PluginCallback,
) => {
  const { createPage, deletePage } = actions;
  const config: CompileProps = {
    ...defaultCompileProps,
    ...options,
  };
  const onBundle: CompilerCallbackFn = ({ store: loadingStore }) => {
    if (loadingStore) {
      const store: Store = loadStore(loadingStore, true);
      const createGatsbyPage: CreatePagesArgs['actions']['createPage'] = props => {
        gatsbyStore.getState().pages.forEach((page: Page) => {
          if (page.path === props.path && page.component === props.component) {
            deletePage({
              path: page.path,
              component: props.component,
            });
          }
        });
        createPage(props);
      };
      //home page
      const { path, docId = null, type = null, storyId = null } =
        getIndexPage(store) || {};
      createGatsbyPage({
        path,
        component: require.resolve(`../src/templates/DocPage.tsx`),
        context: {
          docId,
          type,
          storyId,
        },
      });
      const homePages = getHomePages(store);
      homePages.forEach(({ path, docId, storyId, type }: DocHomePagesPath) => {
        createGatsbyPage({
          path,
          component: require.resolve(`../src/templates/DocHome.tsx`),
          context: {
            type,
            docId,
            storyId,
          },
        });
      });

      const docPages = getDocPages(store);
      docPages.forEach(
        ({
          path,
          type,
          docId = null,
          storyId = null,
          category = null,
          activeTab = null,
        }: DocPagesPath) => {
          createGatsbyPage({
            path,
            component: require.resolve(`../src/templates/DocPage.tsx`),
            context: {
              type,
              docId,
              storyId,
              category,
              activeTab,
            },
          });
        },
      );
      if (process.env.NODE_ENV === 'production' && store.config.siteMap) {
        const sitemap = getSiteMap(store);
        const sitemapname = sysPath.resolve(
          process.cwd(),
          store.config.siteMap.outputFolder,
          'sitemap.xml',
        );
        fs.writeFileSync(sitemapname, sitemap, 'utf8');
      }
    }

    doneCb(null, null);
  };
  const run = process.env.NODE_ENV === 'development' ? watch : compile;
  await run(config, onBundle);
};

exports.onCreateWebpackConfig = (
  { actions }: CreateWebpackConfigArgs,
  options: CompileProps,
) => {
  //inject store bundle name
  actions.setWebpackConfig({
    plugins: [new StorePlugin({ bundleFileName: getBundleName(options) })],
  });
};
