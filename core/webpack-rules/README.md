# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [Usage](#usage)
-   [API](#api)
    -   [merge](#merge)
    -   [getRules](#getrules)
    -   [ruleMerge](#rulemerge)
    -   [rulesFactory](#rulesfactory)
    -   [RuleType](#ruletype)
    -   [RuleTypes](#ruletypes)
    -   [WebpackRule](#webpackrule)
    -   [WebpackRules](#webpackrules)

# Overview

Collection of standard webpack rules for [@component-controls/instrument](https://github.com/ccontrols/component-controls/tree/master/core/instrument).

# Installation

```bash
$ npm install @component-controls/webpack-rules --save-dev
```

# Usage

in `.storybook/main.js`

```js
addons: [
    ...
    { 
      name: '@component-controls/storybook',
      options: {
        webpackRules: ['instrument', 'react-docgen-typescript']
      }
    }
  ],
```

# API

<tsdoc-typescript files="@types/webpack/index.d.ts" entry="./src/index.ts,./src/types.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

## merge

_defined in [@component-controls/webpack-rules/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-rules/src/index.ts#L1)_



## getRules

expands the rules into webpack rules

_defined in [@component-controls/webpack-rules/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-rules/src/index.ts#L31)_

**function** getRules(`rules`\*: [RuleType](#ruletype)\[]): [WebpackRules](#webpackrules);

### parameters

| Name      | Type                          | Description |
| --------- | ----------------------------- | ----------- |
| `rules*`  | [RuleType](#ruletype)\[]      |             |
| `returns` | [WebpackRules](#webpackrules) |             |

## ruleMerge

_defined in [@component-controls/webpack-rules/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-rules/src/index.ts#L16)_

**function** ruleMerge(`dest`\*: [WebpackRules](#webpackrules), `src`\*: [WebpackRules](#webpackrules)): any\[];

### parameters

| Name      | Type                          | Description |
| --------- | ----------------------------- | ----------- |
| `dest*`   | [WebpackRules](#webpackrules) |             |
| `src*`    | [WebpackRules](#webpackrules) |             |
| `returns` | any\[]                        |             |

## rulesFactory

_defined in [@component-controls/webpack-rules/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-rules/src/index.ts#L8)_



### properties

| Name                       | Type                           | Description |
| -------------------------- | ------------------------------ | ----------- |
| `instrument*`              | [RuleSetRule](#rulesetrule)\[] |             |
| `react-docgen*`            | [RuleSetRule](#rulesetrule)\[] |             |
| `react-docgen-typescript*` | [RuleSetRule](#rulesetrule)\[] |             |

## RuleType

_defined in [@component-controls/webpack-rules/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-rules/src/types.ts#L6)_

[WebpackRule](#webpackrule) | string | **options**: [WebpackRules](#webpackrules)**rules**: [RuleTypes](#ruletypes)

## RuleTypes

_defined in [@component-controls/webpack-rules/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-rules/src/types.ts#L14)_

[RuleType](#ruletype)\[]

## WebpackRule

_defined in [@component-controls/webpack-rules/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-rules/src/types.ts#L3)_

[RuleSetRule](#rulesetrule)

## WebpackRules

_defined in [@component-controls/webpack-rules/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-rules/src/types.ts#L4)_

[WebpackRule](#webpackrule)\[]

<!-- END-TSDOC-TYPESCRIPT -->
