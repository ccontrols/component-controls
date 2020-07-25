import { useEffect, useRef } from 'react';
/* eslint-disable react/display-name */
import { addDecorator } from '@storybook/client-api';
import addons, { makeDecorator } from '@storybook/addons';
import { FORCE_RE_RENDER } from '@storybook/core-events';

import { store } from '@component-controls/store/live_store';
import { getControlValues } from '@component-controls/core';

addDecorator(
  makeDecorator({
    name: 'component-controls',
    parameterName: 'controls',
    wrapper: (storyFn, context) => {
      const story = store.stories[context.id];
      const currentStory = useRef(story);
      useEffect(() => {
        if (story !== currentStory.current) {
          addons.getChannel().emit(FORCE_RE_RENDER);
        }
      }, [story]);

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
