import {
  StoriesStore,
  getComponentName,
} from '@component-controls/specification';

import { COMPONENT_CONTROLS_STORAGE } from '../types';

const encodeFn = (name: string, val: any) => {
  // convert RegExp to string
  if (val && val.constructor === RegExp) {
    return val.toString();
  } else if (name === 'component') {
    //serialize components as string of their name
    const component = getComponentName(val);
    return component ? component : val;
  }
  return val;
};
export const saveStore = (store: StoriesStore) => {
  for (var key in localStorage) {
    if (key.indexOf(COMPONENT_CONTROLS_STORAGE) == 0) {
      localStorage.removeItem(key);
    }
  }
  localStorage.setItem(
    COMPONENT_CONTROLS_STORAGE,
    JSON.stringify(store, encodeFn),
  );
};

export const readStore = (
  store?: StoriesStore,
  storyId?: string,
  propName?: string,
): StoriesStore | undefined => {
  const data = localStorage.getItem(COMPONENT_CONTROLS_STORAGE);
  if (data) {
    const newStore = JSON.parse(data) as StoriesStore;
    if (store && storyId && propName) {
      const newValue = (newStore.stories[storyId] as any)[propName];
      store.stories = {
        ...store.stories,
        [storyId]: {
          ...store.stories[storyId],
          [propName]: newValue,
        },
      };
      return store;
    }
    return newStore;
  }
  return store;
};

export const updateStory = (
  store: StoriesStore | undefined,
  storyId: string,
  propName: string,
  newValue: any,
  updateLocalStorage?: boolean,
): StoriesStore | undefined => {
  if (store) {
    store.stories = {
      ...store.stories,
      [storyId]: {
        ...store.stories[storyId],
        [propName]: newValue,
      },
    };
    if (updateLocalStorage) {
      localStorage.setItem(
        COMPONENT_CONTROLS_STORAGE,
        JSON.stringify(store, encodeFn),
      );
    }
  }
  return store;
};
