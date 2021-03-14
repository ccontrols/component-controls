# Table of contents

-   [In action](#in-action)
-   [Overview](#overview)
-   [API](#api)
    -   [<ins>onRenderBody</ins>](#insonrenderbodyins)
    -   [<ins>onPreRenderHTML</ins>](#insonprerenderhtmlins)
    -   [<ins>Helmet</ins>](#inshelmetins)
    -   [<ins>GatsbyLayout</ins>](#insgatsbylayoutins)
    -   [<ins>GatsbyLink</ins>](#insgatsbylinkins)
    -   [<ins>DefaultName</ins>](#insdefaultnameins)
    -   [<ins>DocPage</ins>](#insdocpageins)

# In action

[Example site](https://components-storybook-6-no-docs.netlify.app/?path=/docs-test/components-actioncontainer--overview)

# Overview

Gatsby theme for documenting your projects with component controls

-   Gatsby theme quick start.
-   Full UI configurability with components shadowing.

Special thanks for the inspiration drawn from [Gatsby themes](https://github.com/LekoArts/gatsby-themes).

[Getting started with gatsby](https://component-controls.com/tutorial/getting-started/gatsby)

# API

<react-docgen-typescript path="./src" exclude="Store.tsx" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>onRenderBody</ins>

_onRenderBody [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/gatsby-ssr.tsx)_

## <ins>onPreRenderHTML</ins>

_onPreRenderHTML [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/gatsby-ssr.tsx)_

## <ins>Helmet</ins>

_Helmet [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/index.ts)_

## <ins>GatsbyLayout</ins>

_GatsbyLayout [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/components/GatsbyLayout.tsx)_

### properties

| Name           | Type      | Description |
| -------------- | --------- | ----------- |
| `type`         | _string_  |             |
| `docId`        | _string_  |             |
| `storyId`      | _string_  |             |
| `lastModified` | _string_  |             |
| `docIndex`     | _boolean_ |             |
| `query`        | _string_  |             |
| `category`     | _string_  |             |
| `activeTab`    | _string_  |             |

## <ins>GatsbyLink</ins>

_GatsbyLink [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/components/GatsbyLink.tsx)_

### properties

| Name  | Type                                                                         | Description |
| ----- | ---------------------------------------------------------------------------- | ----------- |
| `ref` | _((instance: HTMLAnchorElement) => void) \| RefObject&lt;HTMLAnchorElement>_ |             |
| `to`  | _string_                                                                     |             |

## <ins>DefaultName</ins>

_DefaultName [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/pages/404.tsx)_

## <ins>DocPage</ins>

_DocPage [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/templates/DocPage.tsx)_

### properties

| Name           | Type                                                                                                                           | Description |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `pageContext*` | _Pick&lt;LayoutProps, "type" \| "docId" \| "storyId" \| "lastModified" \| "docIndex" \| "query" \| "category" \| "activeTab">_ |             |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
