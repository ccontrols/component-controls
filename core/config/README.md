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
    -   [Configuration](#configuration)

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

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L16)_



### properties

| Name              | Type                            | Description |
| ----------------- | ------------------------------- | ----------- |
| `config*`         | [Configuration](#configuration) |             |
| `configPath*`     | string                          |             |
| `optionsFilePath` | string                          |             |

## buildConfigFileNames

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L7)_



## optionsFileNames

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L15)_



## extractStories

find the story files out of a configuration file
using glob for the regex file search

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L80)_

**function** extractStories(`__namedParameters`\*: **config**: [Configuration](#configuration)**configPath**: string): string\[] | undefined;

### parameters

| Name                 | Type                                                              | Description |
| -------------------- | ----------------------------------------------------------------- | ----------- |
| `__namedParameters*` | **config**: [Configuration](#configuration)**configPath**: string |             |
| `returns`            | string\[] \| undefined                                            |             |

## getConfigurationArg

return the configration folder from command-line parameters
command line accepts -c/ -config parameter for config path
the config file is assumed named main.js/main.ts

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L27)_

**function** getConfigurationArg(`args`\*: string\[]): string | undefined;

### parameters

| Name      | Type                | Description |
| --------- | ------------------- | ----------- |
| `args*`   | string\[]           |             |
| `returns` | string \| undefined |             |

## loadConfiguration

 given a base project folder and a configuration folder, returns the configuration file

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L48)_

**function** loadConfiguration(`baseFolder`\*: string, `configFolder`: string, `args`: string\[]): [ConfigrationResult](#configrationresult) | undefined;

### parameters

| Name           | Type                                                   | Description                                    |
| -------------- | ------------------------------------------------------ | ---------------------------------------------- |
| `baseFolder*`  | string                                                 | project folder to start the search with        |
| `configFolder` | string                                                 | folder where the configuration file is located |
| `args`         | string\[]                                              | optional arguments                             |
| `returns`      | [ConfigrationResult](#configrationresult) \| undefined |                                                |

## Configuration

global configuration
stored in a file named main.js/main.ts

_defined in [@component-controls/specification/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/configuration.ts#L7)_



### properties

| Name         | Type                                                                                      | Description                                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `decorators` | [StoryRenderFn](#storyrenderfn)\[]                                                        | story decorator functions - used to wrap stories example: \[story => &lt;ThemeProvider>{story()}&lt;/ThemeProvider>]                           |
| `options`    | story sorting function**storySort**: **function** (`a`\*: string, `b`\*: string): number; | global options object                                                                                                                          |
| `stories*`   | string\[]                                                                                 | wild card search string for the stories internally using \`glob\` for the search: https&#x3A;//www.npmjs.com/package/glob example: "./stories/ |

<!-- END-TSDOC-TYPESCRIPT -->
