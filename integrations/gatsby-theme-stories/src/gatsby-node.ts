import * as path from 'path';
import {
  getDocPath,
  getStoryPath,
  DocType,
  TabConfiguration,
  Pages,
} from '@component-controls/core';
import { getDocs, getUniquesByField } from '@component-controls/loader';

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
    presets: options.presets || defaultPresets,
    configPath: options.configPath,
    outputFolder:
      options.outputFolder || `${path.join(process.cwd(), 'public')}`,
  };
  const { store } =
    process.env.NODE_ENV === 'development'
      ? await watch(config)
      : await compile(config);
  if (store) {
    const { pages, categories = [] } = store.buildConfig || {};
    if (pages) {
      Object.keys(pages).forEach(type => {
        if (!categories.includes(type as DocType)) {
          const page = pages[type as DocType];
          const docType = type as DocType;
          const docs: Pages = getDocs(store.stores, docType);
          const tabs: Pick<TabConfiguration, 'route'>[] = page.tabs || [
            { route: undefined },
          ];
          tabs.forEach((tab, tabIndex) => {
            const route = tabIndex > 0 ? tab.route : undefined;
            docs.forEach(doc => {
              const stories =
                page.storyPaths && doc.stories?.length
                  ? doc.stories
                  : [undefined];
              stories.forEach((storyId?: string) => {
                const url = getStoryPath(
                  storyId,
                  doc,
                  store.buildConfig?.pages,
                  route,
                );
                createPage({
                  path: url,
                  component: require.resolve(`../src/templates/DocPage.tsx`),
                  context: {
                    type: docType,
                    activeTab: route,
                    docId: doc.title,
                    storyId,
                  },
                });
              });
            });
          });
          if (docs.length) {
            const docsPage = docs.find(
              doc => doc?.route === `/${page.basePath}`,
            );
            createPage({
              path: `/${page.basePath}`,
              component: require.resolve(`../src/templates/DocHome.tsx`),
              context: {
                type: docType,
                docId: docsPage?.title,
              },
            });
          }
        }
      });
      categories.forEach(catName => {
        const cats = getUniquesByField(store.stores, catName);
        const catPage = pages[catName as DocType];
        const catKeys = Object.keys(cats);
        catKeys.forEach(tag => {
          createPage({
            path: getDocPath(
              catName as DocType,
              undefined,
              store.buildConfig?.pages,
              tag,
            ),
            component: require.resolve(`../src/templates/CategoryPage.tsx`),
            context: {
              type: catName as DocType,
              category: tag,
              docId: null,
            },
          });
        });
        createPage({
          path: `/${catPage.basePath}`,
          component: require.resolve(`../src/templates/DocHome.tsx`),
          context: {
            type: catName,
            docId: null,
          },
        });
      });
    }
    const homePage = store.stores.find(s => s.doc?.route === '/');
    createPage({
      path: `/`,
      component: require.resolve(`../src/templates/DocPage.tsx`),
      context: {
        docId: homePage?.doc?.title,
        type: homePage?.doc?.type,
      },
    });
  }
};
