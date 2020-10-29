# Table of contents

-   [In action](#in-action)
-   [Overview](#overview)
-   [Getting Started](#getting-started)
    -   [Install](#install)
    -   [Configure](#configure)
    -   [Pages format](#pages-format)
    -   [Examples](#examples)
        -   [Simple page](#simple-page)
        -   [Render story](#render-story)
-   [API](#api)
    -   [CurrentSelection](#currentselection)
    -   [StorybookContext](#storybookcontext)
    -   [globalStoryId](#globalstoryid)
    -   [getCurrentStoryId](#getcurrentstoryid)
    -   [getGlobalOptions](#getglobaloptions)
    -   [getGlobalStoryId](#getglobalstoryid)
    -   [useContext](#usecontext)
    -   [useCurrentData](#usecurrentdata)
    -   [useStoryId](#usestoryid)
    -   [CustomPageDef](#custompagedef)
    -   [CustomPageRenderFnParams](#custompagerenderfnparams)
    -   [CustomPageRenderFn](#custompagerenderfn)
    -   [UPDATE_STORY_CONTEXT](#update_story_context)

# In action

[Example site](https://components-storybook-6-no-docs.netlify.app)

You can create entirely new documentation pages with your own blocks of information, or you can use storybook docs blocks, component-controls blocks and even mix it all.

<p align="center">
  <img src="https://github.com/ccontrols/component-controls/raw/master/misc/storybook-custom-docs/images/custom-docs-pages.gif" alt="create custom storybooks documentation pages" width="738">
</p>

# Overview

The Storybook [docs addon](https://github.com/storybookjs/storybook/tree/next/addons/docs) is a great start to display documentation in Storybook, but the early versions (currently 5.x and 6.x) have a few shortcomings.

`@component-controls/storybook-custom-docs` gives the possibility to add custom documentation (aka `docs`) pages to storybook by solving the following challenges:

-   Circumvent the hard-coded [docs render](https://github.com/storybookjs/storybook/blob/855815293b59412eea2b57f20eaa02982fcb5360/lib/core/src/client/preview/StoryRenderer.tsx#L168): docs pages need to reside in the `preview` part of Storybook in order to render stories since that's where the stories are, while the `TAB` addons are placed in the `manager` part of storybook. 
-   Circumvent the hard-coded [DOM tags](https://github.com/storybookjs/storybook/blob/855815293b59412eea2b57f20eaa02982fcb5360/lib/core/src/server/templates/index.ejs#L31): docs pages need to reside inside the preview `iframe` in order to render stories in a custom `docs` page and prevent CSS styles leaking into the story functions, while `TAB` addons are rendered outside the `iframe`. 

# Getting Started

## Install

```sh
yarn add @component-controls/storybook-custom-docs --dev
```

## Configure

within `.storybook/main.js`:

```js
module.exports = {
    addons: [
    {
      name: '@component-controls/storybook-custom-docs',
      options: {
        pages: [
          // files exporting the custom pages:
          require.resolve('./custom-page'),
          require.resolve('./custom-page-docs')
        ],
      },
    },
  ],
}
```

## Pages format

The page definition files need to have a default export with the following fields

```js
import React from 'react';
export default {
  // key used for navigation
  key: string,
  // title of the tab
  title: string,
  // react render function. 
  // active boolean - if the tab custom page is active
  // storyId as a string
  // Return an object that can be rendered from ReactDOM.render
  render: ({ active, storyId }) => Element,
}
```

## Examples

### Simple page

```js
import React from 'react';

export default {
  key: 'custom',
  title: 'Custom Page',
  render: ({ active, storyId }) => active ? <div>{storyId}</div> : null,
}
```

### Render story

```js
import React from 'react';
import { DocsContainer, Story} from '@storybook/addon-docs/blocks';
import { useContext, } from '@component-controls/storybook-custom-docs';

const Page = () => {
  const context = useContext();
  return (
    <DocsContainer context={context}><Story id={storyId}/></DocsContainer>
  )
}
export default {
  key: 'docs-page',
  title: 'Docs Page',
  render: ({ active, storyId }) => {
    return active ? <Page storyId={storyId} /> : null;  
  } 
}
```

# API

<tsdoc-typescript entry="./src/index.tsx,./src/types.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

## CurrentSelection

_defined in [@component-controls/storybook-custom-docs/src/index.tsx](https://github.com/ccontrols/component-controls/tree/master/misc/storybook-custom-docs/src/index.tsx#L63)_



### properties

| Name          | Type   | Description                         |
| ------------- | ------ | ----------------------------------- |
| `docId*`      | string | current document id - its the title |
| `name*`       | string | story name                          |
| `parameters*` | any    | story parameters                    |
| `storyId*`    | string | current story id                    |

## StorybookContext

_defined in [@component-controls/storybook-custom-docs/src/index.tsx](https://github.com/ccontrols/component-controls/tree/master/misc/storybook-custom-docs/src/index.tsx#L98)_



### properties

| Name             | Type                    | Description |
| ---------------- | ----------------------- | ----------- |
| `channel*`       | [Channel](#channel)     |             |
| `clientApi*`     | any                     |             |
| `configApi*`     | [ConfigApi](#configapi) |             |
| `parameters*`    | any                     |             |
| `selectedKind*`  | string                  |             |
| `selectedStory*` | string                  |             |
| `storyId*`       | string                  |             |
| `storyStore*`    | any                     |             |

## globalStoryId

_defined in [@component-controls/storybook-custom-docs/src/index.tsx](https://github.com/ccontrols/component-controls/tree/master/misc/storybook-custom-docs/src/index.tsx#L32)_



## getCurrentStoryId

function returning the current story id

_defined in [@component-controls/storybook-custom-docs/src/index.tsx](https://github.com/ccontrols/component-controls/tree/master/misc/storybook-custom-docs/src/index.tsx#L22)_

**function** getCurrentStoryId(): string | undefined;

## getGlobalOptions

function returning the global options
parameters and decorators

_defined in [@component-controls/storybook-custom-docs/src/index.tsx](https://github.com/ccontrols/component-controls/tree/master/misc/storybook-custom-docs/src/index.tsx#L11)_

**function** getGlobalOptions(): any;

## getGlobalStoryId

_defined in [@component-controls/storybook-custom-docs/src/index.tsx](https://github.com/ccontrols/component-controls/tree/master/misc/storybook-custom-docs/src/index.tsx#L33)_

**function** getGlobalStoryId(): string;

## useContext

React hook - returns a context similar (but not identical) that can be used as an input attribute to \`&lt;DocsContainer />\`

_defined in [@component-controls/storybook-custom-docs/src/index.tsx](https://github.com/ccontrols/component-controls/tree/master/misc/storybook-custom-docs/src/index.tsx#L112)_

**function** useContext(): [StorybookContext](#storybookcontext);

## useCurrentData

React hook hook that tracks the changes to the current story and returns the data

_defined in [@component-controls/storybook-custom-docs/src/index.tsx](https://github.com/ccontrols/component-controls/tree/master/misc/storybook-custom-docs/src/index.tsx#L86)_

**function** useCurrentData(): [CurrentSelection](#currentselection);

## useStoryId

React hook hook that tracks the changes to the current story and returns it's id

_defined in [@component-controls/storybook-custom-docs/src/index.tsx](https://github.com/ccontrols/component-controls/tree/master/misc/storybook-custom-docs/src/index.tsx#L44)_

**function** useStoryId(): string;

## CustomPageDef

_defined in [@component-controls/storybook-custom-docs/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/misc/storybook-custom-docs/src/types.ts#L29)_



### properties

| Name      | Type                                      | Description                    |
| --------- | ----------------------------------------- | ------------------------------ |
| `key*`    | string                                    | key used for router navigation |
| `render*` | [CustomPageRenderFn](#custompagerenderfn) | react render function.         |
| `title*`  | string                                    | title of the page's tab        |

## CustomPageRenderFnParams

Custom page default export
example:

_defined in [@component-controls/storybook-custom-docs/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/misc/storybook-custom-docs/src/types.ts#L18)_



### properties

| Name      | Type    | Description                                  |
| --------- | ------- | -------------------------------------------- |
| `active*` | boolean | is the page active (visible) or not (hidden) |

## CustomPageRenderFn

_defined in [@component-controls/storybook-custom-docs/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/misc/storybook-custom-docs/src/types.ts#L25)_

**function** (`params`\*: [CustomPageRenderFnParams](#custompagerenderfnparams)): [React.ReactNode](#react.reactnode);

### parameters

| Name      | Type                                                  | Description |
| --------- | ----------------------------------------------------- | ----------- |
| `params*` | [CustomPageRenderFnParams](#custompagerenderfnparams) |             |
| `returns` | [React.ReactNode](#react.reactnode)                   |             |

## UPDATE_STORY_CONTEXT

_defined in [@component-controls/storybook-custom-docs/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/misc/storybook-custom-docs/src/types.ts#L51)_



<!-- END-TSDOC-TYPESCRIPT -->
