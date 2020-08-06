# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [Functions](#functions)
        -   [parseStories](#parsestories)
    -   [Default options](#default-options)
        -   [**defaultParserOptions**: _ParserOptions_](#defaultparseroptions-parseroptions)
        -   [**defaultResolveOptions**: _ResolverOptions_](#defaultresolveoptions-resolveroptions)
        -   [**defaultComponentOptions**: _ComponentOptions_](#defaultcomponentoptions-componentoptions)
        -   [**defaultStoriesOptions**: _StoriesOptions_](#defaultstoriesoptions-storiesoptions)
-   [Interfaces](#interfaces)
    -   [InstrumentOptions](#instrumentoptions)
        -   [Properties](#properties)
    -   [InstrumentOptionsMDX](#instrumentoptionsmdx)
        -   [Properties](#properties-1)
    -   [ComponentOptions](#componentoptions)
        -   [Properties](#properties-2)
    -   [StoriesOptions](#storiesoptions)
        -   [Properties](#properties-3)
-   [ParserOptions](#parseroptions)
    -   -   [Properties](#properties-4)
-   [PrettierOptions](#prettieroptions)
    -   -   [Properties](#properties-5)
-   [ResolvePrettierConfigOptions](#resolveprettierconfigoptions)
    -   -   [Properties](#properties-6)
-   [ResolverOptions](#resolveroptions)
-   [MDXOptions](#mdxoptions)
    -   [PackageInfoOptions](#packageinfooptions)
        -   [Properties](#properties-7)
    -   [PropsInfoExtractor](#propsinfoextractor)
        -   [Arguments](#arguments)

# Overview

Parsing a source file will generate the following information:

-   ESM: List of story named exports
-   ESM: Default export stories file information
-   MDX: List of `<Story />` story tags
-   MDX: List of Frontammetr or `<Meta />` stories file information
-   Source code extracted for the stories
-   Source code of the entire stories file
-   List of all attributes(ie parameters) passed to ESM/MDX stories
-   List of story function arguments passed to ESM/MDX stories
-   Usage location (in thesource code) of the function arguments
-   Extract 'component' information for stories: import clause, source file,source loction
-   Extract package.json repository information for the stories file
-   Extract package.json repository information for the components file (in canse the components and the stories and in different packages)

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone to parse story files and extract information in a script

```bash
$ npm install @component-controls/instrument --save-dev
```

# API

## Functions

_Defined in [core/instrument/src/index.ts](https://github.com/atanasster/component-controls/blob/ab703a5/core/instrument/src/index.ts)_

### parseStories

▸ **parseStories**(`source`: string, `filePath`: string, `options?`: [InstrumentOptions](#instrumentoptions)): _Promise‹Store›_

Parse and instrument a javascript, typescript or MDX file of stories

**Parameters:**

| Name       | Type                                    | Description                           |
| ---------- | --------------------------------------- | ------------------------------------- |
| `source`   | string                                  | Source of the file to be instrumented |
| `filePath` | string                                  | Resolved file path name.              |
| `options?` | [InstrumentOptions](#instrumentoptions) | Instrumenting options                 |

**Returns:** _Promise‹Store›_

* * *

## Default options

_Defined in [core/instrument/src/types.ts](https://github.com/atanasster/component-controls/blob/ab703a5/core/instrument/src/types.ts)_

### **defaultParserOptions**: _[ParserOptions](#parseroptions)_

• **plugins**: _"typescript" | "jsx"\[]_ = ['jsx', 'typescript']

• **sourceType**: _"module"_ = "module"

* * *

### **defaultResolveOptions**: _[ResolverOptions](#resolveroptions)_

• **extensions**: _string\[]_ = ['.js', '.jsx', '.ts', '.tsx', '.vue', '.mjs', '.es', '.es6']

* * *

### **defaultComponentOptions**: _[ComponentOptions](#componentoptions)_

• **sourceFiles**: _boolean_ = true;

* * *

### **defaultStoriesOptions**: _[StoriesOptions](#storiesoptions)_

• **sourceFiles**: _boolean_ = false;

* * *

# Interfaces

## InstrumentOptions

Options that can control the parsing and instrumentation process

_Defined in [core/instrument/src/types.ts](https://github.com/atanasster/component-controls/blob/ab703a5/core/instrument/src/types.ts)_

### Properties

• **components**? : _[ComponentOptions](#componentoptions)_

Options for extracting stories information.

• **stories**? : _[StoriesOptions](#storiesoptions)_

Options for extracting component information.

• **extractPropsFn**? : _[PropsInfoExtractor](#propsinfoextractor)_

 optional module to extract prop tables information for components

• **parser**? : _[ParserOptions](#parseroptions)_

Options to control babel parser.

• **prettier**? : _[PrettierOptions](#prettieroptions) | false_

prettier options are used to prettify the code at the end of the process
this is useful for "story" code, where the story is extracted from the full file
passing a value of false as prettier option will disabled prettifying

• **resolver**? : _[ResolverOptions](#resolveroptions)_

Options to control resolving filenames.

* * *

## InstrumentOptionsMDX

extends [InstrumentOptions](#instrumentoptions)) and adds options for `mdx-js`.

### Properties

• **mdx**? : _[MDXOptions](#mdxoptions)_

Options for mdx-js compiling

* * *

## ComponentOptions

Options for extracting component information.

_Defined in [core/instrument/src/types.ts](https://github.com/atanasster/component-controls/blob/ab703a5/core/instrument/src/types.ts)_

### Properties

• **resolveFile**? : _undefined | `(componentName: string, filePath: string) => string | undefined;`_

Callback function to resolve the source file name of a component. 
Return false if this file should not be processed.

• **sourceFiles**? : _boolean_

If set to false, will not save the component's source file.

• **package**? : _[PackageInfoOptions](#packageinfooptions) | false_

Otions for extracting repository information from the component's package,json file.

* * *

## StoriesOptions

Options for extracting stories information.

_Defined in [core/instrument/src/types.ts](https://github.com/atanasster/component-controls/blob/ab703a5/core/instrument/src/types.ts)_

### Properties

• **sourceFiles**? : _boolean_

If set to false, will not save the stories's source file, only the source of each individual story.

• **package**? : _[PackageInfoOptions](#packageinfooptions) | false_

Options for extracting repository information from the component's package,json file.

* * *

# ParserOptions

Options to control the `@babel/parser` parsing process

_Defined in [/babel-parser/typings/babel-parser.d.ts](https://github.com/babel/babel/blob/2057d2b159b0ad1376c9701206cf59419369be75/packages/babel-parser/typings/babel-parser.d.ts#L18)_

### Properties

• **allowAwaitOutsideFunction**? : _undefined | false | true_

By default, await use is not allowed outside of an async function.
Set this to true to accept such code.

• **allowImportExportEverywhere**? : _undefined | false | true_

By default, import and export declarations can only appear at a program's top level.
Setting this option to true allows them anywhere where a statement is allowed.

• **allowReturnOutsideFunction**? : _undefined | false | true_

By default, a return statement at the top level raises an error.
Set this to true to accept such code.

• **allowSuperOutsideMethod**? : _undefined | false | true_

• **allowUndeclaredExports**? : _undefined | false | true_

By default, exported identifiers must refer to a declared variable.
Set this to true to allow export statements to reference undeclared variables.

• **createParenthesizedExpressions**? : _undefined | false | true_

By default, the parser adds information about parentheses by setting
`extra.parenthesized` to `true` as needed.
When this option is `true` the parser creates `ParenthesizedExpression`
AST nodes instead of using the `extra` property.

• **plugins**? : _ParserPlugin\[]_

Array containing the plugins that you want to enable.

• **ranges**? : _undefined | false | true_

Adds a ranges property to each node: [node.start, node.end]

• **sourceFilename**? : _undefined | string_

Correlate output AST nodes with their source filename.
Useful when generating code and source maps from the ASTs of multiple input files.

• **sourceType**? : _"script" | "module" | "unambiguous"_

Indicate the mode the code should be parsed in.
Can be one of "script", "module", or "unambiguous". Defaults to "script".
"unambiguous" will make @babel/parser attempt to guess, based on the presence
of ES6 import or export statements.
Files with ES6 imports and exports are considered "module" and are otherwise "script".

• **startLine**? : _undefined | number_

By default, the first line of code parsed is treated as line 1.
You can provide a line number to alternatively start with.
Useful for integration with other source tools.

• **strictMode**? : _undefined | false | true_

Should the parser work in strict mode.
Defaults to true if sourceType === 'module'. Otherwise, false.

• **tokens**? : _undefined | false | true_

Adds all parsed tokens to a tokens property on the File node.

* * *

# PrettierOptions

Options to control the `prettier` code formatting process

_Defined in [@types/prettier/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/47b73a9a32c4b70d1e6147a43bce042485697758/types/prettier/index.d.ts#L51)_

### Properties

• **arrowParens**? : _"avoid" | "always"_

Include parentheses around a sole arrow function parameter.

• **bracketSpacing**? : _undefined | false | true_

Print spaces between brackets in object literals.

• **endOfLine**? : _"auto" | "lf" | "crlf" | "cr"_

Which end of line characters to apply.

• **filepath**? : _undefined | string_

Specify the input filepath. This will be used to do parser inference.

• **htmlWhitespaceSensitivity**? : _"css" | "strict" | "ignore"_

How to handle whitespaces in HTML.

• **insertPragma**? : _undefined | false | true_

Prettier can insert a special @format marker at the top of files specifying that
the file has been formatted with prettier. This works well when used in tandem with
the --require-pragma option. If there is already a docblock at the top of
the file then this option will add a newline to it with the @format marker.

• **jsxBracketSameLine**? : _undefined | false | true_

Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line.

• **jsxSingleQuote**? : _undefined | false | true_

Use single quotes in JSX.

• **parser**? : _BuiltInParserName | CustomParser_

Specify which parser to use.

• **plugins**? : _string | Plugin\[]_

The plugin API is in a beta state.

• **printWidth**?: _number_

Specify the line length that the printer will wrap on.

• **proseWrap**? : _boolean | "always" | "never" | "preserve"_

By default, Prettier will wrap markdown text as-is since some services use a linebreak-sensitive renderer.
In some cases you may want to rely on editor/viewer soft wrapping instead, so this option allows you to opt out.

• **quoteProps**? : _"as-needed" | "consistent" | "preserve"_

Change when properties in objects are quoted.

• **rangeEnd**? : _undefined | number_

Format only a segment of a file.

• **rangeStart**? : _undefined | number_

Format only a segment of a file.

• **requirePragma**? : _undefined | false | true_

Prettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the file.
This is very useful when gradually transitioning large, unformatted codebases to prettier.

• **semi**? : _undefined | false | true_

Print semicolons at the ends of statements.

• **singleQuote**? : _undefined | false | true_

Use single quotes instead of double quotes.

• **tabWidth**?: _number_

Specify the number of spaces per indentation-level.

• **trailingComma**? : _"none" | "es5" | "all"_

Print trailing commas wherever possible.

• **useTabs**?: _boolean_

Indent lines with tabs instead of spaces

• **vueIndentScriptAndStyle**? : _undefined | false | true_

Whether or not to indent the code inside <script> and <style> tags in Vue files.

• **resolveConfigOptions**? : \*_[ResolvePrettierConfigOptions](#resolveconfigoptions)_

Whether or not to indent the code inside <script> and <style> tags in Vue files.

* * *

# ResolvePrettierConfigOptions

Options to configure the process of finding the prettier config file

_Defined in [@types/prettier/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/47b73a9a32c4b70d1e6147a43bce042485697758/types/prettier/index.d.ts#L221)_

### Properties

• **config**? : _undefined | string_

Pass directly the path of the config file if you don't wish to search for it.

• **editorconfig**? : _undefined | false | true_

If set to `true` and an `.editorconfig` file is in your project,
Prettier will parse it and convert its properties to the corresponding prettier configuration.
This configuration will be overridden by `.prettierrc`, etc. Currently,
the following EditorConfig properties are supported:

-   indent_style
-   indent_size/tab_width
-   max_line_length

• **useCache**? : _undefined | false | true_

If set to `false`, all caching will be bypassed.

* * *

# ResolverOptions

Options to control the `resolve` import resolving utilities.

_Defined in [@types/resolve/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/82af14cb371792e3f98e9f10b176de8cf78fd858/types/resolve/index.d.ts#L104)_

• **basedir**? : _undefined | string_

directory to begin resolving from (defaults to \_\_dirname)

• **extensions**? : _string | ReadonlyArray‹string›_

array of file extensions to search in order (defaults to ['.js'])

• **isFile**? : _undefined | function_

function to synchronously test whether a file exists

• **moduleDirectory**? : _string | ReadonlyArray‹string›_

directory (or directories) in which to recursively look for modules. (default to 'node_modules')

• **package**? : _any_

package.json data applicable to the module being loaded

• **packageFilter**? : _undefined | function_

transform the parsed package.json contents before looking at the "main" field

• **pathFilter**? : _undefined | function_

transform a path within a package

• **paths**? : _string | ReadonlyArray‹string›_

require.paths array to use if nothing is found on the normal node_modules recursive walk (probably don't use this)

• **preserveSymlinks**? : _undefined | false | true_

if true, doesn't resolve `basedir` to real path before resolving.
This is the way Node resolves dependencies when executed with the --preserve-symlinks flag.

Note: this property is currently true by default but it will be changed to false in the next major version because Node's resolution
algorithm does not preserve symlinks by default.

• **readFileSync**? : _undefined | function_

how to read files synchronously (defaults to fs.readFileSync)

* * *

# MDXOptions

Options to control `mdx-js`.

_Defined in [@types/resolve/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/82af14cb371792e3f98e9f10b176de8cf78fd858/types/resolve/index.d.ts#L104)_

• **footnotes**? : _boolean_

enable footnotes

• **remarkPlugins**? : _any\[]_

specify remark plugins

• **hastPlugins**? : _any\[]_

specify rehype plugins

• **compilers**? : _any\[]_

specify markdown compilers

• **blocks**? : _string\[]_

regex for blocks, defaults to \['[a-z\\.]+(\\.){0,1}[a-z\\.]']

* * *

## PackageInfoOptions

Options for finding and extracting package.json informtation, applies both for components and stories.

_Defined in [core/instrument/src/types.ts](https://github.com/atanasster/component-controls/blob/ab703a5/core/instrument/src/types.ts)_

### Properties

• **maxLevels**? : _number_

 Max levels of folders to look up to find the `package.json` file.

• **packageJsonName**? : _string_

`package.json` alternative name

• **storeBrowseLink**? : _boolean_

Whether to save the link for browsing the file in the repository field.

• **storeDocsLink**? : _boolean_

Whether to save the link for project readme file in the repository field.

• **storeIssuesLink**? : _boolean_

Whether to save the link for filing issues with the project in the repository field.

* * *

## PropsInfoExtractor

`(fileName: string, componentName?: string, source?: string) => PropTypes | undefined;`

Callback function to extract props info table  - ie docgen type libraries. Used to extract displayName, and props tables for a component

_Defined in [core/instrument/src/types.ts](https://github.com/atanasster/component-controls/blob/ab703a5/core/instrument/src/types.ts)_

### Arguments

• **fileName** : _string_

Full name and path of the component path. react-docgen needs it to extract babel configurations

• **componentName**? : _string_

Optional component name.  react-docgen-typescript supports multiple exports for a file.  react-docgne does not use it.

• **source**? : _string_

Optional soure, saves time if its already loaded.  react-docgen accepts source as input parameter.  react-docgen-typescript does not use it.
