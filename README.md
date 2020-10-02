# Table of contents

-   [About](#about)
-   [Showcase sites](#showcase-sites)
    -   [1. documentation](#1-documentation)
    -   [2. grommet-controls](#2-grommet-controls)
    -   [3. theme-ui design system](#3-theme-ui-design-system)
    -   [4. starter projects](#4-starter-projects)
-   [Motivation](#motivation)
-   [Inspiration](#inspiration)
-   [Roadmap](#roadmap)

# About

`component-controls` is a next-generation tool to help create blazing-fast documentation sites for your libraries and components.

Using [MDX](https://mdxjs.com) or javascript to author documentation files, the sites can be generated with highly-optimized site generators as [gatsby](https://www.gatsbyjs.com) or [nextjs](https://nextjs.org).

Before starting, take a look at our blog post [gatsby vs nextjs vs storybook](https://component-controls.com/blogs/gatsby-vs-nextjs-vs-storybook) comparison for generating static documentation sites.

# Showcase sites

## 1. documentation

We believe in the practice of dogfooding, thus we have created the full documentation sites for component-controls using - well, component-controls. Everything from blog posts, tutorials, author profiles to auto-generated component documentation, and testing pages.

-   [built with gatsby](https://component-controls.com/) / [source](https://github.com/ccontrols/component-controls/tree/master/examples/gatsby)

-   [built with nextjs](https://nextjs.component-controls.com/) / [source](https://github.com/ccontrols/component-controls/tree/master/examples/nextjs)

-   [built with storybook 6 without addon-docs](https://storybook.component-controls.com) / [source](https://github.com/ccontrols/component-controls/tree/master/examples/storybook-6-no-docs)

-   [built with storybook 6](https://components-storybook-6.netlify.app/) / [source](https://github.com/ccontrols/component-controls/tree/master/examples/storybook-6)

## 2. grommet-controls

This site shows how to create documentation for a custom react UI component library

[grommet-controls](https://grommet-controls.netlify.app) / [source](https://github.com/atanasster/grommet-controls)

## 3. theme-ui design system

This site showcases creating documentation sites for [third-party libraries](https://component-controls.com/tutorial/getting-started/external-libraries), that are installed in the `node_modules` folder of your project

[theme-ui design system](https://theme-ui-design-system.netlify.app) / [source](https://github.com/atanasster/theme-ui-design-system)

## 4. starter projects

A collection of simple starter projects, showcasing how to create an MDX pure documentation page, and MDX custom documentation page with a component interactive `story` and an ESM javascript page that automatically creates component documentation.

[built with gatsby](https://gatsby-controls-starter.netlify.app) / [source](https://github.com/atanasster/gatsby-controls-starter)

[built with nextjs](https://nextjs-controls-starter.netlify.app) / [source](https://github.com/atanasster/nextjs-controls-starter)

[built with storybook 5](https://storybook-5-controls-starter.netlify.app/?path=/story/first-page--page) / [source](https://github.com/atanasster/storybook-5-controls-starter)

[built with storybook 6](https://storybook-6-controls-starter.netlify.app) / [source](https://github.com/atanasster/storybook-6-controls-starter)

# Motivation

-   Create a components development environment with testing as a first-class feature.
-   Provide out-of-the-box documentation experience with markdown pages for home page, blogging, and general project documentation.
-   Use smart "super-bundlers" (gatsby, nextjs) to build compact and fast documentation sites.
-   Decouple the user interface from the loading of the 'stories' = modular design.
-   Do not modify the source files (both story and component files) at instrumentation-time as much as possible to avoid random build/run-time errors. The exception is only where necessary, ie instrumenting coverage or performance profiling probes.
-   Ability to document "external" component libraries, living in a separate package from the "stories" package.
-   Built-in [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) instrumentation module.
-   Create and support open declarative story formats.

# Inspiration

Many developments have contributed to the creation of `component-controls`, a few of them are:

-   [storybook](https://storybook.js.org) is the original component development system that helps teams to design, develop, and test components. The strong support for testing and the creation of an open [Component Story Format](https://github.com/storybookjs/csf) was an inspiration, as well as the [Storybook Addon Knobs](https://github.com/storybookjs/storybook/tree/next/addons/knobs) for providing configurable component properties.

-   [docz](https://www.docz.site) has a beautiful architecture and introduced non-proprietary [gatsby](https://www.gatsbyjs.org) build engine. This monorepo was also heavily influenced by the `docz` project repository structure.

-   [docusaurus](https://docusaurus.io) creates very clean and effective UX for documentation websites. Provides excellent options for project blogging, versioning, translation, and algolia-powered search.

-   [abstract syntax tree (AST)](https://en.wikipedia.org/wiki/Abstract_syntax_tree) advancements have been greatly responsible for making possible the parsing and analysis features of this library.

-   [theme-ui](https://theme-ui.com) is the driving force for standardizing `react` theming and design systems. `theme-ui` is used by our project as the theming and components founding block.

-   [mdx](https://mdxjs.com) is driving the adoption of JSX in Markdown and allows writing rich, interactive documentation pages.

# Roadmap

-   [x] Core packages
-   [x] Support ESM and MDX stories format
-   [x] Instrumentation packages
-   [x] UI Libraries
-   [x] Storybook integration with addon-docs
-   [x] Storybook integration without addon-docs (replace all storybook loaders)
-   [x] Standalone webpack compiler API
-   [x] HMR
-   [x] Gatsby standalone app/static app builder
-   [x] Nextjs standalone app/static app builder
-   [x] Integrated testing facilites
-   [x] Design tokens componnets to document design systems 
-   [x] Support frontmatter MDX declarations
-   [ ] Multiple frameworks support (Vue, Angular, tbd)
-   [ ] Coverage and perfoamnce profiling instrumentation
