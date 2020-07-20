# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [Usage](#usage)
-   [API](#api)
    -   [chalk](#chalk)
    -   [compile](#compile)
    -   [watch](#watch)
    -   [CompileProps](#compileprops)
    -   [CompileResults](#compileresults)
    -   [WatchProps](#watchprops)

# Overview

Standalone webpack compile/watch API for [@component-controls](https://github.com/ccontrols/component-controls).

# Installation

```bash
$ npm install @component-controls/webpack-compile --save-dev
```

# Usage

    import { compile } from '@component-controls/webpack-compile';
    ...
    const { store } = await compile({
      presets: ['react', 'react-docgen-typescript'],
      configPath: path.resolve(__dirname, 'fixtures', 'examples'),
    });

# API

<tsdoc-typescript files="@types/webpack/index.d.ts" entry="./src/index.ts,./src/types.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

## chalk

_defined in [@component-controls/webpack-compile/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-compile/src/index.ts#L1)_



## compile

compile the stories with webpack
returns the stories store object

_defined in [@component-controls/webpack-compile/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-compile/src/index.ts#L11)_

**function** compile(`__namedParameters`\*: **bundleName**: string**configPath**: string**distFolder**: string**presets**: string | [RuleOptions](#ruleoptions)\[]**staticFolder**: string**webPack**: [Configuration](#configuration)): Promise&lt;[CompileResults](#compileresults)>;

### parameters

| Name                 | Type                                                                                                                                                                                        | Description |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `__namedParameters*` | **bundleName**: string**configPath**: string**distFolder**: string**presets**: string \| [RuleOptions](#ruleoptions)\[]**staticFolder**: string**webPack**: [Configuration](#configuration) |             |
| `returns`            | Promise&lt;[CompileResults](#compileresults)>                                                                                                                                               |             |

## watch

compile the stories with webpack and launch watching for changes
returns the stories store object

_defined in [@component-controls/webpack-compile/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-compile/src/index.ts#L38)_

**function** watch(`__namedParameters`\*: **bundleName**: string**configPath**: string**distFolder**: string**presets**: string | [RuleOptions](#ruleoptions)\[]**staticFolder**: string**watchOptions**: [WatchOptions](#watchoptions)**webPack**: [Configuration](#configuration)): Promise&lt;[CompileResults](#compileresults)>;

### parameters

| Name                 | Type                                                                                                                                                                                                                                       | Description |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `__namedParameters*` | **bundleName**: string**configPath**: string**distFolder**: string**presets**: string \| [RuleOptions](#ruleoptions)\[]**staticFolder**: string**watchOptions**: [WatchOptions](#watchoptions)**webPack**: [Configuration](#configuration) |             |
| `returns`            | Promise&lt;[CompileResults](#compileresults)>                                                                                                                                                                                              |             |

## CompileProps

configuration properties for compile and run

_defined in [@component-controls/webpack-compile/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-compile/src/types.ts#L7)_



### properties

| Name           | Type                            | Description                                                           |
| -------------- | ------------------------------- | --------------------------------------------------------------------- |
| `bundleName`   | string                          | public file name the bundle, by default 'component-controls.js'       |
| `configPath`   | string                          | path to the configuration file e.g : '.storybook'                     |
| `distFolder`   | string                          | public output folder for the bundle                                   |
| `presets`      | [RuleTypes](#ruletypes)         | a list of webpack configuration presets from webpack-configs packages |
| `staticFolder` | string                          | public output folder for the assets like images                       |
| `webPack`      | [Configuration](#configuration) | webpack configuration object                                          |

## CompileResults

return type from compile and watch functions

_defined in [@component-controls/webpack-compile/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-compile/src/types.ts#L34)_



### properties

| Name          | Type            | Description               |
| ------------- | --------------- | ------------------------- |
| `bundleName*` | string          | bundle full path and name |
| `stats*`      | [Stats](#stats) | the webpack stats object  |

## WatchProps

adds webpack WatchOptions to the Compiler options

_defined in [@component-controls/webpack-compile/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-compile/src/types.ts#L48)_

### properties

| Name           | Type                          | Description |
| -------------- | ----------------------------- | ----------- |
| `watchOptions` | [WatchOptions](#watchoptions) |             |
| `CompileProps` | [CompileProps](#compileprops) |             |

<!-- END-TSDOC-TYPESCRIPT -->
