# Table of contents

-   [Overview](#overview)
    -   [@component-controls/blocks](#component-controlsblocks)
-   [List of components](#list-of-components)
    -   [<ins>ComponentSource</ins>](#inscomponentsourceins)
    -   [<ins>ControlsTable</ins>](#inscontrolstableins)
    -   [<ins>SingleControlsTable</ins>](#inssinglecontrolstableins)
    -   [<ins>Description</ins>](#insdescriptionins)
    -   [<ins>BlockPropsTable</ins>](#insblockpropstableins)
    -   [<ins>PropsTable</ins>](#inspropstableins)
    -   [<ins>PureStorySource</ins>](#inspurestorysourceins)
    -   [<ins>StorySource</ins>](#insstorysourceins)
    -   [<ins>Subtitle</ins>](#inssubtitleins)
    -   [<ins>Title</ins>](#institleins)

# Overview

## @component-controls/blocks

A collection of core block components - intended to be displayed on the documentation page of stories.

Some of the guiding design goals for this library:

-   Most components should have a 'plain' and a 'block' version, where the block versions adds a collapsible ox with a title.
-   There are two main categories of components: components that display story data (i.e. story source, story render) and component(s) data (i.e. prop tables, component sources)
-   All components accept a list of custom ActionItems to be extended. 
-   The compnents that deal with source code (sotory or component) display actions to visit the repositories.

# List of components

<react-docgen-typescript path="./src" exclude="index.ts,repositoryActions.tsx,StoryContext.tsx,utils.ts,ComponentsContext.tsx,context.tsx,argument-utils.ts,PureStorySource.stories.tsx" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>ComponentSource</ins>

Displays import statement for a component as well as the component file source code
Optionally also displays some repository information from the component's package.json
Under the hood, uses [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer) for syntax highlighting

_ComponentSource [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/blocks/src/ComponentSource/ComponentSource.tsx)_

**Properties:**

-   **of**? : _any_

    Specify the component(s), for which to have information displayed.
    The default, a value of `"."` will indicate to display information for the current component (associated with the current Story).
    If an array of components is specified, each component will be displayed in a separate tab.
-   **theme**? : _PrismTheme_

    optional theme provided to the component
-   **language**? : _Language_

    code lnguage used, by default "jsx"
-   **renderFn**? : _(props: RenderProps, other: { theme: PrismTheme; }) => ReactNode_

    custom function to render the source code
-   **dark**? : _boolean_

    used to specify a "dark" color theme - applcable only if no custom theme prop is provided
-   **style**? : _any_

    css styles for the container
-   **as**? : _any_

    syntax container as element
-   **title**? : _string_

    optional section title for the block
-   **actions**? : _ActionItem\[]_

    additional actions provided to the component

## <ins>ControlsTable</ins>

Table component to display a story's controls and their editors

_ControlsTable [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/blocks/src/ControlsTable/ControlsTable.tsx)_

**Properties:**

-   **title**? : _string_
-   **storyId**? : _string_
-   **controls**? : _LoadedComponentControls_
-   **setControlValue**? : _SetControlValueFn_
-   **clickControl**? : _ClickControlFn_

## <ins>SingleControlsTable</ins>

_SingleControlsTable [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/blocks/src/ControlsTable/SingleControlsTable.tsx)_

**Properties:**

-   **title**? : _string_
-   **storyId**? : _string_
-   **controls**? : _LoadedComponentControls_
-   **setControlValue**? : _SetControlValueFn_
-   **clickControl**? : _ClickControlFn_

## <ins>Description</ins>

Description component with context
'of' property can specify which component's description to use

_Description [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/blocks/src/Description/Description.tsx)_

**Properties:**

-   **components**? : _{ \[key: string]: ComponentOverride&lt;any, any>; a?: ComponentOverride&lt;any, any>; br?: ComponentOverride&lt;any, any>; button?: ComponentOverride&lt;any, any>; ... 27 more ...; ul?: ComponentOverride&lt;...>; }_

    components to customize the markdown display
-   **of**? : _any_

    Specify the component(s), for which to have information displayed.
    The default, a value of `"."` will indicate to display information for the current component (associated with the current Story).
    If an array of components is specified, each component will be displayed in a separate tab.

## <ins>BlockPropsTable</ins>

_BlockPropsTable [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/blocks/src/PropsTable/block/BlockPropsTable.tsx)_

**Properties:**

-   **of**? : _any_

    Specify the component(s), for which to have information displayed.
    The default, a value of `"."` will indicate to display information for the current component (associated with the current Story).
    If an array of components is specified, each component will be displayed in a separate tab.
-   **header**? : _boolean_
-   **sorting**? : _boolean_
-   **filtering**? : _boolean_
-   **itemsLabel**? : _string_
-   **groupBy**? : _string\[]_
-   **hiddenColumns**? : _string\[]_
-   **expanded**? : _{ \[key: string]: boolean; }_
-   **actions**? : _ActionItem\[]_

    additional actions provided to the component

## <ins>PropsTable</ins>

_PropsTable [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/blocks/src/PropsTable/plain/PropsTable.tsx)_

**Properties:**

-   **of**? : _any_

    Specify the component(s), for which to have information displayed.
    The default, a value of `"."` will indicate to display information for the current component (associated with the current Story).
    If an array of components is specified, each component will be displayed in a separate tab.
-   **header**? : _boolean_
-   **sorting**? : _boolean_
-   **filtering**? : _boolean_
-   **itemsLabel**? : _string_
-   **groupBy**? : _string\[]_
-   **hiddenColumns**? : _string\[]_
-   **expanded**? : _{ \[key: string]: boolean; }_

## <ins>PureStorySource</ins>

_PureStorySource [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/blocks/src/StorySource/PureStorySource.tsx)_

**Properties:**

-   **children** : _any_

    source code to be displayed
-   **theme**? : _PrismTheme_

    optional theme provided to the component
-   **language**? : _Language_

    code lnguage used, by default "jsx"
-   **renderFn**? : _(props: RenderProps, other: { theme: PrismTheme; }) => ReactNode_

    custom function to render the source code
-   **dark**? : _boolean_

    used to specify a "dark" color theme - applcable only if no custom theme prop is provided
-   **style**? : _any_

    css styles for the container
-   **as**? : _any_

    syntax container as element
-   **title**? : _string_

    optional section title for the block
-   **actions**? : _ActionItem\[]_

    additional actions provided to the component
-   **args**? : _StoryArguments_

    a list of story arguments accepted by Source
    this is used to syntax-highlight the arguments
    and their usage
-   **controls**? : _LoadedComponentControls_

    any control values to render in place of props in the editor
-   **fileSource**? : _string_

    full file source code of the file where the story was declared

## <ins>StorySource</ins>

_StorySource [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/blocks/src/StorySource/StorySource.tsx)_

**Properties:**

-   **id**? : _string_

    id of the story
-   **name**? : _string_

    or - name of the story if in an external file
    will be used to find the story
-   **children** : _any_

    source code to be displayed
-   **theme**? : _PrismTheme_

    optional theme provided to the component
-   **language**? : _Language_

    code lnguage used, by default "jsx"
-   **renderFn**? : _(props: RenderProps, other: { theme: PrismTheme; }) => ReactNode_

    custom function to render the source code
-   **dark**? : _boolean_

    used to specify a "dark" color theme - applcable only if no custom theme prop is provided
-   **style**? : _any_

    css styles for the container
-   **as**? : _any_

    syntax container as element
-   **title**? : _string_

    optional section title for the block
-   **actions**? : _ActionItem\[]_

    additional actions provided to the component
-   **args**? : _StoryArguments_

    a list of story arguments accepted by Source
    this is used to syntax-highlight the arguments
    and their usage
-   **controls**? : _LoadedComponentControls_

    any control values to render in place of props in the editor
-   **fileSource**? : _string_

    full file source code of the file where the story was declared

## <ins>Subtitle</ins>

_Subtitle [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/blocks/src/Subtitle/Subtitle.tsx)_

**Properties:**

-   **id**? : _string_

    id of the story
-   **name**? : _string_

    or - name of the story if in an external file
    will be used to find the story
-   **ref**? : _((instance: HTMLHeadingElement) => void) | RefObject&lt;HTMLHeadingElement>_

## <ins>Title</ins>

_Title [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/blocks/src/Title/Title.tsx)_

**Properties:**

-   **id**? : _string_

    id of the story
-   **name**? : _string_

    or - name of the story if in an external file
    will be used to find the story
-   **ref**? : _((instance: HTMLHeadingElement) => void) | RefObject&lt;HTMLHeadingElement>_

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
