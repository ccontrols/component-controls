import { addDecorator, useEffect } from '@storybook/client-api';
import { ComponentControls } from '@component-controls/specification';
import { getControlValues } from '@component-controls/core';
import { __STORYBOOK_STORY_STORE__ as storyStore } from 'global';
import myStoryStore from '@component-controls/loader/dist/story-store-data';
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
        if (storyStore.__initilized) {
          return;
        }
        storyStore.__initilized = true;
        const channel = addons.getChannel();
        const onNewData = ({
          storyId,
          controls,
        }: {
          storyId: string;
          controls: ComponentControls;
        }) => {
          const story = storyStore._data[storyId];
          if (story) {
            story.parameters.controls = controls;
          }
          channel.emit(FORCE_RE_RENDER);
        };
        channel.on(SET_DATA_MSG, onNewData);

        const onGetAllStories = () => {
          const smartStories: {
            storyId: string;
            controls: ComponentControls;
          }[] = [];
          const injectedStoryStore = myStoryStore;
          Object.keys(storyStore._data).forEach((id: string) => {
            const story = storyStore._data[id];
            const parameters = story.parameters || {};
            const { addonControls = {}, controls } = parameters;
            const { smart } = addonControls;
            if (injectedStoryStore && smart) {
              const ccStory = injectedStoryStore[id];
              if (ccStory) {
                if (ccStory.arguments && ccStory.arguments.length) {
                  const smartControls = docgenToControls(story.parameters);
                  if (smartControls && Object.keys(smartControls).length) {
                    story.parameters.controls = {
                      ...smartControls,
                      ...controls,
                    };
                    story.parameters.addonControls = {
                      ...story.parameters.addonControls,
                      smartLoaded: true,
                    };
                  }
                }
              } else {
                console.error('Invalid story id:', id);
              }
            }
          });
          channel.emit(FORCE_RE_RENDER);
          Object.keys(storyStore._data).forEach((id: string) => {
            const parameters = storyStore._data[id].parameters || {};
            const { controls, addonControls } = parameters;
            if (controls && addonControls && addonControls.smartLoaded) {
              smartStories.push({ storyId: id, controls });
            }
          });
          if (smartStories.length) {
            channel.emit(SYNC_SMART_STORIES, smartStories);
            channel.emit(SET_DATA_MSG, {
              stpryId: storyStore._selection.storyId,
              controls:
                storyStore._data[storyStore._selection.storyId].parameters
                  .controls,
            });
            channel.emit(FORCE_RE_RENDER);
          }
        };
        channel.on(GET_ALL_STORIES, onGetAllStories);
        return () => {
          storyStore.__initilized = false;
          channel.removeListener(SET_DATA_MSG, onNewData);
          channel.removeListener(GET_ALL_STORIES, onGetAllStories);
        };
      }, []);
      const { parameters = {} } = context; // parseSource(source));
      const { controls, addonControls } = parameters;
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
