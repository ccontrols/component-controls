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

_defined in [@component-controls/webpack-compile/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-compile/src/index.ts#L9)_

**function** compile(`__namedParameters`\*: **configPath**: string**outputFolder**: string**presets**: string | [RuleOptions](#ruleoptions)\[]**webPack**: [Configuration](#configuration)): Promise&lt;[CompileResults](#compileresults)>;

### parameters

| Name                 | Type                                                                                                                                            | Description |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `__namedParameters*` | **configPath**: string**outputFolder**: string**presets**: string \| [RuleOptions](#ruleoptions)\[]**webPack**: [Configuration](#configuration) |             |
| `returns`            | Promise&lt;[CompileResults](#compileresults)>                                                                                                   |             |

## watch

compile the stories with webpack and launch watching for changes
returns the stories store object

_defined in [@component-controls/webpack-compile/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-compile/src/index.ts#L32)_

**function** watch(`__namedParameters`\*: **configPath**: string**outputFolder**: string**presets**: string | [RuleOptions](#ruleoptions)\[]**watchOptions**: [WatchOptions](#watchoptions)**webPack**: [Configuration](#configuration)): Promise&lt;[CompileResults](#compileresults)>;

### parameters

| Name                 | Type                                                                                                                                                                                           | Description |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `__namedParameters*` | **configPath**: string**outputFolder**: string**presets**: string \| [RuleOptions](#ruleoptions)\[]**watchOptions**: [WatchOptions](#watchoptions)**webPack**: [Configuration](#configuration) |             |
| `returns`            | Promise&lt;[CompileResults](#compileresults)>                                                                                                                                                  |             |

## CompileProps

configuration properties for compile and run

_defined in [@component-controls/webpack-compile/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-compile/src/types.ts#L8)_



### properties

| Name           | Type                            | Description                                                           |
| -------------- | ------------------------------- | --------------------------------------------------------------------- |
| `configPath`   | string                          | path to the configuration file e.g : '.storybook'                     |
| `outputFolder` | string                          | public output folder for the bundle                                   |
| `presets`      | [RuleTypes](#ruletypes)         | a list of webpack configuration presets from webpack-configs packages |
| `webPack`      | [Configuration](#configuration) | webpack configuration object                                          |

## CompileResults

return type from compile and watch functions

_defined in [@component-controls/webpack-compile/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-compile/src/types.ts#L29)_



### properties

| Name     | Type                          | Description              |
| -------- | ----------------------------- | ------------------------ |
| `stats*` | [Stats](#stats)               | the webpack stats object |
| `store*` | [LoadingStore](#loadingstore) | the stories store        |

## WatchProps

adds webpack WatchOptions to the Compiler options

_defined in [@component-controls/webpack-compile/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-compile/src/types.ts#L43)_

### properties

| Name           | Type                          | Description |
| -------------- | ----------------------------- | ----------- |
| `watchOptions` | [WatchOptions](#watchoptions) |             |
| `CompileProps` | [CompileProps](#compileprops) |             |

<!-- END-TSDOC-TYPESCRIPT -->
