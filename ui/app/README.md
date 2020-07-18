# Table of contents

-   [Overview](#overview)
-   [List of components](#list-of-components)
    -   [<ins>App</ins>](#insappins)
    -   [<ins>AppContext</ins>](#insappcontextins)
    -   [<ins>CategoryList</ins>](#inscategorylistins)
    -   [<ins>CategoryListItem</ins>](#inscategorylistitemins)
    -   [<ins>CategoryPage</ins>](#inscategorypageins)
    -   [<ins>Container</ins>](#inscontainerins)
    -   [<ins>DocPage</ins>](#insdocpageins)
    -   [<ins>DocumentHomePage</ins>](#insdocumenthomepageins)
    -   [<ins>DocumentsList</ins>](#insdocumentslistins)
    -   [<ins>Footer</ins>](#insfooterins)
    -   [<ins>Header</ins>](#insheaderins)
    -   [<ins>DocLink</ins>](#insdoclinkins)
    -   [<ins>DocsLink</ins>](#insdocslinkins)
    -   [<ins>StoryLink</ins>](#insstorylinkins)
    -   [<ins>PageContainer</ins>](#inspagecontainerins)
    -   [<ins>SEO</ins>](#insseoins)
    -   [<ins>SideContext</ins>](#inssidecontextins)
    -   [<ins>Sidebar</ins>](#inssidebarins)
    -   [<ins>SidebarsMDXPage</ins>](#inssidebarsmdxpageins)
    -   [<ins>SidebarsPage</ins>](#inssidebarspageins)
    -   [<ins>SidebarsStoryPage</ins>](#inssidebarsstorypageins)

# Overview

Components to create `@component-controls` standalone application, that are connected to the store of documents.

Some of the design goals:

-   Portability between different build systems ie - Gatsby, CRA, Vercel.
-   Create a true CMS-type user-interface, allowing for different document types ie. "stories", "blogs", "articles".
-   Category pages for "tags", "authors".
-   Fully customizable Home page.
-   Responsive user/interface, with sidebars transforming into popouts for small screen resolutions.

# List of components

<react-docgen-typescript path="./src" exclude=".ts$,.stories.tsx$" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>App</ins>

application container component. adds SEO, SkipLinks, Header and Footer.

_App [source code](https://github.com/ccontrols/component-controls/tree/master/ui/app/src/App/App.tsx)_

### properties

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `title` | _string_ | page title  |

## <ins>AppContext</ins>

_AppContext [source code](https://github.com/ccontrols/component-controls/tree/master/ui/app/src/AppContext/AppContext.tsx)_

### properties

| Name         | Type         | Description |
| ------------ | ------------ | ----------- |
| `type`       | _string_     |             |
| `docId`      | _string_     |             |
| `storyId`    | _string_     |             |
| `store*`     | _StoryStore_ |             |
| `linkClass*` | _any_        |             |

## <ins>CategoryList</ins>

displays page of categories

_CategoryList [source code](https://github.com/ccontrols/component-controls/tree/master/ui/app/src/CategoryList/CategoryList.tsx)_

### properties

| Name    | Type     | Description   |
| ------- | -------- | ------------- |
| `type*` | _string_ | document type |

## <ins>CategoryListItem</ins>

category list item displays the unique categories with a link, and the count of docs for each

_CategoryListItem [source code](https://github.com/ccontrols/component-controls/tree/master/ui/app/src/CategoryList/CategoryListItem.tsx)_

### properties

| Name     | Type     | Description                         |
| -------- | -------- | ----------------------------------- |
| `link*`  | _string_ | link url                            |
| `name*`  | _string_ | category name                       |
| `count*` | _number_ | how many documents of this category |

## <ins>CategoryPage</ins>

_CategoryPage [source code](https://github.com/ccontrols/component-controls/tree/master/ui/app/src/CategoryPage/CategoryPage.tsx)_

### properties

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| `type*`     | _string_ |             |
| `category*` | _any_    |             |

## <ins>Container</ins>

application inner container for pages. Adds pagination to the blocks/Container component.

_Container [source code](https://github.com/ccontrols/component-controls/tree/master/ui/app/src/Container/Container.tsx)_

## <ins>DocPage</ins>

documentation page for current document.
will check if the page has a layout with sidebars or if the page is standalone.

_DocPage [source code](https://github.com/ccontrols/component-controls/tree/master/ui/app/src/DocPage/DocPage.tsx)_

### properties

| Name        | Type     | Description     |
| ----------- | -------- | --------------- |
| `type`      | _string_ | document type   |
| `activeTab` | _string_ | active page tab |
| `category`  | _string_ |                 |

## <ins>DocumentHomePage</ins>

list of documents for a specific document type

_DocumentHomePage [source code](https://github.com/ccontrols/component-controls/tree/master/ui/app/src/DocumentHomePage/DocumentHomePage.tsx)_

### properties

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `type*` | _string_ |             |
| `docId` | _string_ |             |

## <ins>DocumentsList</ins>

displays a list of the provided document pages

_DocumentsList [source code](https://github.com/ccontrols/component-controls/tree/master/ui/app/src/DocumentsList/DocumentsList.tsx)_

### properties

| Name     | Type    | Description            |
| -------- | ------- | ---------------------- |
| `pages*` | _Pages_ | list of document pages |

## <ins>Footer</ins>

application footer component

_Footer [source code](https://github.com/ccontrols/component-controls/tree/master/ui/app/src/Footer/Footer.tsx)_

## <ins>Header</ins>

application header component

_Header [source code](https://github.com/ccontrols/component-controls/tree/master/ui/app/src/Header/Header.tsx)_

### properties

| Name      | Type                                           | Description |
| --------- | ---------------------------------------------- | ----------- |
| `toolbar` | _{ left?: ActionItems; right?: ActionItems; }_ |             |

## <ins>DocLink</ins>

native lonk to a documentation page

_DocLink [source code](https://github.com/ccontrols/component-controls/tree/master/ui/app/src/Links/DocLink.tsx)_

### properties

| Name  | Type                                                                         | Description |
| ----- | ---------------------------------------------------------------------------- | ----------- |
| `id`  | _string_                                                                     |             |
| `ref` | _((instance: HTMLAnchorElement) => void) \| RefObject&lt;HTMLAnchorElement>_ |             |

## <ins>DocsLink</ins>

native lonk to the documentation

_DocsLink [source code](https://github.com/ccontrols/component-controls/tree/master/ui/app/src/Links/DocsLink.tsx)_

### properties

| Name  | Type                                                                         | Description |
| ----- | ---------------------------------------------------------------------------- | ----------- |
| `ref` | _((instance: HTMLAnchorElement) => void) \| RefObject&lt;HTMLAnchorElement>_ |             |

## <ins>StoryLink</ins>

native lonk to a story

_StoryLink [source code](https://github.com/ccontrols/component-controls/tree/master/ui/app/src/Links/StoryLink.tsx)_

### properties

| Name  | Type                                                                         | Description |
| ----- | ---------------------------------------------------------------------------- | ----------- |
| `id`  | _string_                                                                     |             |
| `ref` | _((instance: HTMLAnchorElement) => void) \| RefObject&lt;HTMLAnchorElement>_ |             |

## <ins>PageContainer</ins>

page container to enhance the inner page wrapper

_PageContainer [source code](https://github.com/ccontrols/component-controls/tree/master/ui/app/src/PageContainer/PageContainer.tsx)_

### properties

| Name      | Type                                                                                                                                                                                                                                                                                  | Description                         |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `type*`   | _string_                                                                                                                                                                                                                                                                              | document type                       |
| `variant` | _string_                                                                                                                                                                                                                                                                              | theme variant                       |
| `ref`     | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement> \| (((instance: HTMLDivElement) => void) & string) \| (((instance: HTMLDivElement) => void) & RefObject&lt;...>) \| (RefObject&lt;...> & string) \| (RefObject&lt;...> & ((instance: HTMLDivElement) => void))_ | ref to the page container component |

## <ins>SEO</ins>

_SEO [source code](https://github.com/ccontrols/component-controls/tree/master/ui/app/src/SEO/SEO.tsx)_

### properties

| Name          | Type     | Description |
| ------------- | -------- | ----------- |
| `title`       | _string_ |             |
| `description` | _string_ |             |
| `pathname`    | _string_ |             |
| `image`       | _string_ |             |

## <ins>SideContext</ins>

_SideContext [source code](https://github.com/ccontrols/component-controls/tree/master/ui/app/src/SideContext/SideContext.tsx)_

### properties

| Name      | Type                           | Description |
| --------- | ------------------------------ | ----------- |
| `pageRef` | _RefObject&lt;HTMLDivElement>_ |             |

## <ins>Sidebar</ins>

application sidebar component

_Sidebar [source code](https://github.com/ccontrols/component-controls/tree/master/ui/app/src/Sidebar/Sidebar.tsx)_

### properties

| Name        | Type        | Description                                           |
| ----------- | ----------- | ----------------------------------------------------- |
| `title`     | _ReactNode_ | title element                                         |
| `type`      | _string_    | document type                                         |
| `activeTab` | _string_    | currently active tab. Use to creae the sidemenu links |

## <ins>SidebarsMDXPage</ins>

document page - rendering with sidebars and tabs for multiple document views

_SidebarsMDXPage [source code](https://github.com/ccontrols/component-controls/tree/master/ui/app/src/SidebarsPage/SidebarsMDXPage.tsx)_

### properties

| Name    | Type       | Description     |
| ------- | ---------- | --------------- |
| `type*` | _string_   | document type   |
| `doc*`  | _Document_ | document object |

## <ins>SidebarsPage</ins>

_SidebarsPage [source code](https://github.com/ccontrols/component-controls/tree/master/ui/app/src/SidebarsPage/SidebarsPage.tsx)_

### properties

| Name        | Type     | Description     |
| ----------- | -------- | --------------- |
| `type*`     | _string_ | document type   |
| `activeTab` | _string_ | active page tab |

## <ins>SidebarsStoryPage</ins>

document page - rendering with sidebars and tabs for multiple document views

_SidebarsStoryPage [source code](https://github.com/ccontrols/component-controls/tree/master/ui/app/src/SidebarsPage/SidebarsStoryPage.tsx)_

### properties

| Name        | Type       | Description     |
| ----------- | ---------- | --------------- |
| `type*`     | _string_   | document type   |
| `activeTab` | _string_   | active page tab |
| `doc*`      | _Document_ | document object |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
