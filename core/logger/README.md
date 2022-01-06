# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [LogLevel](#loglevel)
    -   [LogOptions](#logoptions)
    -   [log](#log)
    -   [error](#error)
    -   [setLogOptions](#setlogoptions)

# Overview

Logging utilities. Uses the [chalk](https://github.com/chalk/chalk#readme) package for logging output

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone:

```bash
$ npm install @component-controls/logger --save-dev
```

# API

<api-readme />

<!-- START-API-README -->

## LogLevel

**`union`**

_defined in [@component-controls/logger/core/logger/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/logger/src/index.ts#L3)_

**values**

`"all"` \| `"errors"` \| `"none"`

## LogOptions

**`interface`**

_defined in [@component-controls/logger/core/logger/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/logger/src/index.ts#L5)_

**properties**

| Name       | Type                            |
| ---------- | ------------------------------- |
| `logLevel` | [`LogLevel`](#loglevel)         |
| `colors*`  | \[`number`, `number`, `number`] |

## log

**`function`**

_defined in [@component-controls/logger/core/logger/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/logger/src/index.ts#L28)_

**parameters**

| Name       | Type                            |
| ---------- | ------------------------------- |
| `heading*` | `string`                        |
| `text*`    | `string`                        |
| `bgColor`  | \[`number`, `number`, `number`] |

## error

**`function`**

_defined in [@component-controls/logger/core/logger/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/logger/src/index.ts#L37)_

**parameters**

| Name       | Type                            |
| ---------- | ------------------------------- |
| `heading*` | `string`                        |
| `text*`    | `string`                        |
| `bgColor`  | \[`number`, `number`, `number`] |

## setLogOptions

**`function`**

_defined in [@component-controls/logger/core/logger/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/logger/src/index.ts#L47)_

**parameters**

| Name       | Type                                                                                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options*` | <details><summary>`Partial`</summary><blockquote>`logLevel`: [`LogLevel`](#loglevel)<br />`colors`\*: \[`number`, `number`, `number`]</blockquote></details> |

<!-- END-API-README -->
