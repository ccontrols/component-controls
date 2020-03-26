# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [NodePath](#nodepath)
    -   [OptionsType](#optionstype)
    -   [RectDocgenOptions](#rectdocgenoptions)
    -   [Scope](#scope)
    -   [ASTNode](#astnode)
    -   [Documentation](#documentation)
    -   [HandlerType](#handlertype)
    -   [ResolverType](#resolvertype)
    -   [ASTNode](#astnode-1)
    -   [ParserOptions](#parseroptions)
    -   [HandlerType](#handlertype-1)
    -   [ResolverType](#resolvertype-1)
    -   [Documentation](#documentation-1)
    -   [ParserPlugin](#parserplugin)
    -   [ASTNode](#astnode-2)
    -   [ParserPluginWithOptions](#parserpluginwithoptions)
    -   [DecoratorsPluginOptions](#decoratorspluginoptions)
    -   [PipelineOperatorPluginOptions](#pipelineoperatorpluginoptions)
    -   [FlowPluginOptions](#flowpluginoptions)

# Overview

Extract props info from react components. Although the latest version of `react-docgen` does support typescript, the typescript support still lags and is not recommended for use

-   Uses [react-docgen](https://github.com/reactjs/react-docgen)

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone to extract props info from react components:

```bash
$ npm install @component-controls/react-docgen-info --save-dev
```

# API

<tsdoc-typescript files="@babel/parser/typings/babel-parser.d.ts" entry="./src/types.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

## NodePath

_defined in [@component-controls/react-docgen-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/types.ts#L13)_



### properties

| Name          | Type                                                                                   | Description |
| ------------- | -------------------------------------------------------------------------------------- | ----------- |
| `node*`       | [ASTNode](#astnode)                                                                    |             |
| `parent*`     | [NodePath](#nodepath)                                                                  |             |
| `parentPath*` | [NodePath](#nodepath)                                                                  |             |
| `scope*`      | [Scope](#scope)                                                                        |             |
| `value*`      | [ASTNode](#astnode) \| [ASTNode](#astnode)\[]                                          |             |
| `each*`       | **each**(`f`\*: (`p`\*: [NodePath](#nodepath)): any;): any;                            |             |
| `filter*`     | **filter**(`f`\*: (`p`\*: [NodePath](#nodepath)): boolean;): [NodePath](#nodepath)\[]; |             |
| `get*`        | **get**(`x`\*: string \| number\[]): [NodePath](#nodepath);                            |             |
| `map*`        | **map**(`f`\*: (`p`\*: [NodePath](#nodepath)): ;): \[];                                |             |
| `push*`       | **push**(`node`\*: [ASTNode](#astnode)): void;                                         |             |

## OptionsType

_defined in [@component-controls/react-docgen-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/types.ts#L32)_



### properties

| Name            | Type                            | Description |
| --------------- | ------------------------------- | ----------- |
| `babelrc`       | undefined \| false \| true      |             |
| `babelrcRoots`  | undefined \| false \| true      |             |
| `configFile`    | undefined \| false \| true      |             |
| `cwd`           | undefined \| string             |             |
| `envName`       | undefined \| false \| true      |             |
| `filename`      | undefined \| string             |             |
| `parserOptions` | [ParserOptions](#parseroptions) |             |
| `root`          | undefined \| false \| true      |             |
| `rootMode`      | undefined \| false \| true      |             |

## RectDocgenOptions

_defined in [@component-controls/react-docgen-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/types.ts#L49)_



### properties

| Name       | Type                           | Description |
| ---------- | ------------------------------ | ----------- |
| `handlers` | [HandlerType](#handlertype)\[] |             |
| `options`  | [OptionsType](#optionstype)    |             |
| `resolver` | [ResolverType](#resolvertype)  |             |

## Scope

_defined in [@component-controls/react-docgen-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/types.ts#L5)_



### properties

| Name           | Type                                              | Description |
| -------------- | ------------------------------------------------- | ----------- |
| `getBindings*` | (): ;                                             |             |
| `getTypes*`    | (): ;                                             |             |
| `lookup*`      | (`name`\*: string): [Scope](#scope) \| undefined; |             |
| `lookupType*`  | (`name`\*: string): [Scope](#scope) \| undefined; |             |
| `node*`        | [NodePath](#nodepath)                             |             |

## ASTNode

_defined in [@component-controls/react-docgen-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/types.ts#L3)_

object

## Documentation

_defined in [@component-controls/react-docgen-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/types.ts#L25)_

any

## HandlerType

_defined in [@component-controls/react-docgen-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/types.ts#L43)_

(`documentation`\*: [Documentation](#documentation), `definition`\*: [NodePath](#nodepath), `parser`\*: **parse**: (`source`\*: string): [ASTNode](#astnode);): void;

### parameters

| Name             | Type                                                  | Description |
| ---------------- | ----------------------------------------------------- | ----------- |
| `documentation*` | [Documentation](#documentation)                       |             |
| `definition*`    | [NodePath](#nodepath)                                 |             |
| `parser*`        | **parse**: (`source`\*: string): [ASTNode](#astnode); |             |
| `returns`        | void                                                  |             |

## ResolverType

_defined in [@component-controls/react-docgen-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/types.ts#L27)_

(`ast`\*: [ASTNode](#astnode), `parser`\*: **parse**: (`srource`\*: string): [ASTNode](#astnode);): [NodePath](#nodepath) \| [NodePath](#nodepath)\[];

### parameters

| Name      | Type                                                   | Description |
| --------- | ------------------------------------------------------ | ----------- |
| `ast*`    | [ASTNode](#astnode)                                    |             |
| `parser*` | **parse**: (`srource`\*: string): [ASTNode](#astnode); |             |
| `returns` | [NodePath](#nodepath) \| [NodePath](#nodepath)\[]      |             |

## ASTNode

_defined in [@component-controls/react-docgen-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/types.ts#L3)_

object

## ParserOptions

_defined in [@babel/parser/typings/babel-parser.d.ts](https://github)_



### properties

| Name                             | Type                                  | Description                                                                                                                                                                                                                                                                                                                        |
| -------------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `allowAwaitOutsideFunction`      | undefined \| false \| true            | By default, await use is not allowed outside of an async function. Set this to true to accept such code.                                                                                                                                                                                                                           |
| `allowImportExportEverywhere`    | undefined \| false \| true            | By default, import and export declarations can only appear at a program's top level. Setting this option to true allows them anywhere where a statement is allowed.                                                                                                                                                                |
| `allowReturnOutsideFunction`     | undefined \| false \| true            | By default, a return statement at the top level raises an error. Set this to true to accept such code.                                                                                                                                                                                                                             |
| `allowSuperOutsideMethod`        | undefined \| false \| true            |                                                                                                                                                                                                                                                                                                                                    |
| `allowUndeclaredExports`         | undefined \| false \| true            | By default, exported identifiers must refer to a declared variable. Set this to true to allow export statements to reference undeclared variables.                                                                                                                                                                                 |
| `createParenthesizedExpressions` | undefined \| false \| true            | By default, the parser adds information about parentheses by setting \`extra.parenthesized\` to \`true\` as needed. When this option is \`true\` the parser creates \`ParenthesizedExpression\` AST nodes instead of using the \`extra\` property.                                                                                 |
| `plugins`                        | [ParserPlugin](#parserplugin)\[]      | Array containing the plugins that you want to enable.                                                                                                                                                                                                                                                                              |
| `ranges`                         | undefined \| false \| true            | Adds a ranges property to each node: \[node.start, node.end]                                                                                                                                                                                                                                                                       |
| `sourceFilename`                 | undefined \| string                   | Correlate output AST nodes with their source filename. Useful when generating code and source maps from the ASTs of multiple input files.                                                                                                                                                                                          |
| `sourceType`                     | 'script' \| 'module' \| 'unambiguous' | Indicate the mode the code should be parsed in. Can be one of "script", "module", or "unambiguous". Defaults to "script". "unambiguous" will make @babel/parser attempt to guess, based on the presence of ES6 import or export statements. Files with ES6 imports and exports are considered "module" and are otherwise "script". |
| `startLine`                      | undefined \| number                   | By default, the first line of code parsed is treated as line 1. You can provide a line number to alternatively start with. Useful for integration with other source tools.                                                                                                                                                         |
| `strictMode`                     | undefined \| false \| true            | Should the parser work in strict mode. Defaults to true if sourceType === 'module'. Otherwise, false.                                                                                                                                                                                                                              |
| `tokens`                         | undefined \| false \| true            | Adds all parsed tokens to a tokens property on the File node.                                                                                                                                                                                                                                                                      |

## HandlerType

_defined in [@component-controls/react-docgen-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/types.ts#L43)_

(`documentation`\*: [Documentation](#documentation), `definition`\*: [NodePath](#nodepath), `parser`\*: **parse**: (`source`\*: string): [ASTNode](#astnode);): void;

### parameters

| Name             | Type                                                  | Description |
| ---------------- | ----------------------------------------------------- | ----------- |
| `documentation*` | [Documentation](#documentation)                       |             |
| `definition*`    | [NodePath](#nodepath)                                 |             |
| `parser*`        | **parse**: (`source`\*: string): [ASTNode](#astnode); |             |
| `returns`        | void                                                  |             |

## ResolverType

_defined in [@component-controls/react-docgen-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/types.ts#L27)_

(`ast`\*: [ASTNode](#astnode), `parser`\*: **parse**: (`srource`\*: string): [ASTNode](#astnode);): [NodePath](#nodepath) \| [NodePath](#nodepath)\[];

### parameters

| Name      | Type                                                   | Description |
| --------- | ------------------------------------------------------ | ----------- |
| `ast*`    | [ASTNode](#astnode)                                    |             |
| `parser*` | **parse**: (`srource`\*: string): [ASTNode](#astnode); |             |
| `returns` | [NodePath](#nodepath) \| [NodePath](#nodepath)\[]      |             |

## Documentation

_defined in [@component-controls/react-docgen-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/types.ts#L25)_

any

## ParserPlugin

_defined in [@babel/parser/typings/babel-parser.d.ts](https://github)_

'asyncGenerators' | 'bigInt' | 'classPrivateMethods' | 'classPrivateProperties' | 'classProperties' | 'decorators' | 'decorators-legacy' | 'doExpressions' | 'dynamicImport' | 'estree' | 'exportDefaultFrom' | 'exportNamespaceFrom' | 'flow' | 'flowComments' | 'functionBind' | 'functionSent' | 'importMeta' | 'jsx' | 'logicalAssignment' | 'nullishCoalescingOperator' | 'numericSeparator' | 'objectRestSpread' | 'optionalCatchBinding' | 'optionalChaining' | 'partialApplication' | 'pipelineOperator' | 'placeholders' | 'throwExpressions' | 'topLevelAwait' | 'typescript' | 'v8intrinsic' | [ParserPluginWithOptions](#parserpluginwithoptions)

## ASTNode

_defined in [@component-controls/react-docgen-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/types.ts#L3)_

object

## ParserPluginWithOptions

_defined in [@babel/parser/typings/babel-parser.d.ts](https://github)_

\['decorators', [DecoratorsPluginOptions](#decoratorspluginoptions)] \| \['pipelineOperator', [PipelineOperatorPluginOptions](#pipelineoperatorpluginoptions)] \| \['flow', [FlowPluginOptions](#flowpluginoptions)]

## DecoratorsPluginOptions

_defined in [@babel/parser/typings/babel-parser.d.ts](https://github)_



### properties

| Name                     | Type                       | Description |
| ------------------------ | -------------------------- | ----------- |
| `decoratorsBeforeExport` | undefined \| false \| true |             |

## PipelineOperatorPluginOptions

_defined in [@babel/parser/typings/babel-parser.d.ts](https://github)_



### properties

| Name        | Type                 | Description |
| ----------- | -------------------- | ----------- |
| `proposal*` | 'minimal' \| 'smart' |             |

## FlowPluginOptions

_defined in [@babel/parser/typings/babel-parser.d.ts](https://github)_



### properties

| Name  | Type                       | Description |
| ----- | -------------------------- | ----------- |
| `all` | undefined \| false \| true |             |

<!-- END-TSDOC-TYPESCRIPT -->
