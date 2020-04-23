# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [Usage](#usage)
    -   [Basic usage](#basic-usage)
    -   [Advanced usage](#advanced-usage)
-   [API](#api)
    -   [merge](#merge)
    -   [arrayMerge](#arraymerge)
    -   [deepMerge](#deepmerge)
    -   [deepMergeWithRules](#deepmergewithrules)
    -   [getWebpackConfig](#getwebpackconfig)
    -   [mergeWebpackConfig](#mergewebpackconfig)
    -   [rulesFactory](#rulesfactory)
    -   [RuleOptions](#ruleoptions)
    -   [RuleType](#ruletype)
    -   [RuleTypes](#ruletypes)

# Overview

Collection of standard webpack rules for [@component-controls/instrument](https://github.com/ccontrols/component-controls/tree/master/core/instrument).

# Installation

```bash
$ npm install @component-controls/webpack-configs --save-dev
```

# Usage

in `.storybook/main.js`

## Basic usage

```js
addons: [
    ...
    { 
      name: '@component-controls/storybook',
      options: {
        webpack: ['react-docgen-typescript']
      }
    }
  ],
```

## Advanced usage

    addons: [
      ...
      {
        name: '@component-controls/storybook',
        options: {
          webpack: [
            'instrument',
            {
              name: 'react-docgen-typescript',
              config: {
                module: {
                  rules: [
                    {
                      loader: '@component-controls/loader/loader',
                      options: {
                        //instrumentation options
                        prettier: {
                          tabWidth: 4,
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        }
      }],    

# API

<tsdoc-typescript files="@types/webpack/index.d.ts" entry="./src/index.ts,./src/types.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

## merge

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L1)_



## arrayMerge

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L17)_

**function** arrayMerge(`dest`\*: any\[], `src`\*: any\[]): any\[];

### parameters

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| `dest*`   | any\[] |             |
| `src*`    | any\[] |             |
| `returns` | any\[] |             |

## deepMerge

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L44)_

**function** deepMerge(`dest`\*: any, `source`\*: any): any;

### parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| `dest*`   | any  |             |
| `source*` | any  |             |
| `returns` | any  |             |

## deepMergeWithRules

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L36)_

**function** deepMergeWithRules(`dest`\*: any, `source`\*: any): any;

### parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| `dest*`   | any  |             |
| `source*` | any  |             |
| `returns` | any  |             |

## getWebpackConfig

expands the rules into webpack rules

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L55)_

**function** getWebpackConfig(`custom`\*: [RuleTypes](#ruletypes)): [Configuration](#configuration);

### parameters

| Name      | Type                            | Description    |
| --------- | ------------------------------- | -------------- |
| `custom*` | [RuleTypes](#ruletypes)         | custom config  |
| `returns` | [Configuration](#configuration) |                |

## mergeWebpackConfig

merge webpack config with custom set of rules

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L84)_

**function** mergeWebpackConfig(`webPack`\*: [Configuration](#configuration), `custom`\*: [RuleTypes](#ruletypes)): [Configuration](#configuration);

### parameters

| Name       | Type                            | Description                        |
| ---------- | ------------------------------- | ---------------------------------- |
| `webPack*` | [Configuration](#configuration) | passed configuration to merge with |
| `custom*`  | [RuleTypes](#ruletypes)         | custom config                      |
| `returns`  | [Configuration](#configuration) |                                    |

## rulesFactory

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L9)_



### properties

| Name                       | Type                            | Description |
| -------------------------- | ------------------------------- | ----------- |
| `instrument*`              | [Configuration](#configuration) |             |
| `react-docgen*`            | [Configuration](#configuration) |             |
| `react-docgen-typescript*` | [Configuration](#configuration) |             |

## RuleOptions

_defined in [@component-controls/webpack-configs/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/types.ts#L3)_



### properties

| Name      | Type                            | Description |
| --------- | ------------------------------- | ----------- |
| `config*` | [Configuration](#configuration) |             |
| `name*`   | string                          |             |

## RuleType

_defined in [@component-controls/webpack-configs/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/types.ts#L7)_

string | [RuleOptions](#ruleoptions)

## RuleTypes

_defined in [@component-controls/webpack-configs/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/types.ts#L9)_

[RuleType](#ruletype)\[]

<!-- END-TSDOC-TYPESCRIPT -->
