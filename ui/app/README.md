# Table of contents

-   [Overview](#overview)
-   [List of components](#list-of-components)
    -   [<ins>App</ins>](#insappins)
    -   [<ins>AppContext</ins>](#insappcontextins)
    -   [<ins>CategoryList</ins>](#inscategorylistins)
    -   [<ins>CategoryListItem</ins>](#inscategorylistitemins)
    -   [<ins>CategoryPage</ins>](#inscategorypageins)
    -   [<ins>BasePage</ins>](#insbasepageins)
    -   [<ins>DocPage</ins>](#insdocpageins)
    -   [<ins>DocumentsList</ins>](#insdocumentslistins)
    -   [<ins>DocumentsListItem</ins>](#insdocumentslistitemins)
    -   [<ins>Footer</ins>](#insfooterins)
    -   [<ins>Header</ins>](#insheaderins)
    -   [<ins>DocLink</ins>](#insdoclinkins)
    -   [<ins>DocsLink</ins>](#insdocslinkins)
    -   [<ins>StoryLink</ins>](#insstorylinkins)
    -   [<ins>PageList</ins>](#inspagelistins)
    -   [<ins>SEO</ins>](#insseoins)
    -   [<ins>SideContext</ins>](#inssidecontextins)
    -   [<ins>SidebarBase</ins>](#inssidebarbaseins)
    -   [<ins>Sidebar</ins>](#inssidebarins)
    -   [<ins>TagsList</ins>](#instagslistins)

# Overview

Component controls standalone application.

# List of components

<react-docgen-typescript path="./src" exclude=".ts$,.stories.tsx$" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>App</ins>

_App [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app/src/App/App.tsx)_

### properties

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `title` | _string_ |             |

## <ins>AppContext</ins>

_AppContext [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app/src/AppContext/AppContext.tsx)_

### properties

| Name         | Type           | Description |
| ------------ | -------------- | ----------- |
| `docId`      | _string_       |             |
| `store`      | _LoadingStore_ |             |
| `linkClass*` | _any_          |             |

## <ins>CategoryList</ins>

_CategoryList [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app/src/CategoryList/CategoryList.tsx)_

### properties

| Name    | Type       | Description |
| ------- | ---------- | ----------- |
| `type*` | _PageType_ |             |

## <ins>CategoryListItem</ins>

_CategoryListItem [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app/src/CategoryList/CategoryListItem.tsx)_

### properties

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| `link*`  | _string_ |             |
| `name*`  | _string_ |             |
| `count*` | _number_ |             |

## <ins>CategoryPage</ins>

_CategoryPage [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app/src/CategoryPage/CategoryPage.tsx)_

### properties

| Name        | Type       | Description |
| ----------- | ---------- | ----------- |
| `type*`     | _PageType_ |             |
| `category*` | _any_      |             |

## <ins>BasePage</ins>

_BasePage [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app/src/DocPage/DocPage.tsx)_

### properties

| Name       | Type          | Description |
| ---------- | ------------- | ----------- |
| `pagesFn*` | _PagesConfig_ |             |
| `type`     | _PageType_    |             |

## <ins>DocPage</ins>

_DocPage [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app/src/DocPage/DocPage.tsx)_

### properties

| Name       | Type          | Description |
| ---------- | ------------- | ----------- |
| `pagesFn*` | _PagesConfig_ |             |
| `type`     | _PageType_    |             |

## <ins>DocumentsList</ins>

_DocumentsList [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app/src/DocumentsList/DocumentsList.tsx)_

### properties

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| `pages*` | _Pages_ |             |

## <ins>DocumentsListItem</ins>

_DocumentsListItem [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app/src/DocumentsList/DocumentsListItem.tsx)_

### properties

| Name     | Type               | Description |
| -------- | ------------------ | ----------- |
| `link*`  | _string_           |             |
| `page*`  | _StoriesDoc_       |             |
| `config` | _RunConfiguration_ |             |

## <ins>Footer</ins>

_Footer [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app/src/Footer/Footer.tsx)_

## <ins>Header</ins>

_Header [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app/src/Header/Header.tsx)_

### properties

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `title` | _string_ |             |

## <ins>DocLink</ins>

native lonk to a documentation page

_DocLink [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app/src/Links/DocLink.tsx)_

### properties

| Name  | Type                                                                         | Description |
| ----- | ---------------------------------------------------------------------------- | ----------- |
| `id`  | _string_                                                                     |             |
| `ref` | _((instance: HTMLAnchorElement) => void) \| RefObject&lt;HTMLAnchorElement>_ |             |

## <ins>DocsLink</ins>

native lonk to the documentation

_DocsLink [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app/src/Links/DocsLink.tsx)_

### properties

| Name  | Type                                                                         | Description |
| ----- | ---------------------------------------------------------------------------- | ----------- |
| `ref` | _((instance: HTMLAnchorElement) => void) \| RefObject&lt;HTMLAnchorElement>_ |             |

## <ins>StoryLink</ins>

native lonk to a story

_StoryLink [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app/src/Links/StoryLink.tsx)_

### properties

| Name  | Type                                                                         | Description |
| ----- | ---------------------------------------------------------------------------- | ----------- |
| `id`  | _string_                                                                     |             |
| `ref` | _((instance: HTMLAnchorElement) => void) \| RefObject&lt;HTMLAnchorElement>_ |             |

## <ins>PageList</ins>

_PageList [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app/src/PageList/PageList.tsx)_

### properties

| Name    | Type       | Description |
| ------- | ---------- | ----------- |
| `type*` | _PageType_ |             |

## <ins>SEO</ins>

_SEO [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app/src/SEO/SEO.tsx)_

### properties

| Name          | Type     | Description |
| ------------- | -------- | ----------- |
| `title`       | _string_ |             |
| `description` | _string_ |             |
| `pathname`    | _string_ |             |
| `image`       | _string_ |             |

## <ins>SideContext</ins>

_SideContext [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app/src/SideContext/SideContext.tsx)_

### properties

| Name      | Type                           | Description |
| --------- | ------------------------------ | ----------- |
| `pageRef` | _RefObject&lt;HTMLDivElement>_ |             |

## <ins>SidebarBase</ins>

_SidebarBase [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app/src/Sidebar/Sidebar.tsx)_

### properties

| Name    | Type        | Description   |
| ------- | ----------- | ------------- |
| `title` | _ReactNode_ | title element |
| `type`  | _PageType_  | page type     |

## <ins>Sidebar</ins>

_Sidebar [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app/src/Sidebar/Sidebar.tsx)_

### properties

| Name    | Type        | Description   |
| ------- | ----------- | ------------- |
| `title` | _ReactNode_ | title element |
| `type`  | _PageType_  | page type     |

## <ins>TagsList</ins>

_TagsList [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/app/src/TagsList/TagsList.tsx)_

### properties

| Name   | Type        | Description |
| ------ | ----------- | ----------- |
| `tags` | _string\[]_ |             |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
