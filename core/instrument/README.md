# @component-controls/instrument

> Component controls instrumentation library. 
Parsing a source file will generate the following information:
- CSF: List of story named exports
- CSF: Default export stories file information
- MDX: List of `<Story />` story tags
- MDX: List of `<Meta />` stories file information
- Source code extracted for the stories
- Source code of the entire stories file
- List of attributes(parameters) passed to CSF/MDX stories
- List of story function arguments passed to CSF/MDX stories
- Usage location (in thesource code) of the function arguments
- Extract 'component' information for stories: import clause, source file,source loction
- Extract package.json repository information for the stories file
- Extract package.json repository information for the components file (in canse the components and the stories and in different packages)

## Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone to parse story files and extract information in a script

```bash
$ npm install @component-controls/instrument --save-dev
```

# API

## Functions

*Defined in [core/instrument/src/index.ts](https://github.com/atanasster/component-controls/blob/ab703a5/core/instrument/src/index.ts)*

### parseCSF

▸ **parseCSF**(`source`: string, `filePath`: string, `options?`: [InstrumentOptions](#instrumentoptions)): *Promise‹StoriesStore›*

Parse and instrument a javascript or typescript file of stories

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | string | Source of the file to be instrumented |
`filePath` | string | Resolved file path name. |
`options?` | [InstrumentOptions](#instrumentoptions) | Instrumenting options  |

**Returns:** *Promise‹StoriesStore›*

___

### parseMDX

▸ **parseMDX**(`source`: string, `filePath`: string, `options?`: [InstrumentOptions](#instrumentoptions)): *Promise‹StoriesStore›*

Parse and instrument an MDX file of stories

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | string | Source of the file to be instrumented |
`filePath` | string | Resolved file path name. |
`options?` | [InstrumentOptions](#instrumentoptions) | Instrumenting options  |

**Returns:** *Promise‹StoriesStore›*

## Default options

*Defined in [core/instrument/src/types.ts](https://github.com/atanasster/component-controls/blob/ab703a5/core/instrument/src/types.ts)*

### **defaultParserOptions**: ParserOptions

• **plugins**: *"typescript" | "jsx"[]* = ['jsx', 'typescript']

• **sourceType**: *"module"* = "module"

___

### **defaultResolveOptions**: ResolverOptions

• **extensions**: *string[]* = ['.js', '.jsx', '.ts', '.tsx', '.vue', '.mjs', '.es', '.es6']

___


# Interfaces

## InstrumentOptions

Options that can control the parsing and instrumentation process

*Defined in [core/instrument/src/types.ts](https://github.com/atanasster/component-controls/blob/ab703a5/core/instrument/src/types.ts)*

### Properties
 
• **component**? : *[ComponentOptions](#componentoptions)*

Options for extracting component information.

• **parser**? : *[ParserOptions](#parseroptions)*

Options to control the babel parser.

• **prettier**? : *[PrettierOptions](#prettieroptions) | false*

prettier options are used to prettify the code at the end of the process
this is useful for "story" code, where the story is extracted from the full file
passing a value of false as prettier option will disabled prettifying

• **resolve**? : *[ResolverOptions](#resolveroptions)*

Options to control resolving filenames.

___

## ComponentOptions

Options for extracting component information.

*Defined in [core/instrument/src/types.ts](https://github.com/atanasster/component-controls/blob/ab703a5/core/instrument/src/types.ts)*

### Properties

• **resolveFile**? : *undefined | `(componentName: string, filePath: string) => string | undefined;`*

Callback function toresolve the source file name of a component. 

___

# ParserOptions

Options to control the `@babel/parser` parsing process

*Defined in [/babel-parser/typings/babel-parser.d.ts](https://github.com/babel/babel/blob/2057d2b159b0ad1376c9701206cf59419369be75/packages/babel-parser/typings/babel-parser.d.ts#L18)*

### Properties

• **allowAwaitOutsideFunction**? : *undefined | false | true*

By default, await use is not allowed outside of an async function.
Set this to true to accept such code.


• **allowImportExportEverywhere**? : *undefined | false | true*

By default, import and export declarations can only appear at a program's top level.
Setting this option to true allows them anywhere where a statement is allowed.


• **allowReturnOutsideFunction**? : *undefined | false | true*

By default, a return statement at the top level raises an error.
Set this to true to accept such code.

• **allowSuperOutsideMethod**? : *undefined | false | true*

• **allowUndeclaredExports**? : *undefined | false | true*

By default, exported identifiers must refer to a declared variable.
Set this to true to allow export statements to reference undeclared variables.

• **createParenthesizedExpressions**? : *undefined | false | true*

By default, the parser adds information about parentheses by setting
`extra.parenthesized` to `true` as needed.
When this option is `true` the parser creates `ParenthesizedExpression`
AST nodes instead of using the `extra` property.

• **plugins**? : *ParserPlugin[]*

Array containing the plugins that you want to enable.

• **ranges**? : *undefined | false | true*

Adds a ranges property to each node: [node.start, node.end]

• **sourceFilename**? : *undefined | string*

Correlate output AST nodes with their source filename.
Useful when generating code and source maps from the ASTs of multiple input files.

• **sourceType**? : *"script" | "module" | "unambiguous"*

Indicate the mode the code should be parsed in.
Can be one of "script", "module", or "unambiguous". Defaults to "script".
"unambiguous" will make @babel/parser attempt to guess, based on the presence
of ES6 import or export statements.
Files with ES6 imports and exports are considered "module" and are otherwise "script".

• **startLine**? : *undefined | number*

By default, the first line of code parsed is treated as line 1.
You can provide a line number to alternatively start with.
Useful for integration with other source tools.

• **strictMode**? : *undefined | false | true*

Should the parser work in strict mode.
Defaults to true if sourceType === 'module'. Otherwise, false.

• **tokens**? : *undefined | false | true*

Adds all parsed tokens to a tokens property on the File node.


# PrettierOptions

Options to control the `prettier` code formatting process

*Defined in [@types/prettier/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/47b73a9a32c4b70d1e6147a43bce042485697758/types/prettier/index.d.ts#L51)*

### Properties

• **arrowParens**? : *"avoid" | "always"*

Include parentheses around a sole arrow function parameter.


• **bracketSpacing**? : *undefined | false | true*

Print spaces between brackets in object literals.


• **endOfLine**? : *"auto" | "lf" | "crlf" | "cr"*

Which end of line characters to apply.


• **filepath**? : *undefined | string*

Specify the input filepath. This will be used to do parser inference.


• **htmlWhitespaceSensitivity**? : *"css" | "strict" | "ignore"*

How to handle whitespaces in HTML.


• **insertPragma**? : *undefined | false | true*

Prettier can insert a special @format marker at the top of files specifying that
the file has been formatted with prettier. This works well when used in tandem with
the --require-pragma option. If there is already a docblock at the top of
the file then this option will add a newline to it with the @format marker.


• **jsxBracketSameLine**? : *undefined | false | true*

Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line.


• **jsxSingleQuote**? : *undefined | false | true*

Use single quotes in JSX.

• **parser**? : *BuiltInParserName | CustomParser*

Specify which parser to use.


• **plugins**? : *string | Plugin[]*

The plugin API is in a beta state.

• **printWidth**?: *number*

Specify the line length that the printer will wrap on.

• **proseWrap**? : *boolean | "always" | "never" | "preserve"*

By default, Prettier will wrap markdown text as-is since some services use a linebreak-sensitive renderer.
In some cases you may want to rely on editor/viewer soft wrapping instead, so this option allows you to opt out.

• **quoteProps**? : *"as-needed" | "consistent" | "preserve"*

Change when properties in objects are quoted.

• **rangeEnd**? : *undefined | number*

Format only a segment of a file.

• **rangeStart**? : *undefined | number*

Format only a segment of a file.

• **requirePragma**? : *undefined | false | true*

Prettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the file.
This is very useful when gradually transitioning large, unformatted codebases to prettier.

• **semi**? : *undefined | false | true*

Print semicolons at the ends of statements.

• **singleQuote**? : *undefined | false | true*

Use single quotes instead of double quotes.

• **tabWidth**?: *number*

Specify the number of spaces per indentation-level.

• **trailingComma**? : *"none" | "es5" | "all"*

Print trailing commas wherever possible.

• **useTabs**?: *boolean*

Indent lines with tabs instead of spaces

• **vueIndentScriptAndStyle**? : *undefined | false | true*

Whether or not to indent the code inside <script> and <style> tags in Vue files.

• **resolveConfigOptions**? : **[ResolvePrettierConfigOptions](#resolveconfigoptions)*

Whether or not to indent the code inside <script> and <style> tags in Vue files.


# ResolvePrettierConfigOptions

Options to configure the process of finding the prettier config file

*Defined in [@types/prettier/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/47b73a9a32c4b70d1e6147a43bce042485697758/types/prettier/index.d.ts#L221)*


### Properties

• **config**? : *undefined | string*

Pass directly the path of the config file if you don't wish to search for it.

• **editorconfig**? : *undefined | false | true*

If set to `true` and an `.editorconfig` file is in your project,
Prettier will parse it and convert its properties to the corresponding prettier configuration.
This configuration will be overridden by `.prettierrc`, etc. Currently,
the following EditorConfig properties are supported:
- indent_style
- indent_size/tab_width
- max_line_length

• **useCache**? : *undefined | false | true*

If set to `false`, all caching will be bypassed.


# ResolverOptions

Options to control the `resolve` import resolving utilities.

*Defined in [@types/resolve/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/82af14cb371792e3f98e9f10b176de8cf78fd858/types/resolve/index.d.ts#L104)*


• **basedir**? : *undefined | string*

directory to begin resolving from (defaults to __dirname)

• **extensions**? : *string | ReadonlyArray‹string›*

array of file extensions to search in order (defaults to ['.js'])

• **isFile**? : *undefined | function*

function to synchronously test whether a file exists

• **moduleDirectory**? : *string | ReadonlyArray‹string›*

directory (or directories) in which to recursively look for modules. (default to 'node_modules')

• **package**? : *any*

package.json data applicable to the module being loaded

• **packageFilter**? : *undefined | function*

transform the parsed package.json contents before looking at the "main" field

• **pathFilter**? : *undefined | function*

transform a path within a package

• **paths**? : *string | ReadonlyArray‹string›*

require.paths array to use if nothing is found on the normal node_modules recursive walk (probably don't use this)


• **preserveSymlinks**? : *undefined | false | true*

if true, doesn't resolve `basedir` to real path before resolving.
This is the way Node resolves dependencies when executed with the --preserve-symlinks flag.

Note: this property is currently true by default but it will be changed to false in the next major version because Node's resolution
algorithm does not preserve symlinks by default.


• **readFileSync**? : *undefined | function*

how to read files synchronously (defaults to fs.readFileSync)
