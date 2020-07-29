# Table of contents

-   [WIP](#wip)
-   [Motivation](#motivation)
-   [Inspiration](#inspiration)
-   [Roadmap](#roadmap)
-   [Showcase sites](#showcase-sites)
-   [Integrations](#integrations)
    -   [@component-controls/storybook](#component-controlsstorybook)
    -   [PresetOptions](#presetoptions)
        -   [properties](#properties)
    -   [defaultRules](#defaultrules)
    -   [Storybook addon panels](#storybook-addon-panels)
-   [Core packages](#core-packages)
    -   [@component-controls/core](#component-controlscore)
    -   [@component-controls/core](#component-controlscore-1)
    -   [@component-controls/instrument](#component-controlsinstrument)
    -   [@component-controls/loader](#component-controlsloader)
    -   [@component-controls/webpack-compile](#component-controlswebpack-compile)
    -   [@component-controls/webpack-configs](#component-controlswebpack-configs)
    -   [@component-controls/store](#component-controlsstore)
    -   [@component-controls/config](#component-controlsconfig)
-   [UI packages](#ui-packages)
    -   [@component-controls/app](#component-controlsapp)
    -   [@component-controls/pages](#component-controlspages)
    -   [@component-controls/blocks](#component-controlsblocks)
    -   [@component-controls/components](#component-controlscomponents)
    -   [@component-controls/editors](#component-controlseditors)
-   [Props info](#props-info)
    -   [@component-controls/react-docgen-info](#component-controlsreact-docgen-info)
    -   [@component-controls/react-docgen-typescript-info](#component-controlsreact-docgen-typescript-info)
-   [Plugins](#plugins)
    -   [@component-controls/axe-plugin](#component-controlsaxe-plugin)
-   [Miscellaneous](#miscellaneous)
    -   [@component-controls/storybook-custom-docs](#component-controlsstorybook-custom-docs)

# WIP

> :warning: **THIS IS WORK IN PROGRESS**: The API are very likely to change often.

# Motivation

-   Create a components development environment with testing as a first-class feature.
-   Provide out-of-the-box documentation experience with markdown pages for home page, blogging and general project documentation .
-   Use smart "super-bundlers" (gatsby, nextjs) to build compact and fast documentation sites.
-   Decouple the user interface from loading of the 'stories' = modular design.
-   Do not modify the source files (both story and component files) at instrumentation-time as much as possible to avoid random build/run-time errors. Exception only where absolutely necessary, ie instrumenting coverage or performance profiling probes.
-   Ability to document "external" component libraries, living in a separate package from the "stories" package.
-   Built-in [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) instrumentation module.
-   Create and support open declarative story formats.

# Inspiration

There are many developments that have contributed to the creation of `component-controls`, a few of them are:

-   [storybook](https://storybook.js.org) is the original component development system that helps teams to design, develop and test components. The strong support for testing and the creation of an open [Component Story Format](https://github.com/storybookjs/csf) were an inspiration, as well as the [Storybook Addon Knobs](https://github.com/storybookjs/storybook/tree/next/addons/knobs) for providing configurable component properties.

-   [docz](https://www.docz.site) has a beautiful architecture and introduced non-proprietary [gatsby](https://www.gatsbyjs.org) build engine. This monorepo was also heavily influenced by the `docz` project repository structure.

-   [docusaurus](https://docusaurus.io) creates very clean and effective UX for documentation websites. Provides excellent options for project blogging, versioning, translation and algolia-powered search.

-   [abstract syntax tree (AST)](https://en.wikipedia.org/wiki/Abstract_syntax_tree) advancements have been greatly responsible for making possible the parsing and analysis features of this library.

-   [blocks-ui](https://blocks-ui.com) is taking `AST` to a new level by generating and reversing AST to create [react](https://reactjs.org) applications and has been an inspiraton for pushing the enveloppe on our own `AST` work.

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
-   [ ] Integrated testing facilites (WIP)
-   [ ] Coverage and perfoamnce profiling instrumentation
-   [x] Support frontmatter MDX declarations
-   [ ] Multiple frameworks support (Vue, Angular, tbd)

# Showcase sites

-   [Gatsby](https://component-controls.com/)

-   [Nextjs](https://nextjs.component-controls.com/)

-   [Storybook 6 without addon-docs](https://storybook.component-controls.com)

-   [Storybook 6](https://components-storybook-6.netlify.app/)

-   [Storybook custom docs pages](https://custom-pages-storybook-6.netlify.app)

# Integrations

<package-section file="./integrations/storybook/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/storybook](https://github.com/ccontrols/component-controls/blob/master/integrations/storybook)

Storybook Addon For live editing of component controls

Storybook plugin for documenting your projects with component controls

-   Full replacement for the storybook addon-docs
-   Works with storybook-5 and storybook-6

**Limitations**

-   Initial version is only for `react` apps. More frameworks are on the roadmap. 
-   Only handles the ESM(CSF) and MDX stories format. The storiesOf API is not supported and there are currently no plans to support it.

[Getting started with storybook](https://component-controls.com/tutorial/getting-started/storybook)

<tsdoc-typescript entry="./src/types.ts" />

<!-- START-TSDOC-TYPESCRIPT -->

## PresetOptions

_defined in [@component-controls/storybook/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/types.ts#L3)_

### properties

| Name               | Type                    | Description                                                             |
| ------------------ | ----------------------- | ----------------------------------------------------------------------- |
| `pages`            | string\[]               | additional custom documentation pages                                   |
| `propsPanel`       | boolean                 | whether to display the props table as an addon panel in storybook       |
| `storyConfigPanel` | boolean                 | whether to display the StoryConfig block as an addon panel in storybook |
| `storySourcePanel` | boolean                 | whether to display the StorySource block as an addon panel in storybook |
| `webpack`          | [RuleTypes](#ruletypes) | options that will be passed to the instrumenter.                        |

## defaultRules

_defined in [@component-controls/storybook/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/types.ts#L28)_

<!-- END-TSDOC-TYPESCRIPT -->

## Storybook addon panels

The `component-controls` block components ahev been designed from the ground up to be able to be placed either on documentation pages or in addon tabs. 

You can turn on and off the available panels:

      {
        name: '@component-controls/storybook',
        options: {
          controlsPanel: true,
          propsPanel: true,
          storySourcePanel: true,
        }
      }  

<!-- END-PACKAGE-SECTION -->

# Core packages

<package-section file="./core/core/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/core](https://github.com/ccontrols/component-controls/blob/master/core/core)

Component controls core types and utility functions

Type definitions of the component-controls specification and accompanying utility functions.
Includes definitions for:

-   [Story](https://github.com/ccontrols/component-controls/tree/master/core/core#story)
-   [Stories](https://github.com/ccontrols/component-controls/tree/master/core/core#stories)
-   [ControlTypes](https://github.com/ccontrols/component-controls/tree/master/core/core#controltypes)
-   [ComponentControl](https://github.com/ccontrols/component-controls/tree/master/core/core#componentcontrol)
-   [PropTypes](https://github.com/ccontrols/component-controls/tree/master/core/core#proptypes)
-   and more...

<!-- END-PACKAGE-SECTION -->

<package-section file="./core/core/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/core](https://github.com/ccontrols/component-controls/blob/master/core/core)

Component controls core types and utility functions

Type definitions of the component-controls specification and accompanying utility functions.
Includes definitions for:

-   [Story](https://github.com/ccontrols/component-controls/tree/master/core/core#story)
-   [Stories](https://github.com/ccontrols/component-controls/tree/master/core/core#stories)
-   [ControlTypes](https://github.com/ccontrols/component-controls/tree/master/core/core#controltypes)
-   [ComponentControl](https://github.com/ccontrols/component-controls/tree/master/core/core#componentcontrol)
-   [PropTypes](https://github.com/ccontrols/component-controls/tree/master/core/core#proptypes)
-   and more...

<!-- END-PACKAGE-SECTION -->

<package-section file="./core/instrument/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/instrument](https://github.com/ccontrols/component-controls/blob/master/core/instrument)

Component controls instrumentation library

Parsing a source file will generate the following information:

-   ESM: List of story named exports
-   ESM: Default export stories file information
-   MDX: List of `<Story />` story tags
-   MDX: List of Frontammetr or `<Meta />` stories file information
-   Source code extracted for the stories
-   Source code of the entire stories file
-   List of all attributes(ie parameters) passed to ESM/MDX stories
-   List of story function arguments passed to ESM/MDX stories
-   Usage location (in thesource code) of the function arguments
-   Extract 'component' information for stories: import clause, source file,source loction
-   Extract package.json repository information for the stories file
-   Extract package.json repository information for the components file (in canse the components and the stories and in different packages)

<!-- END-PACKAGE-SECTION -->

<package-section file="./core/loader/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/loader](https://github.com/ccontrols/component-controls/blob/master/core/loader)

Webpack loader for component controls instrumentation

Webpack loader that injects the data collected by [@component-controls/instrument](https://github.com/ccontrols/component-controls/tree/master/core/instrument).

<!-- END-PACKAGE-SECTION -->

<package-section file="./core/webpack-compile/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/webpack-compile](https://github.com/ccontrols/component-controls/blob/master/core/webpack-compile)

Webpack compile api

Standalone webpack compile/watch API for [@component-controls](https://github.com/ccontrols/component-controls).

<!-- END-PACKAGE-SECTION -->

<package-section file="./core/webpack-configs/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/webpack-configs](https://github.com/ccontrols/component-controls/blob/master/core/webpack-configs)

Webpack preset configurations

Collection of standard webpack rules for [@component-controls/instrument](https://github.com/ccontrols/component-controls/tree/master/core/instrument).

<!-- END-PACKAGE-SECTION -->

<package-section file="./core/store/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/store](https://github.com/ccontrols/component-controls/blob/master/core/store)

Component controls shared storage store

Utility functions and hooks to abstract loading and using the documentation store. Can also share the store accross bundles using localStorage and broadcastig messages.

[Store reference documentation](https://component-controls.com/tutorial/reference/store)

<!-- END-PACKAGE-SECTION -->

<package-section file="./core/config/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/config](https://github.com/ccontrols/component-controls/blob/master/core/config)

Component controls configuration reading utilities

Configration file utilities. Uses the [glob](https://www.npmjs.com/package/glob) package to locate story files from the configuration

<!-- END-PACKAGE-SECTION -->

# UI packages

The UI libraries are built around [theme-ui](https://theme-ui.com) and are designed to abstract the user interface level of components.

<package-section file="./ui/app/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/app](https://github.com/ccontrols/component-controls/blob/master/ui/app)

Component controls standalone application.

Components to create `@component-controls` standalone application, that are connected to the store of documents.

Some of the design goals:

-   Portability between different build systems ie - Gatsby, CRA, Vercel.
-   Create a true CMS-type user-interface, allowing for different document types ie. "stories", "blogs", "articles".
-   Category pages for "tags", "authors".
-   Fully customizable Home page.
-   Responsive user/interface, with sidebars transforming into popouts for small screen resolutions.

<!-- END-PACKAGE-SECTION -->

<package-section file="./ui/pages/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/pages](https://github.com/ccontrols/component-controls/blob/master/ui/pages)

Component controls pre-built documentation page templates.

A collection of pre-built documentation page templates.

-   The only requirement is that the pages are wrapped in a `<BlockContext />` react context.
-   The templates can be used in any environment (storybook, standalone, gatsby)

<!-- END-PACKAGE-SECTION -->

<package-section file="./ui/blocks/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/blocks](https://github.com/ccontrols/component-controls/blob/master/ui/blocks)

Component controls core documentation blocks.

Some of the guiding design goals for this library:

-   Most components should have a 'plain' and a 'block' version, where the block version adds a collapsible Box with a title.
-   There are two main categories of components: 
    -   that display story data (i.e. story source, story render)
    -   that display component(s) data (i.e. prop tables, component sources)
-   Components accept a list of custom ActionItems to be extended. 
-   Compnents that deal with source code (story or component source) display actions to browse their respective repositories.

<!-- END-PACKAGE-SECTION -->

<package-section file="./ui/components/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/components](https://github.com/ccontrols/component-controls/blob/master/ui/components)

Component controls commonly used UI components.

An ecclectic collection of [theme-ui](https://theme-ui.com)-based components that are used throughout `component-controls`.

Third-party libraries used in no particular order:

-   [prism](https://prismjs.com) for source code syntax highlighting, rendered with [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer).
-   [markdown-to-jsx](https://probablyup.com/markdown-to-jsx/) to transform markdown to JSX at runtime.
-   [react-table](https://github.com/tannerlinsley/react-table) to display tabular data. 
-   [octicons](https://octicons.github.com) for icons used in the components.
-   [react-tabs](https://reactcommunity.org/react-tabs/) for tabs and multi-page components.
-   [react-popper-tooltip](https://react-popper-tooltip.netlify.com) for popups and tooltips.
-   [react-animate-height](https://muffinman.io/react-animate-height/) for collapsible components.
-   [@theme-ui/presets](https://theme-ui.com/packages/presets/) for custom theming.
-   [react-switch](https://github.com/markusenglund/react-switch) for toggle/boolean inputs.

<!-- END-PACKAGE-SECTION -->

<package-section file="./ui/editors/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/editors](https://github.com/ccontrols/component-controls/blob/master/core/specification)

Component controls editors for component control values.

Some of the guiding design goals for this library:

-   Extensible using `addPropertyEditor`, so you can replace or add new editors.
-   All editors offer a consistent interface through the `getPropertyEditor` factory.

<!-- END-PACKAGE-SECTION -->

# Props info

The props-info packages are designed to solidify prop tables extraction for components. Every props-info package must export a props extractor factory that is initialized with the options for the specific library and returns a function that can parse a file and extract prop tables.

The props-info libraries are specifically meant to be used only at build-time, as they can add significant overhead to the sites at run-time.

<package-section file="./props-info/react-docgen/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/react-docgen-info](https://github.com/ccontrols/component-controls/blob/master/props-info/react-docgen)

Component controls react-docgen props info loader

Extract props info from react components. Although the latest version of `react-docgen` does support typescript, the typescript support still lags and is not recommended for use

-   Uses [react-docgen](https://github.com/reactjs/react-docgen)

<!-- END-PACKAGE-SECTION -->

<package-section file="./props-info/react-docgen-typescript/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/react-docgen-typescript-info](https://github.com/ccontrols/component-controls/blob/master/props-info/react-docgen-typescript)

Component controls react-docgen-typescript props info loader

Extract props info from react typescript components:

-   Uses [react-docgen-typescript](https://github.com/styleguidist/react-docgen-typescript)

<!-- END-PACKAGE-SECTION -->

# Plugins

<package-section file="./plugins/axe-plugin/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/axe-plugin](https://github.com/ccontrols/component-controls/blob/master/plugins/axe-plugin)

Axe ally testing plugin

Accessibility testing plugin using the [axe-core](https://github.com/dequelabs/axe-core) library from [deque](https://www.deque.com/axe/)

Some of the design goals:

-   Test at the component-level.
-   Provide a dashboard view to quickly see the errors and tests for the compnnt.
-   Ability to select and outline the sub-elements generating the errors.
-   Ability to see details from the errors and passed rules.

<p align="center">
  <img src="https://github.com/ccontrols/component-controls/raw/master/plugins/axe-plugin/images/axe-ally-testing.gif" alt="ally tests with axe plugin" width="738">
</p>

<!-- END-PACKAGE-SECTION -->

# Miscellaneous

<package-section file="./misc/storybook-custom-docs/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/storybook-custom-docs](https://github.com/ccontrols/component-controls/blob/master/misc/storybook-custom-docs)

Storybook custom docs pages

The Storybook [docs addon](https://github.com/storybookjs/storybook/tree/next/addons/docs) is a great start to display documentation in Storybook, but the early versions (currently 5.x and 6.x) have a few shortcomings.

`@component-controls/storybook-custom-docs` gives the possibility to add custom documentation (aka `docs`) pages to storybook by solving the following challenges:

-   Circumvent the hard-coded [docs render](https://github.com/storybookjs/storybook/blob/855815293b59412eea2b57f20eaa02982fcb5360/lib/core/src/client/preview/StoryRenderer.tsx#L168): docs pages need to reside in the `preview` part of Storybok in order to render stories since that's where the stories are, while the `TAB` addons are placed in the `manager` part of storybook. 
-   Circumvent the hard-coded [DOM tags](https://github.com/storybookjs/storybook/blob/855815293b59412eea2b57f20eaa02982fcb5360/lib/core/src/server/templates/index.ejs#L31): docs pages need to reside inside the preview `iframe` in order to render stories in a custom `docs` page and prevent css styles leaking into the story functions, while `TAB` addons are rendered outside the `iframe`. 

<!-- END-PACKAGE-SECTION -->
