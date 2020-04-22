# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [Store](#store)
    -   [StoreOptions](#storeoptions)
    -   [store](#store-1)
    -   [stores](#stores)
    -   [StoreObserver](#storeobserver)

# Overview

Utility class to abstract loading the stories store from the webpack loader and provides an interface to access the store. Will also share the store accross bundles using localStorage and broadcastig messages.

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone:

```bash
$ npm install @component-controls/store --save-dev
```

# API

<tsdoc-typescript files="./src/types.ts" entry="./src/index.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

## Store

Store class used to query the stories and exchange information between processes

_defined in [@component-controls/store/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/store/src/index.ts#L29)_



### properties

| Name               | Type                                                                                                                                  | Description                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `constructor*`     | **function** constructor                                                                                                              | create a store with options                                                                                           |
| `addObserver*`     | **function** addObserver(`observer`\*: [StoreObserver](#storeobserver)): number;                                                      | add observer callback function                                                                                        |
| `getStore*`        | **function** getStore(): [StoriesStore](#storiesstore);                                                                               | returns an instance of the store                                                                                      |
| `getStory*`        | **function** getStory(`storyId`\*: string): [Story](#story);                                                                          | given a story id return a story from the store                                                                        |
| `removeObserver*`  | **function** removeObserver(`observer`\*: [StoreObserver](#storeobserver)): **function** (`storyId`: string): void;\[];               | remove installed observer callback function                                                                           |
| `setStore*`        | **function** setStore(`store`: [StoriesStore](#storiesstore)): void;                                                                  | internal set store, use for testing with mockup store.                                                                |
| `updateStoryProp*` | **function** updateStoryProp(`storyId`\*: string, `propName`\*: string, `newVal`\*: any): [StoriesStore](#storiesstore) \| undefined; | modify story properties, for example controls values. will notify all installed store observers of the changed story. |

## StoreOptions

_defined in [@component-controls/store/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/store/src/index.ts#L16)_



### properties

| Name                 | Type                          | Description                                                         |
| -------------------- | ----------------------------- | ------------------------------------------------------------------- |
| `store`              | [StoriesStore](#storiesstore) | optional store initializer                                          |
| `updateLocalStorage` | boolean                       | set to false to prevent the Store from updating localStorage values |

## store

store variable, automatically filled with stories.

_defined in [@component-controls/store/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/store/src/index.ts#L148)_



## stores

_defined in [@component-controls/store/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/store/src/index.ts#L150)_



## StoreObserver

store on change observer.
when updateStoryProp is called on the store, the store observers will be notified
so they can re-load the stories

_defined in [@component-controls/store/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/core/store/src/types.ts#L8)_

**function** (`storyId`: string): void;

### parameters

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| `storyId` | string |             |
| `returns` | void   |             |

<!-- END-TSDOC-TYPESCRIPT -->
