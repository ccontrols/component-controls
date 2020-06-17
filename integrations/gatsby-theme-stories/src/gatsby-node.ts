import {
  getDocPath,
  PageType,
  TabConfiguration,
} from '@component-controls/core';

import {
  compile,
  watch,
  CompileProps,
} from '@component-controls/webpack-compile';
import { CreatePagesArgs } from 'gatsby';
import { LoaderOptions } from './types';

const defaultPresets = ['react', 'react-docgen-typescript'];

exports.createPages = async (
  { actions }: CreatePagesArgs,
  options: LoaderOptions,
) => {
  const { createPage } = actions;
  const config: CompileProps = {
    webPack: options.webpack,
    presets: defaultPresets,
    configPath: options.configPath,
    // bundleAnalyzer: true,
  };
  const pageTemplates: Record<PageType, string> = {
    story: require.resolve(`../src/templates/DocPage.tsx`),
    blog: require.resolve(`../src/templates/DocPage.tsx`),
    page: require.resolve(`../src/templates/DocPage.tsx`),
    tags: require.resolve(`../src/templates/CategoryPage.tsx`),
    author: require.resolve(`../src/templates/CategoryPage.tsx`),
  };
  const listTemplates: Record<PageType, string> = {
    story: require.resolve(`../src/templates/DocPage.tsx`),
    page: require.resolve(`../src/templates/DocPage.tsx`),
    blog: require.resolve(`../src/templates/PageList.tsx`),
    tags: require.resolve(`../src/templates/CategoryList.tsx`),
    author: require.resolve(`../src/templates/CategoryList.tsx`),
  };

  const { store } =
    process.env.NODE_ENV === 'development'
      ? await watch(config)
      : await compile(config);
  if (store) {
    const { pages, categories = [] } = store.buildConfig || {};
    if (pages) {
      Object.keys(pages).forEach(type => {
        if (!categories.includes(type as PageType)) {
          const page = pages[type as PageType];
          const pageType = type as PageType;
          const docs = store.getDocs(pageType);
          const tabs: Pick<TabConfiguration, 'route'>[] = page.tabs || [
            { route: undefined },
          ];
          tabs.forEach((tab, tabIndex) => {
            const route = tabIndex > 0 ? tab.route : undefined;
            docs.forEach(doc => {
              createPage({
                path: getDocPath(
                  pageType,
                  doc,
                  store.buildConfig?.pages,
                  undefined,
                  route,
                ),
                component: pageTemplates[pageType] || pageTemplates['story'],
                context: {
                  type: pageType,
                  activeTab: route,
                  doc: doc.title,
                },
              });
            });
          });
          if (docs.length) {
            const docsPage = docs.find(
              doc => doc?.route === `/${page.basePath}`,
            );
            createPage({
              path: `/${page.basePath}`,
              component: listTemplates[pageType] || listTemplates['story'],
              context: {
                type: pageType,
                doc: docsPage?.title,
              },
            });
          }
        }
      });
      categories.forEach(catName => {
        const cats = store.getUniquesByField(catName);
        const catPage = pages[catName as PageType];
        const catKeys = Object.keys(cats);
        catKeys.forEach(tag => {
          createPage({
            path: getDocPath(
              catName as PageType,
              undefined,
              store.buildConfig?.pages,
              tag,
            ),
            component: pageTemplates[catName as PageType],
            context: {
              type: catName as PageType,
              category: tag,
              doc: null,
            },
          });
        });
        if (catKeys.length) {
          createPage({
            path: `/${catPage.basePath}`,
            component: listTemplates[catName as PageType],
            context: {
              type: catName,
              doc: null,
            },
          });
        }
      });
    }
    const homePage = store.stores.find(s => s.doc?.route === '/');
    createPage({
      path: `/`,
      component: pageTemplates['page'],
      context: {
        doc: homePage?.doc?.title,
        type: homePage?.doc?.type,
      },
    });
  }
};
