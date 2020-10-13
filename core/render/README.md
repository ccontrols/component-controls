# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [renderers](#renderers)

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

## renderers

_defined in [@component-controls/render/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/render/src/index.ts#L5)_



### properties

| Name     | Type                                                                                                                                | Description |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `react*` | **function** (`story`\*: [Story](#story), `doc`: [Document](#document), `options`: any): Promise&lt;[ReactElement](#reactelement)>; |             |

<!-- END-TSDOC-TYPESCRIPT -->
