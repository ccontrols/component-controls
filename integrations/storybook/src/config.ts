import { addDecorator } from '@storybook/client-api';
import { makeDecorator } from '@storybook/addons';
import { controlsMessages } from './context/BroadcastMessage';
import './context/RenderDocsPages';

addDecorator(
  makeDecorator({
    name: 'componnet-controls',
    parameterName: 'controls',
    wrapper: (storyFn, context) => {
      const values = controlsMessages && controlsMessages[context.id];
      //@ts-ignore
      return values ? storyFn(values, context) : storyFn(context);
    },
  }),
);
