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
    -   [getConfiguredPreset](#getconfiguredpreset)
    -   [getWebpackConfig](#getwebpackconfig)
    -   [mergeWebpackConfig](#mergewebpackconfig)
    -   [presetsFactory](#presetsfactory)

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

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L33)_

**function** arrayMerge(`dest`\*: any\[], `src`\*: any\[]): any\[];

### parameters

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| `dest*`   | any\[] |             |
| `src*`    | any\[] |             |
| `returns` | any\[] |             |

## deepMerge

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L60)_

**function** deepMerge(`dest`\*: any, `source`\*: any): any;

### parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| `dest*`   | any  |             |
| `source*` | any  |             |
| `returns` | any  |             |

## deepMergeWebpackConfig

deep merge two webpack configurations

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L101)_

**function** deepMergeWebpackConfig(`dest`: [WebpackConfiguration](#webpackconfiguration), `source`: [WebpackConfiguration](#webpackconfiguration)): [WebpackConfiguration](#webpackconfiguration);

### parameters

| Name      | Type                                          | Description |
| --------- | --------------------------------------------- | ----------- |
| `dest`    | [WebpackConfiguration](#webpackconfiguration) |             |
| `source`  | [WebpackConfiguration](#webpackconfiguration) |             |
| `returns` | [WebpackConfiguration](#webpackconfiguration) |             |

## deepMergeWithPresets

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L52)_

**function** deepMergeWithPresets(`dest`\*: any, `source`\*: any): any;

### parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| `dest*`   | any  |             |
| `source*` | any  |             |
| `returns` | any  |             |

## getConfiguredPreset

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L25)_

**function** getConfiguredPreset(`name`\*: string, `options`\*: [BuildProps](#buildprops)): [Configuration](#configuration);

### parameters

| Name       | Type                            | Description |
| ---------- | ------------------------------- | ----------- |
| `name*`    | string                          |             |
| `options*` | [BuildProps](#buildprops)       |             |
| `returns`  | [Configuration](#configuration) |             |

## getWebpackConfig

expands the presets into webpack config

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L71)_

**function** getWebpackConfig(`presets`\*: [RuleTypes](#ruletypes), `options`\*: [BuildProps](#buildprops)): [WebpackConfiguration](#webpackconfiguration);

### parameters

| Name       | Type                                          | Description    |
| ---------- | --------------------------------------------- | -------------- |
| `presets*` | [RuleTypes](#ruletypes)                       | custom config  |
| `options*` | [BuildProps](#buildprops)                     |                |
| `returns`  | [WebpackConfiguration](#webpackconfiguration) |                |

## mergeWebpackConfig

merge webpack config with custom set of presets

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L118)_

**function** mergeWebpackConfig(`webpack`\*: [WebpackConfiguration](#webpackconfiguration) | undefined, `presets`\*: [RuleTypes](#ruletypes) | undefined, `options`\*: [BuildProps](#buildprops)): [WebpackConfiguration](#webpackconfiguration);

### parameters

| Name       | Type                                                       | Description                        |
| ---------- | ---------------------------------------------------------- | ---------------------------------- |
| `webpack*` | [WebpackConfiguration](#webpackconfiguration) \| undefined | passed configuration to merge with |
| `presets*` | [RuleTypes](#ruletypes) \| undefined                       | custom config                      |
| `options*` | [BuildProps](#buildprops)                                  |                                    |
| `returns`  | [WebpackConfiguration](#webpackconfiguration)              |                                    |

## presetsFactory

_defined in [@component-controls/webpack-configs/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-configs/src/index.ts#L16)_



### properties

| Name                       | Type                                                                                                                       | Description |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `instrument*`              | [Configuration](#configuration)                                                                                            |             |
| `react*`                   | [Configuration](#configuration) \| **function** (`options`\*: [BuildProps](#buildprops)): [Configuration](#configuration); |             |
| `react-docgen*`            | [Configuration](#configuration)                                                                                            |             |
| `react-docgen-typescript*` | [Configuration](#configuration)                                                                                            |             |

<!-- END-TSDOC-TYPESCRIPT -->
