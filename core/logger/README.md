# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [LogOptions](#logoptions)
    -   [LogLevel](#loglevel)
    -   [error](#error)
    -   [log](#log)
    -   [output](#output)
    -   [setLogOptions](#setlogoptions)
    -   [defaultOptions](#defaultoptions)
    -   [logOptions](#logoptions-1)
    -   [LogLevel](#loglevel-1)

# Overview

Logging utilities. Uses the [chalk](https://github.com/chalk/chalk#readme) package for logging utput

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone:

```bash
$ npm install @component-controls/logger --save-dev
```

# API

<tsdoc-typescript entry="./src/index.ts" files="../specification/src/configuration.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

## LogOptions

_defined in [@component-controls/logger/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/logger/src/index.ts#L5)_



### properties

| Name       | Type                  | Description |
| ---------- | --------------------- | ----------- |
| `colors*`  |                       |             |
| `logLevel` | [LogLevel](#loglevel) |             |

## LogLevel

_defined in [@component-controls/logger/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/logger/src/index.ts#L3)_

'all' | 'errors' | 'none'

## error

_defined in [@component-controls/logger/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/logger/src/index.ts#L26)_

**function** error(`heading`\*: string, `text`\*: string): void;

### parameters

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| `heading*` | string |             |
| `text*`    | string |             |
| `returns`  | void   |             |

## log

_defined in [@component-controls/logger/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/logger/src/index.ts#L21)_

**function** log(`heading`\*: string, `text`\*: string): void;

### parameters

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| `heading*` | string |             |
| `text*`    | string |             |
| `returns`  | void   |             |

## output

_defined in [@component-controls/logger/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/logger/src/index.ts#L17)_

**function** output(`heading`\*: string, `text`\*: string): void;

### parameters

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| `heading*` | string |             |
| `text*`    | string |             |
| `returns`  | void   |             |

## setLogOptions

_defined in [@component-controls/logger/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/logger/src/index.ts#L32)_

**function** setLogOptions(`options`\*: Partial&lt;[LogOptions](#logoptions)>): void;

### parameters

| Name       | Type                                  | Description |
| ---------- | ------------------------------------- | ----------- |
| `options*` | Partial&lt;[LogOptions](#logoptions)> |             |
| `returns`  | void                                  |             |

## defaultOptions

_defined in [@component-controls/logger/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/logger/src/index.ts#L10)_



### properties

| Name        | Type                      | Description |
| ----------- | ------------------------- | ----------- |
| `colors*`   | \[number, number, number] |             |
| `logLevel*` | 'all'                     |             |

## logOptions

_defined in [@component-controls/logger/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/logger/src/index.ts#L15)_



## LogLevel

_defined in [@component-controls/logger/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/logger/src/index.ts#L3)_

'all' | 'errors' | 'none'

<!-- END-TSDOC-TYPESCRIPT -->
