import {
  compile,
  watch,
  CompileProps,
  getBundleName,
} from '@component-controls/webpack-compile';
import { CreatePagesArgs, CreateWebpackConfigArgs } from 'gatsby';
import { StoriesStore } from '@component-controls/core';
import {
  getIndexPage,
  getHomePages,
  DocHomePagesPath,
  getDocPages,
  DocPagesPath,
  loadStore,
} from '@component-controls/store';

const { StorePlugin } = require('@component-controls/store/plugin');

const defaultPresets = ['react', 'react-docgen-typescript'];

exports.createPages = async (
  { actions }: CreatePagesArgs,
  options: CompileProps,
) => {
  const { createPage } = actions;
  const config: CompileProps = {
    presets: defaultPresets,
    ...options,
  };
  const { bundleName } =
    process.env.NODE_ENV === 'development'
      ? await watch(config)
      : await compile(config);
  if (bundleName) {
    const store: StoriesStore = loadStore(require(bundleName));
    //home page
    const { docId = null, type = null } = getIndexPage(store) || {};
    createPage({
      path: `/`,
      component: require.resolve(`../src/templates/DocPage.tsx`),
      context: {
        docId,
        type,
      },
    });
    const homePages = getHomePages(store);
    homePages.forEach(({ path, docId, type }: DocHomePagesPath) => {
      createPage({
        path,
        component: require.resolve(`../src/templates/DocHome.tsx`),
        context: {
          type,
          docId,
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
        createPage({
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
  }
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
