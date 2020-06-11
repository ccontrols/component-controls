import { getDocPath, PageType } from '@component-controls/specification';

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
    blog: require.resolve(`../src/templates/BlogPage.tsx`),
    page: require.resolve(`../src/templates/PagePage.tsx`),
  };
  const listTemplates: Record<PageType, string> = {
    story: require.resolve(`../src/templates/DocPage.tsx`),
    blog: require.resolve(`../src/templates/PageList.tsx`),
    page: require.resolve(`../src/templates/PagePage.tsx`),
  };

  const { store } =
    process.env.NODE_ENV === 'development'
      ? await watch(config)
      : await compile(config);
  if (store) {
    const { pages = {} } = store.buildConfig || {};
    Object.keys(pages).forEach(type => {
      const page = pages[type];
      const pageType = type as PageType;
      const docs = store.getDocs(pageType);
      docs.forEach(doc => {
        createPage({
          path: getDocPath(pageType, doc, store.buildConfig),
          component: pageTemplates[pageType],
          context: {
            doc: doc.title,
          },
        });
      });
      if (docs.length) {
        const docsPage = docs.find(doc => doc?.route === `/${page.basePath}`);
        createPage({
          path: `/${page.basePath}`,
          component: listTemplates[pageType],
          context: {
            type: pageType,
            doc: docsPage?.title,
          },
        });
      }
    });

    const homePage = store.stores.find(s => s.doc?.route === '/');
    createPage({
      path: `/`,
      component: pageTemplates['page'],
      context: {
        doc: homePage?.doc?.title,
      },
    });
  }
};
