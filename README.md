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

A collection of the base UI components used by component-controls

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

Some of the guidingdesign goals for this library:

-   Most components should have a 'plain' and a 'block' version, where the block versions adds a collapsible ox with a title.
-   There are two main categories of components: components that display story data (i.e. story source, story render) and component(s) data (i.e. prop tables, component sources)
-   All components accept a list of custom ActionItems to be extended. 
-   The compnents that deal with source code (sotory or component) display actions to visit the repositories.

<!-- END-PACKAGE-SECTION -->
