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
    -   [deepMergeWebpackConfig](#deepmergewebpackconfig)
    -   [deepMergeWithPresets](#deepmergewithpresets)
    -   [getConfigredPreset](#getconfigredpreset)
    -   [getWebpackConfig](#getwebpackconfig)
    -   [mergeWebpackConfig](#mergewebpackconfig)
    -   [presetsFactory](#presetsfactory)
    -   [PresetOptions](#presetoptions)
    -   [RuleOptions](#ruleoptions)
    -   [PresetCallback](#presetcallback)
    -   [PresetType](#presettype)
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

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L34)_

**function** arrayMerge(`dest`\*: any\[], `src`\*: any\[]): any\[];

### parameters

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| `dest*`   | any\[] |             |
| `src*`    | any\[] |             |
| `returns` | any\[] |             |

## deepMerge

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L61)_

**function** deepMerge(`dest`\*: any, `source`\*: any): any;

### parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| `dest*`   | any  |             |
| `source*` | any  |             |
| `returns` | any  |             |

## deepMergeWebpackConfig

deep merge two webpack configurations

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L102)_

**function** deepMergeWebpackConfig(`dest`: [WebpackConfiguration](#webpackconfiguration), `source`: [WebpackConfiguration](#webpackconfiguration)): [WebpackConfiguration](#webpackconfiguration);

### parameters

| Name      | Type                                          | Description |
| --------- | --------------------------------------------- | ----------- |
| `dest`    | [WebpackConfiguration](#webpackconfiguration) |             |
| `source`  | [WebpackConfiguration](#webpackconfiguration) |             |
| `returns` | [WebpackConfiguration](#webpackconfiguration) |             |

## deepMergeWithPresets

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L53)_

**function** deepMergeWithPresets(`dest`\*: any, `source`\*: any): any;

### parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| `dest*`   | any  |             |
| `source*` | any  |             |
| `returns` | any  |             |

## getConfigredPreset

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L26)_

**function** getConfigredPreset(`name`\*: string, `options`: [PresetOptions](#presetoptions)): [Configuration](#configuration);

### parameters

| Name      | Type                            | Description |
| --------- | ------------------------------- | ----------- |
| `name*`   | string                          |             |
| `options` | [PresetOptions](#presetoptions) |             |
| `returns` | [Configuration](#configuration) |             |

## getWebpackConfig

expands the presets into webpack config

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L72)_

**function** getWebpackConfig(`presets`\*: [RuleTypes](#ruletypes), `options`: [PresetOptions](#presetoptions)): [WebpackConfiguration](#webpackconfiguration);

### parameters

| Name       | Type                                          | Description    |
| ---------- | --------------------------------------------- | -------------- |
| `presets*` | [RuleTypes](#ruletypes)                       | custom config  |
| `options`  | [PresetOptions](#presetoptions)               |                |
| `returns`  | [WebpackConfiguration](#webpackconfiguration) |                |

## mergeWebpackConfig

merge webpack config with custom set of presets

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L119)_

**function** mergeWebpackConfig(`webPack`: [WebpackConfiguration](#webpackconfiguration), `presets`: [RuleTypes](#ruletypes), `options`: [PresetOptions](#presetoptions)): [WebpackConfiguration](#webpackconfiguration);

### parameters

| Name      | Type                                          | Description                        |
| --------- | --------------------------------------------- | ---------------------------------- |
| `webPack` | [WebpackConfiguration](#webpackconfiguration) | passed configuration to merge with |
| `presets` | [RuleTypes](#ruletypes)                       | custom config                      |
| `options` | [PresetOptions](#presetoptions)               |                                    |
| `returns` | [WebpackConfiguration](#webpackconfiguration) |                                    |

## presetsFactory

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L17)_



### properties

| Name                       | Type                                                                                                                           | Description |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `instrument*`              | [Configuration](#configuration)                                                                                                |             |
| `react*`                   | [Configuration](#configuration) \| **function** (`options`: [PresetOptions](#presetoptions)): [Configuration](#configuration); |             |
| `react-docgen*`            | [Configuration](#configuration)                                                                                                |             |
| `react-docgen-typescript*` | [Configuration](#configuration)                                                                                                |             |

## PresetOptions

_defined in [@component-controls/webpack-configs/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/types.ts#L11)_



### properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| `distFolder`   | string |             |
| `outputFolder` | string |             |

## RuleOptions

_defined in [@component-controls/webpack-configs/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/types.ts#L3)_



### properties

| Name      | Type                            | Description |
| --------- | ------------------------------- | ----------- |
| `config*` | [Configuration](#configuration) |             |
| `name*`   | string                          |             |

## PresetCallback

_defined in [@component-controls/webpack-configs/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/types.ts#L18)_

**function** (`options`: [PresetOptions](#presetoptions)): [Configuration](#configuration);

### parameters

| Name      | Type                            | Description |
| --------- | ------------------------------- | ----------- |
| `options` | [PresetOptions](#presetoptions) |             |
| `returns` | [Configuration](#configuration) |             |

## PresetType

_defined in [@component-controls/webpack-configs/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/types.ts#L19)_

[Configuration](#configuration) \| [PresetCallback](#presetcallback)

## RuleType

_defined in [@component-controls/webpack-configs/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/types.ts#L7)_

string | [RuleOptions](#ruleoptions)

## RuleTypes

_defined in [@component-controls/webpack-configs/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/types.ts#L9)_

[RuleType](#ruletype)\[]

<!-- END-TSDOC-TYPESCRIPT -->
