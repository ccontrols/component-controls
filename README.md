# Table of contents

-   [Core packages](#core-packages)
    -   [@component-controls/instrument](#component-controlsinstrument)
-   [UI packages](#ui-packages)
    -   [@component-controls/components](#component-controlscomponents)
    -   [@component-controls/editors](#component-controlseditors)
    -   [@component-controls/blocks](#component-controlsblocks)

# Core packages

<package-section file="./core/instrument/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## @component-controls/instrument

Component controls instrumentation library. 
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

# UI packages

<package-section file="./ui/components/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## @component-controls/components

A collection of commonly used UI components for component-controls

The third-libraries used include in no particular order:

-   [theme-ui](https://theme-ui.com) as the theming and components foundation.
-   [prism](https://prismjs.com) for source code syntax highlighting, rendered with [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer).
-   [markdown-to-jsx](https://probablyup.com/markdown-to-jsx/) to transform markdown to JSX at runtime.
-   [react-table](https://github.com/tannerlinsley/react-table) to display tabular data. 
-   [octicons](https://octicons.github.com) for icons used in the components.
-   [react-tabs](https://reactcommunity.org/react-tabs/) for tabs and multi-page components.
-   [react-popper-tooltip](https://react-popper-tooltip.netlify.com) for popups and tooltips.
-   [react-animate-height](https://muffinman.io/react-animate-height/) for collapsible components.
-   [@theme-ui/presets](https://theme-ui.com/packages/presets/) for custom theming.

<!-- END-PACKAGE-SECTION -->

<package-section file="./ui/editors/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## @component-controls/editors

A collection of editors used to enter the control values

<!-- END-PACKAGE-SECTION -->

<package-section file="./ui/blocks/README.md" section="overview" />

<!-- START-PACKAGE-SECTION -->

## @component-controls/blocks

A collection of core block components - intended to be displayed on the documentation page of stories.

Some of the guiding design goals for this library:

-   Most components should have a 'plain' and a 'block' version, where the block versions adds a collapsible ox with a title.
-   There are two main categories of components: components that display story data (i.e. story source, story render) and component(s) data (i.e. prop tables, component sources)
-   All components accept a list of custom ActionItems to be extended. 
-   The compnents that deal with source code (sotory or component) display actions to visit the repositories.

<!-- END-PACKAGE-SECTION -->
