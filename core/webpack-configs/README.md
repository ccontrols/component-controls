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
    -   [deepMergeWithPresets](#deepmergewithpresets)
    -   [getWebpackConfig](#getwebpackconfig)
    -   [mergeWebpackConfig](#mergewebpackconfig)
    -   [presetsFactory](#presetsfactory)
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

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L19)_

**function** arrayMerge(`dest`\*: any\[], `src`\*: any\[]): any\[];

### parameters

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| `dest*`   | any\[] |             |
| `src*`    | any\[] |             |
| `returns` | any\[] |             |

## deepMerge

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L46)_

**function** deepMerge(`dest`\*: any, `source`\*: any): any;

### parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| `dest*`   | any  |             |
| `source*` | any  |             |
| `returns` | any  |             |

## deepMergeWithPresets

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L38)_

**function** deepMergeWithPresets(`dest`\*: any, `source`\*: any): any;

### parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| `dest*`   | any  |             |
| `source*` | any  |             |
| `returns` | any  |             |

## getWebpackConfig

expands the presets into webpack config

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L57)_

**function** getWebpackConfig(`presets`\*: [RuleTypes](#ruletypes)): [Configuration](#configuration);

### parameters

| Name       | Type                            | Description    |
| ---------- | ------------------------------- | -------------- |
| `presets*` | [RuleTypes](#ruletypes)         | custom config  |
| `returns`  | [Configuration](#configuration) |                |

## mergeWebpackConfig

merge webpack config with custom set of presets

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L86)_

**function** mergeWebpackConfig(`webPack`: [Configuration](#configuration), `presets`: [RuleTypes](#ruletypes)): [Configuration](#configuration);

### parameters

| Name      | Type                            | Description                        |
| --------- | ------------------------------- | ---------------------------------- |
| `webPack` | [Configuration](#configuration) | passed configuration to merge with |
| `presets` | [RuleTypes](#ruletypes)         | custom config                      |
| `returns` | [Configuration](#configuration) |                                    |

## presetsFactory

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L10)_



### properties

| Name                       | Type                            | Description |
| -------------------------- | ------------------------------- | ----------- |
| `instrument*`              | [Configuration](#configuration) |             |
| `react*`                   | [Configuration](#configuration) |             |
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
