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
    const template = require.resolve(`../src/templates/StoryPage.tsx`);
    store.stores.forEach(s => {
      const doc = s.doc;
      if (doc) {
        createPage({
          path: doc.route || `/docs/${doc.title.toLowerCase()}`,
          component: template,
          context: {
            doc: doc.title,
          },
        });
      }
    });
    const homePage = store.stores.find(s => s.doc?.route === '/');
    createPage({
      path: `/`,
      component: template,
      context: {
        doc: homePage?.doc?.title,
      },
    });
    const docsPage = store.stores.find(s => s.doc?.route === '/docs');
    createPage({
      path: `/docs/`,
      component: template,
      context: {
        doc: docsPage?.doc?.title,
      },
    });
  }
};
