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
