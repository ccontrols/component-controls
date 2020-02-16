import { addDecorator, useEffect } from '@storybook/client-api';
import { CHANNEL_CREATED } from '@storybook/core-events';
import { storyNameFromExport } from '@storybook/csf';
import { ComponentControls } from '@component-controls/specification';
import { getControlValues } from '@component-controls/core';
import { __STORYBOOK_STORY_STORE__ as storyStore } from 'global';
import {
  parseCSF,
  Stories,
  StoryParameters,
} from '@component-controls/instrument';
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
      const channel = addons.getChannel();
      useEffect(() => {
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

        const onChannelCreated = () => {
          if (storyStore._smartcontrols === undefined) {
            storyStore._smartcontrols = true;
            Object.keys(storyStore._data).forEach((id: string) => {
              const story = storyStore._data[id];
              const parameters = story.parameters || {};
              const { addonControls = {}, controls } = parameters;
              const { smart } = addonControls;
              if (smart) {
                const code =
                  parameters.mdxSource ||
                  (parameters.storySource && parameters.storySource.source);
                let params: StoryParameters | undefined;
                if (code) {
                  const stories: Stories = parseCSF(code);
                  const storyProps:
                    | {
                        name: string;
                        parameters: StoryParameters | undefined;
                      }
                    | undefined = Object.keys(stories)
                    .map(name => ({
                      parameters: stories[name].parameters,
                      name: storyNameFromExport(name),
                    }))
                    .find(({ name }) => name === story.name);
                  if (
                    storyProps &&
                    storyProps.parameters &&
                    storyProps.parameters.length
                  ) {
                    params = storyProps.parameters;
                    story.parameters.addonControls.properties = params;
                  }
                }
                if (params && params.length) {
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
              }
            });
            channel.emit(FORCE_RE_RENDER);
          }
        };

        channel.on(CHANNEL_CREATED, onChannelCreated);

        const onGetAllStories = () => {
          const smartStories: {
            storyId: string;
            controls: ComponentControls;
          }[] = [];
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
          channel.removeListener(SET_DATA_MSG, onNewData);
          channel.removeListener(CHANNEL_CREATED, onChannelCreated);
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
