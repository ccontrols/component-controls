/* eslint-disable react/display-name */
import { addDecorator } from '@storybook/client-api';
import addons, { makeDecorator } from '@storybook/addons';
import { FORCE_RE_RENDER } from '@storybook/core-events';

import { store } from '@component-controls/store/live_store';
import { getControlValues } from '@component-controls/core';
import { Args } from '@storybook/api';

store.addObserver(() => {
  addons.getChannel().emit(FORCE_RE_RENDER);
});

addDecorator(
  makeDecorator({
    name: 'component-controls',
    parameterName: 'controls',
    wrapper: (storyFn, context) => {
      const story = store.stories[context.id];
      const values =
        story && story.controls ? getControlValues(story.controls) : undefined;
      if (context.hasOwnProperty('args')) {
        //storybook-6 beta fake args
        return storyFn({ ...context, args: values as Args });
      }
      //storybook 5 and 6 alphas
      return values ? (storyFn as any)(values, context) : storyFn(context);
    },
  }),
);
