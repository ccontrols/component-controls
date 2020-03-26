import { addDecorator, useEffect } from '@storybook/client-api';
import { ComponentControls } from '@component-controls/specification';
import { getControlValues } from '@component-controls/core';
import { __STORYBOOK_STORY_STORE__ as storyStore } from 'global';
import storyStoreData from '@component-controls/loader/story-store-data';
import addons, { makeDecorator } from '@storybook/addons';
import { FORCE_RE_RENDER } from '@storybook/core-events';
import { docgenToControls } from './shared/smartControls';
import {
  SET_DATA_MSG,
  SYNC_SMART_STORIES,
  GET_ALL_STORIES,
} from './shared/shared';

addDecorator(
  makeDecorator({
    name: 'legacyControls',
    parameterName: 'controls',
    wrapper: (storyFn, context) => {
      useEffect(() => {
        if (storyStoreData.__initilized) {
          return;
        }
        storyStoreData.__initilized = true;
        const channel = addons.getChannel();
        const onNewData = ({
          storyId,
          controls,
        }: {
          storyId: string;
          controls: ComponentControls;
        }) => {
          const story = storyStoreData.stories[storyId];
          if (story) {
            story.controls = controls;
          }
          channel.emit(FORCE_RE_RENDER);
        };
        channel.on(SET_DATA_MSG, onNewData);

        const onGetAllStories = () => {
          const smartStories: {
            storyId: string;
            controls: ComponentControls;
          }[] = [];
          const injectedStoryStore = storyStoreData;

          Object.keys(injectedStoryStore.stories).forEach((id: string) => {
            const story = injectedStoryStore.stories[id];
            if (storyStore._data[id]) {
              story.storyFn = storyStore._data[id].storyFn;
            }

            const { controls } = story;
            const parameters = story.parameters || {};
            const { addonControls = {} } = parameters;
            const { smart } = addonControls;
            if (injectedStoryStore && smart) {
              if (story.arguments && story.arguments.length) {
                const smartControls = docgenToControls(story.parameters);
                if (smartControls && Object.keys(smartControls).length) {
                  story.controls = {
                    ...smartControls,
                    ...controls,
                  };
                  story.parameters.addonControls = {
                    ...story.parameters.addonControls,
                    smartLoaded: true,
                  };
                }
              }
            }
          });
          channel.emit(FORCE_RE_RENDER);
          Object.keys(injectedStoryStore.stories).forEach((id: string) => {
            const story = injectedStoryStore.stories[id];
            const parameters = story.parameters || {};
            const { controls } = story;
            const { addonControls } = parameters;
            if (controls && addonControls && addonControls.smartLoaded) {
              smartStories.push({ storyId: id, controls });
            }
          });
          if (smartStories.length) {
            channel.emit(SYNC_SMART_STORIES, smartStories);
            channel.emit(SET_DATA_MSG, {
              stpryId: storyStore._selection.storyId,
              controls:
                injectedStoryStore.stories[storyStore._selection.storyId]
                  .controls,
            });
            channel.emit(FORCE_RE_RENDER);
          }
        };
        channel.on(GET_ALL_STORIES, onGetAllStories);
        return () => {
          storyStoreData.__initilized = false;
          channel.removeListener(SET_DATA_MSG, onNewData);
          channel.removeListener(GET_ALL_STORIES, onGetAllStories);
        };
      }, []);
      const { id } = context;
      const story = storyStoreData.stories[id] || {};
      const { controls = {}, parameters = {} } = story;
      const { addonControls } = parameters;
      const { legacyContext = false } = addonControls || {};
      const props = getControlValues(controls);
      if (legacyContext) {
        return storyFn({ ...context, props });
      }
      //@ts-ignore
      return storyFn(props, context);
    },
  }),
);
