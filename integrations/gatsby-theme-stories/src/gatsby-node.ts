import * as path from 'path';

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
