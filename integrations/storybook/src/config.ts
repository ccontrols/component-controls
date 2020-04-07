import { addDecorator } from '@storybook/client-api';
import { makeDecorator } from '@storybook/addons';
import { store } from '@component-controls/store';
import { getControlValues } from '@component-controls/core';
import './context/RenderDocsPages';

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
