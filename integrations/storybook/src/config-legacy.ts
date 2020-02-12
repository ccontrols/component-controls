import { addDecorator, addParameters, useEffect } from '@storybook/client-api';
import { ComponentControls } from '@component-controls/specification';
import { __STORYBOOK_STORY_STORE__ as storyStore } from 'global';
import addons, { makeDecorator } from '@storybook/addons';
import { FORCE_RE_RENDER } from '@storybook/core-events';

import { SET_DATA_MSG } from './shared/shared';

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
        return () => {
          channel.removeListener(SET_DATA_MSG, onNewData);
        };
      }, []);
      return storyFn(context);
    },
  }),
);

addParameters({
  controls: {
    legacy: true,
  },
});
