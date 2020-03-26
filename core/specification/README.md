# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [NodePath](#nodepath)
    -   [Scope](#scope)
    -   [ParserPluginWithOptions](#parserpluginwithoptions)

# Overview

Typescript definitions of the component-controls specification.

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone:

```bash
$ npm install @component-controls/specification --save-dev
```

# API

<tsdoc-typescript entry="./src/test.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

## NodePath

_defined in [@component-controls/specification/src/test.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/test.ts#L6)_



### properties

| Name          | Type                  | Description |
| ------------- | --------------------- | ----------- |
| `parentPath*` | [NodePath](#nodepath) |             |
| `scope*`      | [Scope](#scope)       |             |

## Scope

_defined in [@component-controls/specification/src/test.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/test.ts#L1)_



### properties

| Name      | Type                                              | Description |
| --------- | ------------------------------------------------- | ----------- |
| `lookup*` | (`name`\*: string): [Scope](#scope) \| undefined; |             |
| `node*`   | [NodePath](#nodepath)                             |             |

## ParserPluginWithOptions

_defined in [@component-controls/specification/src/test.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/test.ts#L11)_

\['decorators', [NodePath](#nodepath)] \| \['pipelineOperator', [Scope](#scope)]

<!-- END-TSDOC-TYPESCRIPT -->
