# Table of contents

-   [In action](#in-action)
-   [Overview](#overview)
-   [Getting Started](#getting-started)
    -   [Install](#install)
    -   [Configure](#configure)
-   [API](#api)
    -   [<ins>AxeAllyBlock</ins>](#insaxeallyblockins)
    -   [<ins>AxeContextProvider</ins>](#insaxecontextproviderins)
    -   [<ins>SelectionContextProvider</ins>](#insselectioncontextproviderins)
    -   [<ins>useIsTagSelected</ins>](#insuseistagselectedins)
    -   [<ins>isSelected</ins>](#insisselectedins)
    -   [<ins>useIsTagSelected</ins>](#insuseistagselectedins-1)
    -   [<ins>overview</ins>](#insoverviewins)

# In action

[Example site](https://component-controls.com/api/components-actioncontainer--overview/test)

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

# API

<react-docgen-typescript path="./src" exclude="AllyDashboard.tsx,BaseAllyBlock.tsx,HighlightSelector.tsx,NodesTable.tsx,ResultsTable.tsx,SelectionContext.tsx" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>AxeAllyBlock</ins>

Story block container that displays displays the [axe](https://github.com/dequelabs/axe-core) ally test results

_AxeAllyBlock [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/axe-plugin/src/index.tsx)_

### properties

| Name          | Type                 | Description                                                                                                     |
| ------------- | -------------------- | --------------------------------------------------------------------------------------------------------------- |
| `axeOptions`  | _Spec_               |                                                                                                                 |
| `id`          | _string_             | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `name`        | _string_             |                                                                                                                 |
| `title`       | _string_             | optional section title for the block.                                                                           |
| `description` | _string_             | optional markdown description.                                                                                  |
| `collapsible` | _boolean_            | if false, will nothave a collapsible frame.                                                                     |
| `sxStyle`     | _ThemeUIStyleObject_ | theme-ui styling object for Block Box                                                                           |
| `data-testid` | _string_             | testing id                                                                                                      |

## <ins>AxeContextProvider</ins>

_AxeContextProvider [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/axe-plugin/src/state/context.tsx)_

## <ins>SelectionContextProvider</ins>

_SelectionContextProvider [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/axe-plugin/src/state/context.tsx)_

## <ins>useIsTagSelected</ins>

_useIsTagSelected [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/axe-plugin/src/state/context.tsx)_

## <ins>isSelected</ins>

_isSelected [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/axe-plugin/src/state/recoil.tsx)_

## <ins>useIsTagSelected</ins>

_useIsTagSelected [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/axe-plugin/src/state/recoil.tsx)_

## <ins>overview</ins>

_overview [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/axe-plugin/src/stories/AllyBlock.stories.tsx)_

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
