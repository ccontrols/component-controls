# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [run](#run)
    -   [RectDocgenOptions](#rectdocgenoptions)
    -   [HandlerType](#handlertype)
    -   [OptionsType](#optionstype)
    -   [ResolverType](#resolvertype)
    -   [Documentation](#documentation)
    -   [NodePath](#nodepath)
    -   [ASTNode](#astnode)
    -   [ParserOptions](#parseroptions)
    -   [Scope](#scope)
    -   [ParserPlugin](#parserplugin)
    -   [ParserPluginWithOptions](#parserpluginwithoptions)

# Overview

Extract props info from react components. Although the latest version of `react-docgen` does support typescript, the typescript support still lags and is not recommended for use

-   Uses [react-docgen](https://github.com/reactjs/react-docgen)

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone to extract props info from react components:

```bash
$ npm install @component-controls/react-docgen-info --save-dev
```

# API

<tsdoc-typescript files="./src/types.ts,@babel/parser/typings/babel-parser.d.ts" entry="./src/index.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

## run

run API to generate react-docgen props information tables.

_defined in [@component-controls/react-docgen-info/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/index.ts#L15)_

**function** run(`options`: [RectDocgenOptions](#rectdocgenoptions)): [PropsInfoExtractorFunction](#propsinfoextractorfunction);

### parameters

| Name      | Type                                                      | Description                                             |
| --------- | --------------------------------------------------------- | ------------------------------------------------------- |
| `options` | [RectDocgenOptions](#rectdocgenoptions)                   | configuration options                                   |
| `returns` | [PropsInfoExtractorFunction](#propsinfoextractorfunction) | a callable function of type PropsInfoExtractorFunction  |

## RectDocgenOptions

_defined in [@component-controls/react-docgen-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/types.ts#L49)_



### properties

| Name       | Type                           | Description |
| ---------- | ------------------------------ | ----------- |
| `handlers` | [HandlerType](#handlertype)\[] |             |
| `options`  | [OptionsType](#optionstype)    |             |
| `resolver` | [ResolverType](#resolvertype)  |             |

## HandlerType

_defined in [@component-controls/react-docgen-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/types.ts#L43)_

**function** (`documentation`\*: [Documentation](#documentation), `definition`\*: [NodePath](#nodepath), `parser`\*: **parse**: **function** (`source`\*: string): [ASTNode](#astnode);): void;

### parameters

| Name             | Type                                                               | Description |
| ---------------- | ------------------------------------------------------------------ | ----------- |
| `documentation*` | [Documentation](#documentation)                                    |             |
| `definition*`    | [NodePath](#nodepath)                                              |             |
| `parser*`        | **parse**: **function** (`source`\*: string): [ASTNode](#astnode); |             |
| `returns`        | void                                                               |             |

## OptionsType

_defined in [@component-controls/react-docgen-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/types.ts#L32)_



### properties

| Name            | Type                            | Description |
| --------------- | ------------------------------- | ----------- |
| `babelrc`       | boolean                         |             |
| `babelrcRoots`  | boolean                         |             |
| `configFile`    | boolean                         |             |
| `cwd`           | string                          |             |
| `envName`       | boolean                         |             |
| `filename`      | string                          |             |
| `parserOptions` | [ParserOptions](#parseroptions) |             |
| `root`          | boolean                         |             |
| `rootMode`      | boolean                         |             |

## ResolverType

_defined in [@component-controls/react-docgen-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/types.ts#L27)_

**function** (`ast`\*: [ASTNode](#astnode), `parser`\*: **parse**: **function** (`srource`\*: string): [ASTNode](#astnode);): [NodePath](#nodepath) \| [NodePath](#nodepath)\[];

### parameters

| Name      | Type                                                                | Description |
| --------- | ------------------------------------------------------------------- | ----------- |
| `ast*`    | [ASTNode](#astnode)                                                 |             |
| `parser*` | **parse**: **function** (`srource`\*: string): [ASTNode](#astnode); |             |
| `returns` | [NodePath](#nodepath) \| [NodePath](#nodepath)\[]                   |             |

## Documentation

_defined in [@component-controls/react-docgen-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/types.ts#L25)_

any

## NodePath

_defined in [@component-controls/react-docgen-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/types.ts#L13)_



### properties

| Name          | Type                                                                                                         | Description |
| ------------- | ------------------------------------------------------------------------------------------------------------ | ----------- |
| `node*`       | [ASTNode](#astnode)                                                                                          |             |
| `parent*`     | [NodePath](#nodepath)                                                                                        |             |
| `parentPath*` | [NodePath](#nodepath)                                                                                        |             |
| `scope*`      | [Scope](#scope)                                                                                              |             |
| `value*`      | [ASTNode](#astnode) \| [ASTNode](#astnode)\[]                                                                |             |
| `each*`       | **function** each(`f`\*: **function** (`p`\*: [NodePath](#nodepath)): any;): any;                            |             |
| `filter*`     | **function** filter(`f`\*: **function** (`p`\*: [NodePath](#nodepath)): boolean;): [NodePath](#nodepath)\[]; |             |
| `get*`        | **function** get(`x`\*: string \| number\[]): [NodePath](#nodepath);                                         |             |
| `map*`        | **function** map(`f`\*: **function** (`p`\*: [NodePath](#nodepath)): ;): \[];                                |             |
| `push*`       | **function** push(`node`\*: [ASTNode](#astnode)): void;                                                      |             |

## ASTNode

_defined in [@component-controls/react-docgen-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/types.ts#L3)_

object

## ParserOptions

_defined in [@babel/parser/typings/babel-parser.d.ts](https://github.com/babel/babel/tree/master/packages/babel-parser)_



### properties

| Name                             | Type                                  | Description                                                                                                                                                                                                                                                                                                                        |
| -------------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `allowAwaitOutsideFunction`      | boolean                               | By default, await use is not allowed outside of an async function. Set this to true to accept such code.                                                                                                                                                                                                                           |
| `allowImportExportEverywhere`    | boolean                               | By default, import and export declarations can only appear at a program's top level. Setting this option to true allows them anywhere where a statement is allowed.                                                                                                                                                                |
| `allowReturnOutsideFunction`     | boolean                               | By default, a return statement at the top level raises an error. Set this to true to accept such code.                                                                                                                                                                                                                             |
| `allowSuperOutsideMethod`        | boolean                               |                                                                                                                                                                                                                                                                                                                                    |
| `allowUndeclaredExports`         | boolean                               | By default, exported identifiers must refer to a declared variable. Set this to true to allow export statements to reference undeclared variables.                                                                                                                                                                                 |
| `createParenthesizedExpressions` | boolean                               | By default, the parser adds information about parentheses by setting \`extra.parenthesized\` to \`true\` as needed. When this option is \`true\` the parser creates \`ParenthesizedExpression\` AST nodes instead of using the \`extra\` property.                                                                                 |
| `plugins`                        | [ParserPlugin](#parserplugin)\[]      | Array containing the plugins that you want to enable.                                                                                                                                                                                                                                                                              |
| `ranges`                         | boolean                               | Adds a ranges property to each node: \[node.start, node.end]                                                                                                                                                                                                                                                                       |
| `sourceFilename`                 | string                                | Correlate output AST nodes with their source filename. Useful when generating code and source maps from the ASTs of multiple input files.                                                                                                                                                                                          |
| `sourceType`                     | 'script' \| 'module' \| 'unambiguous' | Indicate the mode the code should be parsed in. Can be one of "script", "module", or "unambiguous". Defaults to "script". "unambiguous" will make @babel/parser attempt to guess, based on the presence of ES6 import or export statements. Files with ES6 imports and exports are considered "module" and are otherwise "script". |
| `startLine`                      | number                                | By default, the first line of code parsed is treated as line 1. You can provide a line number to alternatively start with. Useful for integration with other source tools.                                                                                                                                                         |
| `strictMode`                     | boolean                               | Should the parser work in strict mode. Defaults to true if sourceType === 'module'. Otherwise, false.                                                                                                                                                                                                                              |
| `tokens`                         | boolean                               | Adds all parsed tokens to a tokens property on the File node.                                                                                                                                                                                                                                                                      |

## Scope

_defined in [@component-controls/react-docgen-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/types.ts#L5)_



### properties

| Name           | Type                                                           | Description |
| -------------- | -------------------------------------------------------------- | ----------- |
| `getBindings*` | **function** (): \[key: string]: [NodePath](#nodepath)\[];     |             |
| `getTypes*`    | **function** (): \[key: string]: [NodePath](#nodepath)\[];     |             |
| `lookup*`      | **function** (`name`\*: string): [Scope](#scope) \| undefined; |             |
| `lookupType*`  | **function** (`name`\*: string): [Scope](#scope) \| undefined; |             |
| `node*`        | [NodePath](#nodepath)                                          |             |

## ParserPlugin

_defined in [@babel/parser/typings/babel-parser.d.ts](https://github.com/babel/babel/tree/master/packages/babel-parser)_

'asyncGenerators' | 'bigInt' | 'classPrivateMethods' | 'classPrivateProperties' | 'classProperties' | 'classStaticBlock' | 'decimal' | 'decorators' | 'decorators-legacy' | 'doExpressions' | 'dynamicImport' | 'estree' | 'exportDefaultFrom' | 'exportNamespaceFrom' | 'flow' | 'flowComments' | 'functionBind' | 'functionSent' | 'importMeta' | 'jsx' | 'logicalAssignment' | 'importAssertions' | 'moduleStringNames' | 'nullishCoalescingOperator' | 'numericSeparator' | 'objectRestSpread' | 'optionalCatchBinding' | 'optionalChaining' | 'partialApplication' | 'pipelineOperator' | 'placeholders' | 'privateIn' | 'throwExpressions' | 'topLevelAwait' | 'typescript' | 'v8intrinsic' | [ParserPluginWithOptions](#parserpluginwithoptions)

## ParserPluginWithOptions

_defined in [@babel/parser/typings/babel-parser.d.ts](https://github.com/babel/babel/tree/master/packages/babel-parser)_

 \|  \| 

<!-- END-TSDOC-TYPESCRIPT -->
