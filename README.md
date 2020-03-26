# Table of contents

-   [Core packages](#core-packages)
    -   [@component-controls/specification](#component-controlsspecification)
    -   [@component-controls/core](#component-controlscore)
    -   [@component-controls/instrument](#component-controlsinstrument)
    -   [@component-controls/loader](#component-controlsloader)
-   [UI packages](#ui-packages)
    -   [@component-controls/components](#component-controlscomponents)
    -   [@component-controls/editors](#component-controlseditors)
    -   [@component-controls/blocks](#component-controlsblocks)
-   [Props info](#props-info)
    -   [@component-controls/react-docgen-info](#component-controlsreact-docgen-info)
    -   [@component-controls/react-docgen-typescript-info](#component-controlsreact-docgen-typescript-info)

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

# UI packages

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

# Props info

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
