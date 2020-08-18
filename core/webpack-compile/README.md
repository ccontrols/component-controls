# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [Usage](#usage)
-   [API](#api)
    -   [chalk](#chalk)
    -   [compile](#compile)
    -   [watch](#watch)

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

_defined in [@component-controls/webpack-compile/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-compile/src/index.ts#L15)_

**function** compile(`__namedParameters`\*: **bundleName**: string**configPath**: string**distFolder**: string**presets**: string | [RuleOptions](#ruleoptions)\[]**staticFolder**: string**webPack**: [Configuration](#configuration), `callback`: [CompilerCallbackFn](#compilercallbackfn)): Promise&lt;[CompileResults](#compileresults)>;

### parameters

| Name                 | Type                                                                                                                                                                                        | Description |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `__namedParameters*` | **bundleName**: string**configPath**: string**distFolder**: string**presets**: string \| [RuleOptions](#ruleoptions)\[]**staticFolder**: string**webPack**: [Configuration](#configuration) |             |
| `callback`           | [CompilerCallbackFn](#compilercallbackfn)                                                                                                                                                   |             |
| `returns`            | Promise&lt;[CompileResults](#compileresults)>                                                                                                                                               |             |

## watch

compile the stories with webpack and launch watching for changes
returns the stories store object

_defined in [@component-controls/webpack-compile/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-compile/src/index.ts#L49)_

**function** watch(`__namedParameters`\*: **bundleName**: string**configPath**: string**distFolder**: string**presets**: string | [RuleOptions](#ruleoptions)\[]**staticFolder**: string**watchOptions**: [WatchOptions](#watchoptions)**webPack**: [Configuration](#configuration), `callback`: [CompilerCallbackFn](#compilercallbackfn)): Promise&lt;[CompileResults](#compileresults)>;

### parameters

| Name                 | Type                                                                                                                                                                                                                                       | Description |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `__namedParameters*` | **bundleName**: string**configPath**: string**distFolder**: string**presets**: string \| [RuleOptions](#ruleoptions)\[]**staticFolder**: string**watchOptions**: [WatchOptions](#watchoptions)**webPack**: [Configuration](#configuration) |             |
| `callback`           | [CompilerCallbackFn](#compilercallbackfn)                                                                                                                                                                                                  |             |
| `returns`            | Promise&lt;[CompileResults](#compileresults)>                                                                                                                                                                                              |             |

<!-- END-TSDOC-TYPESCRIPT -->
