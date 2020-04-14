# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [Store](#store)
    -   [MessageType](#messagetype)
    -   [StoryStore](#storystore)
    -   [StoreObserver](#storeobserver)
    -   [COMPONENT_CONTROLS_STORAGE](#component_controls_storage)
    -   [UPDATE_STORY_MSG](#update_story_msg)
    -   [store](#store-1)
    -   [stores](#stores)
    -   [StoreObserver](#storeobserver-1)

# Overview

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone:

```bash
$ npm install @component-controls/store --save-dev
```

# API

<tsdoc-typescript entry="./src/index.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

## Store

_defined in [@component-controls/store/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/store/src/index.ts#L28)_



### properties

| Name                  | Type                                                                                                                                  | Description |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `constructor*`        | **function** constructor                                                                                                              |             |
| `channel*`            | [BroadcastChannel](#broadcastchannel)                                                                                                 |             |
| `loadedStore*`        | [StoriesStore](#storiesstore) \| undefined                                                                                            |             |
| `moduleId*`           | number                                                                                                                                |             |
| `observers*`          | [StoreObserver](#storeobserver)\[]                                                                                                    |             |
| `updateLocalStorage*` | boolean                                                                                                                               |             |
| `addObserver*`        | **function** addObserver(`observer`\*: [StoreObserver](#storeobserver)): number;                                                      |             |
| `getStore*`           | **function** getStore(): [StoriesStore](#storiesstore);                                                                               |             |
| `getStory*`           | **function** getStory(`storyId`\*: string): [Story](#story);                                                                          |             |
| `notifyObservers*`    | **function** notifyObservers(`storyId`: string): void;                                                                                |             |
| `readData*`           | **function** readData(`storyId`: string): void;                                                                                       |             |
| `removeObserver*`     | **function** removeObserver(`observer`\*: [StoreObserver](#storeobserver)): **function** (`storyId`: string): void;\[];               |             |
| `setStore*`           | **function** setStore(`store`: [StoriesStore](#storiesstore)): void;                                                                  |             |
| `updateStoryProp*`    | **function** updateStoryProp(`storyId`\*: string, `propName`\*: string, `newVal`\*: any): [StoriesStore](#storiesstore) \| undefined; |             |

## MessageType

_defined in [@component-controls/store/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/store/src/index.ts#L24)_



### properties

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| `moduleId*` | number |             |
| `storyId*`  | string |             |

## StoryStore

_defined in [@component-controls/store/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/store/src/index.ts#L9)_



### properties

| Name               | Type                                                                                                                   | Description |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- | ----------- |
| `addObserver*`     | **function** (`observer`\*: [StoreObserver](#storeobserver)): void;                                                    |             |
| `getStore*`        | **function** (): [StoriesStore](#storiesstore) \| undefined;                                                           |             |
| `getStory*`        | **function** (`storyId`\*: string): [Story](#story) \| undefined;                                                      |             |
| `removeObserver*`  | **function** (`observer`\*: [StoreObserver](#storeobserver)): void;                                                    |             |
| `updateStoryProp*` | **function** (`storyId`\*: string, `propName`\*: string, `newVal`\*: any): [StoriesStore](#storiesstore) \| undefined; |             |

## StoreObserver

_defined in [@component-controls/store/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/store/src/index.ts#L7)_

**function** (`storyId`: string): void;

### parameters

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| `storyId` | string |             |
| `returns` | void   |             |

## COMPONENT_CONTROLS_STORAGE

_defined in [@component-controls/store/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/store/src/index.ts#L22)_



## UPDATE_STORY_MSG

_defined in [@component-controls/store/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/store/src/index.ts#L21)_



## store

_defined in [@component-controls/store/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/store/src/index.ts#L120)_



## stores

_defined in [@component-controls/store/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/store/src/index.ts#L122)_



## StoreObserver

_defined in [@component-controls/store/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/core/store/src/index.ts#L7)_

**function** (`storyId`: string): void;

### parameters

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| `storyId` | string |             |
| `returns` | void   |             |

<!-- END-TSDOC-TYPESCRIPT -->
