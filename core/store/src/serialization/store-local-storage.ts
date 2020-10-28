import {
  Store,
  Story,
  getComponentName,
  getDefaultStore,
  Stories,
} from '@component-controls/core';

/**
 * store on change observer.
 */

const COMPONENT_CONTROLS_STORAGE = 'component-controls-store-data';

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
export const saveStore = (store: Store): void => {
  for (const key in localStorage) {
    if (key.indexOf(COMPONENT_CONTROLS_STORAGE) === 0) {
      localStorage.removeItem(key);
    }
  }
  const save: Omit<Store, 'addObserver' | 'removeObserver' | 'updateStory'> = {
    stories: store.stories,
    config: store.config,
    components: store.components,
    docs: store.docs,
    packages: store.packages,
  };
  localStorage.setItem(
    COMPONENT_CONTROLS_STORAGE,
    JSON.stringify(save, encodeFn),
  );
};

export const readStore = (stories: Stories): Store => {
  const data = localStorage.getItem(COMPONENT_CONTROLS_STORAGE);
  if (data) {
    const newStore = JSON.parse(data) as Store;
    return {
      ...newStore,
      stories: Object.keys(newStore.stories).reduce((acc, storyId) => {
        const story: Story = newStore.stories[storyId];
        const renderFn = stories[storyId]
          ? stories[storyId].renderFn
          : story.renderFn;
        return { ...acc, [storyId]: { ...story, renderFn } };
      }, {}),
    };
  }
  return getDefaultStore();
};
