# Table of contents

-   [In action](#in-action)
-   [Overview](#overview)
-   [Getting Started](#getting-started)
    -   [Install](#install)
    -   [Configure](#configure)
    -   [Pages format](#pages-format)
    -   [Examples](#examples)
        -   [Simple page](#simple-page)
-   [API](#api)
    -   [<ins>AxeAllyBlock</ins>](#insaxeallyblockins)

# In action

[Example site](https://components-storybook-6-no-docs.netlify.app/?path=/test/components-actioncontainer--overview)

# Overview

Accessibility testing plugin using the [axe-core](https://github.com/dequelabs/axe-core) library from [deque](https://www.deque.com/axe/)

Some of the design goals:

-   Test at the component-level.
-   Provide a dashboard view to quickly see the errors and tests for the compnnt.
-   Ability to select and outline the sub-elements generating the errors.
-   Ability to see details from the errors and passed rules.

<p align="center">
  <img src="https://github.com/ccontrols/component-controls/raw/master/plugins/axe-plugin/images/axe-ally-testing.gif" alt="ally tests with axe plugin" width="738">
</p>

# Getting Started

## Install

```sh
yarn add @component-controls/axe-plugin --dev
```

## Configure

The axe-plugin is already installed part of [testing page](https://github.com/ccontrols/component-controls/blob/master/ui/pages/src/TestingPage/TestingPage.tsx) and you can also add it to any other documentation page:

```
import {...} from '@component-controls/blocks';
import { AxeAllyBlock } from '@component-controls/axe-plugin';


export const TestingCustomePage= () => (
  <>
    <EditPage />
    <Title />
    <Subtitle />
    <Description />
    <Playground title=".">
      <Story id="." />
    </Playground>

    <PropsTable of="." title="Controls" visibility="controls" />
    <AxeAllyBlock title="A11y tests" />
  </>
);

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

<react-docgen-typescript path="./src" exclude="AllyDashboard.tsx,BaseAllyBlock.tsx,HighlightSelector.tsx,NodesTable.tsx,ResultsTable.tsx,SelectionContext.tsx" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>AxeAllyBlock</ins>

Story block container that displays displays the [axe](https://github.com/dequelabs/axe-core) ally test results

_AxeAllyBlock [source code](https:/github.com/ccontrols/component-controls/tree/master/plugins/axe-plugin/src/index.tsx)_

### properties

| Name          | Type                | Description                                                                                                                     |
| ------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `axeOptions`  | _Spec_              |                                                                                                                                 |
| `id`          | _string_            | id of the story optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `name`        | _string_            | alternatively you can use the name of a story to load from an external file                                                     |
| `title`       | _string_            | optional section title for the block.                                                                                           |
| `description` | _string_            | optional markdown description.                                                                                                  |
| `collapsible` | _boolean_           | if false, will nothave a collapsible frame.                                                                                     |
| `sxStyle`     | _SystemStyleObject_ | theme-ui styling object for Block Box                                                                                           |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
