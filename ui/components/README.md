# Table of contents

-   [Overview](#overview)
-   [List of components](#list-of-components)
    -   [<ins>ActionBar</ins>](#insactionbarins)
    -   [<ins>ActionContainer</ins>](#insactioncontainerins)
    -   [<ins>BlockContainer</ins>](#insblockcontainerins)
    -   [<ins>Collapsible</ins>](#inscollapsibleins)
    -   [<ins>ColorMode</ins>](#inscolormodeins)
    -   [<ins>ExternalLink</ins>](#insexternallinkins)
    -   [<ins>Header</ins>](#insheaderins)
    -   [<ins>Keyboard</ins>](#inskeyboardins)
    -   [<ins>Link</ins>](#inslinkins)
    -   [<ins>LinkContextProvider</ins>](#inslinkcontextproviderins)
    -   [<ins>Markdown</ins>](#insmarkdownins)
    -   [<ins>Navmenu</ins>](#insnavmenuins)
    -   [<ins>Pagination</ins>](#inspaginationins)
    -   [<ins>IconButton</ins>](#insiconbuttonins)
    -   [<ins>PanelContainer</ins>](#inspanelcontainerins)
    -   [<ins>Popover</ins>](#inspopoverins)
    -   [<ins>Sidebar</ins>](#inssidebarins)
    -   [<ins>SidebarContextProvider</ins>](#inssidebarcontextproviderins)
    -   [<ins>SkiLinksItem</ins>](#insskilinksitemins)
    -   [<ins>SkipLinks</ins>](#insskiplinksins)
    -   [<ins>Source</ins>](#inssourceins)
    -   [<ins>Subheading</ins>](#inssubheadingins)
    -   [<ins>Subtitle</ins>](#inssubtitleins)
    -   [<ins>SyntaxHighlighter</ins>](#inssyntaxhighlighterins)
    -   [<ins>Table</ins>](#instableins)
    -   [<ins>useRowSelectionColumn</ins>](#insuserowselectioncolumnins)
    -   [<ins>Tab</ins>](#instabins)
    -   [<ins>TabList</ins>](#instablistins)
    -   [<ins>TabPanel</ins>](#instabpanelins)
    -   [<ins>Tabs</ins>](#instabsins)
    -   [<ins>Tag</ins>](#instagins)
    -   [<ins>Title</ins>](#institleins)
    -   [<ins>Toggle</ins>](#instoggleins)
    -   [<ins>Zoom</ins>](#inszoomins)

# Overview

Some of the guiding design goals for this library:

-   Use theme-ui/system-ui as an foundation for a react UI library.
-   As much as possible possible, avoid using components with css dependencies.

Third-party libraries used in no particular order:

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

# List of components

<react-docgen-typescript path="./src" exclude=".ts$,.stories.tsx$,TableGrouping.tsx,TableFilter.tsx,PopoverUtils.tsx" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>ActionBar</ins>

a strip of actions to be attached to a container
the action items contain the labels and click event handler
actions can accept an order prop, and can also be superimposed

_ActionBar [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/ActionBar/ActionBar.tsx)_

### properties

| Name      | Type          | Description                |
| --------- | ------------- | -------------------------- |
| `actions` | _ActionItems_ | collection of action items |

## <ins>ActionContainer</ins>

a boxed container with actions.

_ActionContainer [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/ActionContainer/ActionContainer.tsx)_

### properties

| Name      | Type            | Description                                               |
| --------- | --------------- | --------------------------------------------------------- |
| `actions` | _ActionItem\[]_ | optional actions provided to the component                |
| `plain`   | _boolean_       | if plain, skip the border and spacing around the children |

## <ins>BlockContainer</ins>

a collapsible block with a title. The title creates also an attribute id and an octicon for github style navigation.

_BlockContainer [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/BlockContainer/BlockContainer.tsx)_

### properties

| Name          | Type                | Description                                                                                                     |
| ------------- | ------------------- | --------------------------------------------------------------------------------------------------------------- |
| `title`       | _string_            | optional section title for the block.                                                                           |
| `description` | _string_            | optional markdown description.                                                                                  |
| `id`          | _string_            | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `collapsible` | _boolean_           | if false, will nothave a collapsible frame.                                                                     |
| `sxStyle`     | _SystemStyleObject_ | theme-ui styling object for Block Box                                                                           |

## <ins>Collapsible</ins>

Animated expand/collapse container component

_Collapsible [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Collapsible/Collapsible.tsx)_

### properties

| Name                     | Type                                      | Description           |
| ------------------------ | ----------------------------------------- | --------------------- |
| `isOpen*`                | _boolean_                                 | controlled open state |
| `animateOpacity`         | _boolean_                                 |                       |
| `animationStateClasses`  | _AnimationStateClasses_                   |                       |
| `applyInlineTransitions` | _boolean_                                 |                       |
| `contentClassName`       | _string_                                  |                       |
| `delay`                  | _number_                                  |                       |
| `duration`               | _number_                                  |                       |
| `easing`                 | _string_                                  |                       |
| `height`                 | _ReactText_                               |                       |
| `onAnimationEnd`         | _(props: { newHeight: number; }) => void_ |                       |
| `onAnimationStart`       | _(props: { newHeight: number; }) => void_ |                       |

## <ins>ColorMode</ins>

dark/light mode toggle for theme-ui themes

_ColorMode [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/ColorMode/ColorMode.tsx)_

### properties

| Name    | Type                  | Description                                         |
| ------- | --------------------- | --------------------------------------------------- |
| `label` | _string_              | optional label to be displayed alongside the toggle |
| `ref`   | _Ref&lt;ReactSwitch>_ | obtain a ref target                                 |

## <ins>ExternalLink</ins>

Anchor link to an external url,
adds the default `target="_blank" rel="noopener noreferrer"` props

_ExternalLink [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/ExternalLink/ExternalLink.tsx)_

### properties

| Name             | Type                                                                                                      | Description                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `download`       | _any_                                                                                                     | specifies that the target will be downloaded when a user clicks on the hyperlink. |
| `href`           | _string_                                                                                                  | specifies the URL of the page the link goes to.                                   |
| `hrefLang`       | _string_                                                                                                  | specifies the language of the linked document.                                    |
| `media`          | _string_                                                                                                  | specifies what media/device the linked document is optimized for.                 |
| `ping`           | _string_                                                                                                  | specifies a list of URLs to be notified if the user follows the hyperlink.        |
| `type`           | _string_                                                                                                  | specifies the media type of the linked document.                                  |
| `referrerPolicy` | _"no-referrer" \| "no-referrer-when-downgrade" \| "origin" \| "origin-when-cross-origin" \| "unsafe-url"_ | specifies which referrer to send.                                                 |

## <ins>Header</ins>

A page header component

_Header [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Header/Header.tsx)_

## <ins>Keyboard</ins>

Componet to monitor keystrokes. Can attach to child, document or window.

_Keyboard [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Keyboard/Keyboard.tsx)_

### properties

| Name         | Type                                                                                                                                                                                                                                                                                  | Description                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `keys*`      | _number\[]_                                                                                                                                                                                                                                                                           | array of the keys to be trapped                                                   |
| `target`     | _"children" \| "document" \| "window"_                                                                                                                                                                                                                                                | to where to attach the event handler                                              |
| `onKeyDown*` | _KeyboardCallback_                                                                                                                                                                                                                                                                    | callbal on key down                                                               |
| `children`   | _string \| number \| boolean \| {} \| ReactElement&lt;any, string \| ((props: any) => ReactElement&lt;any, string \| ... \| (new (props: any) => Component&lt;any, any, any>)>) \| (new (props: any) => Component&lt;...>)> \| ReactNodeArray \| ReactPortal \| ReactElement&lt;...>_ | child element to the key event handler will be attached to if target = 'children' |

## <ins>Link</ins>

_Link [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Link/Link.tsx)_

### properties

| Name  | Type                                                                         | Description |
| ----- | ---------------------------------------------------------------------------- | ----------- |
| `ref` | _((instance: HTMLAnchorElement) => void) \| RefObject&lt;HTMLAnchorElement>_ |             |

## <ins>LinkContextProvider</ins>

_LinkContextProvider [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Link/LinkContext.tsx)_

### properties

| Name         | Type  | Description |
| ------------ | ----- | ----------- |
| `linkClass*` | _any_ |             |

## <ins>Markdown</ins>

Markdown display component to compile and display markdown at run-time.
Uses `markdown-to-jsx` to compile the markdown.

_Markdown [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Markdown/Markdown.tsx)_

### properties

| Name         | Type                                                                                                                                                                                                                     | Description                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| `children`   | _ReactNode_                                                                                                                                                                                                              | the markdown source code is passed as a children pro. |
| `components` | _{ \[key: string]: ComponentOverride&lt;any, any>; a?: ComponentOverride&lt;any, any>; br?: ComponentOverride&lt;any, any>; button?: ComponentOverride&lt;any, any>; ... 27 more ...; ul?: ComponentOverride&lt;...>; }_ | components to customize the markdown display.         |

## <ins>Navmenu</ins>

Hierarchical collapsible menu

_Navmenu [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Navmenu/Navmenu.tsx)_

### properties

| Name         | Type                                 | Description                                                    |
| ------------ | ------------------------------------ | -------------------------------------------------------------- |
| `items*`     | _MenuItems_                          | Array of menu items                                            |
| `activeItem` | _Pick&lt;MenuItem, "id" \| "label">_ | Initially active menu item                                     |
| `expandAll`  | _boolean_                            | If specified, will expand all items with chidren               |
| `onSelect`   | _(item?: MenuItem) => void_          | Function that will be called when the user selects a menu item |
| `search`     | _string_                             | If specified, will filter the items by the search terms        |

## <ins>Pagination</ins>

A pagination component, navigate previous and next page

_Pagination [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Pagination/Pagination.tsx)_

### properties

| Name   | Type             | Description                     |
| ------ | ---------------- | ------------------------------- |
| `prev` | _PaginationPage_ | link and title to previous page |
| `next` | _PaginationPage_ | link and title to next page     |

## <ins>IconButton</ins>

_IconButton [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/PanelContainer/PanelContainer.tsx)_

### properties

| Name  | Type                                                                         | Description |
| ----- | ---------------------------------------------------------------------------- | ----------- |
| `ref` | _((instance: HTMLButtonElement) => void) \| RefObject&lt;HTMLButtonElement>_ |             |

## <ins>PanelContainer</ins>

an action container with built-in collapsible panels

_PanelContainer [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/PanelContainer/PanelContainer.tsx)_

### properties

| Name          | Type             | Description                                               |
| ------------- | ---------------- | --------------------------------------------------------- |
| `openTab`     | _any_            | by default, which tab to have open.                       |
| `visibleTabs` | _boolean_        | if true, the tabs on the panels will be visible           |
| `background`  | _BackgroundType_ | background pattern type                                   |
| `direction`   | _DirectionType_  | direction type                                            |
| `actions`     | _ActionItem\[]_  | optional actions provided to the component                |
| `plain`       | _boolean_        | if plain, skip the border and spacing around the children |

## <ins>Popover</ins>

A Popover container that is triggered by a click/hover event.
Used to display enhanced information that could not fit into the main scren.

_Popover [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Popover/Popover.tsx)_

## <ins>Sidebar</ins>

Collapsible side bar component

_Sidebar [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Sidebar/Sidebar.tsx)_

### properties

| Name          | Type      | Description                                          |
| ------------- | --------- | ---------------------------------------------------- |
| `title`       | _any_     | Title string or any react node                       |
| `collapsible` | _boolean_ | Whether the sidebar can be collapsed                 |
| `children`    | _any_     | children content elements to be displayed in Sidebar |

## <ins>SidebarContextProvider</ins>

_SidebarContextProvider [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Sidebar/SidebarContext.tsx)_

### properties

| Name          | Type      | Description |
| ------------- | --------- | ----------- |
| `collapsible` | _boolean_ |             |

## <ins>SkiLinksItem</ins>

single skip link anchor item

_SkiLinksItem [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/SkipLinks/SkipLinks.tsx)_

### properties

| Name     | Type                                                                         | Description                              |
| -------- | ---------------------------------------------------------------------------- | ---------------------------------------- |
| `target` | _string_                                                                     | target's id property, without the # char |
| `text*`  | _string_                                                                     | text message to be displayed             |
| `ref`    | _((instance: HTMLAnchorElement) => void) \| RefObject&lt;HTMLAnchorElement>_ |                                          |

## <ins>SkipLinks</ins>

list of anchor elements to skip to

_SkipLinks [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/SkipLinks/SkipLinks.tsx)_

### properties

| Name     | Type                   | Description |
| -------- | ---------------------- | ----------- |
| `items*` | _SkiLinksItemProps\[]_ |             |

## <ins>Source</ins>

Syntax highliting source code component. Uses [prism](https://prismjs.com) for the actual source display.

_Source [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Source/Source.tsx)_

### properties

| Name       | Type                                                               | Description                                                                                                                                                                      |
| ---------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `actions`  | _ActionItem\[]_                                                    | optional actions provided to the component                                                                                                                                       |
| `plain`    | _boolean_                                                          | if plain, skip the border and spacing around the children                                                                                                                        |
| `children` | _ReactNode_                                                        | source code to be displayed.                                                                                                                                                     |
| `theme`    | _PrismTheme_                                                       | optional \`PrismTheme\` theme provided to the component. Themes can be imported from \`prism-react-renderer/themes\`.                                                            |
| `language` | _Language_                                                         | source lnguage used, by default "jsx".                                                                                                                                           |
| `renderFn` | _(props: RenderProps, other: { theme: PrismTheme; }) => ReactNode_ | custom function to render the source code.                                                                                                                                       |
| `dark`     | _boolean_                                                          | used to specify a "dark" color theme - applcable only if no custom theme prop is provided. if dark: true, duotoneDark theme is used. if dark: false, duotoneLight theme is used. |
| `style`    | _any_                                                              | css styles for the container.                                                                                                                                                    |
| `as`       | _any_                                                              | syntax container as element. Can be used as \`div\` or \`span\`.                                                                                                                 |

## <ins>Subheading</ins>

`h3` level headings

_Subheading [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Subheading/Subheading.tsx)_

### properties

| Name  | Type                                                                           | Description |
| ----- | ------------------------------------------------------------------------------ | ----------- |
| `ref` | _((instance: HTMLHeadingElement) => void) \| RefObject&lt;HTMLHeadingElement>_ |             |

## <ins>Subtitle</ins>

`h2` level heading with faded text and font-weight 400.

_Subtitle [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Subtitle/Subtitle.tsx)_

### properties

| Name       | Type                                                                           | Description                                |
| ---------- | ------------------------------------------------------------------------------ | ------------------------------------------ |
| `children` | _ReactNode_                                                                    | text to be displayed in the component.     |
| `as`       | _"h1" \| "h2" \| "h3" \| "h4" \| "h5"_                                         | DOM node type to render as. By default h3. |
| `ref`      | _((instance: HTMLHeadingElement) => void) \| RefObject&lt;HTMLHeadingElement>_ |                                            |

## <ins>SyntaxHighlighter</ins>

Syntax highlighter component. Uses [prism](https://prismjs.com) for the actual source display.

_SyntaxHighlighter [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/SyntaxHighlighter/SyntaxHighlighter.tsx)_

### properties

| Name       | Type                                                               | Description                                                                                                                                                                      |
| ---------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` | _ReactNode_                                                        | source code to be displayed.                                                                                                                                                     |
| `theme`    | _PrismTheme_                                                       | optional \`PrismTheme\` theme provided to the component. Themes can be imported from \`prism-react-renderer/themes\`.                                                            |
| `language` | _Language_                                                         | source lnguage used, by default "jsx".                                                                                                                                           |
| `renderFn` | _(props: RenderProps, other: { theme: PrismTheme; }) => ReactNode_ | custom function to render the source code.                                                                                                                                       |
| `dark`     | _boolean_                                                          | used to specify a "dark" color theme - applcable only if no custom theme prop is provided. if dark: true, duotoneDark theme is used. if dark: false, duotoneLight theme is used. |
| `style`    | _any_                                                              | css styles for the container.                                                                                                                                                    |
| `as`       | _any_                                                              | syntax container as element. Can be used as \`div\` or \`span\`.                                                                                                                 |

## <ins>Table</ins>

Table component. Uses [react-table](https://github.com/tannerlinsley/react-table) to display the data.
Can be grouped, filtered, sorted. Themed with theme-ui for consistency.

_Table [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Table/Table.tsx)_

### properties

| Name                    | Type                                             | Description                                                                    |
| ----------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------ |
| `columns*`              | _Column&lt;{}>\[]_                               | the columns object as an array.                                                |
| `data`                  | _any\[]_                                         | array of data rows.                                                            |
| `header`                | _boolean_                                        | show or hide the header element.                                               |
| `sorting`               | _boolean_                                        | enable.disable sorting.                                                        |
| `filtering`             | _boolean_                                        | enable/disable filtering.                                                      |
| `itemsLabel`            | _string_                                         | string label for 'items' - used in the filter placeholder and grouping header. |
| `groupBy`               | _string\[]_                                      | field to be grouped by.                                                        |
| `hiddenColumns`         | _string\[]_                                      | list of columns to hide.                                                       |
| `rowSelect`             | _boolean_                                        | if true, will enable row selection                                             |
| `initialSelected`       | _Record&lt;number, boolean>_                     | initially selected rows                                                        |
| `onSelectRowsChange`    | _(selected: Record&lt;number, boolean>) => void_ | callback when selected rows change                                             |
| `expanded`              | _{ \[key: string]: boolean; }_                   | object listing the initially expanded rows.                                    |
| `skipPageReset`         | _boolean_                                        | reset state update while update table data                                     |
| `renderRowSubComponent` | _(props: { row: Row&lt;{}>; }) => ReactNode_     | callback to render a SubComponent row                                          |

## <ins>useRowSelectionColumn</ins>

_useRowSelectionColumn [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Table/TableRowSelection.tsx)_

## <ins>Tab</ins>

Tab heading - you should specify the title/label string as the children property. To be created inside the `<TabList />` component through the children prop.

_Tab [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Tabs/Tabs.tsx)_

## <ins>TabList</ins>

Container for `<Tab />` headings, to be created inside the `<Tabs />` component. The list of `<Tab />` components should be passed as the children prop.

_TabList [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Tabs/Tabs.tsx)_

## <ins>TabPanel</ins>

Panel body container, to be created inside the `<Tabs />` component through the children prop.

_TabPanel [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Tabs/Tabs.tsx)_

## <ins>Tabs</ins>

Create tabs and multi-page ui layouts. Uses [react-tabs](https://reactcommunity.org/react-tabs/) component.

_Tabs [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Tabs/Tabs.tsx)_

### properties

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `fontSize` | _ReactText_ |             |

## <ins>Tag</ins>

A copntainer component to display text in a colored box.

_Tag [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Tag/Tag.tsx)_

### properties

| Name                | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `color`             | _string_ | color for the tag. The full color will be applied to the border and a transparentized color will be used as background The color utility parses a component's \`color\` and \`bg\` props and converts them into CSS declarations. By default the raw value of the prop is returned.  Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation. Array values are converted into responsive values.  \[MDN reference](https&#x3A;//developer.mozilla.org/en-US/docs/Web/CSS/color) |
| `transparentAmount` | _number_ | transparent amount - 0 to 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `variant`           | _string_ | theme variant additional                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## <ins>Title</ins>

_Title [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Title/Title.tsx)_

### properties

| Name       | Type                                                                           | Description                            |
| ---------- | ------------------------------------------------------------------------------ | -------------------------------------- |
| `children` | _ReactNode_                                                                    | text to be displayed in the component. |
| `ref`      | _((instance: HTMLHeadingElement) => void) \| RefObject&lt;HTMLHeadingElement>_ |                                        |

## <ins>Toggle</ins>

Toggle components can be used to edit boolean values. Uses [react-switch](https://github.com/markusenglund/react-switch) component.

_Toggle [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Toggle/Toggle.tsx)_

### properties

| Name    | Type                  | Description                                         |
| ------- | --------------------- | --------------------------------------------------- |
| `label` | _string_              | optional label to be displayed alongside the toggle |
| `ref`   | _Ref&lt;ReactSwitch>_ | obtain a ref target                                 |

## <ins>Zoom</ins>

zooming transform component

_Zoom [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/components/src/Zoom/Zoom.tsx)_

### properties

| Name    | Type     | Description   |
| ------- | -------- | ------------- |
| `scale` | _number_ | default scale |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
