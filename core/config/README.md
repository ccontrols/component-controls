# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [ConfigrationResult](#configrationresult)
    -   [buildConfigFileNames](#buildconfigfilenames)
    -   [optionsFileNames](#optionsfilenames)
    -   [extractStories](#extractstories)
    -   [getConfigurationArg](#getconfigurationarg)
    -   [loadConfiguration](#loadconfiguration)
    -   [BuildConfiguration](#buildconfiguration)
    -   [PageType](#pagetype)
    -   [WebpackConfig](#webpackconfig)
    -   [PageConfiguration](#pageconfiguration)
    -   [WebpackConfigFn](#webpackconfigfn)

# Overview

Configration file utilities. Uses the [glob](https://www.npmjs.com/package/glob) package to locate story files from the configuration

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone:

```bash
$ npm install @component-controls/config --save-dev
```

# API

<tsdoc-typescript entry="./src/index.ts" files="../specification/src/configuration.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

## ConfigrationResult

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L10)_



### properties

| Name              | Type                                      | Description |
| ----------------- | ----------------------------------------- | ----------- |
| `config*`         | [BuildConfiguration](#buildconfiguration) |             |
| `configPath*`     | string                                    |             |
| `optionsFilePath` | string                                    |             |

## buildConfigFileNames

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L7)_



## optionsFileNames

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L9)_



## extractStories

find the story files out of a configuration file
using glob for the regex file search

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L74)_

**function** extractStories(`__namedParameters`\*: **config**: [BuildConfiguration](#buildconfiguration)**configPath**: string): string\[] | undefined;

### parameters

| Name                 | Type                                                                        | Description |
| -------------------- | --------------------------------------------------------------------------- | ----------- |
| `__namedParameters*` | **config**: [BuildConfiguration](#buildconfiguration)**configPath**: string |             |
| `returns`            | string\[] \| undefined                                                      |             |

## getConfigurationArg

return the configration folder from command-line parameters
command line accepts -c/ -config parameter for config path
the config file is assumed named main.js/main.ts

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L21)_

**function** getConfigurationArg(`args`\*: string\[]): string | undefined;

### parameters

| Name      | Type                | Description |
| --------- | ------------------- | ----------- |
| `args*`   | string\[]           |             |
| `returns` | string \| undefined |             |

## loadConfiguration

 given a base project folder and a configuration folder, returns the configuration file

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L42)_

**function** loadConfiguration(`baseFolder`\*: string, `configFolder`: string, `args`: string\[]): [ConfigrationResult](#configrationresult) | undefined;

### parameters

| Name           | Type                                                   | Description                                    |
| -------------- | ------------------------------------------------------ | ---------------------------------------------- |
| `baseFolder*`  | string                                                 | project folder to start the search with        |
| `configFolder` | string                                                 | folder where the configuration file is located |
| `args`         | string\[]                                              | optional arguments                             |
| `returns`      | [ConfigrationResult](#configrationresult) \| undefined |                                                |

## BuildConfiguration

global configuration used at build time
stored in a file named main.js/main.ts

_defined in [@component-controls/specification/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/configuration.ts#L45)_



### properties

| Name           | Type                                                                                           | Description                                                                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `categories`   | [PageType](#pagetype)\[]                                                                       | page types that are considred as categories fields as well                                                                                     |
| `finalWebpack` | [WebpackConfig](#webpackconfig)                                                                |                                                                                                                                                |
| `pages`        | Record&lt;[PageType](#pagetype), Pick&lt;[PageConfiguration](#pageconfiguration), 'basePath'>> | base url path for API documentation pages. Default is "docs/"                                                                                  |
| `stories`      | string\[]                                                                                      | wild card search string for the stories internally using \`glob\` for the search: https&#x3A;//www.npmjs.com/package/glob example: "./stories/ |
| `webpack`      | [WebpackConfig](#webpackconfig)                                                                | custom webpack fonfigurations setup. One or the other will be used                                                                             |

## PageType

_defined in [@component-controls/specification/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/configuration.ts#L4)_

'story' | 'blog' | 'page' | 'tags' | 'author'

## WebpackConfig

_defined in [@component-controls/specification/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/configuration.ts#L39)_

[WebpackConfiguration](#webpackconfiguration) \| [WebpackConfigFn](#webpackconfigfn)

## PageConfiguration

_defined in [@component-controls/specification/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/configuration.ts#L6)_



### properties

| Name       | Type    | Description                                    |
| ---------- | ------- | ---------------------------------------------- |
| `basePath` | string  | base url path for the page                     |
| `fullPage` | boolean | whether to take a fullpage theme option        |
| `label`    | string  | label - used for menu labels                   |
| `sidebars` | boolean | whether to add navigation sidebars to the page |
| `topMenu`  | boolean | whether to add to the top navigation menu      |

## WebpackConfigFn

_defined in [@component-controls/specification/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/configuration.ts#L35)_

**function** (`config`\*: [WebpackConfiguration](#webpackconfiguration), `options`: any): [WebpackConfiguration](#webpackconfiguration);

### parameters

| Name      | Type                                          | Description |
| --------- | --------------------------------------------- | ----------- |
| `config*` | [WebpackConfiguration](#webpackconfiguration) |             |
| `options` | any                                           |             |
| `returns` | [WebpackConfiguration](#webpackconfiguration) |             |

<!-- END-TSDOC-TYPESCRIPT -->
