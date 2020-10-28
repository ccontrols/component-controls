# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [ConfigurationResult](#configurationresult)
    -   [RequireContextProps](#requirecontextprops)
    -   [buildConfigFileNames](#buildconfigfilenames)
    -   [optionsFileNames](#optionsfilenames)
    -   [configRequireContext](#configrequirecontext)
    -   [extractDocuments](#extractdocuments)
    -   [fixGlob](#fixglob)
    -   [getConfigurationArg](#getconfigurationarg)
    -   [loadConfiguration](#loadconfiguration)
    -   [mergeBuildConfiguration](#mergebuildconfiguration)

# Overview

Configuration file utilities. Uses the [glob](https://www.npmjs.com/package/glob) package to locate story files from the configuration

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone:

```bash
$ npm install @component-controls/config --save-dev
```

# API

<tsdoc-typescript entry="./src/index.ts" files="../specification/src/configuration.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

## ConfigurationResult

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L26)_



### properties

| Name              | Type                                      | Description |
| ----------------- | ----------------------------------------- | ----------- |
| `config*`         | [BuildConfiguration](#buildconfiguration) |             |
| `configPath*`     | string                                    |             |
| `optionsFilePath` | string                                    |             |

## RequireContextProps

from the glob list of documents, extract require.context array of props

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L129)_



### properties

| Name                 | Type              | Description |
| -------------------- | ----------------- | ----------- |
| `directory*`         | string            |             |
| `regExp*`            | [RegExp](#regexp) |             |
| `useSubdirectories*` | boolean           |             |

## buildConfigFileNames

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L11)_



## optionsFileNames

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L18)_



## configRequireContext

convert glob patters from config file into require.context objects

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L137)_

**function** configRequireContext(`__namedParameters`\*: **config**: ### properties| Name         | Type                                | Description                                                                                                                                    |
| ------------ | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `BuildProps` | [BuildProps](#buildprops)           |                                                                                                                                                |
| `categories` | [DocType](#doctype)\[]              | page types that are considered as categories fields as well                                                                                    |
| `files`      | string \| string\[]                 | alternative naming for docz compatibility                                                                                                      |
| `ignore`     | string\[]                           | files to ignore. by default \['readme.md', 'changelog.md', 'code_of_conduct.md', 'contributing.md', 'license.md']                              |
| `instrument` | any                                 | instrumentation configuration                                                                                                                  |
| `pages`      | [PagesOnlyRoutes](#pagesonlyroutes) | base url path for API documentation pages. Default is "docs/"                                                                                  |
| `siteMap`    | [SitemapConfig](#sitemapconfig)     | if false, disable automatic sitemap generation                                                                                                 |
| `siteRoot`   | string                              | the site base url, by default the site starts at /                                                                                             |
| `siteUrl`    | string                              | Deployed site url. Also used for auto generated sitemap.                                                                                       |
| `stories`    | string \| string\[]                 | wild card search string for the stories internally using \`glob\` for the search: https&#x3A;//www.npmjs.com/package/glob example: "./stories/ |**configPath**: string): [RequireContextProps](#requirecontextprops)\[] | undefined;

### parameters

| Name                 | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Description |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `__namedParameters*` | **config**: ### properties| Name         | Type                                | Description                                                                                                                                    | | ------------ | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | | `BuildProps` | [BuildProps](#buildprops)           |                                                                                                                                                | | `categories` | [DocType](#doctype)\[]              | page types that are considered as categories fields as well                                                                                    | | `files`      | string \| string\[]                 | alternative naming for docz compatibility                                                                                                      | | `ignore`     | string\[]                           | files to ignore. by default \['readme.md', 'changelog.md', 'code_of_conduct.md', 'contributing.md', 'license.md']                              | | `instrument` | any                                 | instrumentation configuration                                                                                                                  | | `pages`      | [PagesOnlyRoutes](#pagesonlyroutes) | base url path for API documentation pages. Default is "docs/"                                                                                  | | `siteMap`    | [SitemapConfig](#sitemapconfig)     | if false, disable automatic sitemap generation                                                                                                 | | `siteRoot`   | string                              | the site base url, by default the site starts at /                                                                                             | | `siteUrl`    | string                              | Deployed site url. Also used for auto generated sitemap.                                                                                       | | `stories`    | string \| string\[]                 | wild card search string for the stories internally using \`glob\` for the search: https&#x3A;//www.npmjs.com/package/glob example: "./stories/ |**configPath**: string |             |
| `returns`            | [RequireContextProps](#requirecontextprops)\[] \| undefined                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |             |

## extractDocuments

find the story files out of a configuration file
using glob for the regex file search

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L103)_

**function** extractDocuments(`__namedParameters`\*: **config**: ### properties| Name         | Type                                | Description                                                                                                                                    |
| ------------ | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `BuildProps` | [BuildProps](#buildprops)           |                                                                                                                                                |
| `categories` | [DocType](#doctype)\[]              | page types that are considered as categories fields as well                                                                                    |
| `files`      | string \| string\[]                 | alternative naming for docz compatibility                                                                                                      |
| `ignore`     | string\[]                           | files to ignore. by default \['readme.md', 'changelog.md', 'code_of_conduct.md', 'contributing.md', 'license.md']                              |
| `instrument` | any                                 | instrumentation configuration                                                                                                                  |
| `pages`      | [PagesOnlyRoutes](#pagesonlyroutes) | base url path for API documentation pages. Default is "docs/"                                                                                  |
| `siteMap`    | [SitemapConfig](#sitemapconfig)     | if false, disable automatic sitemap generation                                                                                                 |
| `siteRoot`   | string                              | the site base url, by default the site starts at /                                                                                             |
| `siteUrl`    | string                              | Deployed site url. Also used for auto generated sitemap.                                                                                       |
| `stories`    | string \| string\[]                 | wild card search string for the stories internally using \`glob\` for the search: https&#x3A;//www.npmjs.com/package/glob example: "./stories/ |**configPath**: string): string\[] | undefined;

### parameters

| Name                 | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Description |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `__namedParameters*` | **config**: ### properties| Name         | Type                                | Description                                                                                                                                    | | ------------ | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | | `BuildProps` | [BuildProps](#buildprops)           |                                                                                                                                                | | `categories` | [DocType](#doctype)\[]              | page types that are considered as categories fields as well                                                                                    | | `files`      | string \| string\[]                 | alternative naming for docz compatibility                                                                                                      | | `ignore`     | string\[]                           | files to ignore. by default \['readme.md', 'changelog.md', 'code_of_conduct.md', 'contributing.md', 'license.md']                              | | `instrument` | any                                 | instrumentation configuration                                                                                                                  | | `pages`      | [PagesOnlyRoutes](#pagesonlyroutes) | base url path for API documentation pages. Default is "docs/"                                                                                  | | `siteMap`    | [SitemapConfig](#sitemapconfig)     | if false, disable automatic sitemap generation                                                                                                 | | `siteRoot`   | string                              | the site base url, by default the site starts at /                                                                                             | | `siteUrl`    | string                              | Deployed site url. Also used for auto generated sitemap.                                                                                       | | `stories`    | string \| string\[]                 | wild card search string for the stories internally using \`glob\` for the search: https&#x3A;//www.npmjs.com/package/glob example: "./stories/ |**configPath**: string |             |
| `returns`            | string\[] \| undefined                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |             |

## fixGlob

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L97)_

**function** fixGlob(`golbExpr`\*: string): string;

### parameters

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| `golbExpr*` | string |             |
| `returns`   | string |             |

## getConfigurationArg

return the configuration folder from command-line parameters
command line accepts -c/ -config parameter for config path
the config file is assumed named main.js/main.ts

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L37)_

**function** getConfigurationArg(`args`\*: string\[]): string | undefined;

### parameters

| Name      | Type                | Description |
| --------- | ------------------- | ----------- |
| `args*`   | string\[]           |             |
| `returns` | string \| undefined |             |

## loadConfiguration

 given a base project folder and a configuration folder, returns the configuration file

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L58)_

**function** loadConfiguration(`baseFolder`\*: string, `configFolder`: string, `args`: string\[]): [ConfigurationResult](#configurationresult) | undefined;

### parameters

| Name           | Type                                                     | Description                                    |
| -------------- | -------------------------------------------------------- | ---------------------------------------------- |
| `baseFolder*`  | string                                                   | project folder to start the search with        |
| `configFolder` | string                                                   | folder where the configuration file is located |
| `args`         | string\[]                                                | optional arguments                             |
| `returns`      | [ConfigurationResult](#configurationresult) \| undefined |                                                |

## mergeBuildConfiguration

merge a configuration passed through cli or tools, with the build configration from the config path

_defined in [@component-controls/config/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/config/src/index.ts#L168)_

**function** mergeBuildConfiguration(`config`\*: [BuildConfiguration](#buildconfiguration)): [BuildConfiguration](#buildconfiguration);

### parameters

| Name      | Type                                      | Description |
| --------- | ----------------------------------------- | ----------- |
| `config*` | [BuildConfiguration](#buildconfiguration) |             |
| `returns` | [BuildConfiguration](#buildconfiguration) |             |

<!-- END-TSDOC-TYPESCRIPT -->
