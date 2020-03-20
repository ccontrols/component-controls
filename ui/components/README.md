# Table of contents

-   [Overview](#overview)
    -   [@component-controls/components](#component-controlscomponents)
-   [List of components](#list-of-components)
    -   [<ins>ActionBar</ins>](#insactionbarins)
    -   [<ins>ActionContainer</ins>](#insactioncontainerins)
    -   [<ins>BlockContainer</ins>](#insblockcontainerins)
    -   [<ins>Collapsible</ins>](#inscollapsibleins)
    -   [<ins>ExternalLink</ins>](#insexternallinkins)
    -   [<ins>FlexContainer</ins>](#insflexcontainerins)
    -   [<ins>Markdown</ins>](#insmarkdownins)
    -   [<ins>Popover</ins>](#inspopoverins)
    -   [<ins>Source</ins>](#inssourceins)
    -   [<ins>Subtitle</ins>](#inssubtitleins)
    -   [<ins>SyntaxHighlighter</ins>](#inssyntaxhighlighterins)
    -   [<ins>Table</ins>](#instableins)
    -   [<ins>Tab</ins>](#instabins)
    -   [<ins>Tabs</ins>](#instabsins)
    -   [<ins>TabList</ins>](#instablistins)
    -   [<ins>TabPanel</ins>](#instabpanelins)
    -   [<ins>Title</ins>](#institleins)
    -   [<ins>Toggle</ins>](#instoggleins)

# Overview

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

# List of components

<react-docgen-typescript path="./src" exclude=".ts$,.stories.tsx$,TableGrouping.tsx,TableFilter.tsx,PopoverUtils.tsx" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>ActionBar</ins>

a strip of actions to be attached to a container
the action items contain the labels and click event handler
actions can accept an order prop, and can also be superimposed

_ActionBar [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/ActionBar/ActionBar.tsx)_

**Properties:**

-   **actions**? : _ActionItem\[]_

## <ins>ActionContainer</ins>

a boxed container with actions.

_ActionContainer [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/ActionContainer/ActionContainer.tsx)_

**Properties:**

-   **actions**? : _ActionItem\[]_

    optional actions provided to the component
-   **paddingTop**? : _string | number_

    padding at the top, to account for the absolute position of the ActionBar

## <ins>BlockContainer</ins>

a collapsible block with a title. The title creates also an attribute id and an octicon for github style navigation.

_BlockContainer [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/BlockContainer/BlockContainer.tsx)_

**Properties:**

-   **title**? : _string_

    optional section title for the block

## <ins>Collapsible</ins>

Animated expand/collapse container component

_Collapsible [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Collapsible/Collapsible.tsx)_

**Properties:**

-   **isOpen** : _boolean_

    controlled open state
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

## <ins>Popover</ins>

A Popover container that is triggered by a click, or hover
used to display enhanced information that could not fit into the main scren

_Popover [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Popover/Popover.tsx)_

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
-   **actions**? : _ActionItem\[]_

    optional actions provided to the component
-   **paddingTop**? : _string | number_

    padding at the top, to account for the absolute position of the ActionBar

## <ins>Subtitle</ins>

_Subtitle [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Subtitle/Subtitle.tsx)_

**Properties:**

-   **ref**? : _((instance: HTMLHeadingElement) => void) | RefObject&lt;HTMLHeadingElement>_

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

## <ins>Tab</ins>

_Tab [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Tabs/Tabs.tsx)_

## <ins>Tabs</ins>

_Tabs [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Tabs/Tabs.tsx)_

## <ins>TabList</ins>

_TabList [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Tabs/Tabs.tsx)_

## <ins>TabPanel</ins>

_TabPanel [source code](https:/github.com/ccontrols/component-controls/blob/master/ui/components/src/Tabs/Tabs.tsx)_

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
