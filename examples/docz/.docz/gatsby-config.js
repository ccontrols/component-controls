const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Component Controls Docz Example',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: { searchPath: '../' },
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/atanasster/component-controls/examples/docz/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Component Controls Docz Example',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/atanasster/component-controls/examples/docz',
          templates:
            '/Users/atanasster/component-controls/node_modules/docz-core/dist/templates',
          docz: '/Users/atanasster/component-controls/examples/docz/.docz',
          cache:
            '/Users/atanasster/component-controls/examples/docz/.docz/.cache',
          app: '/Users/atanasster/component-controls/examples/docz/.docz/app',
          appPackageJson:
            '/Users/atanasster/component-controls/examples/docz/package.json',
          appTsConfig:
            '/Users/atanasster/component-controls/examples/docz/tsconfig.json',
          gatsbyConfig:
            '/Users/atanasster/component-controls/examples/docz/gatsby-config.js',
          gatsbyBrowser:
            '/Users/atanasster/component-controls/examples/docz/gatsby-browser.js',
          gatsbyNode:
            '/Users/atanasster/component-controls/examples/docz/gatsby-node.js',
          gatsbySSR:
            '/Users/atanasster/component-controls/examples/docz/gatsby-ssr.js',
          importsJs:
            '/Users/atanasster/component-controls/examples/docz/.docz/app/imports.js',
          rootJs:
            '/Users/atanasster/component-controls/examples/docz/.docz/app/root.jsx',
          indexJs:
            '/Users/atanasster/component-controls/examples/docz/.docz/app/index.jsx',
          indexHtml:
            '/Users/atanasster/component-controls/examples/docz/.docz/app/index.html',
          db:
            '/Users/atanasster/component-controls/examples/docz/.docz/app/db.json',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /.*/,
        stages: ['develop'],
        options: {
          emitWarning: false,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['docz', 'gatsby-theme-docz'],
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
