# Table of contents

-   [Motivation](#motivation)
-   [Inspiration](#inspiration)
-   [Roadmap](#roadmap)
-   [Integrations](#integrations)
    -   [@component-controls/storybook](#component-controlsstorybook)
        -   [storybook integration of component-controls.](#storybook-integration-of-component-controls)
        -   [Motivation](#motivation-1)
        -   [Limitations](#limitations)
-   [Core packages](#core-packages)
    -   [@component-controls/specification](#component-controlsspecification)
    -   [@component-controls/core](#component-controlscore)
    -   [@component-controls/instrument](#component-controlsinstrument)
    -   [@component-controls/loader](#component-controlsloader)
    -   [@component-controls/webpack-configs](#component-controlswebpack-configs)
    -   [@component-controls/store](#component-controlsstore)
-   [UI packages](#ui-packages)
    -   [@component-controls/pages](#component-controlspages)
    -   [@component-controls/blocks](#component-controlsblocks)
    -   [@component-controls/components](#component-controlscomponents)
    -   [@component-controls/editors](#component-controlseditors)
-   [Props info](#props-info)
    -   [@component-controls/react-docgen-info](#component-controlsreact-docgen-info)
    -   [@component-controls/react-docgen-typescript-info](#component-controlsreact-docgen-typescript-info)
-   [Miscellaneous](#miscellaneous)
    -   [@component-controls/storybook-custom-docs](#component-controlsstorybook-custom-docs)

# Motivation

-   Create a components development environment with testing as a first-class feature.
-   Decouple the user interface from loading of the 'stories' = modular design.
-   Do not modify the source files (both story and component files) at instrumentation-time as much as possible to avoid random build/run-time errors. Exception only where absolutely necessary, ie instrumenting coverage or performance profiling probes.
-   Built-in [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) instrumentation module.
-   Ability to integrate with various build engines - [storybookjs](https://storybook.js.org), [gatsby](https://www.gatsbyjs.org), [nextjs](https://nextjs.org).
-   Create and support open declarative story formats.

# Inspiration

There are many developments that have contributed to the creation of `component-controls`, a few of them are:

-   [storybook](https://storybook.js.org) is the original component development system that helps teams to design, develop and test components. The strong support for testing and the creation of an open [Component Story Format](https://github.com/storybookjs/csf) were an inspiration, as well as the [Storybook Addon Knobs](https://github.com/storybookjs/storybook/tree/next/addons/knobs) for providing configurable component properties.

-   [docz](https://www.docz.site) has a beautiful architecture and introduced non-proprietary [gatsby](https://www.gatsbyjs.org) build engine. This monorepo was also heavily influenced by the `docz` project repository structure.

-   [abstract syntax tree (AST)](https://en.wikipedia.org/wiki/Abstract_syntax_tree) advancements have been greatly responsible for making possible the parsing and analysis features of this library.

-   [blocks-ui](https://blocks-ui.com) is taking `AST` to a new level by generating and reversing AST to create [react](https://reactjs.org) applications and has been an inspiraton for pushing the enveloppe on our own `AST` work.

-   [theme-ui](https://theme-ui.com) is the driving force for standardizing `react` theming and design systems. `theme-ui` is used by our project as the theming and components founding block.

# Roadmap

-   [x] Core packages
-   [x] Support CSF and MDX stories format
-   [x] Instrumentation packages
-   [x] UI Libraries
-   [x] Storybook integration with addon-docs
-   [x] Storybook integration without addon-docs (replace all storybook loaders)
-   [ ] HMR
-   [ ] Integrated testing facilites
-   [ ] Coverage and perfoamnce profiling instrumentation
-   [ ] Replace MDX with frontmatter format
-   [ ] Docz integration
-   [ ] Multiple frameworks support (Vue, Angular, tbd)
-   [ ] Gatsby standalone app/static app builder
-   [ ] Nextjs standalone app/static app builder

# Integrations

<package-section file="./integrations/storybook/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/storybook](https://github.com/ccontrols/component-controls/blob/master/integrations/storybook)

Storybook Addon For live editing of component controls

### [storybook](https://storybook.js.org) integration of component-controls.

<p align="center">
  <img src="https://raw.githubusercontent.com/ccontrols/component-controls/master/integrations/storybook/images/component-controls.gif" alt="introduction to using component-controls" width="738">
</p>

### Motivation

-   Allow adding component-controls in storybook DocsPage.
-   Allow adding storybook docs blocks in component-controls documentation pages.
-   Allow standalone component-controls documentation pages.
-   Allow an unlimited number of documentation pages.
-   Fully replace and extend the Storybook addon-docs block components.
-   Fully replace Storybook's modx-compiler and source-loader.
-   Provide and extensible framework of components, blocks and pages.

### Limitations

-   Initial version is only for `react` apps. More frameworks are on the roadmap. 
-   Only handles the CSF and MDX stories format. The storeisOf API is not supported and there are currently no plans to support it.
-   The Storybook MDX is a proprietary format that will be replaced in due time with a portable [frontmatter](https://www.gatsbyjs.org/docs/mdx/markdown-syntax/#frontmatter--mdx-example) stories format, similar to the CSF format.

<!-- END-PACKAGE-SECTION -->

# Core packages

<package-section file="./core/specification/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/specification](https://github.com/ccontrols/component-controls/blob/master/core/specification)

Component controls specification with typescript definitions

Typescript definitions of the component-controls specification.
Includes definitions for:

-   [Story](#story)
-   [Stories](#stories)
-   [ControlTypes](#controltypes)
-   [ComponentControl](#componentcontrol-1)
-   [PropTypes](#proptypes)
-   and more...

<!-- END-PACKAGE-SECTION -->

<package-section file="./core/core/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/core](https://github.com/ccontrols/component-controls/blob/master/core/core)

Component controls core utility routines

<!-- END-PACKAGE-SECTION -->

<package-section file="./core/instrument/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## [@component-controls/instrument](https://github.com/ccontrols/component-controls/blob/master/core/instrument)

Component controls instrumentation library

Parsing a source file will generate the following information:

-   CSF: List of story named exports
-   CSF: Default export stories file information
-   MDX: List of `<Story />` story tags
-   MDX: List of `<Meta />` stories file information
-   Source code extracted for the stories
-   Source code of the entire stories file
-   List of all attributes(ie parameters) passed to CSF/MDX stories
-   List of story function arguments passed to CSF/MDX stories
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

Utility class to abstract loading the stories store from the webpack loader and provides an interface to access the store. Will also share the store accross bundles using localStorage and broadcastig messages.

<!-- END-PACKAGE-SECTION -->

# UI packages

The UI libraries are built around [theme-ui](https://theme-ui.com) and are designed to abstract the user interface level of components.

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

Some of the guiding design goals for this library:

-   Use theme-ui/system-ui as an foundation for a react UI library.
-   As much as possible possible, avoid using components with css dependencies.

Third-libraries used in no particular order:

-   [theme-ui](https://theme-ui.com) as the theming and components foundation.
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
