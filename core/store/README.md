# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [Store](#store)
    -   [StoreOptions](#storeoptions)
    -   [StoreObserver](#storeobserver)

# Overview

Utility class to abstract loading the stories store from the webpack loader and provides an interface to access the store. Will also share the store accross bundles using localStorage and broadcastig messages.

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone:

```bash
$ npm install @component-controls/store --save-dev
```

# API

<tsdoc-typescript files="./src/types.ts" entry="./src/Store/Store.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

## Store

Store class used to query the stories and exchange information between processes

_defined in [@component-controls/store/src/Store/Store.ts](https://github.com/ccontrols/component-controls/tree/master/core/store/src/Store/Store.ts#L36)_



### properties

| Name                    | Type                                                                                                                                        | Description                                                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `constructor*`          | **function** constructor                                                                                                                    | create a store with options                                                                                           |
| `config*`               | **function** config                                                                                                                         | returns the run time configuration object.                                                                            |
| `pages*`                | **function** pages                                                                                                                          | returns all pages(documents) in the store                                                                             |
| `addObserver*`          | **function** addObserver(`observer`\*: [StoreObserver](#storeobserver)): number;                                                            | add observer callback function                                                                                        |
| `getFirstDocument*`     | **function** getFirstDocument(`pageType`\*: [PageType](#pagetype)): string \| undefined;                                                    |                                                                                                                       |
| `getNextPage*`          | **function** getNextPage(`type`\*: [PageType](#pagetype) \| undefined, `docId`\*: string): [Document](#document) \| undefined;              | returns the next page of the same type.                                                                               |
| `getPageList*`          | **function** getPageList(`type`\*: [PageType](#pagetype)): [Pages](#pages);                                                                 | returns all the documents/pages of a certain type.                                                                    |
| `getPagePath*`          | **function** getPagePath(`pageType`\*: [PageType](#pagetype) \| undefined, `name`\*: string, `activeTab`: string): string;                  | returns the url path to a document.                                                                                   |
| `getPagesByCategory*`   | **function** getPagesByCategory(`category`\*: string, `value`: any): [Pages](#pages);                                                       | returns all the documents/pages of a certain category value.                                                          |
| `getPrevPage*`          | **function** getPrevPage(`type`\*: [PageType](#pagetype) \| undefined, `docId`\*: string): [Document](#document) \| undefined;              | returns the previous page of the same type.                                                                           |
| `getStore*`             | **function** getStore(): [StoriesStore](#storiesstore);                                                                                     | returns an instance of the store                                                                                      |
| `getStory*`             | **function** getStory(`storyId`\*: string): [Story](#story);                                                                                | given a story id return a story from the store                                                                        |
| `getStoryDoc*`          | **function** getStoryDoc(`name`\*: string): [Document](#document);                                                                          | given a story doc file title, return a story doc file from the store                                                  |
| `getStoryPath*`         | **function** getStoryPath(`storyId`\*: string, `activeTab`: string): string;                                                                | returns the url path to a story.                                                                                      |
| `getUniquesByCategory*` | **function** getUniquesByCategory(`category`\*: string): \[key: string]: number;                                                            | returns all the unique category values (and their cound) for a category field.                                        |
| `initDocs*`             | **function** initDocs(): void;                                                                                                              | sort documents if a sortfunction is provided. separate docs and blogs                                                 |
| `removeObserver*`       | **function** removeObserver(`observer`\*: [StoreObserver](#storeobserver)): **function** (`storyId`: string, `propName`: string): void;\[]; | remove installed observer callback function                                                                           |
| `setStore*`             | **function** setStore(`store`: [StoriesStore](#storiesstore)): void;                                                                        | internal set store, use for testing with mockup store.                                                                |
| `updateStoryProp*`      | **function** updateStoryProp(`storyId`\*: string, `propName`\*: string, `newValue`\*: any): [StoriesStore](#storiesstore) \| undefined;     | modify story properties, for example controls values. will notify all installed store observers of the changed story. |

## StoreOptions

_defined in [@component-controls/store/src/Store/Store.ts](https://github.com/ccontrols/component-controls/tree/master/core/store/src/Store/Store.ts#L23)_



### properties

| Name                 | Type                          | Description                                                         |
| -------------------- | ----------------------------- | ------------------------------------------------------------------- |
| `store`              | [StoriesStore](#storiesstore) | optional store initializer                                          |
| `updateLocalStorage` | boolean                       | set to false to prevent the Store from updating localStorage values |

## StoreObserver

store on change observer.
when updateStoryProp is called on the store, the store observers will be notified
so they can re-load the stories

_defined in [@component-controls/store/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/core/store/src/types.ts#L15)_

**function** (`storyId`: string, `propName`: string): void;

### parameters

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| `storyId`  | string |             |
| `propName` | string |             |
| `returns`  | void   |             |

<!-- END-TSDOC-TYPESCRIPT -->
