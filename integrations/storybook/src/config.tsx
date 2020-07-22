import { useEffect } from 'react';
/* eslint-disable react/display-name */
import { addDecorator } from '@storybook/client-api';
import addons, { makeDecorator } from '@storybook/addons';
import { FORCE_RE_RENDER } from '@storybook/core-events';

import { store } from '@component-controls/store/live_store';
import { addObserver } from '@component-controls/blocks';
import { getControlValues } from '@component-controls/core';

addDecorator(
  makeDecorator({
    name: 'component-controls',
    parameterName: 'controls',
    wrapper: (storyFn, context) => {
      useEffect(() => {
        addObserver(() => {
          addons.getChannel().emit(FORCE_RE_RENDER);
        });
      }, []);
      const story = store.getStory(context.id);
      const values =
        story && story.controls ? getControlValues(story.controls) : undefined;
      if (context.hasOwnProperty('args')) {
        //storybook-6 beta fake args
        //@ts-ignore
        return storyFn({ ...context, args: values });
      }
      //storybook 5 and 6 alphas
      //@ts-ignore
      return values ? storyFn(values, context) : storyFn(context);
    },
  }),
);
