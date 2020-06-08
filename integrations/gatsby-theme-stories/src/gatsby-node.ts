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
    const docTemplate = require.resolve(`../src/templates/DocPage.tsx`);
    const { docsPath = '', blogsPath = '' } = store.buildConfig || {};
    const docs = store.getDocs();
    docs.forEach(doc => {
      createPage({
        path: doc.route || `/${docsPath}${doc.title.toLowerCase()}`,
        component: docTemplate,
        context: {
          doc: doc.title,
        },
      });
    });
    if (docs.length) {
      const docsPage = docs.find(doc => doc?.route === `/${docsPath}`);
      createPage({
        path: `/${docsPath}`,
        component: docTemplate,
        context: {
          doc: docsPage?.title,
        },
      });
    }
    const blogTemplate = require.resolve(`../src/templates/BlogPage.tsx`);

    const blogs = store.getBlogs();

    blogs.forEach(blog => {
      createPage({
        path: blog.route || `/${blogsPath}${blog.title.toLowerCase()}`,
        component: blogTemplate,
        context: {
          doc: blog.title,
        },
      });
    });
    if (blogs.length) {
      const blogsPage = blogs.find(blog => blog?.route === `/${blogsPath}`);
      createPage({
        path: `/${blogsPath}`,
        component: blogTemplate,
        context: {
          doc: blogsPage?.doc?.title,
        },
      });
    }
    const pageTemplate = require.resolve(`../src/templates/PagePage.tsx`);
    const homePage = store.stores.find(s => s.doc?.route === '/');
    createPage({
      path: `/`,
      component: pageTemplate,
      context: {
        doc: homePage?.doc?.title,
      },
    });
  }
};
