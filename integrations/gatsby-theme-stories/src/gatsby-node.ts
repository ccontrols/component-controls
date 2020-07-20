import {
  compile,
  watch,
  CompileProps,
  getBundleName,
} from '@component-controls/webpack-compile';
import { CreatePagesArgs, CreateWebpackConfigArgs } from 'gatsby';
import { HMRStore } from '@component-controls/store';
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
    const bundle = require(bundleName);
    const store = new HMRStore(bundle);
    //home page
    const { docId = null, type = null } = store.getIndexPage() || {};
    createPage({
      path: `/`,
      component: require.resolve(`../src/templates/DocPage.tsx`),
      context: {
        docId,
        type,
      },
    });
    const paths: string[] = store.getHomePaths();
    paths.forEach(path => {
      const { type = null, docId = null } = store.getHomePage(path) || {};
      createPage({
        path,
        component: require.resolve(`../src/templates/DocHome.tsx`),
        context: {
          type,
          docId,
        },
      });
    });

    const docPaths: string[] = store.getDocPaths();
    docPaths.forEach(path => {
      const {
        type = null,
        docId = null,
        storyId = null,
        category = null,
        activeTab = null,
      } = store.getDocPage(path) || {};

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
    });
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
