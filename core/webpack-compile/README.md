# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [Usage](#usage)
-   [API](#api)
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

<api-readme extract="compile,watch" maxDepth=5/>

<!-- START-API-README -->

## compile

**`async function`**

compile the stories with webpack returns the stories store object

_defined in [@component-controls/webpack-compile/core/webpack-compile/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-compile/src/index.ts#L16)_

**parameters**

| Name          | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Description                                                  |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| _anonymous\*_ | <details><summary>`BuildProps`</summary><blockquote>`webpack`: `Configuration` \| `WebpackConfigFn`<br />`finalWebpack`: `Configuration` \| `WebpackConfigFn`<br />`presets`: `RuleType`\[]<br />`configPath`: `string`<br />`distFolder`: `string`<br />`bundleName`: `string`<br />`staticFolder`: `string`<br />`cssFileName`: `string`<br />`logOptions`: `Partial`&lt;`LogOptions`><br />`mode`: `"none"` \| `"development"` \| `"production"`<br />`loaders`: `RuleSetUseItem` \| `null` \| `false`</blockquote></details> | configuration properties for compile and run                 |
| `callback`    | **function** (<br /><details><summary>`results`\*</summary><blockquote>`bundleName`\*: <br />`stats`\*: <br />`store`\*: </blockquote></details>) => `void` \| `Promise`                                                                                                                                                                                                                                                                                                                                                         | callback function to monitor new documents/deleted documents |
| `returns`     | `Promise`&lt;`CompileResults`>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                              |

## watch

**`async function`**

compile the stories with webpack and launch watching for changes returns the stories store object

_defined in [@component-controls/webpack-compile/core/webpack-compile/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/webpack-compile/src/index.ts#L39)_

**parameters**

| Name          | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Description                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| _anonymous\*_ | <details><summary>`WatchProps`</summary><blockquote><details><summary>`watchOptions`</summary><blockquote>`aggregateTimeout`: `number`<br />`followSymlinks`: `boolean`<br />`ignored`: `string` \| `RegExp` \| `string`\[]<br />`poll`: `number` \| `boolean`<br />`stdin`: `boolean`</blockquote></details>`webpack`: `Configuration` \| `WebpackConfigFn`<br />`finalWebpack`: `Configuration` \| `WebpackConfigFn`<br />`presets`: `RuleType`\[]<br />`configPath`: `string`<br />`distFolder`: `string`<br />`bundleName`: `string`<br />`staticFolder`: `string`<br />`cssFileName`: `string`<br />`logOptions`: `Partial`&lt;`LogOptions`><br />`mode`: `"none"` \| `"development"` \| `"production"`<br />`loaders`: `RuleSetUseItem` \| `null` \| `false`</blockquote></details> | adds webpack WatchOptions to the Compiler options            |
| `callback`    | **function** (<br /><details><summary>`results`\*</summary><blockquote>`bundleName`\*: <br />`stats`\*: <br />`store`\*: </blockquote></details>) => `void` \| `Promise`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | callback function to monitor new documents/deleted documents |
| `returns`     | `Promise`&lt;`CompileResults`>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                              |

<!-- END-API-README -->
