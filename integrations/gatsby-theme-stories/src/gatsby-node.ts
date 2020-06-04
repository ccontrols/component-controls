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
  };
  const { store } =
    process.env.NODE_ENV === 'development'
      ? await watch(config)
      : await compile(config);
  if (store) {
    store.stores.forEach(s => {
      const doc = s.doc;
      if (doc) {
        createPage({
          path: `/docs/${doc.title.toLowerCase()}`,
          component: require.resolve(`../src/templates/StoryPage.tsx`),
          context: {
            doc: doc.title,
          },
        });
      }
    });
    createPage({
      path: `/`,
      component: require.resolve(`../src/templates/StoryPage.tsx`),
      context: {},
    });
    createPage({
      path: `/docs/`,
      component: require.resolve(`../src/templates/StoryPage.tsx`),
      context: {},
    });
  }
};
