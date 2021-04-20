# Table of contents

-   [Overview](#overview)
-   [Install](#install)
-   [API](#api)
    -   [<ins>createDocumentTemplate</ins>](#inscreatedocumenttemplateins)
    -   [<ins>createStoreTemplate</ins>](#inscreatestoretemplateins)
    -   [<ins>createStoriesTemplate</ins>](#inscreatestoriestemplateins)
    -   [<ins>createTemplate</ins>](#inscreatetemplateins)
    -   [<ins>cliStore</ins>](#insclistoreins)
    -   [<ins>cliStory</ins>](#insclistoryins)
    -   [<ins>run</ins>](#insrunins)
    -   [<ins>saveTemplate</ins>](#inssavetemplateins)

# Overview

-   Easy to use cli with "zero" configuration.
-   Generates test files in cjs, esm or typescript format.
-   More advanced level to customize the framework renderer.
-   Advanced level for full control over which stories to use for the tests.

# Install

```sh
yarn add @component-controls/cc-cli --dev
```

# API

<react-docgen-typescript path="./src" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>createDocumentTemplate</ins>

create tests on a document base (a test file for each document and inside, dynamic tests to iterate through the stories)

_createDocumentTemplate [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/cc-cli/src/document-template.ts)_

### properties

| Name        | Type                         | Description                                                                  |
| ----------- | ---------------------------- | ---------------------------------------------------------------------------- |
| `storyPath` | _string_                     |                                                                              |
| `renderer`  | _"rtl" \| "rtr" \| "enzyme"_ | which renderer to use for generating the tests                               |
| `format`    | _TeplateFormats_             | files format - default common js                                             |
| `config`    | _string_                     | configuration files folder                                                   |
| `bundle`    | _string_                     | if specified, will get stories from the bundle instead of directly importing |
| `output`    | _string_                     | tests output folder - where to create them                                   |
| `name`      | _string_                     | describe section label                                                       |

## <ins>createStoreTemplate</ins>

create one large dynamic test for all the stories in the configuration/bundle

_createStoreTemplate [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/cc-cli/src/store-template.ts)_

### properties

| Name       | Type                         | Description                                                                  |
| ---------- | ---------------------------- | ---------------------------------------------------------------------------- |
| `renderer` | _"rtl" \| "rtr" \| "enzyme"_ | which renderer to use for generating the tests                               |
| `format`   | _TeplateFormats_             | files format - default common js                                             |
| `config`   | _string_                     | configuration files folder                                                   |
| `bundle`   | _string_                     | if specified, will get stories from the bundle instead of directly importing |
| `output`   | _string_                     | tests output folder - where to create them                                   |
| `name`     | _string_                     | describe section label                                                       |

## <ins>createStoriesTemplate</ins>

create tests on a stories base (a test file for each document and inside, a test for each story)

_createStoriesTemplate [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/cc-cli/src/stories-template.ts)_

### properties

| Name        | Type                         | Description                                                                  |
| ----------- | ---------------------------- | ---------------------------------------------------------------------------- |
| `storyPath` | _string_                     |                                                                              |
| `renderer`  | _"rtl" \| "rtr" \| "enzyme"_ | which renderer to use for generating the tests                               |
| `format`    | _TeplateFormats_             | files format - default common js                                             |
| `config`    | _string_                     | configuration files folder                                                   |
| `bundle`    | _string_                     | if specified, will get stories from the bundle instead of directly importing |
| `output`    | _string_                     | tests output folder - where to create them                                   |
| `name`      | _string_                     | describe section label                                                       |

## <ins>createTemplate</ins>

from a template, render all variables

_createTemplate [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/cc-cli/src/template.ts)_

### properties

| Name        | Type                         | Description                                                                  |
| ----------- | ---------------------------- | ---------------------------------------------------------------------------- |
| `renderer`  | _"rtl" \| "rtr" \| "enzyme"_ | which renderer to use for generating the tests                               |
| `format`    | _TeplateFormats_             | files format - default common js                                             |
| `config`    | _string_                     | configuration files folder                                                   |
| `bundle`    | _string_                     | if specified, will get stories from the bundle instead of directly importing |
| `output`    | _string_                     | tests output folder - where to create them                                   |
| `name`      | _string_                     | describe section label                                                       |
| `template*` | _string_                     |                                                                              |
| `vars*`     | _Record&lt;string, any>_     |                                                                              |

## <ins>cliStore</ins>

cli function to create a test file with dynamic tests for the entre store

_cliStore [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/cc-cli/src/cli/cli-store.ts)_

### properties

| Name         | Type                         | Description                                                                  |
| ------------ | ---------------------------- | ---------------------------------------------------------------------------- |
| `overwrite*` | _boolean_                    |                                                                              |
| `test*`      | _string_                     |                                                                              |
| `include`    | _string\[]_                  | components to include                                                        |
| `exclude`    | _string\[]_                  | components to exclude                                                        |
| `renderer`   | _"rtl" \| "rtr" \| "enzyme"_ | which renderer to use for generating the tests                               |
| `format`     | _TeplateFormats_             | files format - default common js                                             |
| `config`     | _string_                     | configuration files folder                                                   |
| `bundle`     | _string_                     | if specified, will get stories from the bundle instead of directly importing |
| `output`     | _string_                     | tests output folder - where to create them                                   |
| `name`       | _string_                     | describe section label                                                       |

## <ins>cliStory</ins>

cli function to create tests on a story by story basis

_cliStory [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/cc-cli/src/cli/cli-story.ts)_

## <ins>run</ins>

cc-cli central function. based on the selected g/generate option will call the specific
cli function - store, stories

_run [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/cc-cli/src/cli/cli.ts)_

## <ins>saveTemplate</ins>

save a template file based on options

_saveTemplate [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/cc-cli/src/cli/save-template.ts)_

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
