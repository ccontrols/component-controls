# Table of contents

-   [Installation](#installation)
-   [Documentation](#documentation)
-   [Overview](#overview)
-   [List of components](#list-of-components)
    -   [<ins>ActionBar</ins>](#insactionbarins)
    -   [<ins>ActionContainer</ins>](#insactioncontainerins)
    -   [<ins>BlockContainer</ins>](#insblockcontainerins)
    -   [<ins>Collapsible</ins>](#inscollapsibleins)
    -   [<ins>ColorMode</ins>](#inscolormodeins)
    -   [<ins>CopyContainer</ins>](#inscopycontainerins)
    -   [<ins>Description</ins>](#insdescriptionins)
    -   [<ins>Donut</ins>](#insdonutins)
    -   [<ins>ExternalLink</ins>](#insexternallinkins)
    -   [<ins>GithubAvatar</ins>](#insgithubavatarins)
    -   [<ins>useGithubProfile</ins>](#insusegithubprofileins)
    -   [<ins>GithubAvatarList</ins>](#insgithubavatarlistins)
    -   [<ins>Header</ins>](#insheaderins)
    -   [<ins>HoverBox</ins>](#inshoverboxins)
    -   [<ins>InfoTip</ins>](#insinfotipins)
    -   [<ins>Keyboard</ins>](#inskeyboardins)
    -   [<ins>Link</ins>](#inslinkins)
    -   [<ins>LinkContextProvider</ins>](#inslinkcontextproviderins)
    -   [<ins>useIsLocalLink</ins>](#insuseislocallinkins)
    -   [<ins>LinkHeading</ins>](#inslinkheadingins)
    -   [<ins>Markdown</ins>](#insmarkdownins)
    -   [<ins>Multiselect</ins>](#insmultiselectins)
    -   [<ins>Pagination</ins>](#inspaginationins)
    -   [<ins>IconButton</ins>](#insiconbuttonins)
    -   [<ins>PanelContainer</ins>](#inspanelcontainerins)
    -   [<ins>Popover</ins>](#inspopoverins)
    -   [<ins>ProgressIndicator</ins>](#insprogressindicatorins)
    -   [<ins>SearchInput</ins>](#inssearchinputins)
    -   [<ins>Shield</ins>](#insshieldins)
    -   [<ins>Sidebar</ins>](#inssidebarins)
    -   [<ins>SidebarContextProvider</ins>](#inssidebarcontextproviderins)
    -   [<ins>SkiLinksItem</ins>](#insskilinksitemins)
    -   [<ins>SkipLinks</ins>](#insskiplinksins)
    -   [<ins>Source</ins>](#inssourceins)
    -   [<ins>Subtitle</ins>](#inssubtitleins)
    -   [<ins>SyntaxHighlighter</ins>](#inssyntaxhighlighterins)
    -   [<ins>Table</ins>](#instableins)
    -   [<ins>TablePagination</ins>](#instablepaginationins)
    -   [<ins>Tab</ins>](#instabins)
    -   [<ins>TabList</ins>](#instablistins)
    -   [<ins>TabPanel</ins>](#instabpanelins)
    -   [<ins>Tabs</ins>](#instabsins)
    -   [<ins>Tag</ins>](#instagins)
    -   [<ins>ThemeProvider</ins>](#insthemeproviderins)
    -   [<ins>TitledImage</ins>](#institledimageins)
    -   [<ins>Toggle</ins>](#instoggleins)
    -   [<ins>Tree</ins>](#instreeins)
    -   [<ins>Value</ins>](#insvalueins)
    -   [<ins>Zoom</ins>](#inszoomins)

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone and use the components in your:

```bash
$ npm install @component-controls/components --save
```

# Documentation

[live documentation site](https://component-controls.com/api/components-index)

# Overview

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

# List of components

<react-docgen-typescript path="./src" exclude=".ts$,.stories.tsx$,TableGrouping.tsx,TableFilter.tsx,PopoverUtils.tsx,TableRowSelection.tsx" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>ActionBar</ins>

A strip of actions to be attached to a container.
The action items contain the labels and click event handlers.
Actions can accept an order prop, and can also overwrite default actions.

_ActionBar [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/ActionBar/ActionBar.tsx)_

### properties

| Name       | Type          | Description                                            |
| ---------- | ------------- | ------------------------------------------------------ |
| `actions`  | _ActionItems_ | collection of action items                             |
| `themeKey` | _string_      | custom layouts from the theme, defaults to 'actionbar' |

## <ins>ActionContainer</ins>

Container box with actions.

_ActionContainer [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/ActionContainer/ActionContainer.tsx)_

### properties

| Name      | Type            | Description                                               |
| --------- | --------------- | --------------------------------------------------------- |
| `actions` | _ActionItem\[]_ | optional actions provided to the component                |
| `plain`   | _boolean_       | if plain, skip the border and spacing around the children |

## <ins>BlockContainer</ins>

Collapsible block container with a title. The title creates also an attribute id and an octicon for github style navigation.

_BlockContainer [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/BlockContainer/BlockContainer.tsx)_

### properties

| Name          | Type                                                                   | Description                                                                                                     |
| ------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `title`       | _string_                                                               | optional section title for the block.                                                                           |
| `description` | _string_                                                               | optional markdown description.                                                                                  |
| `id`          | _string_                                                               | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `collapsible` | _boolean_                                                              | if false, will nothave a collapsible frame.                                                                     |
| `data-testid` | _string_                                                               | testing id                                                                                                      |
| `plain`       | _boolean_                                                              | inner container variant or plain                                                                                |
| `ref`         | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                                                                                                                 |
| `as`          | _ElementType&lt;any>_                                                  |                                                                                                                 |
| `variant`     | _string_                                                               |                                                                                                                 |
| `css`         | _Interpolation&lt;any>_                                                |                                                                                                                 |
| `sx`          | _ThemeUIStyleObject_                                                   |                                                                                                                 |

## <ins>Collapsible</ins>

Animated expand/collapse container component, using [react-animate-height](https://github.com/Stanko/react-animate-height).

_Collapsible [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Collapsible/Collapsible.tsx)_

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

Theme-ui dark/light mode toggle.

_ColorMode [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/ColorMode/ColorMode.tsx)_

### properties

| Name    | Type                  | Description                                         |
| ------- | --------------------- | --------------------------------------------------- |
| `label` | _string_              | optional label to be displayed alongside the toggle |
| `ref`   | _Ref&lt;ReactSwitch>_ | obtain a ref target                                 |

## <ins>CopyContainer</ins>

Container component to enclose items that will provide copy functionality on click.

_CopyContainer [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/CopyContainer/CopyContainer.tsx)_

### properties

| Name     | Type     | Description          |
| -------- | -------- | -------------------- |
| `name`   | _string_ | name of the property |
| `value*` | _string_ | value to copy        |

## <ins>Description</ins>

Markdown content with custom components - for example `<p />` is with smaller margin than regular markdown content.

_Description [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Description/Description.tsx)_

### properties

| Name         | Type                                                                                                                                                                                                                            | Description                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `children`   | _string \| (string & {}) \| (string & ReactElement&lt;any, string \| ((props: any) => ReactElement&lt;any, any>) \| (new (props: any) => Component&lt;any, any, any>)>) \| (string & ReactNodeArray) \| (string & ReactPortal)_ | the markdown source code is passed as a children pro. |
| `components` | _{ \[key: string]: ComponentOverride&lt;any, any>; a?: ComponentOverride&lt;any, any>; br?: ComponentOverride&lt;any, any>; button?: ComponentOverride&lt;any, any>; ... 27 more ...; ul?: ComponentOverride&lt;...>; }_        | components to customize the markdown display.         |

## <ins>Donut</ins>

_Donut [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Donut/Donut.tsx)_

### properties

| Name          | Type                     | Description                         |
| ------------- | ------------------------ | ----------------------------------- |
| `size`        | _number_                 | svg area size                       |
| `strokeWidth` | _number_                 | circle stroke size                  |
| `value`       | _number_                 | initial value = between min and max |
| `min`         | _number_                 | minimum value                       |
| `max`         | _number_                 | maximum value                       |
| `title`       | _string_                 | a title for the graphic             |
| `ref`         | _Ref&lt;HTMLDivElement>_ |                                     |

## <ins>ExternalLink</ins>

Anchor link to an external url,
adds the default `target="_blank" rel="noopener noreferrer"` props.

_ExternalLink [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/ExternalLink/ExternalLink.tsx)_

### properties

| Name      | Type                                                                         | Description |
| --------- | ---------------------------------------------------------------------------- | ----------- |
| `ref`     | _((instance: HTMLAnchorElement) => void) \| RefObject&lt;HTMLAnchorElement>_ |             |
| `as`      | _ElementType&lt;any>_                                                        |             |
| `variant` | _string_                                                                     |             |
| `css`     | _Interpolation&lt;any>_                                                      |             |
| `sx`      | _ThemeUIStyleObject_                                                         |             |

## <ins>GithubAvatar</ins>

avatar to be used in an AvatarList container

_GithubAvatar [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/GithubAvatar/GithubAvatar.tsx)_

### properties

| Name                | Type        | Description                                          |
| ------------------- | ----------- | ---------------------------------------------------- |
| `username*`         | _string_    | user name                                            |
| `useremail`         | _string_    | optional user email to link to gravatar              |
| `tooltip`           | _ReactNode_ | on hover profile box                                 |
| `overlap`           | _number_    | overlap % of the avatars in a list                   |
| `size`              | _number_    | size in pixels                                       |
| `fixedSize`         | _boolean_   | whether to fix the size of the avataro on hover      |
| `githubAccessToken` | _string_    | to increase access rate for github user profile info |

## <ins>useGithubProfile</ins>

_useGithubProfile [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/GithubAvatar/useGithubProfile.tsx)_

### properties

| Name                | Type     | Description |
| ------------------- | -------- | ----------- |
| `username*`         | _string_ |             |
| `useremail`         | _string_ |             |
| `githubAccessToken` | _string_ |             |
| `size`              | _number_ |             |

## <ins>GithubAvatarList</ins>

Avatar list that links to github profiles using rest api

_GithubAvatarList [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/GithubAvatarList/GithubAvatarList.tsx)_

### properties

| Name                | Type                                                                   | Description                                          |
| ------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| `users*`            | _GithubAvatarUser\[]_                                                  | list of github user names                            |
| `maxItems`          | _number_                                                               | max number of avatars, then use a '...'              |
| `tooltip`           | _ReactNode_                                                            | on hover profile box                                 |
| `overlap`           | _number_                                                               | overlap % of the avatars in a list                   |
| `size`              | _number_                                                               | size in pixels                                       |
| `fixedSize`         | _boolean_                                                              | whether to fix the size of the avataro on hover      |
| `githubAccessToken` | _string_                                                               | to increase access rate for github user profile info |
| `ref`               | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                                                      |
| `as`                | _ElementType&lt;any>_                                                  |                                                      |
| `variant`           | _string_                                                               |                                                      |
| `css`               | _Interpolation&lt;any>_                                                |                                                      |
| `sx`                | _ThemeUIStyleObject_                                                   |                                                      |

## <ins>Header</ins>

A page header component

_Header [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Header/Header.tsx)_

### properties

| Name      | Type                                                                   | Description |
| --------- | ---------------------------------------------------------------------- | ----------- |
| `ref`     | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |             |
| `as`      | _ElementType&lt;any>_                                                  |             |
| `variant` | _string_                                                               |             |
| `css`     | _Interpolation&lt;any>_                                                |             |
| `sx`      | _ThemeUIStyleObject_                                                   |             |

## <ins>HoverBox</ins>

Container component that will fade/outline a label at the bottom

_HoverBox [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/HoverBox/HoverBox.tsx)_

### properties

| Name      | Type                                                                   | Description                                    |
| --------- | ---------------------------------------------------------------------- | ---------------------------------------------- |
| `label*`  | _string_                                                               | laabel to be displayed when the box is hovered |
| `ref`     | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                                                |
| `as`      | _ElementType&lt;any>_                                                  |                                                |
| `variant` | _string_                                                               |                                                |
| `css`     | _Interpolation&lt;any>_                                                |                                                |
| `sx`      | _ThemeUIStyleObject_                                                   |                                                |

## <ins>InfoTip</ins>

Displays an information icon with markdown-enabled popup on hover

_InfoTip [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/InfoTip/InfoTip.tsx)_

### properties

| Name           | Type        | Description                    |
| -------------- | ----------- | ------------------------------ |
| `size`         | _number_    | size of the icon in pixels     |
| `icon`         | _ReactNode_ | custom icon                    |
| `arrowVisible` | _boolean_   | set to false to hide the arrow |

## <ins>Keyboard</ins>

Componet to monitor keystrokes. Can attach to child, document or window.

_Keyboard [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Keyboard/Keyboard.tsx)_

### properties

| Name         | Type                                                                                                                                                                                                                                                                                                                         | Description                                                                       |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `keys*`      | _number\[]_                                                                                                                                                                                                                                                                                                                  | array of the keys to be trapped                                                   |
| `target`     | _"children" \| "document" \| "window"_                                                                                                                                                                                                                                                                                       | to where to attach the event handler                                              |
| `onKeyDown*` | _KeyboardCallback_                                                                                                                                                                                                                                                                                                           | callbal on key down                                                               |
| `children`   | _ReactElement&lt;any, string \| ((props: any) => ReactElement&lt;any, any>) \| (new (props: any) => Component&lt;any, any, any>)> \| (ReactElement&lt;any, string \| ((props: any) => ReactElement&lt;...>) \| (new (props: any) => Component&lt;...>)> & string) \| ... 5 more ... \| (ReactElement&lt;...> & ReactPortal)_ | child element to the key event handler will be attached to if target = 'children' |

## <ins>Link</ins>

Configurable anchor link with a LinkContext. Also checks if the link is intrenal to the site/app or external.

_Link [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Link/Link.tsx)_

### properties

| Name      | Type                                                                         | Description |
| --------- | ---------------------------------------------------------------------------- | ----------- |
| `ref`     | _((instance: HTMLAnchorElement) => void) \| RefObject&lt;HTMLAnchorElement>_ |             |
| `as`      | _ElementType&lt;any>_                                                        |             |
| `variant` | _string_                                                                     |             |
| `css`     | _Interpolation&lt;any>_                                                      |             |
| `sx`      | _ThemeUIStyleObject_                                                         |             |

## <ins>LinkContextProvider</ins>

_LinkContextProvider [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Link/LinkContext.tsx)_

### properties

| Name         | Type               | Description |
| ------------ | ------------------ | ----------- |
| `linkClass*` | _FC&lt;LinkProps>_ |             |

## <ins>useIsLocalLink</ins>

_useIsLocalLink [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Link/useIsLocalLink.tsx)_

## <ins>LinkHeading</ins>

h1-h6 heading component that generates automatically a github-style anchor to navigate to a section on hover.

_LinkHeading [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/LinkHeading/LinkHeading.tsx)_

### properties

| Name      | Type                                                                           | Description |
| --------- | ------------------------------------------------------------------------------ | ----------- |
| `ref`     | _((instance: HTMLHeadingElement) => void) \| RefObject&lt;HTMLHeadingElement>_ |             |
| `as`      | _ElementType&lt;any>_                                                          |             |
| `variant` | _string_                                                                       |             |
| `css`     | _Interpolation&lt;any>_                                                        |             |
| `sx`      | _ThemeUIStyleObject_                                                           |             |

## <ins>Markdown</ins>

Markdown display component to compile and display markdown at run-time.
Uses [markdown-to-jsx](https://github.com/probablyup/markdown-to-jsx) internally.

_Markdown [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Markdown/Markdown.tsx)_

### properties

| Name         | Type                                                                                                                                                                                                                            | Description                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `children`   | _string \| (string & {}) \| (string & ReactElement&lt;any, string \| ((props: any) => ReactElement&lt;any, any>) \| (new (props: any) => Component&lt;any, any, any>)>) \| (string & ReactNodeArray) \| (string & ReactPortal)_ | the markdown source code is passed as a children pro. |
| `components` | _{ \[key: string]: ComponentOverride&lt;any, any>; a?: ComponentOverride&lt;any, any>; br?: ComponentOverride&lt;any, any>; button?: ComponentOverride&lt;any, any>; ... 27 more ...; ul?: ComponentOverride&lt;...>; }_        | components to customize the markdown display.         |

## <ins>Multiselect</ins>

Popover multiselect displaying checkboxes to select/unselect.

_Multiselect [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Multiselect/Multiselect.tsx)_

### properties

| Name           | Type                              | Description                                                |
| -------------- | --------------------------------- | ---------------------------------------------------------- |
| `items*`       | _MultiselectItem\[]_              | array of items to select from                              |
| `onChange*`    | _(item: MultiselectItem) => void_ | function called when the selected state of an item changes |
| `arrowVisible` | _boolean_                         | set to false to hide the arrow                             |

## <ins>Pagination</ins>

Pagination component to navigate previous/next page

_Pagination [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Pagination/Pagination.tsx)_

### properties

| Name   | Type             | Description                     |
| ------ | ---------------- | ------------------------------- |
| `prev` | _PaginationPage_ | link and title to previous page |
| `next` | _PaginationPage_ | link and title to next page     |

## <ins>IconButton</ins>

_IconButton [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/PanelContainer/PanelContainer.tsx)_

### properties

| Name      | Type                                                                         | Description |
| --------- | ---------------------------------------------------------------------------- | ----------- |
| `ref`     | _((instance: HTMLButtonElement) => void) \| RefObject&lt;HTMLButtonElement>_ |             |
| `as`      | _ElementType&lt;any>_                                                        |             |
| `variant` | _string_                                                                     |             |
| `css`     | _Interpolation&lt;any>_                                                      |             |
| `sx`      | _ThemeUIStyleObject_                                                         |             |

## <ins>PanelContainer</ins>

Action container with built-in collapsible panels

_PanelContainer [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/PanelContainer/PanelContainer.tsx)_

### properties

| Name          | Type             | Description                                               |
| ------------- | ---------------- | --------------------------------------------------------- |
| `openTab`     | _ReactNode_      | by default, which tab to have open.                       |
| `visibleTabs` | _boolean_        | if true, the tabs on the panels will be visible           |
| `background`  | _BackgroundType_ | background pattern type                                   |
| `direction`   | _DirectionType_  | direction type                                            |
| `actions`     | _ActionItem\[]_  | optional actions provided to the component                |
| `plain`       | _boolean_        | if plain, skip the border and spacing around the children |

## <ins>Popover</ins>

Popover container that is triggered by a click/hover event, using [react-popper-tooltip](https://github.com/mohsinulhaq/react-popper-tooltip).

_Popover [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Popover/Popover.tsx)_

### properties

| Name           | Type      | Description                    |
| -------------- | --------- | ------------------------------ |
| `arrowVisible` | _boolean_ | set to false to hide the arrow |

## <ins>ProgressIndicator</ins>

Progress indicator with a label

_ProgressIndicator [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/ProgressIndicator/ProgressIndicator.tsx)_

### properties

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| `value*` | _number_ |             |
| `max*`   | _number_ |             |
| `color`  | _string_ |             |

## <ins>SearchInput</ins>

an input component combined with a popover, can be used for incremental search.

_SearchInput [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/SearchInput/SearchInput.tsx)_

### properties

| Name           | Type                                                                                                                                                                                                                                | Description                                                                  |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `onSearch*`    | _(search: string) => void \| Promise&lt;void>_                                                                                                                                                                                      | callback on change of search input. user can retrieve items in this callback |
| `onSelect`     | _(item: ItemType) => void_                                                                                                                                                                                                          | on select a search item.                                                     |
| `children`     | _((props: SearchBoxCallbackProps&lt;ItemType>) => ReactNode) \| (((props: SearchBoxCallbackProps&lt;ItemType>) => ReactNode) & string) \| ... 5 more ... \| (((props: SearchBoxCallbackProps&lt;...>) => ReactNode) & ReactPortal)_ | children is a render prop to allow custom rendering of items, one at a time  |
| `items`        | _ItemType\[]_                                                                                                                                                                                                                       | items array                                                                  |
| `popoverProps` | _PopoverProps_                                                                                                                                                                                                                      | customize the popover                                                        |
| `render`       | _(rendered: ReactNode) => ReactNode_                                                                                                                                                                                                | custom renver of the search items popup                                      |
| `as`           | _ElementType&lt;any>_                                                                                                                                                                                                               |                                                                              |
| `variant`      | _string_                                                                                                                                                                                                                            |                                                                              |
| `css`          | _Interpolation&lt;any>_                                                                                                                                                                                                             |                                                                              |
| `sx`           | _ThemeUIStyleObject_                                                                                                                                                                                                                |                                                                              |

## <ins>Shield</ins>

A container component to display label/value pairs, where the value is colord. Similar design to github shields.

_Shield [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Shield/Shield.tsx)_

### properties

| Name      | Type                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label*`  | _string_                                                               | shield label/text                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `value`   | _ReactText_                                                            | value displayed with background color                                                                                                                                                                                                                                                                                                                                                                                                              |
| `percent` | _boolean_                                                              | if true, treat the value as a percentage number from 0 to 100                                                                                                                                                                                                                                                                                                                                                                                      |
| `color`   | _string_                                                               | background color for the value. The color utility parses a component's \`color\` and \`bg\` props and converts them into CSS declarations. By default the raw value of the prop is returned.  Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation. Array values are converted into responsive values.  \[MDN reference](https&#x3A;//developer.mozilla.org/en-US/docs/Web/CSS/color) |
| `ref`     | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `as`      | _ElementType&lt;any>_                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `css`     | _Interpolation&lt;any>_                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `sx`      | _ThemeUIStyleObject_                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## <ins>Sidebar</ins>

Collapsible side bar component

_Sidebar [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Sidebar/Sidebar.tsx)_

### properties

| Name          | Type                                                                                                                                                                                                                            | Description                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `title`       | _string \| ({} & string) \| (ReactElement&lt;any, string \| ((props: any) => ReactElement&lt;any, any>) \| (new (props: any) => Component&lt;any, any, any>)> & string) \| (ReactNodeArray & string) \| (ReactPortal & string)_ | Title string or any react node                       |
| `collapsible` | _boolean_                                                                                                                                                                                                                       | Whether the sidebar can be collapsed                 |
| `children`    | _ReactNode_                                                                                                                                                                                                                     | children content elements to be displayed in Sidebar |
| `ref`         | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_                                                                                                                                                          |                                                      |
| `as`          | _ElementType&lt;any>_                                                                                                                                                                                                           |                                                      |
| `variant`     | _string_                                                                                                                                                                                                                        |                                                      |
| `css`         | _Interpolation&lt;any>_                                                                                                                                                                                                         |                                                      |
| `sx`          | _ThemeUIStyleObject_                                                                                                                                                                                                            |                                                      |

## <ins>SidebarContextProvider</ins>

_SidebarContextProvider [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Sidebar/SidebarContext.tsx)_

### properties

| Name          | Type      | Description |
| ------------- | --------- | ----------- |
| `collapsible` | _boolean_ |             |

## <ins>SkiLinksItem</ins>

single skip link anchor item

_SkiLinksItem [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/SkipLinks/SkipLinks.tsx)_

### properties

| Name      | Type                                                                         | Description                              |
| --------- | ---------------------------------------------------------------------------- | ---------------------------------------- |
| `target`  | _string_                                                                     | target's id property, without the # char |
| `text*`   | _string_                                                                     | text message to be displayed             |
| `ref`     | _((instance: HTMLAnchorElement) => void) \| RefObject&lt;HTMLAnchorElement>_ |                                          |
| `as`      | _ElementType&lt;any>_                                                        |                                          |
| `variant` | _string_                                                                     |                                          |
| `css`     | _Interpolation&lt;any>_                                                      |                                          |
| `sx`      | _ThemeUIStyleObject_                                                         |                                          |

## <ins>SkipLinks</ins>

list of anchor elements to skip to

_SkipLinks [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/SkipLinks/SkipLinks.tsx)_

### properties

| Name     | Type                    | Description |
| -------- | ----------------------- | ----------- |
| `items*` | _SkipLinksItemProps\[]_ |             |

## <ins>Source</ins>

Syntax highliting source code component. Uses [prism](https://prismjs.com) for the actual source display.

_Source [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Source/Source.tsx)_

### properties

| Name         | Type                                                                                                                                                                                                                            | Description                                                                                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `actions`    | _ActionItem\[]_                                                                                                                                                                                                                 | optional actions provided to the component                                                                                                                                       |
| `plain`      | _boolean_                                                                                                                                                                                                                       | if plain, skip the border and spacing around the children                                                                                                                        |
| `children`   | _string \| (string & {}) \| (string & ReactElement&lt;any, string \| ((props: any) => ReactElement&lt;any, any>) \| (new (props: any) => Component&lt;any, any, any>)>) \| (string & ReactNodeArray) \| (string & ReactPortal)_ | source code to be displayed.                                                                                                                                                     |
| `theme`      | _PrismTheme_                                                                                                                                                                                                                    | optional \`PrismTheme\` theme provided to the component. Themes can be imported from \`prism-react-renderer/themes\`.                                                            |
| `title`      | _string_                                                                                                                                                                                                                        | optional title to display for the code block. Usually used from MDX                                                                                                              |
| `language`   | _Language_                                                                                                                                                                                                                      | source lnguage used, by default "jsx".                                                                                                                                           |
| `renderFn`   | _(props: RenderProps, other: { theme: PrismTheme; }) => ReactNode_                                                                                                                                                              | custom function to render the source code.                                                                                                                                       |
| `dark`       | _boolean_                                                                                                                                                                                                                       | used to specify a "dark" color theme - applcable only if no custom theme prop is provided. if dark: true, duotoneDark theme is used. if dark: false, duotoneLight theme is used. |
| `style`      | _CSSProperties_                                                                                                                                                                                                                 | css styles for the container.                                                                                                                                                    |
| `as`         | _ElementType&lt;any>_                                                                                                                                                                                                           | syntax container as element. Can be used as \`div\` or \`span\`.                                                                                                                 |
| `metastring` | _string_                                                                                                                                                                                                                        | code configuration string passed from MDX                                                                                                                                        |

## <ins>Subtitle</ins>

`h2` level heading with faded text and font-weight 400.

_Subtitle [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Subtitle/Subtitle.tsx)_

### properties

| Name       | Type                                                                                                                                                                                                                            | Description                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `children` | _string \| (string & {}) \| (string & ReactElement&lt;any, string \| ((props: any) => ReactElement&lt;any, any>) \| (new (props: any) => Component&lt;any, any, any>)>) \| (string & ReactNodeArray) \| (string & ReactPortal)_ | text to be displayed in the component.     |
| `as`       | _"h2" \| "h1" \| "h3" \| "h4" \| "h5"_                                                                                                                                                                                          | DOM node type to render as. By default h3. |
| `ref`      | _((instance: HTMLHeadingElement) => void) \| RefObject&lt;HTMLHeadingElement>_                                                                                                                                                  |                                            |
| `variant`  | _string_                                                                                                                                                                                                                        |                                            |
| `css`      | _Interpolation&lt;any>_                                                                                                                                                                                                         |                                            |
| `sx`       | _ThemeUIStyleObject_                                                                                                                                                                                                            |                                            |

## <ins>SyntaxHighlighter</ins>

Syntax highlighter component using [prism](https://prismjs.com) for the actual source display.

_SyntaxHighlighter [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/SyntaxHighlighter/SyntaxHighlighter.tsx)_

### properties

| Name         | Type                                                                                                                                                                                                                            | Description                                                                                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`   | _string \| (string & {}) \| (string & ReactElement&lt;any, string \| ((props: any) => ReactElement&lt;any, any>) \| (new (props: any) => Component&lt;any, any, any>)>) \| (string & ReactNodeArray) \| (string & ReactPortal)_ | source code to be displayed.                                                                                                                                                     |
| `theme`      | _PrismTheme_                                                                                                                                                                                                                    | optional \`PrismTheme\` theme provided to the component. Themes can be imported from \`prism-react-renderer/themes\`.                                                            |
| `title`      | _string_                                                                                                                                                                                                                        | optional title to display for the code block. Usually used from MDX                                                                                                              |
| `language`   | _Language_                                                                                                                                                                                                                      | source lnguage used, by default "jsx".                                                                                                                                           |
| `renderFn`   | _(props: RenderProps, other: { theme: PrismTheme; }) => ReactNode_                                                                                                                                                              | custom function to render the source code.                                                                                                                                       |
| `dark`       | _boolean_                                                                                                                                                                                                                       | used to specify a "dark" color theme - applcable only if no custom theme prop is provided. if dark: true, duotoneDark theme is used. if dark: false, duotoneLight theme is used. |
| `style`      | _CSSProperties_                                                                                                                                                                                                                 | css styles for the container.                                                                                                                                                    |
| `as`         | _ElementType&lt;any>_                                                                                                                                                                                                           | syntax container as element. Can be used as \`div\` or \`span\`.                                                                                                                 |
| `metastring` | _string_                                                                                                                                                                                                                        | code configuration string passed from MDX                                                                                                                                        |

## <ins>Table</ins>

Table component using [react-table](https://github.com/tannerlinsley/react-table) to display the data.
Can be grouped, filtered, sorted. Themed with theme-ui for consistency.

_Table [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Table/Table.tsx)_

### properties

| Name                    | Type                                                                   | Description                                                                    |
| ----------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `columns*`              | _Column&lt;D>\[]_                                                      | the columns object as an array.                                                |
| `data`                  | _D\[]_                                                                 | array of data rows.                                                            |
| `header`                | _boolean_                                                              | show or hide the header element.                                               |
| `sorting`               | _boolean_                                                              | enable.disable sorting.                                                        |
| `filtering`             | _boolean_                                                              | enable/disable filtering.                                                      |
| `itemsLabel`            | _string_                                                               | string label for 'items' - used in the filter placeholder and grouping header. |
| `groupBy`               | _string\[]_                                                            | field to be grouped by.                                                        |
| `hiddenColumns`         | _string\[]_                                                            | list of columns to hide.                                                       |
| `rowSelect`             | _boolean_                                                              | if true, will enable row selection                                             |
| `initialSelected`       | _Record&lt;number, boolean>_                                           | initially selected rows                                                        |
| `onSelectRowsChange`    | _(selected: Record&lt;number, boolean>) => void_                       | callback when selected rows change                                             |
| `expanded`              | _{ \[key: string]: boolean; }_                                         | object listing the initially expanded rows.                                    |
| `skipPageReset`         | _boolean_                                                              | reset state update while update table data                                     |
| `renderRowSubComponent` | _(props: { row: Row&lt;{}>; }) => ReactNode_                           | callback to render a SubComponent row                                          |
| `sortBy`                | _SortingRule&lt;any>\[]_                                               | initial sorting                                                                |
| `pagination`            | _boolean \| TablePaginationProps_                                      | enable pagination                                                              |
| `ref`                   | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                                                                                |
| `as`                    | _ElementType&lt;any>_                                                  |                                                                                |
| `variant`               | _string_                                                               |                                                                                |
| `css`                   | _Interpolation&lt;any>_                                                |                                                                                |
| `sx`                    | _ThemeUIStyleObject_                                                   |                                                                                |

## <ins>TablePagination</ins>

_TablePagination [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Table/TablePagination.tsx)_

### properties

| Name                 | Type      | Description                                                     |
| -------------------- | --------- | --------------------------------------------------------------- |
| `data`               | _any\[]_  | array of data records                                           |
| `totalCountVisible`  | _boolean_ | whether to make totlal countfield visible                       |
| `totalCountTemplate` | _string_  | total count label text                                          |
| `pageTemplate`       | _string_  | 'Page ${pageIndex} of ${pageLength}' template                   |
| `pageVisible`        | _boolean_ | ability to hide the page xx of yy block                         |
| `pageSizeTemplate`   | _string_  | string template for the page size selection '${pageSize} rows', |
| `pageSizeVisible`    | _boolean_ | ability to hide the page size selector                          |
| `goToPageTemplate`   | _string_  | string for the go to page label 'Go to page:'                   |
| `goToPageVisible`    | _boolean_ | ability to hide the go to page block                            |
| `pageIndex`          | _number_  | initial page index when pagination is enabled                   |
| `pageSize`           | _number_  | initial page size when pagination is enabled                    |

## <ins>Tab</ins>

Tab heading - you should specify the title/label string as the children property. To be created inside the `<TabList />` component through the children prop.

_Tab [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Tabs/Tabs.tsx)_

## <ins>TabList</ins>

Container for `<Tab />` headings, to be created inside the `<Tabs />` component. The list of `<Tab />` components should be passed as the children prop.

_TabList [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Tabs/Tabs.tsx)_

## <ins>TabPanel</ins>

Panel body container, to be created inside the `<Tabs />` component through the children prop.

_TabPanel [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Tabs/Tabs.tsx)_

## <ins>Tabs</ins>

Tabs component with [react-tabs](https://reactcommunity.org/react-tabs/) and theme-ui styling.

_Tabs [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Tabs/Tabs.tsx)_

### properties

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `fontSize` | _ReactText_ |             |

## <ins>Tag</ins>

A container component to display text in a colored box, with a semi-transparent background.

_Tag [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Tag/Tag.tsx)_

### properties

| Name                | Type                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `color`             | _string_                                                               | color for the tag. The full color will be applied to the border and a transparentized color will be used as background The color utility parses a component's \`color\` and \`bg\` props and converts them into CSS declarations. By default the raw value of the prop is returned.  Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation. Array values are converted into responsive values.  \[MDN reference](https&#x3A;//developer.mozilla.org/en-US/docs/Web/CSS/color) |
| `transparentAmount` | _number_                                                               | transparent amount - 0 to 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `borderSize`        | _number_                                                               | borderSize in pixels                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `variant`           | _string_                                                               | theme variant additional                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `raw`               | _string_                                                               | raw string value to be injected. Useful for highlighting searh results                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `ref`               | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `as`                | _ElementType&lt;any>_                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `css`               | _Interpolation&lt;any>_                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `sx`                | _ThemeUIStyleObject_                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

## <ins>ThemeProvider</ins>

_ThemeProvider [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/ThemeContext/ThemeContext.tsx)_

### properties

| Name         | Type                    | Description                                   |
| ------------ | ----------------------- | --------------------------------------------- |
| `components` | _MarkdownComponentType_ | components to customize the markdown display. |
| `theme`      | _Theme_                 |                                               |

## <ins>TitledImage</ins>

Image component with a title if available

_TitledImage [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/TitledImage/TitledImage.tsx)_

### properties

| Name      | Type                    | Description |
| --------- | ----------------------- | ----------- |
| `as`      | _ElementType&lt;any>_   |             |
| `variant` | _string_                |             |
| `css`     | _Interpolation&lt;any>_ |             |
| `sx`      | _ThemeUIStyleObject_    |             |

## <ins>Toggle</ins>

Toggle components can be used to edit boolean values. Uses [react-switch](https://github.com/markusenglund/react-switch) component.

_Toggle [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Toggle/Toggle.tsx)_

### properties

| Name    | Type                  | Description                                         |
| ------- | --------------------- | --------------------------------------------------- |
| `label` | _string_              | optional label to be displayed alongside the toggle |
| `ref`   | _Ref&lt;ReactSwitch>_ | obtain a ref target                                 |

## <ins>Tree</ins>

Hierarchical collapsible tree structure

_Tree [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Tree/Tree.tsx)_

### properties

| Name               | Type                                                                                        | Description                                                |
| ------------------ | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `items*`           | _TreeItems_                                                                                 | Array of child items                                       |
| `arrowPosition`    | _"start" \| "end"_                                                                          | POsition of the expand/collapse arrow                      |
| `activeItem`       | _Pick&lt;TreeItem, "label" \| "id">_                                                        | Initially active item                                      |
| `expandAll`        | _boolean_                                                                                   | If specified, will expand all items with chidren           |
| `onSelect`         | _((item?: TreeItem) => void) & ((event: SyntheticEvent&lt;HTMLDivElement, Event>) => void)_ | Function that will be called when the user selects a item  |
| `onExpandCollapse` | _(expandedCount: number) => void_                                                           | Function that will be called on expand/collapse            |
| `search`           | _string_                                                                                    | If specified, will filter the items by the search terms    |
| `chevronIcon`      | _ReactNode_                                                                                 | custom chevron icon                                        |
| `indentPixels`     | _number_                                                                                    | indentation in pixels for each elevel, By default 6 pixels |
| `rowLinkClass`     | _any_                                                                                       | row link class - to avoid anchor in anchor warning         |
| `ref`              | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_                      |                                                            |
| `as`               | _ElementType&lt;any>_                                                                       |                                                            |
| `variant`          | _string_                                                                                    |                                                            |
| `css`              | _Interpolation&lt;any>_                                                                     |                                                            |
| `sx`               | _ThemeUIStyleObject_                                                                        |                                                            |

## <ins>Value</ins>

Displays a value with a small label

_Value [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Value/Value.tsx)_

### properties

| Name      | Type                                                                   | Description                       |
| --------- | ---------------------------------------------------------------------- | --------------------------------- |
| `label*`  | _ReactNode_                                                            | label - usually smaller and muted |
| `value*`  | _ReactNode_                                                            | highlighted value                 |
| `ref`     | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                                   |
| `as`      | _ElementType&lt;any>_                                                  |                                   |
| `variant` | _string_                                                               |                                   |
| `css`     | _Interpolation&lt;any>_                                                |                                   |
| `sx`      | _ThemeUIStyleObject_                                                   |                                   |

## <ins>Zoom</ins>

zoom effect using transform

_Zoom [source code](https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Zoom/Zoom.tsx)_

### properties

| Name    | Type     | Description   |
| ------- | -------- | ------------- |
| `scale` | _number_ | default scale |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
