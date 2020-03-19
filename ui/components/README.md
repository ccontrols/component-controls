# Table of contents

-   [Overview](#overview)
    -   [@component-controls/components](#component-controlscomponents)
-   [List of components](#list-of-components)
    -   [<ins>ActionBar</ins>](#insactionbarins)
    -   [<ins>simple</ins>](#inssimpleins)
    -   [<ins>BlockContainer</ins>](#insblockcontainerins)
    -   [<ins>simple</ins>](#inssimpleins-1)
    -   [<ins>Collapsible</ins>](#inscollapsibleins)
    -   [<ins>simple</ins>](#inssimpleins-2)
    -   [<ins>ExternalLink</ins>](#insexternallinkins)
    -   [<ins>FlexContainer</ins>](#insflexcontainerins)
    -   [<ins>Markdown</ins>](#insmarkdownins)
    -   [<ins>simple</ins>](#inssimpleins-3)
    -   [<ins>Wrapper</ins>](#inswrapperins)
    -   [<ins>Arrow</ins>](#insarrowins)
    -   [<ins>Popover</ins>](#inspopoverins)
    -   [<ins>simpleSource</ins>](#inssimplesourceins)
    -   [<ins>Source</ins>](#inssourceins)
    -   [<ins>simple</ins>](#inssimpleins-4)
    -   [<ins>Subtitle</ins>](#inssubtitleins)
    -   [<ins>simpleSource</ins>](#inssimplesourceins-1)
    -   [<ins>SyntaxHighlighter</ins>](#inssyntaxhighlighterins)
    -   [<ins>Table</ins>](#instableins)
    -   [<ins>GlobalFilter</ins>](#insglobalfilterins)
    -   [<ins>useExpanderColumn</ins>](#insuseexpandercolumnins)
    -   [<ins>useTableLayout</ins>](#insusetablelayoutins)
    -   [<ins>Tab</ins>](#instabins)
    -   [<ins>Tabs</ins>](#instabsins)
    -   [<ins>TabList</ins>](#instablistins)
    -   [<ins>TabPanel</ins>](#instabpanelins)
    -   [<ins>simple</ins>](#inssimpleins-5)
    -   [<ins>Title</ins>](#institleins)
    -   [<ins>Toggle</ins>](#instoggleins)

# Overview

## @component-controls/components

A collection of the base UI components used by component-controls

# List of components

<react-docgen-typescript path="./src" exclude="index.ts" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>ActionBar</ins>

_ActionBar [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/ActionBar/ActionBar.tsx)_

**Properties:**

-   **actionItems** : _ActionItem\[]_

## <ins>simple</ins>

_simple [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/BlockContainer/BlockContainer.stories.tsx)_

**Properties:**

-   **title**? : _string_

    optional section title for the block
-   **actions**? : _ActionItem\[]_

    additional actions provided to the component

## <ins>BlockContainer</ins>

_BlockContainer [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/BlockContainer/BlockContainer.tsx)_

**Properties:**

-   **title**? : _string_

    optional section title for the block
-   **actions**? : _ActionItem\[]_

    additional actions provided to the component

## <ins>simple</ins>

_simple [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Collapsible/Collapsible.stories.tsx)_

**Properties:**

-   **animateOpacity**? : _boolean_
-   **animationStateClasses**? : _AnimationStateClasses_
-   **applyInlineTransitions**? : _boolean_
-   **contentClassName**? : _string_
-   **delay**? : _number_
-   **duration**? : _number_
-   **easing**? : _string_
-   **height**? : _ReactText_
-   **onAnimationEnd**? : _(props: { newHeight: number; }) => void_
-   **onAnimationStart**? : _(props: { newHeight: number; }) => void_
-   **isOpen** : _boolean_

## <ins>Collapsible</ins>

_Collapsible [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Collapsible/Collapsible.tsx)_

**Properties:**

-   **animateOpacity**? : _boolean_
-   **animationStateClasses**? : _AnimationStateClasses_
-   **applyInlineTransitions**? : _boolean_
-   **contentClassName**? : _string_
-   **delay**? : _number_
-   **duration**? : _number_
-   **easing**? : _string_
-   **height**? : _ReactText_
-   **onAnimationEnd**? : _(props: { newHeight: number; }) => void_
-   **onAnimationStart**? : _(props: { newHeight: number; }) => void_
-   **isOpen** : _boolean_

## <ins>simple</ins>

_simple [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/ExternalLink/ExternalLink.stories.tsx)_

**Properties:**

-   **ref**? : _((instance: HTMLAnchorElement) => void) | RefObject&lt;HTMLAnchorElement>_

## <ins>ExternalLink</ins>

_ExternalLink [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/ExternalLink/ExternalLink.tsx)_

**Properties:**

-   **ref**? : _((instance: HTMLAnchorElement) => void) | RefObject&lt;HTMLAnchorElement>_

## <ins>FlexContainer</ins>

_FlexContainer [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/FlexContainer/FlexContainer.tsx)_

**Properties:**

-   **align**? : _string_

## <ins>Markdown</ins>

MDX display component that works at run time
uses `markdown-to-jsx` to compile MDX

_Markdown [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Markdown/Markdown.tsx)_

**Properties:**

-   **children** : _string | (string & {}) | (string & ReactElement&lt;any, string | ((props: any) => ReactElement&lt;any, string | ... | (new (props: any) => Component&lt;any, any, any>)>) | (new (props: any) => Component&lt;...>)>) | (string & ReactNodeArray) | (string & ReactPortal)_

    the markdown code is passed as a children prop
-   **components**? : _{ \[key: string]: ComponentOverride&lt;any, any>; a?: ComponentOverride&lt;any, any>; br?: ComponentOverride&lt;any, any>; button?: ComponentOverride&lt;any, any>; ... 27 more ...; ul?: ComponentOverride&lt;...>; }_

    components to customize the markdown display

## <ins>simple</ins>

_simple [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Popover/Popover.stories.tsx)_

## <ins>Wrapper</ins>

_Wrapper [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Popover/Popover.tsx)_

**Properties:**

-   **placement**? : _string_
-   **borderColor** : _string_
-   **theme**? : _object_

## <ins>Arrow</ins>

_Arrow [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Popover/Popover.tsx)_

**Properties:**

-   **placement**? : _string_
-   **borderColor** : _string_
-   **theme**? : _object_

## <ins>Popover</ins>

A Popover container that is triggered by a click, or hover
used to display enhanced information that could not fit into the main scren

_Popover [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Popover/Popover.tsx)_

## <ins>simpleSource</ins>

_simpleSource [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Source/Source.stories.tsx)_

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

## <ins>Source</ins>

Source component used to display source code

_Source [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Source/Source.tsx)_

**Properties:**

-   **children**? : _any_

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

## <ins>simple</ins>

_simple [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Subtitle/Subtitle.stories.tsx)_

## <ins>Subtitle</ins>

_Subtitle [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Subtitle/Subtitle.tsx)_

**Properties:**

-   **ref**? : _((instance: HTMLHeadingElement) => void) | RefObject&lt;HTMLHeadingElement>_

## <ins>simpleSource</ins>

_simpleSource [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/SyntaxHighlighter/SyntaxHighlighter.stories.tsx)_

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

## <ins>SyntaxHighlighter</ins>

Syntax highlighter component

_SyntaxHighlighter [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/SyntaxHighlighter/SyntaxHighlighter.tsx)_

**Properties:**

-   **children**? : _any_

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

## <ins>Table</ins>

_Table [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Table/Table.tsx)_

**Properties:**

-   **columns** : _Column&lt;{}>\[]_
-   **data**? : _any\[]_
-   **header**? : _boolean_
-   **sorting**? : _boolean_
-   **filtering**? : _boolean_
-   **itemsLabel**? : _string_
-   **groupBy**? : _string\[]_
-   **hiddenColumns**? : _string\[]_
-   **expanded**? : _{ \[key: string]: boolean; }_

## <ins>GlobalFilter</ins>

_GlobalFilter [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Table/TableFilter.tsx)_

**Properties:**

-   **globalFilter**? : _string | ((rows: Row&lt;any>\[], columnIds: string\[], filterValue: any) => Row&lt;any>\[])_
-   **itemsLabel** : _string_

## <ins>useExpanderColumn</ins>

_useExpanderColumn [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Table/TableGrouping.tsx)_

## <ins>useTableLayout</ins>

_useTableLayout [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Table/useTableLayout.ts)_

## <ins>Tab</ins>

_Tab [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Tabs/Tabs.tsx)_

## <ins>Tabs</ins>

_Tabs [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Tabs/Tabs.tsx)_

## <ins>TabList</ins>

_TabList [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Tabs/Tabs.tsx)_

## <ins>TabPanel</ins>

_TabPanel [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Tabs/Tabs.tsx)_

## <ins>simple</ins>

_simple [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Title/Title.stories.tsx)_

## <ins>Title</ins>

_Title [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Title/Title.tsx)_

**Properties:**

-   **ref**? : _((instance: HTMLHeadingElement) => void) | RefObject&lt;HTMLHeadingElement>_

## <ins>Toggle</ins>

_Toggle [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Toggle/Toggle.tsx)_

**Properties:**

-   **checked**? : _boolean_

    whether checked
-   **onChange**? : _(checked: boolean) => void_

    onChange event - when one of the toggles in clicked
-   **labels**? : _{ true: any; false: any; }_

    custom labels - by defaut 'True' and 'False'

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
