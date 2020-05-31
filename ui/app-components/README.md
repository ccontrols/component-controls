# Table of contents

-   [Overview](#overview)
-   [List of components](#list-of-components)
    -   [<ins>ColorMode</ins>](#inscolormodeins)
    -   [<ins>Keyboard</ins>](#inskeyboardins)
    -   [<ins>Navmenu</ins>](#insnavmenuins)
    -   [<ins>Sidebar</ins>](#inssidebarins)
    -   [<ins>SidebarContextProvider</ins>](#inssidebarcontextproviderins)

# Overview

Application components to create standaline user interface for component-controls.

Third-party libraries used in no particular order:

-   [theme-ui](https://theme-ui.com) as the theming and components foundation.
-   [octicons](https://octicons.github.com) for icons used in the components.
-   [react-simple-resizer](https://github.com/LeetCode-OpenSource/react-simple-resizer) for panels resizing.

# List of components

<react-docgen-typescript path="./src" exclude=".ts$,.stories.tsx$" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>ColorMode</ins>

dark/light mode toggle for theme-ui themes

_ColorMode [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app-components/src/ColorMode/ColorMode.tsx)_

### properties

| Name    | Type                  | Description                                         |
| ------- | --------------------- | --------------------------------------------------- |
| `label` | _string_              | optional label to be displayed alongside the toggle |
| `ref`   | _Ref&lt;ReactSwitch>_ | obtain a ref target                                 |

## <ins>Keyboard</ins>

Componet to monitor keystrokes. Can attach to child, document or window.

_Keyboard [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app-components/src/Keyboard/Keyboard.tsx)_

### properties

| Name         | Type                                                                                                                                                                                                                                                                                  | Description                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `keys*`      | _number\[]_                                                                                                                                                                                                                                                                           | array of the keys to be trapped                                                   |
| `target`     | _"children" \| "document" \| "window"_                                                                                                                                                                                                                                                | to where to attach the event handler                                              |
| `onKeyDown*` | _KeyboardCallback_                                                                                                                                                                                                                                                                    | callbal on key down                                                               |
| `children`   | _string \| number \| boolean \| {} \| ReactElement&lt;any, string \| ((props: any) => ReactElement&lt;any, string \| ... \| (new (props: any) => Component&lt;any, any, any>)>) \| (new (props: any) => Component&lt;...>)> \| ReactNodeArray \| ReactPortal \| ReactElement&lt;...>_ | child element to the key event handler will be attached to if target = 'children' |

## <ins>Navmenu</ins>

Hierarchical collapsible menu

_Navmenu [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app-components/src/Navmenu/Navmenu.tsx)_

### properties

| Name          | Type                               | Description                                                    |
| ------------- | ---------------------------------- | -------------------------------------------------------------- |
| `items*`      | _MenuItems_                        | Array of menu items                                            |
| `activeItem`  | _{ id?: string; label?: string; }_ | Initially active menu item                                     |
| `buttonClass` | _any_                              | Custom class to use for the button instead of Button           |
| `expandAll`   | _boolean_                          | If specified, will expand all items with chidren               |
| `onSelect`    | _(item?: MenuItem) => void_        | Function that will be called when the user selects a menu item |
| `search`      | _string_                           | If specified, will filter the items by the search terms        |

## <ins>Sidebar</ins>

Collapsible side bar component

_Sidebar [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app-components/src/Sidebar/Sidebar.tsx)_

### properties

| Name          | Type                                                                                                                                                                                                             | Description                                          |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `title`       | _any_                                                                                                                                                                                                            | Title string or any react node                       |
| `width`       | _number_                                                                                                                                                                                                         | The width of the side bar in pixels                  |
| `collapsible` | _boolean_                                                                                                                                                                                                        | Whether the sidebar can be collapsed                 |
| `children`    | _any_                                                                                                                                                                                                            | children content elements to be displayed in Sidebar |
| `animate`     | _Pick&lt;CollapsibleProps, "slot" \| "style" \| "title" \| "defaultChecked" \| "defaultValue" \| "suppressContentEditableWarning" \| "suppressHydrationWarning" \| "accessKey" \| ... 254 more ... \| "easing">_ | collapsible animate height props                     |

## <ins>SidebarContextProvider</ins>

_SidebarContextProvider [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app-components/src/Sidebar/SidebarContext.tsx)_

### properties

| Name          | Type      | Description |
| ------------- | --------- | ----------- |
| `collapsible` | _boolean_ |             |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
