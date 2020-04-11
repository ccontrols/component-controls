import { addDecorator } from '@storybook/client-api';
import addons, { makeDecorator } from '@storybook/addons';
import { FORCE_RE_RENDER } from '@storybook/core-events';

import { store } from '@component-controls/store';
import { getControlValues } from '@component-controls/core';
import './context/RenderDocsPages';

store.addObserver(() => {
  addons.getChannel().emit(FORCE_RE_RENDER);
});

addDecorator(
  makeDecorator({
    name: 'componnet-controls',
    parameterName: 'controls',
    wrapper: (storyFn, context) => {
      const story = store.getStory(context.id);

      const values =
        story && story.controls ? getControlValues(story.controls) : undefined;
      //@ts-ignore
      return values ? storyFn(values, context) : storyFn(context);
    },
  }),
);
